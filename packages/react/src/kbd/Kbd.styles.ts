import { cva } from "class-variance-authority";

/* ========== Kbd — keyboard shortcut token ========== */

export const kbdStyles = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "font-mono",
    "font-medium",
    "border",
    "rounded-md",
    "bg-bg-primary",
    "border-border-primary",
    "text-text-secondary",
    "shadow-xs",
    "select-none",
  ],
  {
    variants: {
      size: {
        sm: ["text-[10px]", "px-1", "min-w-[18px]", "h-[18px]"],
        md: ["text-xs", "px-1.5", "min-w-[22px]", "h-[22px]"],
        lg: ["text-sm", "px-2", "min-w-[26px]", "h-[26px]"],
      },
    },
    defaultVariants: { size: "md" },
  },
);
