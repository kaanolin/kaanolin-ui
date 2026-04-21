// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const BluetoothSignal = forwardRef<SVGSVGElement, DuocolorIconProps>(function BluetoothSignal(
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
      <path opacity="0.4" d="M20.1445 6.5C21.2581 8.04804 21.914 9.94743 21.914 12C21.914 14.0526 21.2581 15.952 20.1445 17.5M17 8.85724C17.6214 9.74811 17.9858 10.8315 17.9858 12.0001C17.9858 13.1686 17.6214 14.2521 17 15.143" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 7L14 17L8 22V2L14 7L2 17" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
BluetoothSignal.displayName = "BluetoothSignal";
