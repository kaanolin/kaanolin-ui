// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const RefreshCcw04 = forwardRef<SVGSVGElement, DuocolorIconProps>(function RefreshCcw04(
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
      <path opacity="0.4" d="M17 18.8746C19.1213 17.3291 20.5 14.8255 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5H11.5M12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 9.17446 4.87867 6.67093 7 5.1254" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 22.4L13 20.4L11 18.4M13 5.59998L11 3.59998L13 1.59998" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
RefreshCcw04.displayName = "RefreshCcw04";
