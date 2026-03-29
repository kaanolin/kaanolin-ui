import { cva } from "class-variance-authority";

/* ========== DataSourceBadge root ========== */

export const dataSourceBadgeStyles = cva([
  "inline-flex",
  "items-center",
  "gap-1.5",
  "rounded-md",
  "border",
  "border-border-secondary",
  "bg-bg-secondary",
  "px-2",
  "py-0.5",
  "text-xs",
  "text-text-tertiary",
]);

/* ========== Link ========== */

export const dataSourceBadgeLinkStyles = cva([
  "underline",
  "underline-offset-2",
  "transition-colors",
  "hover:text-text-primary",
]);

/* ========== Date ========== */

export const dataSourceBadgeDateStyles = cva([
  "text-text-quaternary",
  "tabular-nums",
]);
