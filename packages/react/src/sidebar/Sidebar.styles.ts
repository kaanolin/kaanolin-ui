import { cva } from "class-variance-authority";

/* ========== Root Sidebar ========== */

export const sidebarStyles = cva(
  [
    "fixed",
    "left-0",
    "top-0",
    "h-full",
    "flex",
    "flex-col",
    "bg-bg-primary",
    "border-r",
    "border-border-secondary",
  ],
  {
    variants: {
      width: {
        narrow: ["w-16"],
        default: ["w-64"],
        wide: ["w-80"],
      },
    },
    defaultVariants: {
      width: "default",
    },
  },
);

/* ========== Header ========== */

export const sidebarHeaderStyles = cva([
  "border-b",
  "border-border-secondary",
  "px-4",
  "py-3",
]);

/* ========== Content ========== */

export const sidebarContentStyles = cva([
  "flex-1",
  "overflow-y-auto",
  "py-2",
]);

/* ========== Footer ========== */

export const sidebarFooterStyles = cva([
  "border-t",
  "border-border-secondary",
  "px-4",
  "py-3",
]);

/* ========== Group ========== */

export const sidebarGroupStyles = cva(["flex", "flex-col"]);

/* ========== Group Label ========== */

export const sidebarGroupLabelStyles = cva([
  "uppercase",
  "text-xs",
  "font-medium",
  "text-text-quaternary",
  "px-3",
  "py-2",
]);

/* ========== Item ========== */

export const sidebarItemStyles = cva(
  [
    "flex",
    "items-center",
    "gap-3",
    "px-3",
    "py-2",
    "rounded-md",
    "cursor-pointer",
    "transition-colors",
  ],
  {
    variants: {
      active: {
        true: [
          "bg-bg-primary_hover",
          "text-text-primary",
          "font-semibold",
        ],
        false: [
          "text-text-tertiary",
          "hover:bg-bg-primary_hover",
        ],
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);

/* ========== Item Badge ========== */

export const sidebarItemBadgeStyles = cva([
  "ml-auto",
  "text-xs",
  "bg-error-50",
  "text-text-error-primary",
  "rounded-full",
  "px-2",
]);
