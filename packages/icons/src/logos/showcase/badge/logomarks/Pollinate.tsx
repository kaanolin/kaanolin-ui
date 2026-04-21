// [logo-showcase] generated from source/icons/Logos/
import { forwardRef, useId } from "react";
import type { LogoProps } from "../../../../types";

export const Pollinate = forwardRef<SVGSVGElement, LogoProps>(function Pollinate(
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
        <><g filter={`url(#${uid}-filter0_iii_3051_46977)`}>
<g clipPath={`url(#${uid}-clip0_3051_46977)`}>
<rect width="48" height="48" rx="12" fill="#F59E0B"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_46977)`}/>
<g filter={`url(#${uid}-filter1_d_3051_46977)`}>
<path d="M28.5006 24C28.5006 26.4853 26.4859 28.5 24.0006 28.5C21.5153 28.5 19.5006 26.4853 19.5006 24C19.5006 21.5147 21.5153 19.5 24.0006 19.5C26.4859 19.5 28.5006 21.5147 28.5006 24Z" fill={`url(#${uid}-paint1_linear_3051_46977)`}/>
<path d="M28.5006 13.5C28.5006 15.9853 26.4859 18 24.0006 18C21.5153 18 19.5006 15.9853 19.5006 13.5C19.5006 11.0147 21.5153 9 24.0006 9C26.4859 9 28.5006 11.0147 28.5006 13.5Z" fill={`url(#${uid}-paint2_linear_3051_46977)`}/>
<path d="M37.5938 29.25C37.5938 31.7353 35.579 33.75 33.0937 33.75C30.6085 33.75 28.5937 31.7353 28.5937 29.25C28.5937 26.7647 30.6085 24.75 33.0937 24.75C35.579 24.75 37.5938 26.7647 37.5938 29.25Z" fill={`url(#${uid}-paint3_linear_3051_46977)`}/>
<path d="M37.5952 18.7502C37.5952 21.2355 35.5805 23.2502 33.0952 23.2502C30.6099 23.2502 28.5952 21.2355 28.5952 18.7502C28.5952 16.2649 30.6099 14.2502 33.0952 14.2502C35.5805 14.2502 37.5952 16.2649 37.5952 18.7502Z" fill={`url(#${uid}-paint4_linear_3051_46977)`}/>
<path d="M28.5006 34.5C28.5006 36.9853 26.4859 39 24.0006 39C21.5153 39 19.5006 36.9853 19.5006 34.5C19.5006 32.0147 21.5153 30 24.0006 30C26.4859 30 28.5006 32.0147 28.5006 34.5Z" fill={`url(#${uid}-paint5_linear_3051_46977)`}/>
<path d="M19.4077 18.75C19.4077 21.2353 17.393 23.25 14.9077 23.25C12.4224 23.25 10.4077 21.2353 10.4077 18.75C10.4077 16.2647 12.4224 14.25 14.9077 14.25C17.393 14.25 19.4077 16.2647 19.4077 18.75Z" fill={`url(#${uid}-paint6_linear_3051_46977)`}/>
<path d="M19.4062 29.2498C19.4062 31.7351 17.3915 33.7498 14.9062 33.7498C12.421 33.7498 10.4062 31.7351 10.4062 29.2498C10.4062 26.7645 12.421 24.7498 14.9062 24.7498C17.3915 24.7498 19.4062 26.7645 19.4062 29.2498Z" fill={`url(#${uid}-paint7_linear_3051_46977)`}/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint8_linear_3051_46977)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_46977`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_46977"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_46977" result="effect2_innerShadow_3051_46977"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_46977"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_46977" result="effect3_innerShadow_3051_46977"/>
</filter>
<filter id={`${uid}-filter1_d_3051_46977`} x="6.75" y="5.25" width="34.5" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_46977"/>
<feOffset dy="2.25"/>
<feGaussianBlur stdDeviation="2.25"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_46977"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_46977" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_46977`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_46977`} x1="24.0007" y1="9" x2="24.0007" y2="39" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_3051_46977`} x1="24.0007" y1="9" x2="24.0007" y2="39" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint3_linear_3051_46977`} x1="24.0007" y1="9" x2="24.0007" y2="39" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint4_linear_3051_46977`} x1="24.0007" y1="9" x2="24.0007" y2="39" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint5_linear_3051_46977`} x1="24.0007" y1="9" x2="24.0007" y2="39" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint6_linear_3051_46977`} x1="24.0007" y1="9" x2="24.0007" y2="39" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint7_linear_3051_46977`} x1="24.0007" y1="9" x2="24.0007" y2="39" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint8_linear_3051_46977`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_46977`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      ) : (
        <><g filter={`url(#${uid}-filter0_iii_3051_46977)`}>
<g clipPath={`url(#${uid}-clip0_3051_46977)`}>
<rect width="48" height="48" rx="12" fill="#F59E0B"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_46977)`}/>
<g filter={`url(#${uid}-filter1_d_3051_46977)`}>
<path d="M28.5006 24C28.5006 26.4853 26.4859 28.5 24.0006 28.5C21.5153 28.5 19.5006 26.4853 19.5006 24C19.5006 21.5147 21.5153 19.5 24.0006 19.5C26.4859 19.5 28.5006 21.5147 28.5006 24Z" fill={`url(#${uid}-paint1_linear_3051_46977)`}/>
<path d="M28.5006 13.5C28.5006 15.9853 26.4859 18 24.0006 18C21.5153 18 19.5006 15.9853 19.5006 13.5C19.5006 11.0147 21.5153 9 24.0006 9C26.4859 9 28.5006 11.0147 28.5006 13.5Z" fill={`url(#${uid}-paint2_linear_3051_46977)`}/>
<path d="M37.5938 29.25C37.5938 31.7353 35.579 33.75 33.0937 33.75C30.6085 33.75 28.5937 31.7353 28.5937 29.25C28.5937 26.7647 30.6085 24.75 33.0937 24.75C35.579 24.75 37.5938 26.7647 37.5938 29.25Z" fill={`url(#${uid}-paint3_linear_3051_46977)`}/>
<path d="M37.5952 18.7502C37.5952 21.2355 35.5805 23.2502 33.0952 23.2502C30.6099 23.2502 28.5952 21.2355 28.5952 18.7502C28.5952 16.2649 30.6099 14.2502 33.0952 14.2502C35.5805 14.2502 37.5952 16.2649 37.5952 18.7502Z" fill={`url(#${uid}-paint4_linear_3051_46977)`}/>
<path d="M28.5006 34.5C28.5006 36.9853 26.4859 39 24.0006 39C21.5153 39 19.5006 36.9853 19.5006 34.5C19.5006 32.0147 21.5153 30 24.0006 30C26.4859 30 28.5006 32.0147 28.5006 34.5Z" fill={`url(#${uid}-paint5_linear_3051_46977)`}/>
<path d="M19.4077 18.75C19.4077 21.2353 17.393 23.25 14.9077 23.25C12.4224 23.25 10.4077 21.2353 10.4077 18.75C10.4077 16.2647 12.4224 14.25 14.9077 14.25C17.393 14.25 19.4077 16.2647 19.4077 18.75Z" fill={`url(#${uid}-paint6_linear_3051_46977)`}/>
<path d="M19.4062 29.2498C19.4062 31.7351 17.3915 33.7498 14.9062 33.7498C12.421 33.7498 10.4062 31.7351 10.4062 29.2498C10.4062 26.7645 12.421 24.7498 14.9062 24.7498C17.3915 24.7498 19.4062 26.7645 19.4062 29.2498Z" fill={`url(#${uid}-paint7_linear_3051_46977)`}/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint8_linear_3051_46977)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_46977`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_46977"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_46977" result="effect2_innerShadow_3051_46977"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_46977"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_46977" result="effect3_innerShadow_3051_46977"/>
</filter>
<filter id={`${uid}-filter1_d_3051_46977`} x="6.75" y="5.25" width="34.5" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_46977"/>
<feOffset dy="2.25"/>
<feGaussianBlur stdDeviation="2.25"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_46977"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_46977" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_46977`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_46977`} x1="24.0007" y1="9" x2="24.0007" y2="39" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_3051_46977`} x1="24.0007" y1="9" x2="24.0007" y2="39" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint3_linear_3051_46977`} x1="24.0007" y1="9" x2="24.0007" y2="39" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint4_linear_3051_46977`} x1="24.0007" y1="9" x2="24.0007" y2="39" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint5_linear_3051_46977`} x1="24.0007" y1="9" x2="24.0007" y2="39" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint6_linear_3051_46977`} x1="24.0007" y1="9" x2="24.0007" y2="39" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint7_linear_3051_46977`} x1="24.0007" y1="9" x2="24.0007" y2="39" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint8_linear_3051_46977`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_46977`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      )}
    </svg>
  );
});
Pollinate.displayName = "Pollinate";
