import { cva } from "class-variance-authority";

/* ========== RadioGroup root ========== */

export const radioGroupStyles = cva(["flex"], {
  variants: {
    orientation: {
      vertical: ["flex-col", "gap-3"],
      horizontal: ["flex-row", "gap-4"],
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

/* ========== RadioGroup item ========== */

export const radioItemStyles = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "shrink-0",
    "rounded-full",
    "border",
    "border-border-primary",
    "bg-bg-primary",
    "cursor-pointer",
    "transition-colors",
    "outline-none",
    "focus-visible:ring-4",
    "focus-visible:ring-brand-500/24",
    "data-[disabled]:bg-bg-disabled",
    "data-[disabled]:border-border-disabled",
    "data-[disabled]:cursor-not-allowed",
  ],
  {
    variants: {
      size: {
        sm: [
          "size-4",
          "data-[state=checked]:border-[5px]",
          "data-[state=checked]:border-brand-600",
        ],
        md: [
          "size-5",
          "data-[state=checked]:border-[6px]",
          "data-[state=checked]:border-brand-600",
        ],
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

/* ========== Radio label ========== */

export const radioLabelStyles = cva([
  "text-sm",
  "font-medium",
  "text-text-secondary",
  "cursor-pointer",
  "select-none",
]);

/* ========== Radio description ========== */

export const radioDescriptionStyles = cva([
  "text-sm",
  "text-text-tertiary",
]);
