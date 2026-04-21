// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const Server02 = forwardRef<SVGSVGElement, DuocolorIconProps>(function Server02(
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
      <path opacity="0.4" d="M6 12H18M6 12C3.79086 12 2 10.2091 2 8C2 5.79086 3.79086 4 6 4H18C20.2091 4 22 5.79086 22 8C22 10.2091 20.2091 12 18 12M6 12C3.79086 12 2 13.7909 2 16C2 18.2091 3.79086 20 6 20H18C20.2091 20 22 18.2091 22 16C22 13.7909 20.2091 12 18 12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 8H6.01M6 16H6.01" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
Server02.displayName = "Server02";
