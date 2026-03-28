import { cva } from "class-variance-authority";

/* ========== Root HeaderNav ========== */

export const headerNavStyles = cva([
  "flex",
  "items-center",
  "justify-between",
  "h-16",
  "px-6",
  "bg-bg-primary",
  "border-b",
  "border-border-secondary",
  "w-full",
]);

/* ========== Logo ========== */

export const headerNavLogoStyles = cva([
  "flex",
  "items-center",
  "gap-2",
]);

/* ========== Items ========== */

export const headerNavItemsStyles = cva([
  "flex",
  "items-center",
  "gap-1",
]);

/* ========== Item ========== */

export const headerNavItemStyles = cva(
  [
    "px-3",
    "py-2",
    "text-sm",
    "font-medium",
    "rounded-md",
    "transition-colors",
  ],
  {
    variants: {
      active: {
        true: [
          "text-text-primary",
          "bg-bg-primary_hover",
        ],
        false: [
          "text-text-tertiary",
          "hover:text-text-primary",
          "hover:bg-bg-primary_hover",
        ],
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);

/* ========== Actions ========== */

export const headerNavActionsStyles = cva([
  "flex",
  "items-center",
  "gap-3",
  "ml-auto",
]);
