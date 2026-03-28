import { cva } from "class-variance-authority";

/* ========== TabsList ========== */

export const tabsListStyles = cva(
  ["inline-flex", "items-center", "shrink-0"],
  {
    variants: {
      variant: {
        underline: ["gap-0", "border-b", "border-border-primary"],
        contained: [
          "gap-0",
          "rounded-lg",
          "border",
          "border-border-primary",
          "bg-bg-secondary",
          "p-1",
        ],
        pill: ["gap-1", "p-1"],
      },
      size: {
        sm: ["h-9"],
        md: ["h-10"],
        lg: ["h-11"],
      },
      fullWidth: {
        true: ["w-full"],
        false: [],
      },
    },
    defaultVariants: {
      variant: "underline",
      size: "md",
      fullWidth: false,
    },
  },
);

/* ========== TabsTrigger ========== */

export const tabsTriggerStyles = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "whitespace-nowrap",
    "font-medium",
    "transition-colors",
    "outline-none",
    "cursor-pointer",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "focus-visible:ring-2",
    "focus-visible:ring-brand-600",
    "focus-visible:ring-offset-2",
  ],
  {
    variants: {
      variant: {
        underline: [
          "text-text-tertiary",
          "border-b-2",
          "border-transparent",
          "-mb-px",
          "hover:text-text-primary",
          "data-[state=active]:text-text-primary",
          "data-[state=active]:border-brand-600",
        ],
        contained: [
          "text-text-tertiary",
          "rounded-md",
          "hover:text-text-primary",
          "data-[state=active]:bg-bg-primary",
          "data-[state=active]:text-text-primary",
          "data-[state=active]:shadow-sm",
        ],
        pill: [
          "text-text-tertiary",
          "rounded-full",
          "hover:text-text-primary",
          "data-[state=active]:bg-bg-primary",
          "data-[state=active]:text-text-primary",
          "data-[state=active]:shadow-sm",
        ],
      },
      size: {
        sm: ["text-sm", "px-3", "py-1"],
        md: ["text-sm", "px-4", "py-1.5"],
        lg: ["text-base", "px-5", "py-2"],
      },
      fullWidth: {
        true: ["flex-1"],
        false: [],
      },
    },
    defaultVariants: {
      variant: "underline",
      size: "md",
      fullWidth: false,
    },
  },
);

/* ========== TabsContent ========== */

export const tabsContentStyles = cva([
  "mt-2",
  "outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-brand-600",
  "focus-visible:ring-offset-2",
]);

/* ========== Trigger Badge ========== */

export const tabsBadgeStyles = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-full",
    "font-medium",
    "leading-none",
  ],
  {
    variants: {
      size: {
        sm: ["text-xs", "min-w-4", "h-4", "px-1"],
        md: ["text-xs", "min-w-5", "h-5", "px-1.5"],
        lg: ["text-sm", "min-w-5", "h-5", "px-1.5"],
      },
    },
    defaultVariants: { size: "md" },
  },
);
