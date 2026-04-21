// [logo-showcase] generated from source/icons/Logos/
import { forwardRef, useId } from "react";
import type { LogoProps } from "../../../../types";

export const Mastermail = forwardRef<SVGSVGElement, LogoProps>(function Mastermail(
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
        <><g filter={`url(#${uid}-filter0_iii_3051_46961)`}>
<g clipPath={`url(#${uid}-clip0_3051_46961)`}>
<rect width="48" height="48" rx="12" fill="#22262F"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_46961)`}/>
<g filter={`url(#${uid}-filter1_d_3051_46961)`}>
<path d="M22.2173 9.73842C23.2019 8.75386 24.7981 8.75386 25.7827 9.73842L29.3481 13.3038C30.3327 14.2884 30.3327 15.8847 29.3481 16.8692L25.7827 20.4346C24.7981 21.4192 23.2019 21.4192 22.2173 20.4346L18.6519 16.8692C17.6673 15.8847 17.6673 14.2884 18.6519 13.3038L22.2173 9.73842Z" fill={`url(#${uid}-paint1_linear_3051_46961)`}/>
<path d="M31.1308 18.6519C32.1153 17.6673 33.7116 17.6673 34.6962 18.6519L38.2616 22.2173C39.2461 23.2019 39.2461 24.7981 38.2616 25.7827L34.6962 29.3481C33.7116 30.3327 32.1153 30.3327 31.1308 29.3481L27.5654 25.7827C26.5808 24.7981 26.5808 23.2019 27.5654 22.2173L31.1308 18.6519Z" fill={`url(#${uid}-paint2_linear_3051_46961)`}/>
<path d="M13.3038 18.6519C14.2884 17.6673 15.8847 17.6673 16.8692 18.6519L20.4346 22.2173C21.4192 23.2019 21.4192 24.7981 20.4346 25.7827L16.8692 29.3481C15.8847 30.3327 14.2884 30.3327 13.3038 29.3481L9.73842 25.7827C8.75386 24.7981 8.75386 23.2019 9.73842 22.2173L13.3038 18.6519Z" fill={`url(#${uid}-paint3_linear_3051_46961)`}/>
<path d="M22.2173 27.5654C23.2019 26.5808 24.7981 26.5808 25.7827 27.5654L29.3481 31.1308C30.3327 32.1153 30.3327 33.7116 29.3481 34.6962L25.7827 38.2616C24.7981 39.2461 23.2019 39.2461 22.2173 38.2616L18.6519 34.6962C17.6673 33.7116 17.6673 32.1153 18.6519 31.1308L22.2173 27.5654Z" fill={`url(#${uid}-paint4_linear_3051_46961)`}/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint5_linear_3051_46961)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_46961`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_46961"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_46961" result="effect2_innerShadow_3051_46961"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_46961"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_46961" result="effect3_innerShadow_3051_46961"/>
</filter>
<filter id={`${uid}-filter1_d_3051_46961`} x="6" y="5.25" width="36" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_46961"/>
<feOffset dy="2.25"/>
<feGaussianBlur stdDeviation="2.25"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_46961"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_46961" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_46961`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_46961`} x1="24" y1="9" x2="24" y2="39" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_3051_46961`} x1="24" y1="9" x2="24" y2="39" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint3_linear_3051_46961`} x1="24" y1="9" x2="24" y2="39" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint4_linear_3051_46961`} x1="24" y1="9" x2="24" y2="39" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint5_linear_3051_46961`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_46961`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      ) : (
        <><g filter={`url(#${uid}-filter0_iii_3051_46961)`}>
<g clipPath={`url(#${uid}-clip0_3051_46961)`}>
<rect width="48" height="48" rx="12" fill="#0A0A0A"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_46961)`}/>
<g filter={`url(#${uid}-filter1_d_3051_46961)`}>
<path d="M22.2173 9.73842C23.2019 8.75386 24.7981 8.75386 25.7827 9.73842L29.3481 13.3038C30.3327 14.2884 30.3327 15.8847 29.3481 16.8692L25.7827 20.4346C24.7981 21.4192 23.2019 21.4192 22.2173 20.4346L18.6519 16.8692C17.6673 15.8847 17.6673 14.2884 18.6519 13.3038L22.2173 9.73842Z" fill={`url(#${uid}-paint1_linear_3051_46961)`}/>
<path d="M31.1308 18.6519C32.1153 17.6673 33.7116 17.6673 34.6962 18.6519L38.2616 22.2173C39.2461 23.2019 39.2461 24.7981 38.2616 25.7827L34.6962 29.3481C33.7116 30.3327 32.1153 30.3327 31.1308 29.3481L27.5654 25.7827C26.5808 24.7981 26.5808 23.2019 27.5654 22.2173L31.1308 18.6519Z" fill={`url(#${uid}-paint2_linear_3051_46961)`}/>
<path d="M13.3038 18.6519C14.2884 17.6673 15.8847 17.6673 16.8692 18.6519L20.4346 22.2173C21.4192 23.2019 21.4192 24.7981 20.4346 25.7827L16.8692 29.3481C15.8847 30.3327 14.2884 30.3327 13.3038 29.3481L9.73842 25.7827C8.75386 24.7981 8.75386 23.2019 9.73842 22.2173L13.3038 18.6519Z" fill={`url(#${uid}-paint3_linear_3051_46961)`}/>
<path d="M22.2173 27.5654C23.2019 26.5808 24.7981 26.5808 25.7827 27.5654L29.3481 31.1308C30.3327 32.1153 30.3327 33.7116 29.3481 34.6962L25.7827 38.2616C24.7981 39.2461 23.2019 39.2461 22.2173 38.2616L18.6519 34.6962C17.6673 33.7116 17.6673 32.1153 18.6519 31.1308L22.2173 27.5654Z" fill={`url(#${uid}-paint4_linear_3051_46961)`}/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint5_linear_3051_46961)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_46961`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_46961"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_46961" result="effect2_innerShadow_3051_46961"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_46961"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_46961" result="effect3_innerShadow_3051_46961"/>
</filter>
<filter id={`${uid}-filter1_d_3051_46961`} x="6" y="5.25" width="36" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_46961"/>
<feOffset dy="2.25"/>
<feGaussianBlur stdDeviation="2.25"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_46961"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_46961" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_46961`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_46961`} x1="24" y1="9" x2="24" y2="39" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_3051_46961`} x1="24" y1="9" x2="24" y2="39" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint3_linear_3051_46961`} x1="24" y1="9" x2="24" y2="39" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint4_linear_3051_46961`} x1="24" y1="9" x2="24" y2="39" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint5_linear_3051_46961`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_46961`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      )}
    </svg>
  );
});
Mastermail.displayName = "Mastermail";
