// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const ArrowCircleBrokenUp = forwardRef<SVGSVGElement, DuocolorIconProps>(function ArrowCircleBrokenUp(
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
      <path opacity="0.4" d="M7 20.6621C4.01099 18.933 2 15.7013 2 11.9999C2 6.47703 6.47715 1.99988 12 1.99988C17.5228 1.99988 22 6.47703 22 11.9999C22 15.7013 19.989 18.933 17 20.6621" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 12L12 8M12 8L8 12M12 8V22" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
ArrowCircleBrokenUp.displayName = "ArrowCircleBrokenUp";
