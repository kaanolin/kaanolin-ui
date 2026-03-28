import { cva } from "class-variance-authority";

/* ========== Wrapper ========== */

export const textEditorWrapperStyles = cva(
  [
    "border",
    "rounded-lg",
    "overflow-hidden",
    "transition-colors",
    "bg-bg-primary",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-border-primary",
          "focus-within:ring-4",
          "focus-within:ring-focus-ring/24",
          "focus-within:border-brand-300",
        ],
        error: [
          "border-border-error",
          "focus-within:ring-4",
          "focus-within:ring-error-500/24",
        ],
      },
      disabled: {
        false: null,
        true: [
          "pointer-events-none",
          "cursor-not-allowed",
          "bg-bg-disabled",
          "border-border-disabled",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
      disabled: false,
    },
  },
);

/* ========== Toolbar ========== */

export const textEditorToolbarStyles = cva([
  "flex",
  "flex-wrap",
  "gap-0.5",
  "p-1",
  "border-b",
  "border-border-secondary",
]);

/* ========== Toolbar button ========== */

export const textEditorToolbarButtonStyles = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "size-8",
    "rounded-md",
    "border",
    "border-transparent",
    "bg-transparent",
    "text-fg-tertiary",
    "transition-colors",
    "cursor-pointer",
    "hover:bg-bg-primary_hover",
    "hover:text-fg-secondary",
  ],
  {
    variants: {
      active: {
        false: null,
        true: ["bg-bg-primary_hover", "text-fg-secondary"],
      },
      disabled: {
        false: null,
        true: ["pointer-events-none", "cursor-not-allowed", "text-fg-disabled"],
      },
    },
    defaultVariants: {
      active: false,
      disabled: false,
    },
  },
);

/* ========== Editor content area ========== */

export const textEditorContentStyles = cva([
  "min-h-[150px]",
  "px-3",
  "py-2",
  "text-sm",
  "text-text-primary",
  "outline-none",
  "[&_.tiptap]:outline-none",
  "[&_.tiptap]:min-h-[150px]",
  "[&_.tiptap_p.is-editor-empty:first-child::before]:content-[attr(data-placeholder)]",
  "[&_.tiptap_p.is-editor-empty:first-child::before]:text-text-placeholder",
  "[&_.tiptap_p.is-editor-empty:first-child::before]:float-left",
  "[&_.tiptap_p.is-editor-empty:first-child::before]:h-0",
  "[&_.tiptap_p.is-editor-empty:first-child::before]:pointer-events-none",
  "[&_.tiptap_h1]:text-2xl",
  "[&_.tiptap_h1]:font-bold",
  "[&_.tiptap_h1]:my-2",
  "[&_.tiptap_h2]:text-xl",
  "[&_.tiptap_h2]:font-bold",
  "[&_.tiptap_h2]:my-2",
  "[&_.tiptap_h3]:text-lg",
  "[&_.tiptap_h3]:font-bold",
  "[&_.tiptap_h3]:my-1",
  "[&_.tiptap_ul]:list-disc",
  "[&_.tiptap_ul]:pl-6",
  "[&_.tiptap_ul]:my-1",
  "[&_.tiptap_ol]:list-decimal",
  "[&_.tiptap_ol]:pl-6",
  "[&_.tiptap_ol]:my-1",
  "[&_.tiptap_blockquote]:border-l-4",
  "[&_.tiptap_blockquote]:border-border-secondary",
  "[&_.tiptap_blockquote]:pl-4",
  "[&_.tiptap_blockquote]:italic",
  "[&_.tiptap_blockquote]:my-1",
  "[&_.tiptap_code]:bg-bg-secondary",
  "[&_.tiptap_code]:rounded",
  "[&_.tiptap_code]:px-1",
  "[&_.tiptap_code]:py-0.5",
  "[&_.tiptap_code]:text-xs",
  "[&_.tiptap_code]:font-mono",
  "[&_.tiptap_hr]:my-2",
  "[&_.tiptap_hr]:border-border-secondary",
  "[&_.tiptap_a]:text-brand-600",
  "[&_.tiptap_a]:underline",
  "[&_.tiptap_a]:cursor-pointer",
]);
