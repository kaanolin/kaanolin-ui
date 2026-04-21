// [collection] Figma variant — properties:
//   Type: Filled
//   Size: lg
//   Color: Success
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const CheckFilledLgSuccess = forwardRef<SVGSVGElement, IconBaseProps>(function CheckFilledLgSuccess(
  { size = 32, color = "currentColor", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
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
      <path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#16A34A"/>
<path d="M10 16L14 20L22 12" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
CheckFilledLgSuccess.displayName = "CheckFilledLgSuccess";
