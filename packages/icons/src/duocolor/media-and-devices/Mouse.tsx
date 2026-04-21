// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const Mouse = forwardRef<SVGSVGElement, DuocolorIconProps>(function Mouse(
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
      <path opacity="0.4" d="M12 9V6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
Mouse.displayName = "Mouse";
