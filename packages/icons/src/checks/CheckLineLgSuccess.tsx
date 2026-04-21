// [collection] Figma variant — properties:
//   Type: Line
//   Size: lg
//   Color: Success
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../types";

export const CheckLineLgSuccess = forwardRef<SVGSVGElement, IconBaseProps>(function CheckLineLgSuccess(
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
      viewBox="0 0 32 32"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <g clipPath={`url(#${uid}-clip0_3488_546977)`}>
<path d="M10.0001 16L14.0001 20L22.0001 12M29.3334 16C29.3334 23.3638 23.3639 29.3334 16.0001 29.3334C8.63628 29.3334 2.66675 23.3638 2.66675 16C2.66675 8.63622 8.63628 2.66669 16.0001 2.66669C23.3639 2.66669 29.3334 8.63622 29.3334 16Z" stroke="#16A34A" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id={`${uid}-clip0_3488_546977`}>
<path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
});
CheckLineLgSuccess.displayName = "CheckLineLgSuccess";
