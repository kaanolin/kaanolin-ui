import { cva } from "class-variance-authority";

export const calloutStyles = cva(
  [
    "flex",
    "gap-3",
    "p-4",
    "rounded-lg",
    "border",
    "text-sm",
  ],
  {
    variants: {
      tone: {
        info: [
          "bg-utility-blue-50",
          "border-utility-blue-200",
          "text-utility-blue-700",
        ],
        success: [
          "bg-utility-green-50",
          "border-utility-green-200",
          "text-utility-green-700",
        ],
        warning: [
          "bg-utility-yellow-50",
          "border-utility-yellow-200",
          "text-utility-yellow-700",
        ],
        error: [
          "bg-utility-red-50",
          "border-utility-red-200",
          "text-utility-red-700",
        ],
        neutral: [
          "bg-utility-neutral-50",
          "border-utility-neutral-200",
          "text-utility-neutral-700",
        ],
      },
    },
    defaultVariants: { tone: "info" },
  },
);

export const calloutIconStyles = cva(["shrink-0", "mt-0.5", "size-5"]);

export const calloutBodyStyles = cva(["flex-1", "space-y-1"]);

export const calloutTitleStyles = cva(["font-semibold", "leading-tight"]);

export const calloutDescriptionStyles = cva(["leading-relaxed"]);
