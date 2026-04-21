// [line] generated from source/icons/Line icons/
import { forwardRef } from "react";
import type { LineIconProps } from "../../types";

export const ArrowCircleBrokenDownLeft = forwardRef<SVGSVGElement, LineIconProps>(function ArrowCircleBrokenDownLeft(
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
      <path d="M9.00023 9.00007V15.0001M9.00023 15.0001H15.0002M9.00023 15.0001L19 5.00001M21.6606 9.41051C22.5515 12.7467 21.6884 16.4538 19.0711 19.0711C15.1658 22.9764 8.83418 22.9764 4.92893 19.0711C1.02369 15.1659 1.02369 8.83424 4.92893 4.92899C7.54623 2.3117 11.2534 1.44852 14.5896 2.33944" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
ArrowCircleBrokenDownLeft.displayName = "ArrowCircleBrokenDownLeft";
