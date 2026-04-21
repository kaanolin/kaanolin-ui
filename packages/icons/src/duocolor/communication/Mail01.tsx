// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const Mail01 = forwardRef<SVGSVGElement, DuocolorIconProps>(function Mail01(
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
      <rect opacity="0.4" x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.8351 12.7154C13.1739 13.1783 12.8433 13.4097 12.4837 13.4993C12.1661 13.5785 11.8339 13.5785 11.5163 13.4993C11.1567 13.4097 10.8261 13.1783 10.1649 12.7154L2 7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7L13.8351 12.7154Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
Mail01.displayName = "Mail01";
