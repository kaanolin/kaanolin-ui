import { cva } from "class-variance-authority";

/* ========== Overlay / backdrop ========== */

export const sheetOverlayStyles = cva([
  "fixed",
  "inset-0",
  "z-40",
  "bg-black/50",
]);

/* ========== Content ========== */

export const sheetContentStyles = cva(
  [
    "fixed",
    "z-50",
    "bg-bg-primary",
    "shadow-xl",
    "flex",
    "flex-col",
    "outline-none",
  ],
  {
    variants: {
      side: {
        right: [
          "right-0",
          "top-0",
          "h-full",
          "w-[400px]",
          "animate-slide-in-from-right",
        ],
        left: [
          "left-0",
          "top-0",
          "h-full",
          "w-[400px]",
          "animate-slide-in-from-left",
        ],
        top: [
          "top-0",
          "left-0",
          "w-full",
          "h-auto",
          "animate-slide-in-from-top",
        ],
        bottom: [
          "bottom-0",
          "left-0",
          "w-full",
          "h-auto",
          "animate-slide-in-from-bottom",
        ],
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

/* ========== Header ========== */

export const sheetHeaderStyles = cva([
  "px-6",
  "py-4",
  "border-b",
  "border-border-secondary",
]);

/* ========== Title ========== */

export const sheetTitleStyles = cva([
  "text-lg",
  "font-semibold",
  "leading-tight",
  "text-text-primary",
]);

/* ========== Description ========== */

export const sheetDescriptionStyles = cva([
  "text-sm",
  "text-text-tertiary",
  "mt-1",
]);

/* ========== Footer ========== */

export const sheetFooterStyles = cva([
  "px-6",
  "py-4",
  "border-t",
  "border-border-secondary",
  "mt-auto",
]);

/* ========== Close button ========== */

export const sheetCloseButtonStyles = cva([
  "absolute",
  "top-4",
  "right-4",
  "inline-flex",
  "items-center",
  "justify-center",
  "rounded-lg",
  "size-9",
  "p-2",
  "text-fg-quaternary",
  "cursor-pointer",
  "transition-colors",
  "outline-none",
  "hover:bg-bg-primary_hover",
  "hover:text-fg-secondary",
  "focus-visible:ring-4",
  "focus-visible:ring-gray-100/80",
]);
