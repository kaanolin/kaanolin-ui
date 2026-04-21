// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const ImageIndentRight = forwardRef<SVGSVGElement, DuocolorIconProps>(function ImageIndentRight(
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
      <path opacity="0.4" d="M21 4H3M21 20H3M9 9.25H3M9 14.75H3" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 9.6C13 9.03995 13 8.75992 13.109 8.54601C13.2049 8.35785 13.3578 8.20487 13.546 8.10899C13.7599 8 14.0399 8 14.6 8H19.4C19.9601 8 20.2401 8 20.454 8.10899C20.6422 8.20487 20.7951 8.35785 20.891 8.54601C21 8.75992 21 9.03995 21 9.6V14.4C21 14.9601 21 15.2401 20.891 15.454C20.7951 15.6422 20.6422 15.7951 20.454 15.891C20.2401 16 19.9601 16 19.4 16H14.6C14.0399 16 13.7599 16 13.546 15.891C13.3578 15.7951 13.2049 15.6422 13.109 15.454C13 15.2401 13 14.9601 13 14.4V9.6Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
ImageIndentRight.displayName = "ImageIndentRight";
