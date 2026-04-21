// [duotone] generated from source/icons/Duotone icons/
import { forwardRef } from "react";
import type { DuotoneIconProps } from "../../types";

export const Webcam02 = forwardRef<SVGSVGElement, DuotoneIconProps>(function Webcam02(
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
      <path opacity="0.12" d="M12 13.6875C13.7604 13.6875 15.1875 12.2604 15.1875 10.5C15.1875 8.73959 13.7604 7.3125 12 7.3125C10.2396 7.3125 8.8125 8.73959 8.8125 10.5C8.8125 12.2604 10.2396 13.6875 12 13.6875Z" fill="currentColor"/>
<path d="M8 22H16M20.5 10.5C20.5 15.1944 16.6944 19 12 19C7.30558 19 3.5 15.1944 3.5 10.5C3.5 5.80558 7.30558 2 12 2C16.6944 2 20.5 5.80558 20.5 10.5ZM15.1875 10.5C15.1875 12.2604 13.7604 13.6875 12 13.6875C10.2396 13.6875 8.8125 12.2604 8.8125 10.5C8.8125 8.73959 10.2396 7.3125 12 7.3125C13.7604 7.3125 15.1875 8.73959 15.1875 10.5Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
Webcam02.displayName = "Webcam02";
