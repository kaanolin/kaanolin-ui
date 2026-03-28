import { cva } from "class-variance-authority";

/* ========== Avatar root ========== */

export const avatarStyles = cva(
  ["relative", "inline-flex", "items-center", "justify-center", "shrink-0", "ring-2", "ring-bg-primary", "overflow-hidden"],
  {
    variants: {
      size: {
        xs: ["size-6"],
        sm: ["size-8"],
        md: ["size-10"],
        lg: ["size-12"],
        xl: ["size-14"],
        "2xl": ["size-16"],
      },
      shape: {
        circle: ["rounded-full"],
        rounded: ["rounded-lg"],
      },
    },
    defaultVariants: {
      size: "md",
      shape: "circle",
    },
  },
);

/* ========== Avatar image ========== */

export const avatarImageStyles = cva([
  "size-full",
  "object-cover",
]);

/* ========== Avatar fallback ========== */

export const avatarFallbackStyles = cva(
  [
    "flex",
    "size-full",
    "items-center",
    "justify-center",
    "bg-utility-neutral-100",
    "text-utility-neutral-600",
    "font-medium",
    "select-none",
  ],
  {
    variants: {
      size: {
        xs: ["text-[10px]"],
        sm: ["text-xs"],
        md: ["text-sm"],
        lg: ["text-base"],
        xl: ["text-lg"],
        "2xl": ["text-xl"],
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

/* ========== Avatar status indicator ========== */

export const avatarStatusStyles = cva(
  [
    "absolute",
    "bottom-0",
    "right-0",
    "block",
    "rounded-full",
    "ring-2",
    "ring-bg-primary",
  ],
  {
    variants: {
      status: {
        online: ["bg-utility-green-500"],
        offline: ["bg-utility-neutral-300"],
        away: ["bg-utility-yellow-500"],
        busy: ["bg-utility-red-500"],
      },
      size: {
        xs: ["size-1.5"],
        sm: ["size-2"],
        md: ["size-2.5"],
        lg: ["size-3"],
        xl: ["size-3"],
        "2xl": ["size-3.5"],
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);
