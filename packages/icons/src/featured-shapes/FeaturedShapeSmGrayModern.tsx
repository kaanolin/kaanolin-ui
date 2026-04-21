// [collection] Figma variant — properties:
//   Size: sm
//   Color: Gray
//   Type: Modern
import { forwardRef, useId } from "react";
import type { FeaturedProps } from "../types";

export const FeaturedShapeSmGrayModern = forwardRef<SVGSVGElement, FeaturedProps>(function FeaturedShapeSmGrayModern(
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
      viewBox="0 0 36 36"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <g filter={`url(#${uid}-filter0_dii_4041_412676)`}>
<path d="M2 7C2 3.68629 4.68629 1 8 1H28C31.3137 1 34 3.68629 34 7V27C34 30.3137 31.3137 33 28 33H8C4.68629 33 2 30.3137 2 27V7Z" fill="white"/>
<path d="M8 1.5H28C31.0376 1.5 33.5 3.96243 33.5 7V27C33.5 30.0376 31.0376 32.5 28 32.5H8C4.96243 32.5 2.5 30.0376 2.5 27V7C2.5 3.96243 4.96243 1.5 8 1.5Z" stroke="#D4D4D4"/>
<g clipPath={`url(#${uid}-clip0_4041_412676)`}>
<path d="M15 17L17 19L21 15M24.6667 17C24.6667 20.6819 21.6819 23.6667 18 23.6667C14.3181 23.6667 11.3333 20.6819 11.3333 17C11.3333 13.3181 14.3181 10.3334 18 10.3334C21.6819 10.3334 24.6667 13.3181 24.6667 17Z" stroke="#404040" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</g>
<defs>
<filter id={`${uid}-filter0_dii_4041_412676`} x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4041_412676"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4041_412676" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_4041_412676"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_4041_412676"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_4041_412676" result="effect3_innerShadow_4041_412676"/>
</filter>
<clipPath id={`${uid}-clip0_4041_412676`}>
<rect width="16" height="16" fill="white" transform="translate(10 9)"/>
</clipPath>
</defs>
    </svg>
  );
});
FeaturedShapeSmGrayModern.displayName = "FeaturedShapeSmGrayModern";
