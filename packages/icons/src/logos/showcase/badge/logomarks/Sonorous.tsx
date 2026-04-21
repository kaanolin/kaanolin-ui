// [logo-showcase] generated from source/icons/Logos/
import { forwardRef, useId } from "react";
import type { LogoProps } from "../../../../types";

export const Sonorous = forwardRef<SVGSVGElement, LogoProps>(function Sonorous(
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
        <><g filter={`url(#${uid}-filter0_iii_3051_47009)`}>
<g clipPath={`url(#${uid}-clip0_3051_47009)`}>
<rect width="48" height="48" rx="12" fill="#1D4ED8"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_47009)`}/>
<g filter={`url(#${uid}-filter1_d_3051_47009)`}>
<path d="M30.9974 30.9972C25.1233 36.8714 15.5994 36.8714 9.72526 30.9972" stroke={`url(#${uid}-paint1_linear_3051_47009)`} strokeWidth="4.75"/>
<path opacity="0.5" d="M25.6794 25.6795C22.7423 28.6166 17.9804 28.6166 15.0433 25.6795" stroke={`url(#${uid}-paint2_linear_3051_47009)`} strokeWidth="4.75"/>
<path opacity="0.5" d="M17.0026 17.0028C22.8767 11.1286 32.4006 11.1286 38.2747 17.0028" stroke={`url(#${uid}-paint3_linear_3051_47009)`} strokeWidth="4.75"/>
<path d="M22.3206 22.3205C25.2577 19.3834 30.0196 19.3834 32.9567 22.3205" stroke={`url(#${uid}-paint4_linear_3051_47009)`} strokeWidth="4.75"/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint5_linear_3051_47009)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_47009`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_47009"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_47009" result="effect2_innerShadow_3051_47009"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_47009"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_47009" result="effect3_innerShadow_3051_47009"/>
</filter>
<filter id={`${uid}-filter1_d_3051_47009`} x="4.20833" y="4.20833" width="39.5833" height="44.3333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.58333" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_47009"/>
<feOffset dy="2.375"/>
<feGaussianBlur stdDeviation="2.375"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_47009"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_47009" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_47009`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_47009`} x1="15.0433" y1="36.3153" x2="25.6794" y2="25.6792" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_3051_47009`} x1="17.7023" y1="28.3385" x2="23.0203" y2="23.0205" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint3_linear_3051_47009`} x1="32.9567" y1="11.6847" x2="22.3206" y2="22.3208" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint4_linear_3051_47009`} x1="30.2977" y1="19.6615" x2="24.9797" y2="24.9795" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint5_linear_3051_47009`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_47009`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      ) : (
        <><g filter={`url(#${uid}-filter0_iii_3051_47009)`}>
<g clipPath={`url(#${uid}-clip0_3051_47009)`}>
<rect width="48" height="48" rx="12" fill="#1D4ED8"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_47009)`}/>
<g filter={`url(#${uid}-filter1_d_3051_47009)`}>
<path d="M30.9974 30.9972C25.1233 36.8714 15.5994 36.8714 9.72526 30.9972" stroke={`url(#${uid}-paint1_linear_3051_47009)`} strokeWidth="4.75"/>
<path opacity="0.5" d="M25.6794 25.6795C22.7423 28.6166 17.9804 28.6166 15.0433 25.6795" stroke={`url(#${uid}-paint2_linear_3051_47009)`} strokeWidth="4.75"/>
<path opacity="0.5" d="M17.0026 17.0028C22.8767 11.1286 32.4006 11.1286 38.2747 17.0028" stroke={`url(#${uid}-paint3_linear_3051_47009)`} strokeWidth="4.75"/>
<path d="M22.3206 22.3205C25.2577 19.3834 30.0196 19.3834 32.9567 22.3205" stroke={`url(#${uid}-paint4_linear_3051_47009)`} strokeWidth="4.75"/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint5_linear_3051_47009)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_47009`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_47009"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_47009" result="effect2_innerShadow_3051_47009"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_47009"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_47009" result="effect3_innerShadow_3051_47009"/>
</filter>
<filter id={`${uid}-filter1_d_3051_47009`} x="4.20833" y="4.20833" width="39.5833" height="44.3333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.58333" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_47009"/>
<feOffset dy="2.375"/>
<feGaussianBlur stdDeviation="2.375"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_47009"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_47009" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_47009`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_47009`} x1="15.0433" y1="36.3153" x2="25.6794" y2="25.6792" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_3051_47009`} x1="17.7023" y1="28.3385" x2="23.0203" y2="23.0205" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint3_linear_3051_47009`} x1="32.9567" y1="11.6847" x2="22.3206" y2="22.3208" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint4_linear_3051_47009`} x1="30.2977" y1="19.6615" x2="24.9797" y2="24.9795" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint5_linear_3051_47009`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_47009`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      )}
    </svg>
  );
});
Sonorous.displayName = "Sonorous";
