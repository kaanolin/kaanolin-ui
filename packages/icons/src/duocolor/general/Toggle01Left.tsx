// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const Toggle01Left = forwardRef<SVGSVGElement, DuocolorIconProps>(function Toggle01Left(
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
      <path opacity="0.4" d="M2 12C2 9.23858 4.23858 7 7 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H7C4.23858 17 2 14.7614 2 12Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 17C9.76142 17 12 14.7614 12 12C12 9.23858 9.76142 7 7 7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
Toggle01Left.displayName = "Toggle01Left";
