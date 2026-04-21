// [logo-showcase] generated from source/icons/Logos/
import { forwardRef, useId } from "react";
import type { LogoProps } from "../../../../types";

export const Sisyphus = forwardRef<SVGSVGElement, LogoProps>(function Sisyphus(
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
        <><g filter={`url(#${uid}-filter0_iii_3051_47005)`}>
<g clipPath={`url(#${uid}-clip0_3051_47005)`}>
<rect width="48" height="48" rx="12" fill="#15803D"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_47005)`}/>
<g filter={`url(#${uid}-filter1_d_3051_47005)`}>
<rect opacity="0.8" x="12.4492" y="20.4004" width="7.19999" height="7.19999" fill={`url(#${uid}-paint1_linear_3051_47005)`}/>
<rect opacity="0.8" x="35.5508" y="27.5996" width="7.2" height="7.19999" transform="rotate(180 35.5508 27.5996)" fill={`url(#${uid}-paint2_linear_3051_47005)`}/>
<path opacity="0.2" d="M19.6484 20.4002L28.3484 13.2002V20.4002L19.6484 27.6002V20.4002Z" fill={`url(#${uid}-paint3_linear_3051_47005)`}/>
<path opacity="0.4" d="M28.3496 27.5998L19.6496 34.7998L19.6496 27.5998L28.3496 20.3998L28.3496 27.5998Z" fill={`url(#${uid}-paint4_linear_3051_47005)`}/>
<path opacity="0.6" d="M12.4492 20.4L28.3492 6V13.2L19.6492 20.4H12.4492Z" fill={`url(#${uid}-paint5_linear_3051_47005)`}/>
<path opacity="0.7" d="M35.5508 27.6L19.6508 42L19.6508 34.8L28.3508 27.6L35.5508 27.6Z" fill={`url(#${uid}-paint6_linear_3051_47005)`}/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint7_linear_3051_47005)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_47005`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_47005"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_47005" result="effect2_innerShadow_3051_47005"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_47005"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_47005" result="effect3_innerShadow_3051_47005"/>
</filter>
<filter id={`${uid}-filter1_d_3051_47005`} x="9" y="5.25" width="30" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_47005"/>
<feOffset dy="2.25"/>
<feGaussianBlur stdDeviation="2.25"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_47005"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_47005" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_47005`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_47005`} x1="16.0492" y1="20.4004" x2="16.0492" y2="27.6004" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_3051_47005`} x1="39.1508" y1="27.5996" x2="39.1508" y2="34.7996" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint3_linear_3051_47005`} x1="23.9984" y1="13.2002" x2="23.9984" y2="27.6002" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint4_linear_3051_47005`} x1="23.9996" y1="34.7998" x2="23.9996" y2="20.3998" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint5_linear_3051_47005`} x1="20.3992" y1="6" x2="20.3992" y2="20.4" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint6_linear_3051_47005`} x1="27.6008" y1="42" x2="27.6008" y2="27.6" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint7_linear_3051_47005`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_47005`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      ) : (
        <><g filter={`url(#${uid}-filter0_iii_3051_47005)`}>
<g clipPath={`url(#${uid}-clip0_3051_47005)`}>
<rect width="48" height="48" rx="12" fill="#15803D"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_47005)`}/>
<g filter={`url(#${uid}-filter1_d_3051_47005)`}>
<rect opacity="0.8" x="12.4492" y="20.4004" width="7.19999" height="7.19999" fill={`url(#${uid}-paint1_linear_3051_47005)`}/>
<rect opacity="0.8" x="35.5508" y="27.5996" width="7.2" height="7.19999" transform="rotate(180 35.5508 27.5996)" fill={`url(#${uid}-paint2_linear_3051_47005)`}/>
<path opacity="0.2" d="M19.6484 20.4002L28.3484 13.2002V20.4002L19.6484 27.6002V20.4002Z" fill={`url(#${uid}-paint3_linear_3051_47005)`}/>
<path opacity="0.4" d="M28.3496 27.5998L19.6496 34.7998L19.6496 27.5998L28.3496 20.3998L28.3496 27.5998Z" fill={`url(#${uid}-paint4_linear_3051_47005)`}/>
<path opacity="0.6" d="M12.4492 20.4L28.3492 6V13.2L19.6492 20.4H12.4492Z" fill={`url(#${uid}-paint5_linear_3051_47005)`}/>
<path opacity="0.7" d="M35.5508 27.6L19.6508 42L19.6508 34.8L28.3508 27.6L35.5508 27.6Z" fill={`url(#${uid}-paint6_linear_3051_47005)`}/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint7_linear_3051_47005)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_47005`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_47005"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_47005" result="effect2_innerShadow_3051_47005"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_47005"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_47005" result="effect3_innerShadow_3051_47005"/>
</filter>
<filter id={`${uid}-filter1_d_3051_47005`} x="9" y="5.25" width="30" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_47005"/>
<feOffset dy="2.25"/>
<feGaussianBlur stdDeviation="2.25"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_47005"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_47005" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_47005`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_47005`} x1="16.0492" y1="20.4004" x2="16.0492" y2="27.6004" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_3051_47005`} x1="39.1508" y1="27.5996" x2="39.1508" y2="34.7996" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint3_linear_3051_47005`} x1="23.9984" y1="13.2002" x2="23.9984" y2="27.6002" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint4_linear_3051_47005`} x1="23.9996" y1="34.7998" x2="23.9996" y2="20.3998" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint5_linear_3051_47005`} x1="20.3992" y1="6" x2="20.3992" y2="20.4" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint6_linear_3051_47005`} x1="27.6008" y1="42" x2="27.6008" y2="27.6" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint7_linear_3051_47005`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_47005`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      )}
    </svg>
  );
});
Sisyphus.displayName = "Sisyphus";
