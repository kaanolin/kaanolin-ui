import { cva } from "class-variance-authority";

export const codeBlockStyles = cva(
  [
    "relative",
    "rounded-lg",
    "border",
    "border-border-secondary",
    "bg-bg-primary",
    "font-mono",
    "text-sm",
    "text-text-primary",
    "overflow-hidden",
  ],
  {
    variants: {
      tone: {
        neutral: ["bg-bg-primary"],
        subtle: ["bg-bg-secondary"],
        inverse: ["bg-bg-primary_alt", "text-fg-white", "border-border-primary"],
      },
    },
    defaultVariants: { tone: "neutral" },
  },
);

export const codeBlockHeaderStyles = cva([
  "flex",
  "items-center",
  "justify-between",
  "gap-2",
  "px-3",
  "py-2",
  "border-b",
  "border-border-secondary",
  "text-xs",
  "text-text-tertiary",
]);

export const codeBlockLanguageStyles = cva(["uppercase", "tracking-wide"]);

export const codeBlockCopyButtonStyles = cva([
  "inline-flex",
  "items-center",
  "gap-1",
  "px-2",
  "py-1",
  "rounded-md",
  "text-xs",
  "text-text-secondary",
  "hover:bg-bg-primary_hover",
  "transition-colors",
  "cursor-pointer",
  "outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-focus-ring/40",
]);

export const codeBlockPreStyles = cva([
  "m-0",
  "px-4",
  "py-3",
  "overflow-auto",
  "leading-relaxed",
]);
