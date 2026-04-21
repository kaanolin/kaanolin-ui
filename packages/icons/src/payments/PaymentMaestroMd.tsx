// [collection] Figma variant — properties:
//   Size: md
//   Payment method: Maestro
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const PaymentMaestroMd = forwardRef<SVGSVGElement, IconBaseProps>(function PaymentMaestroMd(
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
<path d="M25.6768 15.6077C25.6768 20.5457 21.7197 24.5487 16.8384 24.5487C11.9571 24.5487 8 20.5457 8 15.6077C8 10.6697 11.9571 6.66669 16.8384 6.66669C21.7197 6.66669 25.6768 10.6697 25.6768 15.6077Z" fill="#ED0006"/>
<path d="M37.1436 15.6077C37.1436 20.5457 33.1865 24.5487 28.3052 24.5487C23.4239 24.5487 19.4668 20.5457 19.4668 15.6077C19.4668 10.6697 23.4239 6.66669 28.3052 6.66669C33.1865 6.66669 37.1436 10.6697 37.1436 15.6077Z" fill="#0099DF"/>
<path fillRule="evenodd" clipRule="evenodd" d="M22.5703 8.80554C24.4698 10.4454 25.6757 12.8832 25.6758 15.6073C25.6758 18.3314 24.4697 20.7691 22.5703 22.4091C20.671 20.7691 19.4648 18.3314 19.4648 15.6073C19.465 12.8832 20.6709 10.4454 22.5703 8.80554Z" fill="#6C6BBD"/>
    </svg>
  );
});
PaymentMaestroMd.displayName = "PaymentMaestroMd";
