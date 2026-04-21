// [logo-showcase] generated from source/icons/Logos/
import { forwardRef, useId } from "react";
import type { LogoProps } from "../../../../types";

export const Hexahedron = forwardRef<SVGSVGElement, LogoProps>(function Hexahedron(
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
        <><g filter={`url(#${uid}-filter0_iii_3051_46927)`}>
<g clipPath={`url(#${uid}-clip0_3051_46927)`}>
<rect width="48" height="48" rx="12" fill="#2563EB"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_46927)`}/>
<g filter={`url(#${uid}-filter1_d_3051_46927)`}>
<path d="M24.5001 23.1948L37.4487 15.7241L24.5001 8.25L11.5513 15.7241L24.5001 23.1948Z" fill={`url(#${uid}-paint1_linear_3051_46927)`}/>
<path d="M23.5738 24.7989L10.625 17.3282V32.2759L23.5738 39.75V24.7989Z" fill={`url(#${uid}-paint2_linear_3051_46927)`}/>
<path opacity="0.5" d="M25.4277 24.7989V39.7499L38.3762 32.2759V17.3281L25.4277 24.7989Z" fill={`url(#${uid}-paint3_linear_3051_46927)`}/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint4_linear_3051_46927)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_46927`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_46927"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_46927" result="effect2_innerShadow_3051_46927"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_46927"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_46927" result="effect3_innerShadow_3051_46927"/>
</filter>
<filter id={`${uid}-filter1_d_3051_46927`} x="7.625" y="5.25" width="33.752" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_46927"/>
<feOffset dy="2.25"/>
<feGaussianBlur stdDeviation="2.25"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_46927"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_46927" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_46927`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_46927`} x1="24.0369" y1="8.25" x2="24.0369" y2="39.75" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_3051_46927`} x1="24.0369" y1="8.25" x2="24.0369" y2="39.75" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint3_linear_3051_46927`} x1="31.902" y1="17.3281" x2="31.902" y2="39.7499" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint4_linear_3051_46927`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_46927`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      ) : (
        <><g filter={`url(#${uid}-filter0_iii_3051_46927)`}>
<g clipPath={`url(#${uid}-clip0_3051_46927)`}>
<rect width="48" height="48" rx="12" fill="#2563EB"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_46927)`}/>
<g filter={`url(#${uid}-filter1_d_3051_46927)`}>
<path d="M24.5001 23.1948L37.4487 15.7241L24.5001 8.25L11.5513 15.7241L24.5001 23.1948Z" fill={`url(#${uid}-paint1_linear_3051_46927)`}/>
<path d="M23.5738 24.7989L10.625 17.3282V32.2759L23.5738 39.75V24.7989Z" fill={`url(#${uid}-paint2_linear_3051_46927)`}/>
<path opacity="0.5" d="M25.4277 24.7989V39.7499L38.3762 32.2759V17.3281L25.4277 24.7989Z" fill={`url(#${uid}-paint3_linear_3051_46927)`}/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint4_linear_3051_46927)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_46927`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_46927"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_46927" result="effect2_innerShadow_3051_46927"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_46927"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_46927" result="effect3_innerShadow_3051_46927"/>
</filter>
<filter id={`${uid}-filter1_d_3051_46927`} x="7.625" y="5.25" width="33.752" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_46927"/>
<feOffset dy="2.25"/>
<feGaussianBlur stdDeviation="2.25"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_46927"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_46927" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_46927`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_46927`} x1="24.0369" y1="8.25" x2="24.0369" y2="39.75" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_3051_46927`} x1="24.0369" y1="8.25" x2="24.0369" y2="39.75" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint3_linear_3051_46927`} x1="31.902" y1="17.3281" x2="31.902" y2="39.7499" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint4_linear_3051_46927`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_46927`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      )}
    </svg>
  );
});
Hexahedron.displayName = "Hexahedron";
