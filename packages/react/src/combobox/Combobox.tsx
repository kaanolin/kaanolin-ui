import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { cx } from "@kaanolin/utils";
import {
  comboboxInputStyles,
  comboboxChevronStyles,
  comboboxDropdownStyles,
  comboboxDropdownInnerStyles,
  comboboxItemStyles,
  comboboxGroupLabelStyles,
  comboboxSeparatorStyles,
  comboboxEmptyStyles,
} from "./Combobox.styles";
import {
  labelStyles,
  labelTooltipStyles,
  requiredIndicatorStyles,
  helperTextStyles,
} from "../_shared/form-field.styles";
import { HelpCircleIcon } from "../_shared/icons";

/* ========== Types ========== */

export interface ComboboxProps
  extends Omit<VariantProps<typeof comboboxInputStyles>, "open"> {
  /** Currently selected value (controlled). */
  value?: string;
  /** Default value (uncontrolled). */
  defaultValue?: string;
  /** Called when the selected value changes. */
  onValueChange?: (value: string) => void;
  /** Placeholder text shown when no value is selected. */
  placeholder?: string;
  /** Label text above the input. */
  label?: string;
  /** Helper/hint text below the input. */
  helperText?: string;
  /** Tooltip text shown via native title attribute on a help icon next to the label. */
  tooltip?: string;
  /** Mark the field as required (shows asterisk on label). */
  isRequired?: boolean;
  /** Hide required indicator even when isRequired is true. */
  hideRequiredIndicator?: boolean;
  /** Additional className merged onto the input. */
  className?: string;
  /** Unique id (auto-generated via useId if omitted). */
  id?: string;
  /** Children: ComboboxItem, ComboboxGroup, ComboboxSeparator. */
  children: React.ReactNode;
  /** Callback when the dropdown opens or closes. */
  onOpenChange?: (open: boolean) => void;
}

export interface ComboboxItemProps
  extends Omit<React.LiHTMLAttributes<HTMLLIElement>, "value"> {
  /** The string value this item represents. */
  value: string;
  /** Whether this item is disabled. */
  disabled?: boolean;
  /** Content to render (text label). */
  children: React.ReactNode;
}

export interface ComboboxGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Group heading label. */
  label: string;
  children: React.ReactNode;
}

export type ComboboxSeparatorProps = React.HTMLAttributes<HTMLHRElement>;

/* ========== Context ========== */

interface ItemEntry {
  value: string;
  label: string;
  disabled: boolean;
  index: number;
}

interface ComboboxContextValue {
  comboboxId: string;
  selectedValue: string | undefined;
  highlightedValue: string | null;
  searchQuery: string;
  onSelect: (value: string) => void;
  registerItem: (value: string, label: string, disabled: boolean) => number;
  unregisterItem: (value: string) => void;
}

const ComboboxContext = React.createContext<ComboboxContextValue | null>(null);

function useComboboxContext() {
  const ctx = React.useContext(ComboboxContext);
  if (!ctx)
    throw new Error(
      "Combobox sub-components must be used within <Combobox>",
    );
  return ctx;
}

/* ========== Combobox ========== */

