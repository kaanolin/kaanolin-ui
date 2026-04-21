// [duotone] generated from source/icons/Duotone icons/
import { forwardRef } from "react";
import type { DuotoneIconProps } from "../../types";

export const ArrowCircleBrokenUpLeft = forwardRef<SVGSVGElement, DuotoneIconProps>(function ArrowCircleBrokenUpLeft(
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
      <path opacity="0.12" d="M4.92893 4.92893C1.02369 8.83418 1.02369 15.1658 4.92893 19.0711C7.54622 21.6884 11.2534 22.5515 14.5896 21.6606L21.6606 14.5896C22.5515 11.2534 21.6884 7.54623 19.0711 4.92893C15.1658 1.02369 8.83418 1.02369 4.92893 4.92893Z" fill="currentColor"/>
<path d="M14.5896 21.6606C11.2534 22.5515 7.54623 21.6884 4.92893 19.0711C1.02369 15.1658 1.02369 8.83418 4.92893 4.92893C8.83418 1.02369 15.1658 1.02369 19.0711 4.92893C21.6884 7.54623 22.5515 11.2534 21.6606 14.5896M9.00023 15.0001V9.0001M9.00023 9.0001H15.0002M9.00023 9.0001L19 19" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
ArrowCircleBrokenUpLeft.displayName = "ArrowCircleBrokenUpLeft";
