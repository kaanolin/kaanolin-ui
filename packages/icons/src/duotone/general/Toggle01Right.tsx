// [duotone] generated from source/icons/Duotone icons/
import { forwardRef } from "react";
import type { DuotoneIconProps } from "../../types";

export const Toggle01Right = forwardRef<SVGSVGElement, DuotoneIconProps>(function Toggle01Right(
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
      <path opacity="0.12" fillRule="evenodd" clipRule="evenodd" d="M7 7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17H17C14.2386 17 12 14.7614 12 12C12 9.23858 14.2386 7 17 7H7Z" fill="currentColor"/>
<path d="M17 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H17M17 17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7M17 17C14.2386 17 12 14.7614 12 12C12 9.23858 14.2386 7 17 7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
Toggle01Right.displayName = "Toggle01Right";
