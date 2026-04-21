// [collection] Figma variant — properties:
//   Size: md
//   Payment method: Etherium
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const PaymentEtheriumMd = forwardRef<SVGSVGElement, IconBaseProps>(function PaymentEtheriumMd(
  { size = 32, color = "currentColor", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 46 32"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M4 0.5H42C43.933 0.5 45.5 2.067 45.5 4V28C45.5 29.933 43.933 31.5 42 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4C0.5 2.067 2.067 0.5 4 0.5Z" fill="white"/>
<path d="M4 0.5H42C43.933 0.5 45.5 2.067 45.5 4V28C45.5 29.933 43.933 31.5 42 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4C0.5 2.067 2.067 0.5 4 0.5Z" stroke="#E5E5E5"/>
<ellipse cx="22.58" cy="15.9133" rx="10.58" ry="10.58" fill="#6481E7"/>
<path fillRule="evenodd" clipRule="evenodd" d="M17.957 16.3438L22.7028 19.1493V8.46906L17.957 16.3438Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M22.7031 8.46906V19.1493L27.4489 16.3438L22.7031 8.46906Z" fill="#C1CCF5"/>
<path fillRule="evenodd" clipRule="evenodd" d="M22.7031 14.1868L17.957 16.3437L22.7028 19.1492L27.449 16.344L22.7031 14.1868Z" fill="#8299EC"/>
<path fillRule="evenodd" clipRule="evenodd" d="M22.7031 14.1868L17.957 16.3437L22.7028 19.1492L22.7031 14.1868Z" fill="#C1CCF5"/>
<path fillRule="evenodd" clipRule="evenodd" d="M17.957 17.2439L22.7028 23.9318V20.0479L17.957 17.2439Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M22.7031 20.0479V23.9322L27.4521 17.2439L22.7031 20.0479Z" fill="#C1CCF5"/>
    </svg>
  );
});
PaymentEtheriumMd.displayName = "PaymentEtheriumMd";
