// [logo-showcase] generated from source/icons/Logos/
import { forwardRef, useId } from "react";
import type { LogoProps } from "../../../../types";

export const VoxelLabs = forwardRef<SVGSVGElement, LogoProps>(function VoxelLabs(
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
        <><g filter={`url(#${uid}-filter0_iii_3051_47017)`}>
<g clipPath={`url(#${uid}-clip0_3051_47017)`}>
<rect width="48" height="48" rx="12" fill="#22262F"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_47017)`}/>
<g filter={`url(#${uid}-filter1_d_3051_47017)`}>
<rect x="9" y="33.75" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.6" x="14.25" y="33.75" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.32" x="19.5" y="33.75" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.07" x="24.75" y="33.75" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.6" x="9" y="28.5" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.32" x="14.25" y="28.5" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.07" x="14.25" y="23.25" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.07" x="19.5" y="28.5" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.32" x="9" y="23.25" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.07" x="9" y="18" width="5.25" height="5.25" fill="white"/>
<rect x="33.75" y="9" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.6" x="33.75" y="14.25" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.32" x="28.5" y="14.25" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.07" x="23.25" y="14.25" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.32" x="33.75" y="19.5" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.07" x="28.5" y="19.5" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.07" x="33.75" y="24.75" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.6" x="28.5" y="9" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.32" x="23.25" y="9" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.07" x="18" y="9" width="5.25" height="5.25" fill="white"/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint1_linear_3051_47017)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_47017`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_47017"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_47017" result="effect2_innerShadow_3051_47017"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_47017"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_47017" result="effect3_innerShadow_3051_47017"/>
</filter>
<filter id={`${uid}-filter1_d_3051_47017`} x="6" y="5.25" width="36" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_47017"/>
<feOffset dy="2.25"/>
<feGaussianBlur stdDeviation="2.25"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_47017"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_47017" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_47017`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_47017`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_47017`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      ) : (
        <><g filter={`url(#${uid}-filter0_iii_3051_47017)`}>
<g clipPath={`url(#${uid}-clip0_3051_47017)`}>
<rect width="48" height="48" rx="12" fill="#0A0A0A"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_47017)`}/>
<g filter={`url(#${uid}-filter1_d_3051_47017)`}>
<rect x="9" y="33.75" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.6" x="14.25" y="33.75" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.32" x="19.5" y="33.75" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.07" x="24.75" y="33.75" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.6" x="9" y="28.5" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.32" x="14.25" y="28.5" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.07" x="14.25" y="23.25" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.07" x="19.5" y="28.5" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.32" x="9" y="23.25" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.07" x="9" y="18" width="5.25" height="5.25" fill="white"/>
<rect x="33.75" y="9" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.6" x="33.75" y="14.25" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.32" x="28.5" y="14.25" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.07" x="23.25" y="14.25" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.32" x="33.75" y="19.5" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.07" x="28.5" y="19.5" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.07" x="33.75" y="24.75" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.6" x="28.5" y="9" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.32" x="23.25" y="9" width="5.25" height="5.25" fill="white"/>
<rect opacity="0.07" x="18" y="9" width="5.25" height="5.25" fill="white"/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint1_linear_3051_47017)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_47017`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_47017"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_47017" result="effect2_innerShadow_3051_47017"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_47017"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_47017" result="effect3_innerShadow_3051_47017"/>
</filter>
<filter id={`${uid}-filter1_d_3051_47017`} x="6" y="5.25" width="36" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_47017"/>
<feOffset dy="2.25"/>
<feGaussianBlur stdDeviation="2.25"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_47017"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_47017" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_47017`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_47017`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_47017`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      )}
    </svg>
  );
});
VoxelLabs.displayName = "VoxelLabs";
