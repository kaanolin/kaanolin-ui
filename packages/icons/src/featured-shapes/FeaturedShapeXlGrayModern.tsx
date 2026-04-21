// [collection] Figma variant — properties:
//   Size: xl
//   Color: Gray
//   Type: Modern
import { forwardRef, useId } from "react";
import type { FeaturedProps } from "../types";

export const FeaturedShapeXlGrayModern = forwardRef<SVGSVGElement, FeaturedProps>(function FeaturedShapeXlGrayModern(
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
      viewBox="0 0 60 60"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <g filter={`url(#${uid}-filter0_dii_4041_412670)`}>
<path d="M2 13C2 6.37258 7.37258 1 14 1H46C52.6274 1 58 6.37258 58 13V45C58 51.6274 52.6274 57 46 57H14C7.37258 57 2 51.6274 2 45V13Z" fill="white"/>
<path d="M14 1.5H46C52.3513 1.5 57.5 6.64873 57.5 13V45C57.5 51.3513 52.3513 56.5 46 56.5H14C7.64873 56.5 2.5 51.3513 2.5 45V13C2.5 6.64873 7.64873 1.5 14 1.5Z" stroke="#D4D4D4"/>
<path d="M24.75 29L28.25 32.5L35.25 25.5M41.6667 29C41.6667 35.4434 36.4433 40.6667 30 40.6667C23.5567 40.6667 18.3333 35.4434 18.3333 29C18.3333 22.5567 23.5567 17.3334 30 17.3334C36.4433 17.3334 41.6667 22.5567 41.6667 29Z" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<filter id={`${uid}-filter0_dii_4041_412670`} x="0" y="0" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4041_412670"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4041_412670" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_4041_412670"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_4041_412670"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_4041_412670" result="effect3_innerShadow_4041_412670"/>
</filter>
</defs>
    </svg>
  );
});
FeaturedShapeXlGrayModern.displayName = "FeaturedShapeXlGrayModern";
