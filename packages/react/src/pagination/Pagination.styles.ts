import { cva } from "class-variance-authority";

/* ========== Pagination root (nav) ========== */

export const paginationStyles = cva(["mx-auto", "flex", "w-full", "justify-center"]);

/* ========== PaginationContent (ul) ========== */

export const paginationContentStyles = cva([
  "flex",
  "flex-row",
  "items-center",
  "gap-1",
  "list-none",
  "p-0",
  "m-0",
]);

/* ========== PaginationItem (li) ========== */

export const paginationItemStyles = cva([]);

/* ========== PaginationLink (a / button) ========== */

export const paginationLinkStyles = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-lg",
    "font-medium",
    "transition-colors",
    "outline-none",
    "cursor-pointer",
    "border",
    "border-transparent",
    "text-text-primary",
    "hover:bg-bg-primary_hover",
    "focus-visible:ring-4",
    "focus-visible:ring-brand-500/24",
  ],
  {
    variants: {
      size: {
        sm: ["text-sm", "min-w-8", "h-8"],
        md: ["text-sm", "min-w-10", "h-10"],
        lg: ["text-md", "min-w-11", "h-11"],
      },
      isActive: {
        false: null,
        true: [
          "bg-brand-600",
          "text-fg-white",
          "border-brand-600",
          "hover:bg-brand-700",
          "hover:border-brand-700",
        ],
      },
    },
    defaultVariants: {
      size: "md",
      isActive: false,
    },
  },
);

/* ========== PaginationPrevious / PaginationNext ========== */

export const paginationNavStyles = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-1.5",
    "rounded-lg",
    "font-medium",
    "transition-colors",
    "outline-none",
    "cursor-pointer",
    "border",
    "border-transparent",
    "text-text-primary",
    "hover:bg-bg-primary_hover",
    "focus-visible:ring-4",
    "focus-visible:ring-brand-500/24",
    "text-sm",
    "h-10",
    "px-3",
  ],
  {
    variants: {
      disabled: {
        false: null,
        true: [
          "pointer-events-none",
          "cursor-not-allowed",
          "text-text-tertiary",
        ],
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

/* ========== PaginationEllipsis ========== */

export const paginationEllipsisStyles = cva([
  "inline-flex",
  "items-center",
  "justify-center",
  "min-w-10",
  "h-10",
  "text-text-tertiary",
  "select-none",
]);
