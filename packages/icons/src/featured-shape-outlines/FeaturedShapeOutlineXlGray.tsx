// [collection] Figma variant — properties:
//   Size: xl
//   Color: Gray
import { forwardRef } from "react";
import type { FeaturedProps } from "../types";

export const FeaturedShapeOutlineXlGray = forwardRef<SVGSVGElement, FeaturedProps>(function FeaturedShapeOutlineXlGray(
  { size = 48, color = "currentColor", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 46 46"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <g opacity="0.3">
<rect x="6" y="6" width="34" height="34" rx="17" stroke="#525252" strokeWidth="2"/>
</g>
<g opacity="0.1">
<rect x="1" y="1" width="44" height="44" rx="22" stroke="#525252" strokeWidth="2"/>
</g>
<path d="M17.75 23L21.25 26.5L28.25 19.5M34.6666 23C34.6666 29.4433 29.4433 34.6666 23 34.6666C16.5567 34.6666 11.3333 29.4433 11.3333 23C11.3333 16.5567 16.5567 11.3333 23 11.3333C29.4433 11.3333 34.6666 16.5567 34.6666 23Z" stroke="#525252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
FeaturedShapeOutlineXlGray.displayName = "FeaturedShapeOutlineXlGray";
