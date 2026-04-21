// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const LinkBroken02 = forwardRef<SVGSVGElement, DuocolorIconProps>(function LinkBroken02(
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
      <path opacity="0.4" d="M8.5 15.5L15.5 8.49998M9 4V2M15 20V22M4 9H2M20 15H22M4.91421 4.91421L3.5 3.5M19.0858 19.0857L20.5 20.4999" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 17.6568L9.87872 19.7781C8.31662 21.3402 5.78396 21.3402 4.22187 19.7781C2.65977 18.216 2.65977 15.6833 4.22187 14.1212L6.34319 11.9999M17.6569 11.9999L19.7782 9.8786C21.3403 8.3165 21.3403 5.78384 19.7782 4.22174C18.2161 2.65965 15.6835 2.65965 14.1214 4.22174L12 6.34306" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
LinkBroken02.displayName = "LinkBroken02";
