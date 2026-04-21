// [collection] Figma variant — properties:
//   Size: sm
//   Color: Gray
//   Type: Modern neue
import { forwardRef, useId } from "react";
import type { FeaturedProps } from "../types";

export const FeaturedShapeSmGrayModernNeue = forwardRef<SVGSVGElement, FeaturedProps>(function FeaturedShapeSmGrayModernNeue(
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
      viewBox="0 0 36 42"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M9 0.5H25C29.1421 0.5 32.5 3.85786 32.5 8V24C32.5 28.1421 29.1421 31.5 25 31.5H9C4.85786 31.5 1.5 28.1421 1.5 24V8C1.5 3.85786 4.85786 0.5 9 0.5Z" fill="white"/>
<path d="M9 0.5H25C29.1421 0.5 32.5 3.85786 32.5 8V24C32.5 28.1421 29.1421 31.5 25 31.5H9C4.85786 31.5 1.5 28.1421 1.5 24V8C1.5 3.85786 4.85786 0.5 9 0.5Z" stroke="#D4D4D4"/>
<g filter={`url(#${uid}-filter0_dddi_8714_124950)`}>
<path d="M5 8C5 5.79086 6.79086 4 9 4H25C27.2091 4 29 5.79086 29 8V24C29 26.2091 27.2091 28 25 28H9C6.79086 28 5 26.2091 5 24V8Z" fill="white"/>
<path d="M25 3.5C27.4853 3.5 29.5 5.51472 29.5 8V24C29.5 26.4853 27.4853 28.5 25 28.5H9C6.51472 28.5 4.5 26.4853 4.5 24V8C4.5 5.51472 6.51472 3.5 9 3.5H25Z" stroke="black" strokeOpacity="0.1"/>
<g clipPath={`url(#${uid}-clip0_8714_124950)`}>
<path d="M14 15.9999L16 17.9999L20 13.9999M23.6667 15.9999C23.6667 19.6818 20.6819 22.6666 17 22.6666C13.3181 22.6666 10.3333 19.6818 10.3333 15.9999C10.3333 12.318 13.3181 9.33325 17 9.33325C20.6819 9.33325 23.6667 12.318 23.6667 15.9999Z" stroke="#404040" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</g>
<defs>
<filter id={`${uid}-filter0_dddi_8714_124950`} x="0" y="1" width="36" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8714_124950"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_8714_124950" result="effect2_dropShadow_8714_124950"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="8"/>
<feGaussianBlur stdDeviation="2.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="effect2_dropShadow_8714_124950" result="effect3_dropShadow_8714_124950"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_8714_124950" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-2"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow_8714_124950"/>
</filter>
<clipPath id={`${uid}-clip0_8714_124950`}>
<rect width="16" height="16" fill="white" transform="translate(9 8)"/>
</clipPath>
</defs>
    </svg>
  );
});
FeaturedShapeSmGrayModernNeue.displayName = "FeaturedShapeSmGrayModernNeue";
