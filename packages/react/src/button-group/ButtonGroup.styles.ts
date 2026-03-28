import { cva } from "class-variance-authority";

/* ========== ButtonGroup container ========== */

export const buttonGroupStyles = cva([
  "inline-flex",
  "items-center",
  "rounded-lg",
  "border",
  "border-border-primary",
  "shadow-xs",
  "overflow-hidden",
]);

/* ========== ButtonGroup item ========== */

export const buttonGroupItemStyles = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "font-semibold",
    "transition-colors",
    "outline-none",
    "cursor-pointer",
    "border-r",
    "border-border-primary",
    "last:border-r-0",
    "bg-bg-primary",
    "text-fg-secondary",
    "hover:bg-bg-secondary_hover",
    "hover:text-fg-secondary_hover",
    "focus-visible:z-10",
    "focus-visible:ring-2",
    "focus-visible:ring-focus-ring/24",
    "data-[state=on]:bg-bg-secondary",
    "data-[state=on]:text-fg-primary",
    "disabled:bg-bg-disabled",
    "disabled:text-fg-disabled",
    "disabled:cursor-not-allowed",
    "disabled:pointer-events-none",
  ],
  {
    variants: {
      size: {
        sm: ["text-sm", "px-3", "py-2", "h-9", "gap-1"],
        md: ["text-sm", "px-4", "py-2.5", "h-10", "gap-1.5"],
        lg: ["text-md", "px-[18px]", "py-2.5", "h-11", "gap-1.5"],
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

/* ========== ButtonGroup icon ========== */

export const buttonGroupIconStyles = cva(["shrink-0"], {
  variants: {
    size: {
      sm: ["size-5"],
      md: ["size-5"],
      lg: ["size-5"],
    },
  },
  defaultVariants: { size: "md" },
});
