import { cva } from "class-variance-authority";

/**
 * Featured-icon container styles.
 * See DESIGN_PRINCIPLES #1: icons live at 24px; anything bigger wraps one inside a container.
 */
export const featuredIconStyles = cva(
  ["inline-flex", "items-center", "justify-center", "shrink-0"],
  {
    variants: {
      size: {
        sm: ["size-8"],
        md: ["size-10"],
        lg: ["size-12"],
        xl: ["size-14"],
        "2xl": ["size-16"],
      },
      shape: {
        circle: ["rounded-full"],
        square: ["rounded-lg"],
        modern: ["rounded-xl"],
      },
      color: {
        gray: ["bg-utility-neutral-100", "text-utility-neutral-700"],
        brand: ["bg-utility-brand-50", "text-utility-brand-600"],
        error: ["bg-utility-red-50", "text-utility-red-600"],
        warning: ["bg-utility-yellow-50", "text-utility-yellow-600"],
        success: ["bg-utility-green-50", "text-utility-green-600"],
      },
      variant: {
        light: [],
        outline: ["border", "bg-transparent"],
        solid: ["text-fg-white"],
      },
    },
    compoundVariants: [
      { variant: "outline", color: "gray", class: "border-utility-neutral-300 text-utility-neutral-700" },
      { variant: "outline", color: "brand", class: "border-utility-brand-300 text-utility-brand-700" },
      { variant: "outline", color: "error", class: "border-utility-red-300 text-utility-red-700" },
      { variant: "outline", color: "warning", class: "border-utility-yellow-300 text-utility-yellow-700" },
      { variant: "outline", color: "success", class: "border-utility-green-300 text-utility-green-700" },
      { variant: "solid", color: "gray", class: "bg-utility-neutral-700" },
      { variant: "solid", color: "brand", class: "bg-utility-brand-600" },
      { variant: "solid", color: "error", class: "bg-utility-red-600" },
      { variant: "solid", color: "warning", class: "bg-utility-yellow-600" },
      { variant: "solid", color: "success", class: "bg-utility-green-600" },
    ],
    defaultVariants: {
      size: "md",
      shape: "circle",
      color: "brand",
      variant: "light",
    },
  },
);

/**
 * Inner icon-slot size — children render at their natural size, capped by the container.
 * Rule #1: the icon inside stays at 24px regardless of container size.
 */
export const featuredIconSlotStyles = cva(["inline-flex"], {
  variants: {
    size: {
      sm: ["[&_svg]:size-4"],
      md: ["[&_svg]:size-5"],
      lg: ["[&_svg]:size-6"],
      xl: ["[&_svg]:size-6"],
      "2xl": ["[&_svg]:size-8"],
    },
  },
  defaultVariants: { size: "md" },
});
