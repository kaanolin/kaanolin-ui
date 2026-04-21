// [collection] Figma variant — properties:
//   Size: lg
//   Color: Success
//   Type: Gradient
import { forwardRef, useId } from "react";
import type { FeaturedProps } from "../types";

export const FeaturedShapeLgSuccessGradient = forwardRef<SVGSVGElement, FeaturedProps>(function FeaturedShapeLgSuccessGradient(
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
      viewBox="0 0 48 48"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <mask id={`${uid}-mask0_7449_103125`} style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_7449_103125)`}/>
</mask>
<g mask={`url(#${uid}-mask0_7449_103125)`}>
<circle cx="24" cy="24" r="23.5" fill="#F0FDF4" stroke="#BBF7D0"/>
</g>
<rect x="8" y="8" width="32" height="32" rx="16" fill="#16A34A"/>
<g clipPath={`url(#${uid}-clip0_7449_103125)`}>
<path d="M20.25 24L22.75 26.5L27.75 21.5M32.3333 24C32.3333 28.6023 28.6024 32.3333 24 32.3333C19.3976 32.3333 15.6667 28.6023 15.6667 24C15.6667 19.3976 19.3976 15.6666 24 15.6666C28.6024 15.6666 32.3333 19.3976 32.3333 24Z" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<linearGradient id={`${uid}-paint0_linear_7449_103125`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="1" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_7449_103125`}>
<rect width="20" height="20" fill="white" transform="translate(14 14)"/>
</clipPath>
</defs>
    </svg>
  );
});
FeaturedShapeLgSuccessGradient.displayName = "FeaturedShapeLgSuccessGradient";
