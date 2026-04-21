// [collection] Figma variant — properties:
//   Type: Filled
//   Size: sm
//   Color: Success
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const CheckFilledSmSuccess = forwardRef<SVGSVGElement, IconBaseProps>(function CheckFilledSmSuccess(
  { size = 32, color = "currentColor", title, "aria-label": ariaLabel, ...rest },
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
      <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#16A34A"/>
<path d="M7.5 12L10.5 15L16.5 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
CheckFilledSmSuccess.displayName = "CheckFilledSmSuccess";
