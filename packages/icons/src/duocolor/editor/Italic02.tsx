// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const Italic02 = forwardRef<SVGSVGElement, DuocolorIconProps>(function Italic02(
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
      <path opacity="0.4" d="M13.25 4L7.25 20" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.75 4L10.75 20M19.5 4L9.5 4M14.5 20H4.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
Italic02.displayName = "Italic02";
