import { cva } from "class-variance-authority";

/* ========== MapLayerToggle root ========== */

export const mapLayerToggleStyles = cva(
  [
    "inline-flex",
    "gap-1",
    "rounded-lg",
    "border",
    "border-border-secondary",
    "bg-bg-primary",
    "p-1",
  ],
  {
    variants: {
      orientation: {
        horizontal: ["flex-row"],
        vertical: ["flex-col"],
      },
    },
    defaultVariants: { orientation: "horizontal" },
  },
);

/* ========== Toggle item ========== */

export const mapLayerToggleItemStyles = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-1.5",
    "rounded-md",
    "font-medium",
    "whitespace-nowrap",
    "transition-colors",
    "cursor-pointer",
    "outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-focus-ring/24",
  ],
  {
    variants: {
      active: {
        true: [
          "bg-bg-active",
          "text-text-primary",
          "shadow-xs",
        ],
        false: [
          "bg-transparent",
          "text-text-tertiary",
          "hover:text-text-secondary",
          "hover:bg-bg-secondary",
        ],
      },
      size: {
        sm: ["px-2", "py-1", "text-xs"],
        md: ["px-3", "py-1.5", "text-sm"],
        lg: ["px-4", "py-2", "text-sm"],
      },
    },
    defaultVariants: { active: false, size: "md" },
  },
);
