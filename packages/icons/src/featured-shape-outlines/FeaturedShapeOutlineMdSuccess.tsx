// [collection] Figma variant — properties:
//   Size: md
//   Color: Success
import { forwardRef, useId } from "react";
import type { FeaturedProps } from "../types";

export const FeaturedShapeOutlineMdSuccess = forwardRef<SVGSVGElement, FeaturedProps>(function FeaturedShapeOutlineMdSuccess(
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
      viewBox="0 0 38 38"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <g opacity="0.3">
<rect x="6" y="6" width="26" height="26" rx="13" stroke="#16A34A" strokeWidth="2"/>
</g>
<g opacity="0.1">
<rect x="1" y="1" width="36" height="36" rx="18" stroke="#16A34A" strokeWidth="2"/>
</g>
<g clipPath={`url(#${uid}-clip0_4843_411094)`}>
<path d="M15.25 19L17.75 21.5L22.75 16.5M27.3334 19C27.3334 23.6024 23.6024 27.3334 19 27.3334C14.3976 27.3334 10.6667 23.6024 10.6667 19C10.6667 14.3976 14.3976 10.6667 19 10.6667C23.6024 10.6667 27.3334 14.3976 27.3334 19Z" stroke="#16A34A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id={`${uid}-clip0_4843_411094`}>
<rect width="20" height="20" fill="white" transform="translate(9 9)"/>
</clipPath>
</defs>
    </svg>
  );
});
FeaturedShapeOutlineMdSuccess.displayName = "FeaturedShapeOutlineMdSuccess";
