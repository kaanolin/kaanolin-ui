import { cva } from "class-variance-authority";

/* ========== Slider Root ========== */

export const sliderRootStyles = cva(
  [
    "relative",
    "flex",
    "w-full",
    "touch-none",
    "select-none",
    "items-center",
  ],
  {
    variants: {
      size: {
        sm: ["h-5"],
        md: ["h-6"],
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

/* ========== Slider Track ========== */

export const sliderTrackStyles = cva(
  [
    "relative",
    "grow",
    "overflow-hidden",
    "rounded-full",
    "bg-bg-quaternary",
  ],
  {
    variants: {
      size: {
        sm: ["h-1.5"],
        md: ["h-2"],
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

/* ========== Slider Range ========== */

export const sliderRangeStyles = cva([
  "absolute",
  "h-full",
  "rounded-full",
  "bg-bg-brand-solid",
]);

/* ========== Slider Thumb ========== */

export const sliderThumbStyles = cva(
  [
    "block",
    "rounded-full",
    "border-2",
    "border-slider-handle-border",
    "bg-slider-handle-bg",
    "shadow-md",
    "transition-colors",
    "outline-none",
    "focus-visible:ring-4",
    "focus-visible:ring-focus-ring/24",
  ],
  {
    variants: {
      size: {
        sm: ["size-4"],
        md: ["size-5"],
      },
      disabled: {
        true: ["opacity-50", "cursor-not-allowed"],
        false: [],
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  },
);
