// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const Phone02 = forwardRef<SVGSVGElement, DuocolorIconProps>(function Phone02(
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
      <path opacity="0.4" d="M9 2V3.4C9 3.96005 9 4.24008 9.10899 4.45399C9.20487 4.64215 9.35785 4.79513 9.54601 4.89101C9.75992 5 10.0399 5 10.6 5H13.4C13.9601 5 14.2401 5 14.454 4.89101C14.6422 4.79513 14.7951 4.64215 14.891 4.45399C15 4.24008 15 3.96005 15 3.4V2" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
Phone02.displayName = "Phone02";
