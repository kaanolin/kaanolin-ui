// [solid] generated from source/icons/Solid icons/
import { forwardRef } from "react";
import type { SolidIconProps } from "../../types";

export const BarChart03 = forwardRef<SVGSVGElement, SolidIconProps>(function BarChart03(
  { size = 24, color = "currentColor", title, "aria-label": ariaLabel, ...rest },
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
      <path fillRule="evenodd" clipRule="evenodd" d="M6 3C6.55228 3 7 3.44772 7 4V20C7 20.5523 6.55228 21 6 21C5.44772 21 5 20.5523 5 20V4C5 3.44772 5.44772 3 6 3Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M18 15C18.5523 15 19 15.4477 19 16V20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20V16C17 15.4477 17.4477 15 18 15Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 9C12.5523 9 13 9.44772 13 10V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V10C11 9.44772 11.4477 9 12 9Z" fill="currentColor"/>
    </svg>
  );
});
BarChart03.displayName = "BarChart03";
