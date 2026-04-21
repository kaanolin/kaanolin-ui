// [collection] Figma variant — properties:
//   Size: sm
//   Color: Error
//   Type: Light
import { forwardRef, useId } from "react";
import type { FeaturedProps } from "../types";

export const FeaturedShapeSmErrorLight = forwardRef<SVGSVGElement, FeaturedProps>(function FeaturedShapeSmErrorLight(
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
      <path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#FEE2E2"/>
<g clipPath={`url(#${uid}-clip0_1102_5371)`}>
<path d="M13 16L15 18L19 14M22.6667 16C22.6667 19.6819 19.6819 22.6666 16 22.6666C12.3181 22.6666 9.33334 19.6819 9.33334 16C9.33334 12.3181 12.3181 9.33331 16 9.33331C19.6819 9.33331 22.6667 12.3181 22.6667 16Z" stroke="#DC2626" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id={`${uid}-clip0_1102_5371`}>
<rect width="16" height="16" fill="white" transform="translate(8 8)"/>
</clipPath>
</defs>
    </svg>
  );
});
FeaturedShapeSmErrorLight.displayName = "FeaturedShapeSmErrorLight";
