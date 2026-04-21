// [line] generated from source/icons/Line icons/
import { forwardRef } from "react";
import type { LineIconProps } from "../../types";

export const ArrowNarrowRight = forwardRef<SVGSVGElement, LineIconProps>(function ArrowNarrowRight(
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
      <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
ArrowNarrowRight.displayName = "ArrowNarrowRight";