const Combobox = React.forwardRef<HTMLDivElement, ComboboxProps>(
  (
    {
      value,
      defaultValue,
      onValueChange,
      placeholder = "Search...",
      label,
      helperText,
      tooltip,
      isRequired,
      hideRequiredIndicator,
      className,
      id,
      children,
      onOpenChange,
      size,
      variant,
      disabled = false,
    },
    ref,
  ) => {
    const comboboxId = id || React.useId();
    const listboxId = `${comboboxId}-listbox`;

    const [open, setOpen] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const [searchQuery, setSearchQuery] = React.useState("");
    const [highlightedValue, setHighlightedValue] = React.useState<
      string | null
    >(null);

    // Force re-render after items register so getSelectedLabel() works
    const [, forceRender] = React.useReducer((x: number) => x + 1, 0);

    const selectedValue = value !== undefined ? value : internalValue;

    const inputRef = React.useRef<HTMLInputElement>(null);
    const listboxRef = React.useRef<HTMLUListElement>(null);
    const itemsRef = React.useRef<Map<string, ItemEntry>>(new Map());
    const indexCounterRef = React.useRef(0);

    const getEnabledItems = React.useCallback(() => {
      return Array.from(itemsRef.current.values())
        .filter((item) => !item.disabled)
        .sort((a, b) => a.index - b.index);
    }, []);

    const getFilteredEnabledItems = React.useCallback(() => {
      const query = searchQuery.toLowerCase();
      return getEnabledItems().filter(
        (item) => !query || item.label.toLowerCase().includes(query),
      );
    }, [searchQuery, getEnabledItems]);

    const getSelectedLabel = React.useCallback(() => {
      if (!selectedValue) return null;
      const item = itemsRef.current.get(selectedValue);
      return item?.label ?? null;
    }, [selectedValue]);

    const closeDropdown = React.useCallback(() => {
      setOpen(false);
      setHighlightedValue(null);
      onOpenChange?.(false);
    }, [onOpenChange]);

    const openDropdown = React.useCallback(() => {
      if (disabled) return;
      setOpen(true);
      onOpenChange?.(true);
    }, [disabled, onOpenChange]);

    // Set initial highlight when dropdown opens or when filter changes
    React.useEffect(() => {
      if (!open) return;
      const filtered = getFilteredEnabledItems();
      if (filtered.length === 0) {
        setHighlightedValue(null);
        return;
      }
      if (
        selectedValue &&
        !searchQuery &&
        filtered.some((i) => i.value === selectedValue)
      ) {
        setHighlightedValue(selectedValue);
      } else {
        setHighlightedValue(filtered[0].value);
      }
    }, [open, selectedValue, getFilteredEnabledItems, searchQuery]);

    const handleSelect = React.useCallback(
      (itemValue: string) => {
        if (value === undefined) setInternalValue(itemValue);
        onValueChange?.(itemValue);
        // Show the selected label in input, clear search
        setSearchQuery("");
        closeDropdown();
        inputRef.current?.focus();
      },
      [value, onValueChange, closeDropdown],
    );

    const registerItem = React.useCallback(
      (itemValue: string, itemLabel: string, itemDisabled: boolean) => {
        const idx = indexCounterRef.current++;
        itemsRef.current.set(itemValue, {
          value: itemValue,
          label: itemLabel,
          disabled: itemDisabled,
          index: idx,
        });
        forceRender();
        return idx;
      },
      [],
    );

    const unregisterItem = React.useCallback((itemValue: string) => {
      itemsRef.current.delete(itemValue);
    }, []);

    // Scroll highlighted item into view
    React.useEffect(() => {
      if (!open || !highlightedValue || !listboxRef.current) return;
      const el = listboxRef.current.querySelector(
        `[data-value="${CSS.escape(highlightedValue)}"]`,
      );
      if (el && typeof (el as HTMLElement).scrollIntoView === "function") {
        (el as HTMLElement).scrollIntoView({ block: "nearest" });
      }
    }, [open, highlightedValue]);

    const handleInputChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        if (!open) openDropdown();
      },
      [open, openDropdown],
    );

    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent) => {
        const filtered = getFilteredEnabledItems();
        const currentIdx = filtered.findIndex(
          (item) => item.value === highlightedValue,
        );

        switch (e.key) {
          case "ArrowDown": {
            e.preventDefault();
            if (!open) {
              openDropdown();
              return;
            }
            if (filtered.length === 0) return;
            const next =
              currentIdx < filtered.length - 1 ? currentIdx + 1 : 0;
            setHighlightedValue(filtered[next].value);
            break;
          }
          case "ArrowUp": {
            e.preventDefault();
            if (!open) {
              openDropdown();
              return;
            }
            if (filtered.length === 0) return;
            const prev =
              currentIdx > 0 ? currentIdx - 1 : filtered.length - 1;
            setHighlightedValue(filtered[prev].value);
            break;
          }
          case "Enter": {
            e.preventDefault();
            if (!open) {
              openDropdown();
              return;
            }
            if (highlightedValue) handleSelect(highlightedValue);
            break;
          }
          case "Escape": {
            e.preventDefault();
            setSearchQuery("");
            closeDropdown();
            inputRef.current?.focus();
            break;
          }
          case "Tab": {
            setSearchQuery("");
            closeDropdown();
            break;
          }
          case "Home": {
            if (open) {
              e.preventDefault();
              if (filtered.length)
                setHighlightedValue(filtered[0].value);
            }
            break;
          }
          case "End": {
            if (open) {
              e.preventDefault();
              if (filtered.length)
                setHighlightedValue(filtered[filtered.length - 1].value);
            }
            break;
          }
        }
      },
      [
        open,
        highlightedValue,
        getFilteredEnabledItems,
        openDropdown,
        closeDropdown,
        handleSelect,
      ],
    );

    const handleFocus = React.useCallback(() => {
      if (!disabled && !open) openDropdown();
    }, [disabled, open, openDropdown]);

    const displayLabel = getSelectedLabel();
    const isError = variant === "error";

    // Determine what to display in the input
    const inputValue = open ? searchQuery : displayLabel ?? "";

    // Check if there are any visible items
    const query = searchQuery.toLowerCase();
    const hasVisibleItems =
      !query ||
      Array.from(itemsRef.current.values()).some((item) =>
        item.label.toLowerCase().includes(query),
      );

    const contextValue: ComboboxContextValue = React.useMemo(
      () => ({
        comboboxId,
        selectedValue,
        highlightedValue,
        searchQuery,
        onSelect: handleSelect,
        registerItem,
        unregisterItem,
      }),
      [
        comboboxId,
        selectedValue,
        highlightedValue,
        searchQuery,
        handleSelect,
        registerItem,
        unregisterItem,
      ],
    );

    return (
      <div ref={ref} className="flex w-full flex-col items-start gap-1.5">
        {/* Label */}
        {label && (
          <label htmlFor={comboboxId} className={cx(labelStyles())}>
            {label}
            {isRequired && !hideRequiredIndicator && (
              <span className={cx(requiredIndicatorStyles())}>*</span>
            )}
            {tooltip && (
              <span
                className={cx(labelTooltipStyles())}
                title={tooltip}
                aria-hidden="true"
              >
                <HelpCircleIcon />
              </span>
            )}
          </label>
        )}

        {/* Input + dropdown wrapper */}
        <div className="relative w-full">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              id={comboboxId}
              role="combobox"
              aria-haspopup="listbox"
              aria-expanded={open}
              aria-controls={open ? listboxId : undefined}
              aria-autocomplete="list"
              aria-activedescendant={
                open && highlightedValue
                  ? `${comboboxId}-option-${highlightedValue}`
                  : undefined
              }
              aria-describedby={
                helperText ? `${comboboxId}-helper` : undefined
              }
              aria-required={isRequired || undefined}
              aria-invalid={isError || undefined}
              disabled={!!disabled}
              placeholder={placeholder}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
              autoComplete="off"
              className={cx(
                comboboxInputStyles({
                  size,
                  variant,
                  disabled: !!disabled,
                  open,
                }),
                className,
              )}
            />
            <ChevronDownIcon
              className={cx(
                comboboxChevronStyles({ open, disabled: !!disabled }),
                "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2",
              )}
            />
          </div>

          {/* Click-outside overlay */}
          {open && (
            <div
              className="fixed inset-0 z-40"
              onClick={() => {
                setSearchQuery("");
                closeDropdown();
              }}
              aria-hidden="true"
              data-testid="combobox-overlay"
            />
          )}

          {/* Dropdown listbox — always rendered for item registration, hidden when closed */}
          <ComboboxContext.Provider value={contextValue}>
            <ul
              ref={listboxRef}
              id={listboxId}
              role="listbox"
              aria-activedescendant={
                open && highlightedValue
                  ? `${comboboxId}-option-${highlightedValue}`
                  : undefined
              }
              tabIndex={-1}
              className={cx(
                comboboxDropdownStyles(),
                !open && "hidden",
              )}
              aria-hidden={!open || undefined}
            >
              <div className={cx(comboboxDropdownInnerStyles())}>
                {children}
                {open && !hasVisibleItems && (
                  <div className={cx(comboboxEmptyStyles())}>
                    No results found.
                  </div>
                )}
              </div>
            </ul>
          </ComboboxContext.Provider>
        </div>

        {/* Helper text */}
        {helperText && (
          <p
            id={`${comboboxId}-helper`}
            className={cx(helperTextStyles({ variant }))}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

Combobox.displayName = "Combobox";

/* ========== ComboboxItem ========== */

const ComboboxItem = React.forwardRef<HTMLLIElement, ComboboxItemProps>(
  ({ value, disabled = false, children, className, ...props }, ref) => {
    const ctx = useComboboxContext();
    const isSelected = ctx.selectedValue === value;
    const isHighlighted = ctx.highlightedValue === value;

    const labelText =
      typeof children === "string"
        ? children
        : typeof children === "number"
          ? String(children)
          : value;

    React.useEffect(() => {
      ctx.registerItem(value, labelText, disabled);
      return () => ctx.unregisterItem(value);
    }, [value, labelText, disabled]);

    // Filter: hide items that don't match search query
    const query = ctx.searchQuery.toLowerCase();
    const isVisible = !query || labelText.toLowerCase().includes(query);

    if (!isVisible) return null;

    const handleClick = () => {
      if (disabled) return;
      ctx.onSelect(value);
    };

    return (
      <li
        ref={ref}
        id={`${ctx.comboboxId}-option-${value}`}
        role="option"
        aria-selected={isSelected}
        aria-disabled={disabled || undefined}
        data-value={value}
        onClick={handleClick}
        className={cx(
          comboboxItemStyles({
            highlighted: isHighlighted,
            selected: isSelected,
            disabled,
          }),
          className,
        )}
        {...props}
      >
        <span className="truncate">{children}</span>
        {isSelected && (
          <CheckIcon
            className="size-5 shrink-0 text-brand-600"
            aria-hidden="true"
          />
        )}
      </li>
    );
  },
);

ComboboxItem.displayName = "ComboboxItem";

/* ========== ComboboxGroup ========== */

const ComboboxGroup = React.forwardRef<HTMLDivElement, ComboboxGroupProps>(
  ({ label, children, className, ...props }, ref) => {
    const groupLabelId = React.useId();

    return (
      <div
        ref={ref}
        role="group"
        aria-labelledby={groupLabelId}
        {...props}
      >
        <div
          id={groupLabelId}
          className={cx(comboboxGroupLabelStyles(), className)}
        >
          {label}
        </div>
        {children}
      </div>
    );
  },
);

ComboboxGroup.displayName = "ComboboxGroup";

/* ========== ComboboxSeparator ========== */

const ComboboxSeparator = React.forwardRef<
  HTMLHRElement,
  ComboboxSeparatorProps
>(({ className, ...props }, ref) => (
  <hr
    ref={ref}
    className={cx(comboboxSeparatorStyles(), className)}
    aria-hidden="true"
    {...props}
  />
));

ComboboxSeparator.displayName = "ComboboxSeparator";

/* ========== Exports ========== */

export { Combobox, ComboboxItem, ComboboxGroup, ComboboxSeparator };

/* ========== Inline SVGs ========== */

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
