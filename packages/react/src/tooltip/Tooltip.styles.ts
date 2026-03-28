import { cva } from "class-variance-authority";

/* ========== Tooltip Content ========== */

export const tooltipContentStyles = cva([
  "z-50",
  "overflow-hidden",
  "rounded-lg",
  "bg-bg-primary-solid",
  "px-3",
  "py-2",
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

/* ========== Tooltip Title ========== */

export const tooltipTitleStyles = cva([
  "text-xs",
  "font-semibold",
  "text-fg-white",
]);

/* ========== Tooltip Description ========== */

export const tooltipDescriptionStyles = cva([
  "text-xs",
  "text-tooltip-supporting-text",
]);

/* ========== Tooltip Arrow ========== */

export const tooltipArrowStyles = cva([
  "fill-bg-primary-solid",
]);
