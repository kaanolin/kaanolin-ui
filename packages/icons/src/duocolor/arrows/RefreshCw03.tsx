// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const RefreshCw03 = forwardRef<SVGSVGElement, DuocolorIconProps>(function RefreshCw03(
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
      <path opacity="0.4" d="M14 22C14 22 14.8492 21.8787 18.364 18.364C21.8787 14.8493 21.8787 9.15081 18.364 5.63609C17.1187 4.39082 15.5993 3.58674 14 3.22388M10 2.00024C10 2.00024 9.15076 2.12157 5.63604 5.63629C2.12132 9.151 2.12132 14.8495 5.63604 18.3642C6.88131 19.6095 8.40072 20.4136 10 20.7764" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 2L10 2L10 8M20 22H14L14 16" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
RefreshCw03.displayName = "RefreshCw03";
