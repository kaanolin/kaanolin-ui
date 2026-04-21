// [duotone] generated from source/icons/Duotone icons/
import { forwardRef } from "react";
import type { DuotoneIconProps } from "../../types";

export const BluetoothConnect = forwardRef<SVGSVGElement, DuotoneIconProps>(function BluetoothConnect(
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
      <path opacity="0.12" d="M15 17L9 22V12V2L15 7L9 12L15 17Z" fill="currentColor"/>
<path d="M3 7L15 17L9 22V2L15 7L3 17M18 12H18.01M15 12H15.01M21 12H21.01" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
BluetoothConnect.displayName = "BluetoothConnect";
