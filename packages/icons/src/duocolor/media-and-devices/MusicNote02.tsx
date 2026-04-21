// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const MusicNote02 = forwardRef<SVGSVGElement, DuocolorIconProps>(function MusicNote02(
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
      <path opacity="0.4" d="M12 18V5.58888C12 4.73166 12 4.30306 12.1805 4.04492C12.3382 3.81952 12.5817 3.669 12.8538 3.6288C13.1655 3.58276 13.5488 3.77444 14.3155 4.1578L18 6.00003" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 21C10.6569 21 12 19.6569 12 18C12 16.3431 10.6569 15 9 15C7.34315 15 6 16.3431 6 18C6 19.6569 7.34315 21 9 21Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
MusicNote02.displayName = "MusicNote02";
