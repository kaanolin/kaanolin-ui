import { cva } from "class-variance-authority";

/* ========== StatusDot ========== */

export const statusDotStyles = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "shrink-0",
    "rounded-full",
    "relative",
  ],
  {
    variants: {
      status: {
        success: ["bg-utility-green-500"],
        warning: ["bg-utility-yellow-500"],
        error: ["bg-utility-red-500"],
        info: ["bg-utility-blue-500"],
        idle: ["bg-utility-neutral-400"],
      },
      size: {
        sm: ["size-1.5"],
        md: ["size-2"],
        lg: ["size-2.5"],
      },
    },
    defaultVariants: {
      status: "idle",
      size: "md",
    },
  },
);

/* ========== Halo (outer pulsing ring) ========== */

export const statusDotHaloStyles = cva(
  [
    "absolute",
    "inset-0",
    "rounded-full",
    "pointer-events-none",
    "motion-safe:animate-ping",
  ],
  {
    variants: {
      status: {
        success: ["bg-utility-green-500/60"],
        warning: ["bg-utility-yellow-500/60"],
        error: ["bg-utility-red-500/60"],
        info: ["bg-utility-blue-500/60"],
        idle: ["bg-utility-neutral-400/40"],
      },
    },
    defaultVariants: { status: "idle" },
  },
);
