// [collection] Figma variant — properties:
//   Type: Line
//   Size: xs
//   Color: Gray
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../types";

export const CheckLineXsGray = forwardRef<SVGSVGElement, IconBaseProps>(function CheckLineXsGray(
  { size = 32, color = "currentColor", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <g clipPath={`url(#${uid}-clip0_3488_546963)`}>
<g clipPath={`url(#${uid}-clip1_3488_546963)`}>
<path d="M6.25008 10L8.75008 12.5L13.7501 7.50002M18.3334 10C18.3334 14.6024 14.6025 18.3334 10.0001 18.3334C5.39771 18.3334 1.66675 14.6024 1.66675 10C1.66675 5.39765 5.39771 1.66669 10.0001 1.66669C14.6025 1.66669 18.3334 5.39765 18.3334 10Z" stroke="#A3A3A3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</g>
<defs>
<clipPath id={`${uid}-clip0_3488_546963`}>
<path d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" fill="white"/>
</clipPath>
<clipPath id={`${uid}-clip1_3488_546963`}>
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
});
CheckLineXsGray.displayName = "CheckLineXsGray";
