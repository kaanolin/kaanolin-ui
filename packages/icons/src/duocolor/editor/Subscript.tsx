// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const Subscript = forwardRef<SVGSVGElement, DuocolorIconProps>(function Subscript(
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
      <path opacity="0.4" d="M21 19.0003H17C17 17.5003 17.44 17.0003 18.5 16.5003C19.56 16.0003 21 15.3303 21 14.0003C21 13.5303 20.83 13.0703 20.52 12.7103C20.1999 12.3478 19.7649 12.1063 19.2879 12.0262C18.811 11.9461 18.321 12.0323 17.9 12.2703C17.48 12.5103 17.16 12.8903 17 13.3403" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 5L13 15M13 5L3 15" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
Subscript.displayName = "Subscript";
