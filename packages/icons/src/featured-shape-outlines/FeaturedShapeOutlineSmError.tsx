// [collection] Figma variant — properties:
//   Size: sm
//   Color: Error
import { forwardRef, useId } from "react";
import type { FeaturedProps } from "../types";

export const FeaturedShapeOutlineSmError = forwardRef<SVGSVGElement, FeaturedProps>(function FeaturedShapeOutlineSmError(
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
      viewBox="0 0 34 34"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <g opacity="0.3">
<rect x="6" y="6" width="22" height="22" rx="11" stroke="#DC2626" strokeWidth="2"/>
</g>
<g opacity="0.1">
<rect x="1" y="1" width="32" height="32" rx="16" stroke="#DC2626" strokeWidth="2"/>
</g>
<g clipPath={`url(#${uid}-clip0_4843_411120)`}>
<path d="M14 17L16 19L20 15M23.6667 17C23.6667 20.6819 20.6819 23.6666 17 23.6666C13.3181 23.6666 10.3333 20.6819 10.3333 17C10.3333 13.3181 13.3181 10.3333 17 10.3333C20.6819 10.3333 23.6667 13.3181 23.6667 17Z" stroke="#DC2626" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id={`${uid}-clip0_4843_411120`}>
<rect width="16" height="16" fill="white" transform="translate(9 9)"/>
</clipPath>
</defs>
    </svg>
  );
});
FeaturedShapeOutlineSmError.displayName = "FeaturedShapeOutlineSmError";
