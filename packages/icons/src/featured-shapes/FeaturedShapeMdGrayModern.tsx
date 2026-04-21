// [collection] Figma variant — properties:
//   Size: md
//   Color: Gray
//   Type: Modern
import { forwardRef, useId } from "react";
import type { FeaturedProps } from "../types";

export const FeaturedShapeMdGrayModern = forwardRef<SVGSVGElement, FeaturedProps>(function FeaturedShapeMdGrayModern(
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
      <g filter={`url(#${uid}-filter0_dii_4041_412674)`}>
<path d="M2 9C2 4.58172 5.58172 1 10 1H34C38.4183 1 42 4.58172 42 9V33C42 37.4183 38.4183 41 34 41H10C5.58172 41 2 37.4183 2 33V9Z" fill="white"/>
<path d="M10 1.5H34C38.1421 1.5 41.5 4.85786 41.5 9V33C41.5 37.1421 38.1421 40.5 34 40.5H10C5.85786 40.5 2.5 37.1421 2.5 33V9C2.5 4.85786 5.85786 1.5 10 1.5Z" stroke="#D4D4D4"/>
<g clipPath={`url(#${uid}-clip0_4041_412674)`}>
<path d="M18.25 21L20.75 23.5L25.75 18.5M30.3333 21C30.3333 25.6023 26.6024 29.3333 22 29.3333C17.3976 29.3333 13.6667 25.6023 13.6667 21C13.6667 16.3976 17.3976 12.6666 22 12.6666C26.6024 12.6666 30.3333 16.3976 30.3333 21Z" stroke="#404040" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</g>
<defs>
<filter id={`${uid}-filter0_dii_4041_412674`} x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4041_412674"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4041_412674" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_4041_412674"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_4041_412674"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_4041_412674" result="effect3_innerShadow_4041_412674"/>
</filter>
<clipPath id={`${uid}-clip0_4041_412674`}>
<rect width="20" height="20" fill="white" transform="translate(12 11)"/>
</clipPath>
</defs>
    </svg>
  );
});
FeaturedShapeMdGrayModern.displayName = "FeaturedShapeMdGrayModern";
