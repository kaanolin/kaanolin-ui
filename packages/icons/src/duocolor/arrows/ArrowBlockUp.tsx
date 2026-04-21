// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const ArrowBlockUp = forwardRef<SVGSVGElement, DuocolorIconProps>(function ArrowBlockUp(
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
      <path d="M9.8 21C9.51997 21 9.37996 21 9.273 20.9455C9.17892 20.8976 9.10243 20.8211 9.0545 20.727C9 20.62 9 20.48 9 20.2V10H5L12 3L19 10H15V20.2C15 20.48 15 20.62 14.9455 20.727C14.8976 20.8211 14.8211 20.8976 14.727 20.9455C14.62 21 14.48 21 14.2 21H9.8Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
ArrowBlockUp.displayName = "ArrowBlockUp";
