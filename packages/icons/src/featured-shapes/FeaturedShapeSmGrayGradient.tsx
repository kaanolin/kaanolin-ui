// [collection] Figma variant — properties:
//   Size: sm
//   Color: Gray
//   Type: Gradient
import { forwardRef, useId } from "react";
import type { FeaturedProps } from "../types";

export const FeaturedShapeSmGrayGradient = forwardRef<SVGSVGElement, FeaturedProps>(function FeaturedShapeSmGrayGradient(
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
      viewBox="0 0 32 32"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <mask id={`${uid}-mask0_7449_102753`} style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
<rect width="32" height="32" fill={`url(#${uid}-paint0_linear_7449_102753)`}/>
</mask>
<g mask={`url(#${uid}-mask0_7449_102753)`}>
<circle cx="16" cy="16" r="15.5" fill="#FAFAFA" stroke="#E5E5E5"/>
</g>
<rect x="4" y="4" width="24" height="24" rx="12" fill="#525252"/>
<g clipPath={`url(#${uid}-clip0_7449_102753)`}>
<path d="M13 16L15 18L19 14M22.6667 16C22.6667 19.6819 19.6819 22.6667 16 22.6667C12.3181 22.6667 9.33334 19.6819 9.33334 16C9.33334 12.3181 12.3181 9.33337 16 9.33337C19.6819 9.33337 22.6667 12.3181 22.6667 16Z" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<linearGradient id={`${uid}-paint0_linear_7449_102753`} x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="1" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_7449_102753`}>
<rect width="16" height="16" fill="white" transform="translate(8 8)"/>
</clipPath>
</defs>
    </svg>
  );
});
FeaturedShapeSmGrayGradient.displayName = "FeaturedShapeSmGrayGradient";
