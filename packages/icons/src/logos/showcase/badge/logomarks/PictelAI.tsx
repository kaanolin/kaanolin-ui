// [logo-showcase] generated from source/icons/Logos/
import { forwardRef, useId } from "react";
import type { LogoProps } from "../../../../types";

export const PictelAI = forwardRef<SVGSVGElement, LogoProps>(function PictelAI(
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
        <><g filter={`url(#${uid}-filter0_iii_3051_46975)`}>
<g clipPath={`url(#${uid}-clip0_3051_46975)`}>
<rect width="48" height="48" rx="12" fill="#22262F"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_46975)`}/>
<g filter={`url(#${uid}-filter1_d_3051_46975)`}>
<rect x="21.4297" y="21.4287" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.6" x="21.4297" y="26.5713" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.32" x="26.5703" y="26.5713" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.07" x="31.7148" y="26.5713" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.32" x="16.2852" y="26.5713" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.07" x="11.1426" y="26.5713" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.32" x="21.4297" y="31.7144" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.07" x="16.2852" y="31.7144" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.07" x="26.5703" y="31.7144" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.07" x="21.4297" y="36.8574" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.6" x="16.2852" y="21.4287" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.32" x="11.1426" y="21.4287" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.07" x="6" y="21.4287" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.6" x="26.5703" y="21.4287" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.32" x="31.7148" y="21.4287" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.07" x="36.8574" y="21.4287" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.6" x="21.4297" y="16.2856" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.32" x="16.2852" y="16.2856" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.07" x="16.2852" y="11.1426" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.07" x="11.1426" y="16.2856" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.32" x="26.5703" y="16.2856" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.07" x="26.5703" y="11.1426" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.07" x="31.7148" y="16.2856" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.32" x="21.4297" y="11.1426" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.07" x="21.4297" y="6" width="5.14285" height="5.14285" fill="white"/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint1_linear_3051_46975)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_46975`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_46975"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_46975" result="effect2_innerShadow_3051_46975"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_46975"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_46975" result="effect3_innerShadow_3051_46975"/>
</filter>
<filter id={`${uid}-filter1_d_3051_46975`} x="3" y="5.25" width="42" height="42.0005" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_46975"/>
<feOffset dy="2.25"/>
<feGaussianBlur stdDeviation="2.25"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_46975"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_46975" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_46975`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_46975`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_46975`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      ) : (
        <><g filter={`url(#${uid}-filter0_iii_3051_46975)`}>
<g clipPath={`url(#${uid}-clip0_3051_46975)`}>
<rect width="48" height="48" rx="12" fill="#0A0A0A"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_46975)`}/>
<g filter={`url(#${uid}-filter1_d_3051_46975)`}>
<rect x="21.4297" y="21.4287" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.6" x="21.4297" y="26.5713" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.32" x="26.5703" y="26.5713" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.07" x="31.7148" y="26.5713" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.32" x="16.2852" y="26.5713" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.07" x="11.1426" y="26.5713" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.32" x="21.4297" y="31.7144" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.07" x="16.2852" y="31.7144" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.07" x="26.5703" y="31.7144" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.07" x="21.4297" y="36.8574" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.6" x="16.2852" y="21.4287" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.32" x="11.1426" y="21.4287" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.07" x="6" y="21.4287" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.6" x="26.5703" y="21.4287" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.32" x="31.7148" y="21.4287" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.07" x="36.8574" y="21.4287" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.6" x="21.4297" y="16.2856" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.32" x="16.2852" y="16.2856" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.07" x="16.2852" y="11.1426" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.07" x="11.1426" y="16.2856" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.32" x="26.5703" y="16.2856" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.07" x="26.5703" y="11.1426" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.07" x="31.7148" y="16.2856" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.32" x="21.4297" y="11.1426" width="5.14285" height="5.14285" fill="white"/>
<rect opacity="0.07" x="21.4297" y="6" width="5.14285" height="5.14285" fill="white"/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint1_linear_3051_46975)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_46975`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_46975"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_46975" result="effect2_innerShadow_3051_46975"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_46975"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_46975" result="effect3_innerShadow_3051_46975"/>
</filter>
<filter id={`${uid}-filter1_d_3051_46975`} x="3" y="5.25" width="42" height="42.0005" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_46975"/>
<feOffset dy="2.25"/>
<feGaussianBlur stdDeviation="2.25"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_46975"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_46975" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_46975`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_46975`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_46975`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      )}
    </svg>
  );
});
PictelAI.displayName = "PictelAI";
