// [collection] Figma variant — properties:
//   Size: lg
//   Color: Gray
//   Type: Modern neue
import { forwardRef, useId } from "react";
import type { FeaturedProps } from "../types";

export const FeaturedShapeLgGrayModernNeue = forwardRef<SVGSVGElement, FeaturedProps>(function FeaturedShapeLgGrayModernNeue(
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
      viewBox="0 0 52 58"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M13 0.5H37C43.3513 0.5 48.5 5.64873 48.5 12V36C48.5 42.3513 43.3513 47.5 37 47.5H13C6.64873 47.5 1.5 42.3513 1.5 36V12C1.5 5.64873 6.64873 0.5 13 0.5Z" fill="white"/>
<path d="M13 0.5H37C43.3513 0.5 48.5 5.64873 48.5 12V36C48.5 42.3513 43.3513 47.5 37 47.5H13C6.64873 47.5 1.5 42.3513 1.5 36V12C1.5 5.64873 6.64873 0.5 13 0.5Z" stroke="#D4D4D4"/>
<g filter={`url(#${uid}-filter0_dddi_8714_124948)`}>
<path d="M5 12C5 7.58172 8.58172 4 13 4H37C41.4183 4 45 7.58172 45 12V36C45 40.4183 41.4183 44 37 44H13C8.58172 44 5 40.4183 5 36V12Z" fill="white"/>
<path d="M37 3.5C41.6944 3.5 45.5 7.30558 45.5 12V36C45.5 40.6944 41.6944 44.5 37 44.5H13C8.30558 44.5 4.5 40.6944 4.5 36V12C4.5 7.30558 8.30558 3.5 13 3.5H37Z" stroke="black" strokeOpacity="0.1"/>
<path d="M20.5 24L23.5 27L29.5 21M35 24C35 29.5228 30.5228 34 25 34C19.4772 34 15 29.5228 15 24C15 18.4772 19.4772 14 25 14C30.5228 14 35 18.4772 35 24Z" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<filter id={`${uid}-filter0_dddi_8714_124948`} x="0" y="1" width="52" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8714_124948"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_8714_124948" result="effect2_dropShadow_8714_124948"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="8"/>
<feGaussianBlur stdDeviation="2.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="effect2_dropShadow_8714_124948" result="effect3_dropShadow_8714_124948"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_8714_124948" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-2"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow_8714_124948"/>
</filter>
</defs>
    </svg>
  );
});
FeaturedShapeLgGrayModernNeue.displayName = "FeaturedShapeLgGrayModernNeue";
