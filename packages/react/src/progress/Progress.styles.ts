import { cva } from "class-variance-authority";

/* ========== Progress track ========== */

export const progressTrackStyles = cva(
  [
    "relative",
    "w-full",
    "overflow-hidden",
    "rounded-full",
    "bg-bg-quaternary",
  ],
  {
    variants: {
      size: {
        sm: ["h-2"],
        md: ["h-2.5"],
        lg: ["h-3"],
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

/* ========== Progress indicator ========== */

export const progressIndicatorStyles = cva(
  [
    "h-full",
    "w-full",
    "flex-1",
    "rounded-full",
    "transition-all",
    "duration-300",
    "ease-in-out",
  ],
  {
    variants: {
      color: {
        brand: ["bg-bg-brand-solid"],
        success: ["bg-bg-success-solid"],
        error: ["bg-bg-error-solid"],
        warning: ["bg-bg-warning-solid"],
      },
    },
    defaultVariants: {
      color: "brand",
    },
  },
);
