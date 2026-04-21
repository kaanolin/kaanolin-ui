// [collection] Figma variant — properties:
//   Type: Filled
//   Size: md
//   Color: Gray
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const CheckFilledMdGray = forwardRef<SVGSVGElement, IconBaseProps>(function CheckFilledMdGray(
  { size = 32, color = "currentColor", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z" fill="#525252"/>
<path d="M8.75 14L12.25 17.5L19.25 10.5" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
CheckFilledMdGray.displayName = "CheckFilledMdGray";
