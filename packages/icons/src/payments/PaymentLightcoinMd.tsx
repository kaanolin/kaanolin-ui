// [collection] Figma variant — properties:
//   Size: md
//   Payment method: Lightcoin
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const PaymentLightcoinMd = forwardRef<SVGSVGElement, IconBaseProps>(function PaymentLightcoinMd(
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
<path fillRule="evenodd" clipRule="evenodd" d="M33.3333 16C33.3333 21.891 28.5577 26.6666 22.6667 26.6666C16.7756 26.6666 12 21.891 12 16C12 10.1089 16.7756 5.33331 22.6667 5.33331C28.5577 5.33331 33.3333 10.1089 33.3333 16ZM19.7712 16.792L21.2749 11.1517H24.5338L23.4058 15.5387L24.91 14.9121L24.5338 16.2906L23.0296 16.792L22.2777 19.5495H27.6676L27.1661 21.5546H18.5173L19.395 18.1705L18.1417 18.6719L18.5173 17.2934L19.7712 16.792Z" fill="#A5A8A9"/>
    </svg>
  );
});
PaymentLightcoinMd.displayName = "PaymentLightcoinMd";
