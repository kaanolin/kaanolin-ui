// [collection] Figma variant — properties:
//   Size: md
//   Color: Brand
//   Type: Light
import { forwardRef, useId } from "react";
import type { FeaturedProps } from "../types";

export const FeaturedShapeMdBrandLight = forwardRef<SVGSVGElement, FeaturedProps>(function FeaturedShapeMdBrandLight(
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
      <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#F4EBFF"/>
<g clipPath={`url(#${uid}-clip0_1102_5335)`}>
<path d="M16.25 20L18.75 22.5L23.75 17.5M28.3333 20C28.3333 24.6024 24.6024 28.3334 20 28.3334C15.3976 28.3334 11.6667 24.6024 11.6667 20C11.6667 15.3976 15.3976 11.6667 20 11.6667C24.6024 11.6667 28.3333 15.3976 28.3333 20Z" stroke="#7F56D9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id={`${uid}-clip0_1102_5335`}>
<rect width="20" height="20" fill="white" transform="translate(10 10)"/>
</clipPath>
</defs>
    </svg>
  );
});
FeaturedShapeMdBrandLight.displayName = "FeaturedShapeMdBrandLight";
