// [logo-showcase] generated from source/icons/Logos/
import { forwardRef, useId } from "react";
import type { LogoProps } from "../../../../types";

export const AlphaWave = forwardRef<SVGSVGElement, LogoProps>(function AlphaWave(
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
        <><g filter={`url(#${uid}-filter0_iii_3051_46853)`}>
<g clipPath={`url(#${uid}-clip0_3051_46853)`}>
<rect width="48" height="48" rx="12" fill="#DB2777"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_46853)`}/>
<g filter={`url(#${uid}-filter1_d_3051_46853)`}>
<path d="M25.6029 11.2749C23.2598 8.93179 19.4608 8.93179 17.1176 11.2749L8.63236 19.7602C6.28921 22.1034 6.28921 25.9024 8.63236 28.2455L17.1176 36.7308C19.4608 39.0739 23.2598 39.0739 25.6029 36.7308L29.6516 32.6821C26.2812 31.3818 23.8901 28.1113 23.8901 24.2823C23.8901 20.3007 26.4755 16.9231 30.0591 15.7366C29.9891 15.6629 29.9179 15.5899 29.8456 15.5176L25.6029 11.2749Z" fill={`url(#${uid}-paint1_linear_3051_46853)`}/>
<path opacity="0.7" d="M29.6523 32.6848C30.6571 33.0724 31.7489 33.2849 32.8904 33.2849C37.8609 33.2849 41.8904 29.2555 41.8904 24.2849C41.8904 19.3143 37.8609 15.2849 32.8904 15.2849C31.9015 15.2849 30.9499 15.4444 30.0599 15.739C34.5316 20.4401 34.4605 27.8767 29.8464 32.4907L29.6523 32.6848Z" fill={`url(#${uid}-paint2_linear_3051_46853)`}/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint3_linear_3051_46853)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_46853`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_46853"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_46853" result="effect2_innerShadow_3051_46853"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_46853"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_46853" result="effect3_innerShadow_3051_46853"/>
</filter>
<filter id={`${uid}-filter1_d_3051_46853`} x="3.875" y="5.25" width="41.25" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_46853"/>
<feOffset dy="2.25"/>
<feGaussianBlur stdDeviation="2.25"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_46853"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_46853" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_46853`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_46853`} x1="18.4671" y1="9.51758" x2="18.4671" y2="38.4881" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_3051_46853`} x1="35.7714" y1="15.2849" x2="35.7714" y2="33.2849" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint3_linear_3051_46853`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_46853`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      ) : (
        <><g filter={`url(#${uid}-filter0_iii_3051_46853)`}>
<g clipPath={`url(#${uid}-clip0_3051_46853)`}>
<rect width="48" height="48" rx="12" fill="#DB2777"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_46853)`}/>
<g filter={`url(#${uid}-filter1_d_3051_46853)`}>
<path d="M25.6029 11.2749C23.2598 8.93179 19.4608 8.93179 17.1176 11.2749L8.63236 19.7602C6.28921 22.1034 6.28921 25.9024 8.63236 28.2455L17.1176 36.7308C19.4608 39.0739 23.2598 39.0739 25.6029 36.7308L29.6516 32.6821C26.2812 31.3818 23.8901 28.1113 23.8901 24.2823C23.8901 20.3007 26.4755 16.9231 30.0591 15.7366C29.9891 15.6629 29.9179 15.5899 29.8456 15.5176L25.6029 11.2749Z" fill={`url(#${uid}-paint1_linear_3051_46853)`}/>
<path opacity="0.5" d="M29.6523 32.6848C30.6571 33.0724 31.7489 33.2849 32.8904 33.2849C37.8609 33.2849 41.8904 29.2555 41.8904 24.2849C41.8904 19.3143 37.8609 15.2849 32.8904 15.2849C31.9015 15.2849 30.9499 15.4444 30.0599 15.739C34.5316 20.4401 34.4605 27.8767 29.8464 32.4907L29.6523 32.6848Z" fill={`url(#${uid}-paint2_linear_3051_46853)`}/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint3_linear_3051_46853)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_46853`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_46853"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_46853" result="effect2_innerShadow_3051_46853"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_46853"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_46853" result="effect3_innerShadow_3051_46853"/>
</filter>
<filter id={`${uid}-filter1_d_3051_46853`} x="3.875" y="5.25" width="41.25" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_46853"/>
<feOffset dy="2.25"/>
<feGaussianBlur stdDeviation="2.25"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_46853"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_46853" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_46853`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_46853`} x1="18.4671" y1="9.51758" x2="18.4671" y2="38.4881" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_3051_46853`} x1="35.7714" y1="15.2849" x2="35.7714" y2="33.2849" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint3_linear_3051_46853`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_46853`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      )}
    </svg>
  );
});
AlphaWave.displayName = "AlphaWave";
