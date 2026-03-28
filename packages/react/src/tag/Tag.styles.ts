import { cva } from "class-variance-authority";

/* ========== Tag ========== */

export const tagStyles = cva(
  [
    "inline-flex",
    "items-center",
    "gap-1.5",
    "rounded-md",
    "border",
    "font-medium",
    "whitespace-nowrap",
    "cursor-default",
    "transition-colors",
  ],
  {
    variants: {
      color: {
        gray: [
          "bg-utility-neutral-50",
          "border-utility-neutral-200",
          "text-utility-neutral-700",
          "hover:bg-utility-neutral-100",
        ],
        brand: [
          "bg-utility-brand-50",
          "border-utility-brand-200",
          "text-utility-brand-700",
          "hover:bg-utility-brand-100",
        ],
        error: [
          "bg-utility-red-50",
          "border-utility-red-200",
          "text-utility-red-700",
          "hover:bg-utility-red-100",
        ],
        warning: [
          "bg-utility-yellow-50",
          "border-utility-yellow-200",
          "text-utility-yellow-700",
          "hover:bg-utility-yellow-100",
        ],
        success: [
          "bg-utility-green-50",
          "border-utility-green-200",
          "text-utility-green-700",
          "hover:bg-utility-green-100",
        ],
        blue: [
          "bg-utility-blue-50",
          "border-utility-blue-200",
          "text-utility-blue-700",
          "hover:bg-utility-blue-100",
        ],
        indigo: [
          "bg-utility-indigo-50",
          "border-utility-indigo-200",
          "text-utility-indigo-700",
          "hover:bg-utility-indigo-100",
        ],
        purple: [
          "bg-utility-purple-50",
          "border-utility-purple-200",
          "text-utility-purple-700",
          "hover:bg-utility-purple-100",
        ],
        pink: [
          "bg-utility-pink-50",
          "border-utility-pink-200",
          "text-utility-pink-700",
          "hover:bg-utility-pink-100",
        ],
        orange: [
          "bg-utility-orange-50",
          "border-utility-orange-200",
          "text-utility-orange-700",
          "hover:bg-utility-orange-100",
        ],
      },
      size: {
        sm: ["text-xs", "px-1.5", "py-0.5", "h-6"],
        md: ["text-sm", "px-2", "py-0.5", "h-7"],
        lg: ["text-sm", "px-2.5", "py-1", "h-8"],
      },
      disabled: {
        true: ["opacity-50", "cursor-not-allowed", "pointer-events-none"],
      },
    },
    defaultVariants: {
      color: "gray",
      size: "md",
    },
  },
);

/* ========== Tag close button ========== */

export const tagCloseStyles = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "shrink-0",
    "rounded",
    "cursor-pointer",
    "outline-none",
    "transition-colors",
    "-mr-0.5",
  ],
  {
    variants: {
      color: {
        gray: ["text-utility-neutral-400", "hover:text-utility-neutral-600"],
        brand: ["text-utility-brand-400", "hover:text-utility-brand-600"],
        error: ["text-utility-red-400", "hover:text-utility-red-600"],
        warning: ["text-utility-yellow-400", "hover:text-utility-yellow-600"],
        success: ["text-utility-green-400", "hover:text-utility-green-600"],
        blue: ["text-utility-blue-400", "hover:text-utility-blue-600"],
        indigo: ["text-utility-indigo-400", "hover:text-utility-indigo-600"],
        purple: ["text-utility-purple-400", "hover:text-utility-purple-600"],
        pink: ["text-utility-pink-400", "hover:text-utility-pink-600"],
        orange: ["text-utility-orange-400", "hover:text-utility-orange-600"],
      },
      size: {
        sm: ["size-3.5"],
        md: ["size-4"],
        lg: ["size-4"],
      },
    },
    defaultVariants: { color: "gray", size: "md" },
  },
);

/* ========== Tag avatar ========== */

export const tagAvatarStyles = cva(["shrink-0", "rounded-full"], {
  variants: {
    size: {
      sm: ["size-4", "-ml-0.5"],
      md: ["size-5", "-ml-0.5"],
      lg: ["size-5", "-ml-0.5"],
    },
  },
  defaultVariants: { size: "md" },
});

/* ========== Tag icon ========== */

export const tagIconStyles = cva(["shrink-0"], {
  variants: {
    size: {
      sm: ["size-3"],
      md: ["size-3.5"],
      lg: ["size-4"],
    },
  },
  defaultVariants: { size: "md" },
});
