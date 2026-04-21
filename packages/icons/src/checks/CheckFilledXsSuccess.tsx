// [collection] Figma variant — properties:
//   Type: Filled
//   Size: xs
//   Color: Success
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const CheckFilledXsSuccess = forwardRef<SVGSVGElement, IconBaseProps>(function CheckFilledXsSuccess(
  { size = 32, color = "currentColor", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
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
      <path d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" fill="#16A34A"/>
<path d="M6.25 10L8.75 12.5L13.75 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
CheckFilledXsSuccess.displayName = "CheckFilledXsSuccess";
