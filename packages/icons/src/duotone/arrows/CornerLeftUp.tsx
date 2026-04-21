// [duotone] generated from source/icons/Duotone icons/
import { forwardRef } from "react";
import type { DuotoneIconProps } from "../../types";

export const CornerLeftUp = forwardRef<SVGSVGElement, DuotoneIconProps>(function CornerLeftUp(
  { size = 24, color = "currentColor", strokeWidth = 2, title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M21 20H17.6C14.2397 20 12.5595 20 11.2761 19.346C10.1471 18.7708 9.2292 17.8529 8.65396 16.7239C8 15.4405 8 13.7603 8 10.4V4M8 4L13 9M8 4L3 9" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
CornerLeftUp.displayName = "CornerLeftUp";
