// [collection] Figma variant — properties:
//   Size: md
//   Color: Success
//   Type: Gradient
import { forwardRef, useId } from "react";
import type { FeaturedProps } from "../types";

export const FeaturedShapeMdSuccessGradient = forwardRef<SVGSVGElement, FeaturedProps>(function FeaturedShapeMdSuccessGradient(
  { size = 48, color = "currentColor", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <mask id={`${uid}-mask0_7449_103131`} style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
<rect width="40" height="40" fill={`url(#${uid}-paint0_linear_7449_103131)`}/>
</mask>
<g mask={`url(#${uid}-mask0_7449_103131)`}>
<circle cx="20" cy="20" r="19.5" fill="#F0FDF4" stroke="#BBF7D0"/>
</g>
<rect x="6" y="6" width="28" height="28" rx="14" fill="#16A34A"/>
<g clipPath={`url(#${uid}-clip0_7449_103131)`}>
<path d="M17 20L19 22L23 18M26.6667 20C26.6667 23.6819 23.6819 26.6667 20 26.6667C16.3181 26.6667 13.3333 23.6819 13.3333 20C13.3333 16.3181 16.3181 13.3334 20 13.3334C23.6819 13.3334 26.6667 16.3181 26.6667 20Z" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<linearGradient id={`${uid}-paint0_linear_7449_103131`} x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="1" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_7449_103131`}>
<rect width="16" height="16" fill="white" transform="translate(12 12)"/>
</clipPath>
</defs>
    </svg>
  );
});
FeaturedShapeMdSuccessGradient.displayName = "FeaturedShapeMdSuccessGradient";
