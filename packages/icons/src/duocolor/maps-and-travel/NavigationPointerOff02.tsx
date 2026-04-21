// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const NavigationPointerOff02 = forwardRef<SVGSVGElement, DuocolorIconProps>(function NavigationPointerOff02(
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
      <path opacity="0.4" d="M10.4713 5.47554L11.2631 3.6702C11.4947 3.14212 11.6105 2.87808 11.7724 2.79727C11.913 2.72708 12.0784 2.72708 12.219 2.79727C12.3809 2.87808 12.4967 3.14212 12.7283 3.6702L15.9006 10.903M8.94671 8.95129L3.9816 20.2717C3.72503 20.8567 3.59674 21.1492 3.65345 21.3285C3.7026 21.484 3.82448 21.6057 3.97999 21.6547C4.15939 21.7112 4.45174 21.5826 5.03642 21.3253L11.6734 18.405C11.7921 18.3528 11.8514 18.3267 11.9131 18.3164C11.9677 18.3073 12.0235 18.3073 12.0781 18.3164C12.1398 18.3267 12.1991 18.3528 12.3178 18.405L18.9548 21.3253C19.5395 21.5826 19.8318 21.7112 20.0112 21.6547C20.1667 21.6057 20.2886 21.484 20.3377 21.3285C20.3945 21.1492 20.2662 20.8567 20.0096 20.2717L19.8055 19.8063" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 22L2 2" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
NavigationPointerOff02.displayName = "NavigationPointerOff02";
