import { cva } from "class-variance-authority";

/* ========== Spinner ========== */

export const spinnerStyles = cva(["animate-spin"], {
  variants: {
    size: {
      xs: ["size-4"],
      sm: ["size-5"],
      md: ["size-6"],
      lg: ["size-8"],
      xl: ["size-12"],
    },
    color: {
      brand: ["text-brand-600"],
      gray: ["text-fg-quaternary"],
      white: ["text-fg-white"],
    },
  },
  defaultVariants: {
    size: "md",
    color: "brand",
  },
});
