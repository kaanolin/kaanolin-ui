// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const Flag03 = forwardRef<SVGSVGElement, DuocolorIconProps>(function Flag03(
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
      <path opacity="0.4" d="M4 3H19.587C20.0495 3 20.2808 3 20.4128 3.09698C20.528 3.18154 20.6015 3.31133 20.6147 3.45359C20.63 3.61674 20.511 3.81503 20.273 4.2116L18.247 7.5884C18.1572 7.73805 18.1123 7.81288 18.0947 7.89276C18.0792 7.96341 18.0792 8.03659 18.0947 8.10724C18.1123 8.18712 18.1572 8.26195 18.247 8.4116L20.273 11.7884C20.511 12.185 20.63 12.3833 20.6147 12.5464C20.6015 12.6887 20.528 12.8185 20.4128 12.903C20.2808 13 20.0495 13 19.587 13H4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 21L4 3" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
Flag03.displayName = "Flag03";
