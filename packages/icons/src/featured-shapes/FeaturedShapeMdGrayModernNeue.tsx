// [collection] Figma variant — properties:
//   Size: md
//   Color: Gray
//   Type: Modern neue
import { forwardRef, useId } from "react";
import type { FeaturedProps } from "../types";

export const FeaturedShapeMdGrayModernNeue = forwardRef<SVGSVGElement, FeaturedProps>(function FeaturedShapeMdGrayModernNeue(
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
      viewBox="0 0 44 50"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M11 0.5H31C36.2467 0.5 40.5 4.7533 40.5 10V30C40.5 35.2467 36.2467 39.5 31 39.5H11C5.7533 39.5 1.5 35.2467 1.5 30V10C1.5 4.7533 5.7533 0.5 11 0.5Z" fill="white"/>
<path d="M11 0.5H31C36.2467 0.5 40.5 4.7533 40.5 10V30C40.5 35.2467 36.2467 39.5 31 39.5H11C5.7533 39.5 1.5 35.2467 1.5 30V10C1.5 4.7533 5.7533 0.5 11 0.5Z" stroke="#D4D4D4"/>
<g filter={`url(#${uid}-filter0_dddi_8714_124949)`}>
<path d="M5 10C5 6.68629 7.68629 4 11 4H31C34.3137 4 37 6.68629 37 10V30C37 33.3137 34.3137 36 31 36H11C7.68629 36 5 33.3137 5 30V10Z" fill="white"/>
<path d="M31 3.5C34.5899 3.5 37.5 6.41015 37.5 10V30C37.5 33.5899 34.5899 36.5 31 36.5H11C7.41015 36.5 4.5 33.5899 4.5 30V10C4.5 6.41015 7.41015 3.5 11 3.5H31Z" stroke="black" strokeOpacity="0.1"/>
<g clipPath={`url(#${uid}-clip0_8714_124949)`}>
<path d="M17.25 20.0001L19.75 22.5001L24.75 17.5001M29.3333 20.0001C29.3333 24.6025 25.6024 28.3334 21 28.3334C16.3976 28.3334 12.6667 24.6025 12.6667 20.0001C12.6667 15.3977 16.3976 11.6667 21 11.6667C25.6024 11.6667 29.3333 15.3977 29.3333 20.0001Z" stroke="#404040" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</g>
<defs>
<filter id={`${uid}-filter0_dddi_8714_124949`} x="0" y="1" width="44" height="49" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8714_124949"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_8714_124949" result="effect2_dropShadow_8714_124949"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="8"/>
<feGaussianBlur stdDeviation="2.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="effect2_dropShadow_8714_124949" result="effect3_dropShadow_8714_124949"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_8714_124949" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-2"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow_8714_124949"/>
</filter>
<clipPath id={`${uid}-clip0_8714_124949`}>
<rect width="20" height="20" fill="white" transform="translate(11 10)"/>
</clipPath>
</defs>
    </svg>
  );
});
FeaturedShapeMdGrayModernNeue.displayName = "FeaturedShapeMdGrayModernNeue";
