// [collection] Figma variant — properties:
//   Size: xl
//   Color: Gray
//   Type: Modern neue
import { forwardRef, useId } from "react";
import type { FeaturedProps } from "../types";

export const FeaturedShapeXlGrayModernNeue = forwardRef<SVGSVGElement, FeaturedProps>(function FeaturedShapeXlGrayModernNeue(
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
      viewBox="0 0 60 66"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <rect x="1.5" y="0.5" width="55" height="55" rx="13.5" fill="white"/>
<rect x="1.5" y="0.5" width="55" height="55" rx="13.5" stroke="#D4D4D4"/>
<g filter={`url(#${uid}-filter0_dddi_8714_124947)`}>
<path d="M5 14C5 8.47715 9.47715 4 15 4H43C48.5229 4 53 8.47715 53 14V42C53 47.5229 48.5228 52 43 52H15C9.47715 52 5 47.5228 5 42V14Z" fill="white"/>
<path d="M43 3.5C48.799 3.5 53.5 8.20101 53.5 14V42C53.5 47.799 48.799 52.5 43 52.5H15C9.20101 52.5 4.5 47.799 4.5 42V14C4.5 8.20101 9.20101 3.5 15 3.5H43Z" stroke="black" strokeOpacity="0.1"/>
<path d="M23.75 27.9999L27.25 31.4999L34.25 24.4999M40.6667 27.9999C40.6667 34.4432 35.4433 39.6666 29 39.6666C22.5567 39.6666 17.3333 34.4432 17.3333 27.9999C17.3333 21.5566 22.5567 16.3333 29 16.3333C35.4433 16.3333 40.6667 21.5566 40.6667 27.9999Z" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<filter id={`${uid}-filter0_dddi_8714_124947`} x="0" y="1" width="60" height="65" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8714_124947"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_8714_124947" result="effect2_dropShadow_8714_124947"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="8"/>
<feGaussianBlur stdDeviation="2.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="effect2_dropShadow_8714_124947" result="effect3_dropShadow_8714_124947"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_8714_124947" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-2"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow_8714_124947"/>
</filter>
</defs>
    </svg>
  );
});
FeaturedShapeXlGrayModernNeue.displayName = "FeaturedShapeXlGrayModernNeue";
