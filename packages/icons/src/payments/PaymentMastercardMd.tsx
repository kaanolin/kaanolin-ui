// [collection] Figma variant — properties:
//   Size: md
//   Payment method: Mastercard
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const PaymentMastercardMd = forwardRef<SVGSVGElement, IconBaseProps>(function PaymentMastercardMd(
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
<path d="M28.7695 6.7066C33.7626 6.70666 37.8105 10.7065 37.8105 15.6402C37.8104 20.5738 33.7626 24.5728 28.7695 24.5728C26.5311 24.5728 24.4842 23.7675 22.9053 22.4361C21.3264 23.7676 19.2795 24.5728 17.041 24.5728C12.0479 24.5728 8.00014 20.5738 8 15.6402C8 10.7065 12.0479 6.7066 17.041 6.7066C19.2794 6.70663 21.3264 7.51196 22.9053 8.84332C24.4842 7.512 26.5312 6.7066 28.7695 6.7066Z" fill="#ED0006"/>
<path fillRule="evenodd" clipRule="evenodd" d="M22.9062 22.4392C24.8502 20.8007 26.0828 18.3625 26.0828 15.6399C26.0828 12.9173 24.8502 10.4792 22.9062 8.84066C24.485 7.50993 26.5329 6.7066 28.7706 6.7066C33.7638 6.7066 37.8115 10.7062 37.8115 15.6399C37.8115 20.5737 33.7638 24.5733 28.7706 24.5733C26.5329 24.5733 24.485 23.7699 22.9062 22.4392Z" fill="#F9A000"/>
<path fillRule="evenodd" clipRule="evenodd" d="M22.9053 8.84363C24.8483 10.4821 26.0819 12.9178 26.082 15.6395C26.082 18.3613 24.8481 20.7969 22.9053 22.4354C20.9624 20.7969 19.7285 18.3613 19.7285 15.6395C19.7286 12.9177 20.9622 10.4821 22.9053 8.84363Z" fill="#FF5E00"/>
    </svg>
  );
});
PaymentMastercardMd.displayName = "PaymentMastercardMd";
