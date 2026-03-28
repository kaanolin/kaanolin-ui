import { cva } from "class-variance-authority";

/**
 * Re-export shared dropdown/item styles from Select — the Combobox uses
 * identical dropdown, item, group-label, and separator visuals.
 */
export {
  selectDropdownStyles as comboboxDropdownStyles,
  selectDropdownInnerStyles as comboboxDropdownInnerStyles,
  selectItemStyles as comboboxItemStyles,
  selectGroupLabelStyles as comboboxGroupLabelStyles,
  selectSeparatorStyles as comboboxSeparatorStyles,
  selectChevronStyles as comboboxChevronStyles,
} from "../select/Select.styles";

/* ========== Trigger input ========== */

export const comboboxInputStyles = cva(
  [
    "flex",
    "w-full",
    "items-center",
    "rounded-lg",
    "border",
    "border-border-primary",
    "bg-bg-primary",
    "text-text-primary",
    "font-body",
    "shadow-xs",
    "outline-none",
    "transition-colors",
    "focus:ring-4",
    "placeholder:text-text-placeholder",
  ],
  {
    variants: {
      size: {
        small: ["text-sm", "py-2", "px-3", "h-10", "pr-9"],
        medium: ["text-md", "py-2.5", "px-3.5", "h-11", "pr-10"],
        large: ["text-lg", "py-3", "px-4", "h-12", "pr-11"],
      },
      variant: {
        default: ["focus:border-brand-300", "focus:ring-focus-ring/24"],
        error: [
          "border-border-error_subtle",
          "focus:border-border-error",
          "focus:ring-focus-ring-error/24",
        ],
        success: [
          "border-border-brand",
          "focus:border-border-brand_alt",
          "focus:ring-focus-ring/24",
        ],
      },
      disabled: {
        false: null,
        true: [
          "bg-bg-disabled",
          "border-border-disabled",
          "text-text-disabled",
          "cursor-not-allowed",
          "pointer-events-none",
          "shadow-none",
          "focus:ring-0",
        ],
      },
      open: {
        false: null,
        true: ["ring-4", "ring-focus-ring/24", "border-brand-300"],
      },
    },
    compoundVariants: [
      {
        open: true,
        variant: "error",
        class: ["ring-focus-ring-error/24", "border-border-error"],
      },
      {
        open: true,
        variant: "success",
        class: ["ring-focus-ring/24", "border-border-brand_alt"],
      },
    ],
    defaultVariants: {
      size: "medium",
      variant: "default",
      disabled: false,
      open: false,
    },
  },
);

/* ========== Empty state ========== */

export const comboboxEmptyStyles = cva([
  "px-3.5",
  "py-2.5",
  "text-sm",
  "text-text-tertiary",
  "select-none",
]);
