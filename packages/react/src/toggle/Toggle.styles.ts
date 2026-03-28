import { cva } from "class-variance-authority";

/* ========== Toggle track ========== */

export const toggleTrackStyles = cva(
  [
    "inline-flex",
    "shrink-0",
    "cursor-pointer",
    "items-center",
    "rounded-full",
    "border-2",
    "border-transparent",
    "transition-colors",
    "bg-bg-quaternary",
    "data-[state=checked]:bg-bg-brand-solid",
    "data-[state=checked]:hover:bg-bg-brand-solid_hover",
    "focus-visible:outline-none",
    "focus-visible:ring-4",
    "focus-visible:ring-focus-ring/24",
    "data-[disabled]:bg-bg-disabled",
    "data-[disabled]:cursor-not-allowed",
  ],
  {
    variants: {
      size: {
        sm: ["h-5", "w-9"],
        md: ["h-6", "w-11"],
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

/* ========== Toggle thumb ========== */

export const toggleThumbStyles = cva(
  [
    "pointer-events-none",
    "block",
    "rounded-full",
    "bg-white",
    "shadow-sm",
    "transition-transform",
    "data-[state=unchecked]:translate-x-0",
  ],
  {
    variants: {
      size: {
        sm: ["size-4", "data-[state=checked]:translate-x-4"],
        md: ["size-5", "data-[state=checked]:translate-x-5"],
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

/* ========== Toggle label ========== */

export const toggleLabelStyles = cva([
  "text-sm",
  "font-medium",
  "text-text-primary",
]);

/* ========== Toggle description ========== */

export const toggleDescriptionStyles = cva([
  "text-sm",
  "text-text-tertiary",
]);
