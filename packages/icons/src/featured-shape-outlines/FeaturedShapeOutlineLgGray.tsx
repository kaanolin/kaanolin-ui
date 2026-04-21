// [collection] Figma variant — properties:
//   Size: lg
//   Color: Gray
import { forwardRef } from "react";
import type { FeaturedProps } from "../types";

export const FeaturedShapeOutlineLgGray = forwardRef<SVGSVGElement, FeaturedProps>(function FeaturedShapeOutlineLgGray(
  { size = 48, color = "currentColor", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 42 42"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <g opacity="0.3">
<rect x="6" y="6" width="30" height="30" rx="15" stroke="#525252" strokeWidth="2"/>
</g>
<g opacity="0.1">
<rect x="1" y="1" width="40" height="40" rx="20" stroke="#525252" strokeWidth="2"/>
</g>
<path d="M16.5 21L19.5 24L25.5 18M31 21C31 26.5228 26.5228 31 21 31C15.4772 31 11 26.5228 11 21C11 15.4772 15.4772 11 21 11C26.5228 11 31 15.4772 31 21Z" stroke="#525252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
FeaturedShapeOutlineLgGray.displayName = "FeaturedShapeOutlineLgGray";
