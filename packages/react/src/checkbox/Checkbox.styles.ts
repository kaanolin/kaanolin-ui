import { cva } from "class-variance-authority";

/* ========== Checkbox root ========== */

export const checkboxStyles = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "shrink-0",
    "border",
    "border-border-primary",
    "bg-bg-primary",
    "cursor-pointer",
    "transition-colors",
    "outline-none",
    "data-[state=checked]:bg-brand-600",
    "data-[state=checked]:border-brand-600",
    "data-[state=indeterminate]:bg-brand-600",
    "data-[state=indeterminate]:border-brand-600",
    "focus-visible:ring-4",
    "focus-visible:ring-brand-500/24",
    "data-[disabled]:bg-bg-disabled",
    "data-[disabled]:border-border-disabled",
    "data-[disabled]:cursor-not-allowed",
  ],
  {
    variants: {
      size: {
        sm: ["size-4", "rounded-[4px]"],
        md: ["size-5", "rounded-[6px]"],
      },
      error: {
        false: null,
        true: [
          "border-error-300",
          "focus-visible:ring-error-500/24",
          "data-[state=checked]:bg-error-600",
          "data-[state=checked]:border-error-600",
          "data-[state=indeterminate]:bg-error-600",
          "data-[state=indeterminate]:border-error-600",
        ],
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
    },
  },
);

/* ========== Checkbox indicator ========== */

export const checkboxIndicatorStyles = cva(
  ["flex", "items-center", "justify-center", "text-white"],
  {
    variants: {
      size: {
        sm: ["size-3"],
        md: ["size-3.5"],
      },
    },
    defaultVariants: { size: "md" },
  },
);

/* ========== Checkbox label ========== */

export const checkboxLabelStyles = cva([
  "text-sm",
  "font-medium",
  "text-text-secondary",
  "cursor-pointer",
  "select-none",
]);

/* ========== Checkbox description ========== */

export const checkboxDescriptionStyles = cva([
  "text-sm",
  "text-text-tertiary",
]);
