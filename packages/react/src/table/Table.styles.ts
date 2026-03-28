import { cva } from "class-variance-authority";

/* ========== Table root (wrapper + table) ========== */

export const tableWrapperStyles = cva(["overflow-auto", "w-full"]);

export const tableStyles = cva([
  "w-full",
  "caption-bottom",
  "text-sm",
  "border-collapse",
]);

/* ========== TableHeader ========== */

export const tableHeaderStyles = cva(["bg-bg-secondary"]);

/* ========== TableBody ========== */

export const tableBodyStyles = cva([]);

/* ========== TableFooter ========== */

export const tableFooterStyles = cva([
  "bg-bg-secondary",
  "font-medium",
]);

/* ========== TableRow ========== */

export const tableRowStyles = cva([
  "border-b",
  "border-border-secondary",
  "transition-colors",
  "hover:bg-bg-primary_hover",
]);

/* ========== TableHead ========== */

export const tableHeadStyles = cva([
  "px-6",
  "py-3",
  "text-left",
  "text-xs",
  "font-medium",
  "uppercase",
  "text-text-tertiary",
]);

/* ========== TableCell ========== */

export const tableCellStyles = cva(
  ["px-6", "py-4", "text-sm", "text-text-primary"],
  {
    variants: {
      align: {
        left: ["text-left"],
        center: ["text-center"],
        right: ["text-right"],
      },
    },
    defaultVariants: {
      align: "left",
    },
  },
);

/* ========== TableCaption ========== */

export const tableCaptionStyles = cva([
  "mt-2",
  "text-sm",
  "text-text-tertiary",
]);
