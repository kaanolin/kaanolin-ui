// [solid] generated from source/icons/Solid icons/
import { forwardRef } from "react";
import type { SolidIconProps } from "../../types";

export const Webcam02 = forwardRef<SVGSVGElement, SolidIconProps>(function Webcam02(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12 1C6.75329 1 2.5 5.25329 2.5 10.5C2.5 15.7467 6.75329 20 12 20C17.2467 20 21.5 15.7467 21.5 10.5C21.5 5.25329 17.2467 1 12 1ZM15.1875 10.5C15.1875 12.2604 13.7604 13.6875 12 13.6875C10.2396 13.6875 8.8125 12.2604 8.8125 10.5C8.8125 8.73959 10.2396 7.3125 12 7.3125C13.7604 7.3125 15.1875 8.73959 15.1875 10.5Z" fill="currentColor"/>
<path d="M8 21C7.44772 21 7 21.4477 7 22C7 22.5523 7.44772 23 8 23H16C16.5523 23 17 22.5523 17 22C17 21.4477 16.5523 21 16 21H8Z" fill="currentColor"/>
    </svg>
  );
});
Webcam02.displayName = "Webcam02";
