// [duotone] generated from source/icons/Duotone icons/
import { forwardRef } from "react";
import type { DuotoneIconProps } from "../../types";

export const CornerLeftDown = forwardRef<SVGSVGElement, DuotoneIconProps>(function CornerLeftDown(
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
      <path d="M21 4H17.6C14.2397 4 12.5595 4 11.2761 4.65396C10.1471 5.2292 9.2292 6.14708 8.65396 7.27606C8 8.55953 8 10.2397 8 13.6V20M8 20L13 15M8 20L3 15" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
CornerLeftDown.displayName = "CornerLeftDown";
