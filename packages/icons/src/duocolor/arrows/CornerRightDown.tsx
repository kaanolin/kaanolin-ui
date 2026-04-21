// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const CornerRightDown = forwardRef<SVGSVGElement, DuocolorIconProps>(function CornerRightDown(
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
      <path opacity="0.4" d="M3 4H6.4C9.76031 4 11.4405 4 12.7239 4.65396C13.8529 5.2292 14.7708 6.14708 15.346 7.27606C16 8.55953 16 10.2397 16 13.6L16 20" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 15L16 20L21 15" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
CornerRightDown.displayName = "CornerRightDown";
