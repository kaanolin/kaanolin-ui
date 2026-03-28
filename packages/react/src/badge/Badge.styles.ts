import { cva } from "class-variance-authority";

/* ========== Badge ========== */

export const badgeStyles = cva(
  [
    "inline-flex",
    "items-center",
    "gap-1",
    "border",
    "font-medium",
    "whitespace-nowrap",
  ],
  {
    variants: {
      color: {
        gray: [
          "bg-utility-neutral-50",
          "border-utility-neutral-200",
          "text-utility-neutral-700",
        ],
        brand: [
          "bg-utility-brand-50",
          "border-utility-brand-200",
          "text-utility-brand-700",
        ],
        error: [
          "bg-utility-red-50",
          "border-utility-red-200",
          "text-utility-red-700",
        ],
        warning: [
          "bg-utility-yellow-50",
          "border-utility-yellow-200",
          "text-utility-yellow-700",
        ],
        success: [
          "bg-utility-green-50",
          "border-utility-green-200",
          "text-utility-green-700",
        ],
        blue: [
          "bg-utility-blue-50",
          "border-utility-blue-200",
          "text-utility-blue-700",
        ],
        indigo: [
          "bg-utility-indigo-50",
          "border-utility-indigo-200",
          "text-utility-indigo-700",
        ],
        purple: [
          "bg-utility-purple-50",
          "border-utility-purple-200",
          "text-utility-purple-700",
        ],
        pink: [
          "bg-utility-pink-50",
          "border-utility-pink-200",
          "text-utility-pink-700",
        ],
        orange: [
          "bg-utility-orange-50",
          "border-utility-orange-200",
          "text-utility-orange-700",
        ],
      },
      size: {
        sm: ["text-xs", "px-2", "py-0.5"],
        md: ["text-xs", "px-2.5", "py-0.5"],
        lg: ["text-sm", "px-3", "py-1"],
      },
      shape: {
        pill: ["rounded-full"],
        badge: ["rounded-md"],
      },
    },
    defaultVariants: {
      color: "gray",
      size: "md",
      shape: "pill",
    },
  },
);

/* ========== Badge dot indicator ========== */

export const badgeDotStyles = cva(["size-1.5", "rounded-full", "shrink-0"], {
  variants: {
    color: {
      gray: ["bg-utility-neutral-500"],
      brand: ["bg-utility-brand-500"],
      error: ["bg-utility-red-500"],
      warning: ["bg-utility-yellow-500"],
      success: ["bg-utility-green-500"],
      blue: ["bg-utility-blue-500"],
      indigo: ["bg-utility-indigo-500"],
      purple: ["bg-utility-purple-500"],
      pink: ["bg-utility-pink-500"],
      orange: ["bg-utility-orange-500"],
    },
  },
  defaultVariants: { color: "gray" },
});

/* ========== Badge close button ========== */

export const badgeCloseStyles = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "shrink-0",
    "rounded-full",
    "cursor-pointer",
    "outline-none",
    "transition-colors",
    "-mr-0.5",
  ],
  {
    variants: {
      color: {
        gray: ["text-utility-neutral-500", "hover:text-utility-neutral-700"],
        brand: ["text-utility-brand-500", "hover:text-utility-brand-700"],
        error: ["text-utility-red-500", "hover:text-utility-red-700"],
        warning: ["text-utility-yellow-500", "hover:text-utility-yellow-700"],
        success: ["text-utility-green-500", "hover:text-utility-green-700"],
        blue: ["text-utility-blue-500", "hover:text-utility-blue-700"],
        indigo: ["text-utility-indigo-500", "hover:text-utility-indigo-700"],
        purple: ["text-utility-purple-500", "hover:text-utility-purple-700"],
        pink: ["text-utility-pink-500", "hover:text-utility-pink-700"],
        orange: ["text-utility-orange-500", "hover:text-utility-orange-700"],
      },
      size: {
        sm: ["size-3.5"],
        md: ["size-3.5"],
        lg: ["size-4"],
      },
    },
    defaultVariants: { color: "gray", size: "md" },
  },
);

/* ========== Badge icon ========== */

export const badgeIconStyles = cva(["shrink-0"], {
  variants: {
    size: {
      sm: ["size-3"],
      md: ["size-3"],
      lg: ["size-3.5"],
    },
  },
  defaultVariants: { size: "md" },
});
