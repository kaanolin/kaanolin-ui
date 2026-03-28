import { cva } from "class-variance-authority";

/* ========== VideoPlayer Wrapper ========== */

export const videoPlayerWrapperStyles = cva(
  [
    "group",
    "relative",
    "overflow-hidden",
    "rounded-lg",
    "bg-black",
  ],
  {
    variants: {
      aspectRatio: {
        "16/9": ["aspect-video"],
        "4/3": ["aspect-4/3"],
        "1/1": ["aspect-square"],
        "21/9": ["aspect-[21/9]"],
      },
    },
    defaultVariants: {
      aspectRatio: "16/9",
    },
  },
);

/* ========== Controls Bar ========== */

export const controlsBarStyles = cva([
  "absolute",
  "inset-x-0",
  "bottom-0",
  "flex",
  "items-center",
  "gap-2",
  "px-3",
  "py-2",
  "bg-black/70",
  "backdrop-blur-sm",
  "rounded-b-lg",
  "transition-opacity",
  "duration-200",
]);

/* ========== Control Button ========== */

export const controlButtonStyles = cva([
  "flex",
  "shrink-0",
  "items-center",
  "justify-center",
  "size-8",
  "rounded",
  "text-white",
  "hover:bg-white/20",
  "transition-colors",
  "cursor-pointer",
  "outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-white/50",
]);

/* ========== Seek Bar ========== */

export const seekBarStyles = cva([
  "flex-1",
  "h-1",
  "appearance-none",
  "cursor-pointer",
  "rounded-full",
  "bg-white/30",
  "outline-none",
  "[&::-webkit-slider-thumb]:appearance-none",
  "[&::-webkit-slider-thumb]:size-3",
  "[&::-webkit-slider-thumb]:rounded-full",
  "[&::-webkit-slider-thumb]:bg-white",
  "[&::-moz-range-thumb]:size-3",
  "[&::-moz-range-thumb]:rounded-full",
  "[&::-moz-range-thumb]:bg-white",
  "[&::-moz-range-thumb]:border-0",
]);

/* ========== Volume Slider ========== */

export const volumeSliderStyles = cva([
  "w-16",
  "h-1",
  "appearance-none",
  "cursor-pointer",
  "rounded-full",
  "bg-white/30",
  "outline-none",
  "[&::-webkit-slider-thumb]:appearance-none",
  "[&::-webkit-slider-thumb]:size-2.5",
  "[&::-webkit-slider-thumb]:rounded-full",
  "[&::-webkit-slider-thumb]:bg-white",
  "[&::-moz-range-thumb]:size-2.5",
  "[&::-moz-range-thumb]:rounded-full",
  "[&::-moz-range-thumb]:bg-white",
  "[&::-moz-range-thumb]:border-0",
]);

/* ========== Time Display ========== */

export const timeDisplayStyles = cva([
  "text-xs",
  "text-white",
  "font-mono",
  "tabular-nums",
  "select-none",
  "shrink-0",
]);

/* ========== Buffering Overlay ========== */

export const bufferingOverlayStyles = cva([
  "absolute",
  "inset-0",
  "flex",
  "items-center",
  "justify-center",
  "bg-black/40",
]);
