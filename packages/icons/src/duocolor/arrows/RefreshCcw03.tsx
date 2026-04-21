// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const RefreshCcw03 = forwardRef<SVGSVGElement, DuocolorIconProps>(function RefreshCcw03(
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
      <path opacity="0.4" d="M14 2C14 2 14.8492 2.12132 18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364C17.1187 19.6092 15.5993 20.4133 14 20.7762M10 21.9998C10 21.9998 9.15076 21.8785 5.63604 18.3638C2.12132 14.849 2.12132 9.15056 5.63604 5.63584C6.88131 4.39057 8.40072 3.5865 10 3.22363" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 22H10L10 16M20 2L14 2L14 8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
RefreshCcw03.displayName = "RefreshCcw03";
