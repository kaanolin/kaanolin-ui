// [collection] Figma variant — properties:
//   Integration: Next.js
//   Grayscale: False
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../types";

export const IntegrationNextJsFalse = forwardRef<SVGSVGElement, IconBaseProps>(function IntegrationNextJsFalse(
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
      viewBox="0 0 20 20"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <g clipPath={`url(#${uid}-clip0_12464_573741)`}>
<path d="M19.2813 20.8035L6.42272 4.2403H4V15.7555H5.93818V6.70167L17.7598 21.9755C18.2933 21.6185 18.8014 21.2267 19.2813 20.8035Z" fill={`url(#${uid}-paint0_linear_12464_573741)`}/>
<path d="M15.6798 4.24017H13.7598V15.7602H15.6798V4.24017Z" fill={`url(#${uid}-paint1_linear_12464_573741)`}/>
</g>
<defs>
<linearGradient id={`${uid}-paint0_linear_12464_573741`} x1="12.8" y1="14.2403" x2="18.48" y2="21.2803" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="1" stopOpacity="0"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_12464_573741`} x1="14.7198" y1="4.24017" x2="14.6876" y2="12.7002" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="1" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_12464_573741`}>
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
});
IntegrationNextJsFalse.displayName = "IntegrationNextJsFalse";
