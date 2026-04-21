// [collection] Figma variant — properties:
//   Type: Line
//   Size: md
//   Color: Success
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../types";

export const CheckLineMdSuccess = forwardRef<SVGSVGElement, IconBaseProps>(function CheckLineMdSuccess(
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
      viewBox="0 0 28 28"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <g clipPath={`url(#${uid}-clip0_3488_546971)`}>
<path d="M8.74992 14L12.2499 17.5L19.2499 10.5M25.6666 14C25.6666 20.4433 20.4432 25.6666 13.9999 25.6666C7.5566 25.6666 2.33325 20.4433 2.33325 14C2.33325 7.55666 7.5566 2.33331 13.9999 2.33331C20.4432 2.33331 25.6666 7.55666 25.6666 14Z" stroke="#16A34A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id={`${uid}-clip0_3488_546971`}>
<path d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
});
CheckLineMdSuccess.displayName = "CheckLineMdSuccess";
