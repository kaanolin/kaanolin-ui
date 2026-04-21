// [collection] Figma variant — properties:
//   Size: md
//   Color: Error
//   Type: Dark
import { forwardRef, useId } from "react";
import type { FeaturedProps } from "../types";

export const FeaturedShapeMdErrorDark = forwardRef<SVGSVGElement, FeaturedProps>(function FeaturedShapeMdErrorDark(
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
      viewBox="0 0 44 44"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <g filter={`url(#${uid}-filter0_dii_5270_371482)`}>
<path d="M2 9C2 4.58172 5.58172 1 10 1H34C38.4183 1 42 4.58172 42 9V33C42 37.4183 38.4183 41 34 41H10C5.58172 41 2 37.4183 2 33V9Z" fill="#DC2626"/>
<path d="M10 2H34C37.866 2 41 5.13401 41 9V33C41 36.866 37.866 40 34 40H10C6.13401 40 3 36.866 3 33V9C3 5.13401 6.13401 2 10 2Z" stroke={`url(#${uid}-paint0_linear_5270_371482)`} strokeWidth="2"/>
<g clipPath={`url(#${uid}-clip0_5270_371482)`}>
<path d="M18.25 21L20.75 23.5L25.75 18.5M30.3333 21C30.3333 25.6023 26.6024 29.3333 22 29.3333C17.3976 29.3333 13.6667 25.6023 13.6667 21C13.6667 16.3976 17.3976 12.6666 22 12.6666C26.6024 12.6666 30.3333 16.3976 30.3333 21Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</g>
<defs>
<filter id={`${uid}-filter0_dii_5270_371482`} x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5270_371482"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5270_371482" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_5270_371482"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_5270_371482"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_5270_371482" result="effect3_innerShadow_5270_371482"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_5270_371482`} x1="22" y1="1" x2="22" y2="41" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_5270_371482`}>
<rect width="20" height="20" fill="white" transform="translate(12 11)"/>
</clipPath>
</defs>
    </svg>
  );
});
FeaturedShapeMdErrorDark.displayName = "FeaturedShapeMdErrorDark";
