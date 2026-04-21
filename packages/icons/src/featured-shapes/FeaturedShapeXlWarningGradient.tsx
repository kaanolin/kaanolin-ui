// [collection] Figma variant — properties:
//   Size: xl
//   Color: Warning
//   Type: Gradient
import { forwardRef, useId } from "react";
import type { FeaturedProps } from "../types";

export const FeaturedShapeXlWarningGradient = forwardRef<SVGSVGElement, FeaturedProps>(function FeaturedShapeXlWarningGradient(
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
      viewBox="0 0 56 56"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <mask id={`${uid}-mask0_7449_103063`} style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="56" height="56">
<rect width="56" height="56" fill={`url(#${uid}-paint0_linear_7449_103063)`}/>
</mask>
<g mask={`url(#${uid}-mask0_7449_103063)`}>
<circle cx="28" cy="28" r="27.5" fill="#FEFCE8" stroke="#FEF08A"/>
</g>
<rect x="10" y="10" width="36" height="36" rx="18" fill="#CA8A04"/>
<g clipPath={`url(#${uid}-clip0_7449_103063)`}>
<path d="M24.25 28L26.75 30.5L31.75 25.5M36.3333 28C36.3333 32.6023 32.6024 36.3333 28 36.3333C23.3976 36.3333 19.6667 32.6023 19.6667 28C19.6667 23.3976 23.3976 19.6666 28 19.6666C32.6024 19.6666 36.3333 23.3976 36.3333 28Z" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<linearGradient id={`${uid}-paint0_linear_7449_103063`} x1="28" y1="0" x2="28" y2="56" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="1" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_7449_103063`}>
<rect width="20" height="20" fill="white" transform="translate(18 18)"/>
</clipPath>
</defs>
    </svg>
  );
});
FeaturedShapeXlWarningGradient.displayName = "FeaturedShapeXlWarningGradient";
