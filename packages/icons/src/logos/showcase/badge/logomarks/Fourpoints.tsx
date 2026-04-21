// [logo-showcase] generated from source/icons/Logos/
import { forwardRef, useId } from "react";
import type { LogoProps } from "../../../../types";

export const Fourpoints = forwardRef<SVGSVGElement, LogoProps>(function Fourpoints(
  { size, mode = "light", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const viewBox = mode === "dark" ? "0 0 48 48" : "0 0 48 48";
  const [, , vbW, vbH] = viewBox.split(" ").map(Number);
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? vbW}
      height={size ? (typeof size === "number" ? (size * vbH) / vbW : undefined) : vbH}
      viewBox={viewBox}
      fill="none"
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {mode === "dark" ? (
        <><g filter={`url(#${uid}-filter0_iii_3051_46917)`}>
<g clipPath={`url(#${uid}-clip0_3051_46917)`}>
<rect width="48" height="48" rx="12" fill="#22262F"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_46917)`}/>
<g filter={`url(#${uid}-filter1_d_3051_46917)`}>
<path d="M20.6673 16.5C20.6673 18.8012 18.8018 20.6666 16.5007 20.6666C14.1995 20.6666 12.334 18.8012 12.334 16.5C12.334 14.1988 14.1995 12.3333 16.5007 12.3333C18.8018 12.3333 20.6673 14.1988 20.6673 16.5Z" fill={`url(#${uid}-paint1_linear_3051_46917)`}/>
<path d="M20.6673 31.5C20.6673 33.8012 18.8018 35.6666 16.5007 35.6666C14.1995 35.6666 12.334 33.8012 12.334 31.5C12.334 29.1988 14.1995 27.3333 16.5007 27.3333C18.8018 27.3333 20.6673 29.1988 20.6673 31.5Z" fill={`url(#${uid}-paint2_linear_3051_46917)`}/>
<path d="M35.6673 16.5C35.6673 18.8012 33.8018 20.6666 31.5007 20.6666C29.1995 20.6666 27.334 18.8012 27.334 16.5C27.334 14.1988 29.1995 12.3333 31.5007 12.3333C33.8018 12.3333 35.6673 14.1988 35.6673 16.5Z" fill={`url(#${uid}-paint3_linear_3051_46917)`}/>
<path d="M35.6673 31.5C35.6673 33.8012 33.8018 35.6666 31.5007 35.6666C29.1995 35.6666 27.334 33.8012 27.334 31.5C27.334 29.1988 29.1995 27.3333 31.5007 27.3333C33.8018 27.3333 35.6673 29.1988 35.6673 31.5Z" fill={`url(#${uid}-paint4_linear_3051_46917)`}/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint5_linear_3051_46917)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_46917`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_46917"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_46917" result="effect2_innerShadow_3051_46917"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_46917"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_46917" result="effect3_innerShadow_3051_46917"/>
</filter>
<filter id={`${uid}-filter1_d_3051_46917`} x="9.00065" y="3.16667" width="30.0007" height="46.6667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.66667" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_46917"/>
<feOffset dy="2.5"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_46917"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_46917" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_46917`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_46917`} x1="24.0007" y1="12.3333" x2="24.0007" y2="35.6666" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_3051_46917`} x1="24.0007" y1="12.3333" x2="24.0007" y2="35.6666" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint3_linear_3051_46917`} x1="24.0007" y1="12.3333" x2="24.0007" y2="35.6666" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint4_linear_3051_46917`} x1="24.0007" y1="12.3333" x2="24.0007" y2="35.6666" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint5_linear_3051_46917`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_46917`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      ) : (
        <><g filter={`url(#${uid}-filter0_iii_3051_46917)`}>
<g clipPath={`url(#${uid}-clip0_3051_46917)`}>
<rect width="48" height="48" rx="12" fill="#0A0A0A"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_46917)`}/>
<g filter={`url(#${uid}-filter1_d_3051_46917)`}>
<path d="M20.6673 16.5C20.6673 18.8012 18.8018 20.6666 16.5007 20.6666C14.1995 20.6666 12.334 18.8012 12.334 16.5C12.334 14.1988 14.1995 12.3333 16.5007 12.3333C18.8018 12.3333 20.6673 14.1988 20.6673 16.5Z" fill={`url(#${uid}-paint1_linear_3051_46917)`}/>
<path d="M20.6673 31.5C20.6673 33.8012 18.8018 35.6666 16.5007 35.6666C14.1995 35.6666 12.334 33.8012 12.334 31.5C12.334 29.1988 14.1995 27.3333 16.5007 27.3333C18.8018 27.3333 20.6673 29.1988 20.6673 31.5Z" fill={`url(#${uid}-paint2_linear_3051_46917)`}/>
<path d="M35.6673 16.5C35.6673 18.8012 33.8018 20.6666 31.5007 20.6666C29.1995 20.6666 27.334 18.8012 27.334 16.5C27.334 14.1988 29.1995 12.3333 31.5007 12.3333C33.8018 12.3333 35.6673 14.1988 35.6673 16.5Z" fill={`url(#${uid}-paint3_linear_3051_46917)`}/>
<path d="M35.6673 31.5C35.6673 33.8012 33.8018 35.6666 31.5007 35.6666C29.1995 35.6666 27.334 33.8012 27.334 31.5C27.334 29.1988 29.1995 27.3333 31.5007 27.3333C33.8018 27.3333 35.6673 29.1988 35.6673 31.5Z" fill={`url(#${uid}-paint4_linear_3051_46917)`}/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint5_linear_3051_46917)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_46917`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_46917"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_46917" result="effect2_innerShadow_3051_46917"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_46917"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_46917" result="effect3_innerShadow_3051_46917"/>
</filter>
<filter id={`${uid}-filter1_d_3051_46917`} x="9.00065" y="3.16667" width="30.0007" height="46.6667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.66667" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_46917"/>
<feOffset dy="2.5"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_46917"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_46917" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_46917`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_46917`} x1="24.0007" y1="12.3333" x2="24.0007" y2="35.6666" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_3051_46917`} x1="24.0007" y1="12.3333" x2="24.0007" y2="35.6666" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint3_linear_3051_46917`} x1="24.0007" y1="12.3333" x2="24.0007" y2="35.6666" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint4_linear_3051_46917`} x1="24.0007" y1="12.3333" x2="24.0007" y2="35.6666" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint5_linear_3051_46917`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_46917`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      )}
    </svg>
  );
});
Fourpoints.displayName = "Fourpoints";
