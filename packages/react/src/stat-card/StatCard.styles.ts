import { cva } from "class-variance-authority";

export const statCardStyles = cva(
  ["flex", "flex-col", "gap-1", "rounded-xl", "border", "p-5"],
  {
    variants: {
      variant: {
        default: ["bg-bg-primary", "border-border-primary"],
        critical: ["bg-utility-red-50", "border-utility-red-200"],
        warning: ["bg-utility-yellow-50", "border-utility-yellow-200"],
        success: ["bg-utility-green-50", "border-utility-green-200"],
      },
      size: {
        sm: ["p-3", "gap-0.5"],
        md: ["p-5", "gap-1"],
        lg: ["p-6", "gap-2"],
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  },
);

export const statCardLabelStyles = cva(["font-medium", "text-text-secondary"], {
  variants: {
    size: {
      sm: ["text-xs"],
      md: ["text-sm"],
      lg: ["text-sm"],
    },
  },
  defaultVariants: { size: "md" },
});

export const statCardValueStyles = cva(["font-semibold", "tracking-tight"], {
  variants: {
    variant: {
      default: ["text-text-primary"],
      critical: ["text-utility-red-700"],
      warning: ["text-utility-yellow-700"],
      success: ["text-utility-green-700"],
    },
    size: {
      sm: ["text-xl"],
      md: ["text-3xl"],
      lg: ["text-4xl"],
    },
  },
  defaultVariants: { variant: "default", size: "md" },
});

export const statCardDeltaStyles = cva(
  ["inline-flex", "items-center", "gap-1", "text-xs", "font-medium"],
  {
    variants: {
      deltaType: {
        up: ["text-utility-red-600"],
        down: ["text-utility-green-600"],
        neutral: ["text-text-tertiary"],
      },
    },
    defaultVariants: { deltaType: "neutral" },
  },
);

export const statCardDescriptionStyles = cva(["text-text-tertiary"], {
  variants: {
    size: {
      sm: ["text-xs"],
      md: ["text-xs"],
      lg: ["text-sm"],
    },
  },
  defaultVariants: { size: "md" },
});
