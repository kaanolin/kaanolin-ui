// [duotone] generated from source/icons/Duotone icons/
import { forwardRef } from "react";
import type { DuotoneIconProps } from "../../types";

export const SunSetting01 = forwardRef<SVGSVGElement, DuotoneIconProps>(function SunSetting01(
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
      <path opacity="0.12" d="M12 9C8.68629 9 6 11.6863 6 15H18C18 11.6863 15.3137 9 12 9Z" fill="currentColor"/>
<path d="M12 3V5M5.31412 7.31412L3.8999 5.8999M18.6858 7.31412L20.1 5.8999M6 15C6 11.6863 8.68629 9 12 9C15.3137 9 18 11.6863 18 15M22 15H2M19 19H5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
SunSetting01.displayName = "SunSetting01";
