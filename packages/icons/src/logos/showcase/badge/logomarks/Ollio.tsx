// [logo-showcase] generated from source/icons/Logos/
import { forwardRef, useId } from "react";
import type { LogoProps } from "../../../../types";

export const Ollio = forwardRef<SVGSVGElement, LogoProps>(function Ollio(
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
        <><g filter={`url(#${uid}-filter0_iii_3051_46969)`}>
<g clipPath={`url(#${uid}-clip0_3051_46969)`}>
<rect width="48" height="48" rx="12" fill="#8B5CF6"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_46969)`}/>
<g filter={`url(#${uid}-filter1_d_3051_46969)`}>
<path d="M29.5029 32.6537C25.5239 35.1779 20.1904 34.7045 16.7194 31.2335C13.2484 27.7625 12.775 22.429 15.2993 18.45L11.8839 15.0347C7.53661 20.9217 8.02886 29.2605 13.3607 34.5923C18.6925 39.9241 27.0313 40.4163 32.9183 36.069L29.5029 32.6537Z" fill={`url(#${uid}-paint1_linear_3051_46969)`}/>
<path d="M18.49 15.2591C22.4691 12.7345 27.8029 13.2078 31.274 16.6789C34.7452 20.1501 35.2185 25.4839 32.6939 29.463L36.1092 32.8783C40.4569 26.9912 39.9648 18.6521 34.6328 13.3202C29.3008 7.98818 20.9618 7.49606 15.0747 11.8438L18.49 15.2591Z" fill={`url(#${uid}-paint2_linear_3051_46969)`}/>
<path opacity="0.2" d="M31.2742 16.6789C27.803 13.2077 22.4692 12.7345 18.4901 15.2591L16.7787 13.5476C16.1679 13.9722 15.5862 14.4568 15.0417 15.0012C14.4972 15.5458 14.0126 16.1276 13.5879 16.7385L15.2994 18.45C12.7752 22.429 13.2486 27.7625 16.7196 31.2335C20.1906 34.7045 25.524 35.1779 29.5031 32.6537L31.2179 34.3685C31.8287 33.9438 32.4105 33.4592 32.9551 32.9146C33.4996 32.3701 33.9841 31.7884 34.4087 31.1777L32.694 29.4629C35.2186 25.4838 34.7453 20.15 31.2742 16.6789Z" fill={`url(#${uid}-paint3_linear_3051_46969)`}/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint4_linear_3051_46969)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_46969`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_46969"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_46969" result="effect2_innerShadow_3051_46969"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_46969"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_46969" result="effect3_innerShadow_3051_46969"/>
</filter>
<filter id={`${uid}-filter1_d_3051_46969`} x="4.99935" y="4.95833" width="37.9993" height="44.3333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.58333" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_46969"/>
<feOffset dy="2.375"/>
<feGaussianBlur stdDeviation="2.375"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_46969"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_46969" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_46969`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_46969`} x1="23.9967" y1="8.91455" x2="23.9967" y2="38.9979" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_3051_46969`} x1="23.9967" y1="8.91455" x2="23.9967" y2="38.9979" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint3_linear_3051_46969`} x1="23.9983" y1="13.5476" x2="23.9983" y2="34.3685" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint4_linear_3051_46969`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_46969`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      ) : (
        <><g filter={`url(#${uid}-filter0_iii_3051_46969)`}>
<g clipPath={`url(#${uid}-clip0_3051_46969)`}>
<rect width="48" height="48" rx="12" fill="#8B5CF6"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_46969)`}/>
<g filter={`url(#${uid}-filter1_d_3051_46969)`}>
<path d="M29.5029 32.6537C25.5239 35.1779 20.1904 34.7045 16.7194 31.2335C13.2484 27.7625 12.775 22.429 15.2993 18.45L11.8839 15.0347C7.53661 20.9217 8.02886 29.2605 13.3607 34.5923C18.6925 39.9241 27.0313 40.4163 32.9183 36.069L29.5029 32.6537Z" fill={`url(#${uid}-paint1_linear_3051_46969)`}/>
<path d="M18.49 15.2591C22.4691 12.7345 27.8029 13.2078 31.274 16.6789C34.7452 20.1501 35.2185 25.4839 32.6939 29.463L36.1092 32.8783C40.4569 26.9912 39.9648 18.6521 34.6328 13.3202C29.3008 7.98818 20.9618 7.49606 15.0747 11.8438L18.49 15.2591Z" fill={`url(#${uid}-paint2_linear_3051_46969)`}/>
<path opacity="0.2" d="M31.2742 16.6789C27.803 13.2077 22.4692 12.7345 18.4901 15.2591L16.7787 13.5476C16.1679 13.9722 15.5862 14.4568 15.0417 15.0012C14.4972 15.5458 14.0126 16.1276 13.5879 16.7385L15.2994 18.45C12.7752 22.429 13.2486 27.7625 16.7196 31.2335C20.1906 34.7045 25.524 35.1779 29.5031 32.6537L31.2179 34.3685C31.8287 33.9438 32.4105 33.4592 32.9551 32.9146C33.4996 32.3701 33.9841 31.7884 34.4087 31.1777L32.694 29.4629C35.2186 25.4838 34.7453 20.15 31.2742 16.6789Z" fill={`url(#${uid}-paint3_linear_3051_46969)`}/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint4_linear_3051_46969)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_46969`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_46969"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_46969" result="effect2_innerShadow_3051_46969"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_46969"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_46969" result="effect3_innerShadow_3051_46969"/>
</filter>
<filter id={`${uid}-filter1_d_3051_46969`} x="4.99935" y="4.95833" width="37.9993" height="44.3333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.58333" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_46969"/>
<feOffset dy="2.375"/>
<feGaussianBlur stdDeviation="2.375"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_46969"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_46969" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_46969`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_46969`} x1="23.9967" y1="8.91455" x2="23.9967" y2="38.9979" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_3051_46969`} x1="23.9967" y1="8.91455" x2="23.9967" y2="38.9979" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint3_linear_3051_46969`} x1="23.9983" y1="13.5476" x2="23.9983" y2="34.3685" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint4_linear_3051_46969`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_46969`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      )}
    </svg>
  );
});
Ollio.displayName = "Ollio";
