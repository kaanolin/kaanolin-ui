import { cva } from "class-variance-authority";

/* ========== Root dropzone ========== */

export const fileUploadStyles = cva(
  [
    "border-2",
    "border-dashed",
    "border-border-primary",
    "rounded-xl",
    "p-6",
    "text-center",
    "transition-colors",
    "cursor-pointer",
  ],
  {
    variants: {
      isDragging: {
        true: ["border-brand-600", "bg-brand-50"],
        false: [],
      },
      disabled: {
        true: ["opacity-50", "cursor-not-allowed", "pointer-events-none"],
        false: [],
      },
    },
    defaultVariants: {
      isDragging: false,
      disabled: false,
    },
  },
);

/* ========== Icon ========== */

export const fileUploadIconStyles = cva([
  "mx-auto",
  "mb-3",
  "size-10",
  "text-fg-quaternary",
]);

/* ========== Text ========== */

export const fileUploadTextStyles = cva([
  "text-sm",
  "text-text-tertiary",
]);

/* ========== Trigger (click to upload link) ========== */

export const fileUploadTriggerStyles = cva([
  "text-brand-600",
  "font-semibold",
  "cursor-pointer",
]);
