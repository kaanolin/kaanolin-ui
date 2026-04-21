// [solid] generated from source/icons/Solid icons/
import { forwardRef } from "react";
import type { SolidIconProps } from "../../types";

export const Pilcrow02 = forwardRef<SVGSVGElement, SolidIconProps>(function Pilcrow02(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9 3C6.23858 3 4 5.23858 4 8C4 10.7614 6.23858 13 9 13H13V19H12C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21H19.5C20.0523 21 20.5 20.5523 20.5 20C20.5 19.4477 20.0523 19 19.5 19H18.5V5H19.5C20.0523 5 20.5 4.55228 20.5 4C20.5 3.44772 20.0523 3 19.5 3H9ZM9 5H13V11H9C7.34315 11 6 9.65685 6 8C6 6.34315 7.34315 5 9 5Z" fill="currentColor"/>
    </svg>
  );
});
Pilcrow02.displayName = "Pilcrow02";
