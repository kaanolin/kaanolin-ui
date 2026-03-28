import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cx } from "@kaanolin/utils";
import {
  dropdownContentStyles,
  dropdownItemStyles,
  dropdownItemIndicatorStyles,
  dropdownLabelStyles,
  dropdownSeparatorStyles,
  dropdownSubTriggerStyles,
  dropdownShortcutStyles,
  dropdownItemIconStyles,
} from "./Dropdown.styles";

/* ========== Root ========== */

const Dropdown = DropdownMenuPrimitive.Root;

/* ========== Trigger ========== */

const DropdownTrigger = DropdownMenuPrimitive.Trigger;

/* ========== Group ========== */

const DropdownGroup = DropdownMenuPrimitive.Group;

/* ========== Sub ========== */

const DropdownSub = DropdownMenuPrimitive.Sub;

/* ========== RadioGroup ========== */

const DropdownRadioGroup = DropdownMenuPrimitive.RadioGroup;

/* ========== Content ========== */

export interface DropdownContentProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> {
  /** Portal container (defaults to document.body). */
  container?: HTMLElement;
}

const DropdownContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Content>,
  DropdownContentProps
>(({ className, sideOffset = 4, container, children, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal container={container}>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cx(dropdownContentStyles(), className)}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Content>
  </DropdownMenuPrimitive.Portal>
));

DropdownContent.displayName = "DropdownContent";

/* ========== Item ========== */

export interface DropdownItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> {
  /** Render the item in a destructive / danger style. */
  destructive?: boolean;
  /** Optional icon rendered before the label. */
  icon?: React.ReactNode;
  /** Optional keyboard shortcut displayed on the right. */
  shortcut?: string;
}

const DropdownItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Item>,
  DropdownItemProps
>(({ className, destructive = false, icon, shortcut, children, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cx(dropdownItemStyles({ destructive }), className)}
    {...props}
  >
    {icon && (
      <span className={cx(dropdownItemIconStyles())} aria-hidden="true">
        {icon}
      </span>
    )}
    <span className="flex-1 truncate">{children}</span>
    {shortcut && (
      <span className={cx(dropdownShortcutStyles())}>{shortcut}</span>
    )}
  </DropdownMenuPrimitive.Item>
));

DropdownItem.displayName = "DropdownItem";

/* ========== CheckboxItem ========== */

export interface DropdownCheckboxItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> {}

const DropdownCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  DropdownCheckboxItemProps
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cx(dropdownItemStyles(), "pl-8", className)}
    checked={checked}
    {...props}
  >
    <span className={cx(dropdownItemIndicatorStyles(), "absolute left-3")}>
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));

DropdownCheckboxItem.displayName = "DropdownCheckboxItem";

/* ========== RadioItem ========== */

export interface DropdownRadioItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> {}

const DropdownRadioItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.RadioItem>,
  DropdownRadioItemProps
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cx(dropdownItemStyles(), "pl-8", className)}
    {...props}
  >
    <span className={cx(dropdownItemIndicatorStyles(), "absolute left-3")}>
      <DropdownMenuPrimitive.ItemIndicator>
        <DotIcon />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));

DropdownRadioItem.displayName = "DropdownRadioItem";

/* ========== Label ========== */

export interface DropdownLabelProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> {}

const DropdownLabel = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Label>,
  DropdownLabelProps
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cx(dropdownLabelStyles(), className)}
    {...props}
  />
));

DropdownLabel.displayName = "DropdownLabel";

/* ========== Separator ========== */

export interface DropdownSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> {}

const DropdownSeparator = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Separator>,
  DropdownSeparatorProps
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cx(dropdownSeparatorStyles(), className)}
    {...props}
  />
));

DropdownSeparator.displayName = "DropdownSeparator";

/* ========== SubTrigger ========== */

export interface DropdownSubTriggerProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> {
  /** Optional icon rendered before the label. */
  icon?: React.ReactNode;
}

const DropdownSubTrigger = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubTrigger>,
  DropdownSubTriggerProps
>(({ className, icon, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cx(dropdownSubTriggerStyles(), className)}
    {...props}
  >
    {icon && (
      <span className={cx(dropdownItemIconStyles())} aria-hidden="true">
        {icon}
      </span>
    )}
    <span className="flex-1 truncate">{children}</span>
    <ChevronRightIcon className="size-4 shrink-0 text-fg-quaternary" />
  </DropdownMenuPrimitive.SubTrigger>
));

DropdownSubTrigger.displayName = "DropdownSubTrigger";

/* ========== SubContent ========== */

export interface DropdownSubContentProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> {}

const DropdownSubContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubContent>,
  DropdownSubContentProps
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={cx(dropdownContentStyles(), className)}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));

DropdownSubContent.displayName = "DropdownSubContent";

/* ========== Exports ========== */

export {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownCheckboxItem,
  DropdownRadioItem,
  DropdownRadioGroup,
  DropdownLabel,
  DropdownSeparator,
  DropdownSub,
  DropdownSubTrigger,
  DropdownSubContent,
  DropdownGroup,
};

/* ========== Inline SVGs ========== */

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
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

function DotIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="5" />
    </svg>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
