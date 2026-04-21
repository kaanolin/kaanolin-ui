// [logo-showcase] generated from source/icons/Logos/
import { forwardRef, useId } from "react";
import type { LogoProps } from "../../../../types";

export const Interlock = forwardRef<SVGSVGElement, LogoProps>(function Interlock(
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
        <><g filter={`url(#${uid}-filter0_iii_3051_46937)`}>
<g clipPath={`url(#${uid}-clip0_3051_46937)`}>
<rect width="48" height="48" rx="12" fill="#7C3AED"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_46937)`}/>
<g filter={`url(#${uid}-filter1_d_3051_46937)`}>
<path d="M21.8203 8.1814C27.4705 8.468 32.0396 12.8408 32.6387 18.4031C36.0778 20.3859 38.3935 24.0993 38.3936 28.3542L38.3789 28.9451C38.0712 35.01 33.0564 39.8326 26.915 39.8328L26.3242 39.8181C20.6728 39.5317 16.1008 35.1583 15.5029 29.5945C12.2252 27.7039 9.96782 24.2423 9.76465 20.2371L9.75 19.6462C9.75 13.3065 14.8897 8.16675 21.2295 8.16675L21.8203 8.1814ZM32.4326 22.1394C31.2937 27.2797 26.7125 31.1246 21.2295 31.1248L20.6387 31.1101C20.0823 31.0819 19.5366 31.0136 19.0039 30.9089C20.0819 34.2497 23.2156 36.6667 26.915 36.6667C31.5056 36.6665 35.2274 32.9448 35.2275 28.3542C35.2275 25.8815 34.1465 23.662 32.4326 22.1394ZM26.915 20.0417C22.5971 20.0417 19.0483 23.3344 18.6416 27.5457C19.4563 27.8124 20.3257 27.9587 21.2295 27.9587C25.5476 27.9586 29.0956 24.6655 29.502 20.4539C28.6877 20.1874 27.8184 20.0418 26.915 20.0417ZM21.2295 11.3337C16.6386 11.3337 12.917 15.0554 12.917 19.6462C12.9171 22.118 13.9973 24.3365 15.71 25.8591C16.8496 20.7194 21.4324 16.8748 26.915 16.8748L27.5059 16.8894C28.0618 16.9176 28.6073 16.986 29.1396 17.0906C28.0613 13.7505 24.9284 11.3339 21.2295 11.3337Z" fill={`url(#${uid}-paint1_linear_3051_46937)`}/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint2_linear_3051_46937)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_46937`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_46937"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_46937" result="effect2_innerShadow_3051_46937"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_46937"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_46937" result="effect3_innerShadow_3051_46937"/>
</filter>
<filter id={`${uid}-filter1_d_3051_46937`} x="6.58333" y="4.20833" width="34.9779" height="44.3333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.58333" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_46937"/>
<feOffset dy="2.375"/>
<feGaussianBlur stdDeviation="2.375"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_46937"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_46937" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_46937`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_46937`} x1="24.0718" y1="8.16675" x2="24.0718" y2="39.8328" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_3051_46937`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_46937`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      ) : (
        <><g filter={`url(#${uid}-filter0_iii_3051_46937)`}>
<g clipPath={`url(#${uid}-clip0_3051_46937)`}>
<rect width="48" height="48" rx="12" fill="#7C3AED"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_46937)`}/>
<g filter={`url(#${uid}-filter1_d_3051_46937)`}>
<path d="M21.8203 8.1814C27.4705 8.468 32.0396 12.8408 32.6387 18.4031C36.0778 20.3859 38.3935 24.0993 38.3936 28.3542L38.3789 28.9451C38.0712 35.01 33.0564 39.8326 26.915 39.8328L26.3242 39.8181C20.6728 39.5317 16.1008 35.1583 15.5029 29.5945C12.2252 27.7039 9.96782 24.2423 9.76465 20.2371L9.75 19.6462C9.75 13.3065 14.8897 8.16675 21.2295 8.16675L21.8203 8.1814ZM32.4326 22.1394C31.2937 27.2797 26.7125 31.1246 21.2295 31.1248L20.6387 31.1101C20.0823 31.0819 19.5366 31.0136 19.0039 30.9089C20.0819 34.2497 23.2156 36.6667 26.915 36.6667C31.5056 36.6665 35.2274 32.9448 35.2275 28.3542C35.2275 25.8815 34.1465 23.662 32.4326 22.1394ZM26.915 20.0417C22.5971 20.0417 19.0483 23.3344 18.6416 27.5457C19.4563 27.8124 20.3257 27.9587 21.2295 27.9587C25.5476 27.9586 29.0956 24.6655 29.502 20.4539C28.6877 20.1874 27.8184 20.0418 26.915 20.0417ZM21.2295 11.3337C16.6386 11.3337 12.917 15.0554 12.917 19.6462C12.9171 22.118 13.9973 24.3365 15.71 25.8591C16.8496 20.7194 21.4324 16.8748 26.915 16.8748L27.5059 16.8894C28.0618 16.9176 28.6073 16.986 29.1396 17.0906C28.0613 13.7505 24.9284 11.3339 21.2295 11.3337Z" fill={`url(#${uid}-paint1_linear_3051_46937)`}/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint2_linear_3051_46937)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_46937`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_46937"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_46937" result="effect2_innerShadow_3051_46937"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_46937"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_46937" result="effect3_innerShadow_3051_46937"/>
</filter>
<filter id={`${uid}-filter1_d_3051_46937`} x="6.58333" y="4.20833" width="34.9779" height="44.3333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.58333" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_46937"/>
<feOffset dy="2.375"/>
<feGaussianBlur stdDeviation="2.375"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_46937"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_46937" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_46937`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_46937`} x1="24.0718" y1="8.16675" x2="24.0718" y2="39.8328" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_3051_46937`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_46937`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      )}
    </svg>
  );
});
Interlock.displayName = "Interlock";
