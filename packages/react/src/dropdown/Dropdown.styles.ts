import { cva } from "class-variance-authority";

/* ========== Content (the floating menu panel) ========== */

export const dropdownContentStyles = cva([
  "z-50",
  "min-w-[200px]",
  "overflow-hidden",
  "rounded-lg",
  "border",
  "border-border-secondary",
  "bg-bg-primary",
  "py-1",
  "shadow-lg",
  "animate-in",
  "fade-in-0",
  "zoom-in-95",
  "data-[state=closed]:animate-out",
  "data-[state=closed]:fade-out-0",
  "data-[state=closed]:zoom-out-95",
  "data-[side=bottom]:slide-in-from-top-2",
  "data-[side=left]:slide-in-from-right-2",
  "data-[side=right]:slide-in-from-left-2",
  "data-[side=top]:slide-in-from-bottom-2",
]);

/* ========== Item ========== */

export const dropdownItemStyles = cva(
  [
    "relative",
    "flex",
    "w-full",
    "items-center",
    "gap-2",
    "px-3.5",
    "py-2.5",
    "text-sm",
    "text-text-primary",
    "outline-none",
    "cursor-pointer",
    "transition-colors",
    "select-none",
    "data-[highlighted]:bg-bg-primary_hover",
    "data-[disabled]:text-text-disabled",
    "data-[disabled]:cursor-not-allowed",
    "data-[disabled]:pointer-events-none",
  ],
  {
    variants: {
      destructive: {
        false: null,
        true: [
          "text-text-error-primary",
          "data-[highlighted]:bg-error-50",
        ],
      },
    },
    defaultVariants: { destructive: false },
  },
);

/* ========== CheckboxItem / RadioItem indicator ========== */

export const dropdownItemIndicatorStyles = cva([
  "flex",
  "size-4",
  "items-center",
  "justify-center",
]);

/* ========== Group label ========== */

export const dropdownLabelStyles = cva([
  "px-3.5",
  "py-2",
  "text-xs",
  "font-medium",
  "text-text-tertiary",
  "select-none",
]);

/* ========== Separator ========== */

export const dropdownSeparatorStyles = cva([
  "border-t",
  "border-border-secondary",
  "my-1",
]);

/* ========== Sub-trigger ========== */

export const dropdownSubTriggerStyles = cva([
  "relative",
  "flex",
  "w-full",
  "items-center",
  "justify-between",
  "gap-2",
  "px-3.5",
  "py-2.5",
  "text-sm",
  "text-text-primary",
  "outline-none",
  "cursor-pointer",
  "transition-colors",
  "select-none",
  "data-[highlighted]:bg-bg-primary_hover",
  "data-[state=open]:bg-bg-primary_hover",
]);

/* ========== Shortcut ========== */

export const dropdownShortcutStyles = cva([
  "ml-auto",
  "text-xs",
  "text-text-tertiary",
]);

/* ========== Item icon slot ========== */

export const dropdownItemIconStyles = cva([
  "size-5",
  "shrink-0",
  "text-fg-quaternary",
]);
