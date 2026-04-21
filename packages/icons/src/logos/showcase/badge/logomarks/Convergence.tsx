// [logo-showcase] generated from source/icons/Logos/
import { forwardRef, useId } from "react";
import type { LogoProps } from "../../../../types";

export const Convergence = forwardRef<SVGSVGElement, LogoProps>(function Convergence(
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
        <><g filter={`url(#${uid}-filter0_iii_3051_46883)`}>
<g clipPath={`url(#${uid}-clip0_3051_46883)`}>
<rect width="48" height="48" rx="12" fill="#22262F"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_46883)`}/>
<g filter={`url(#${uid}-filter1_d_3051_46883)`}>
<path fillRule="evenodd" clipRule="evenodd" d="M24.036 22.2674L33.1697 13.1337L31.4019 11.3659L25.2859 17.482V6.49976H22.7861V17.482L16.6701 11.3659L14.9023 13.1337L24.036 22.2674ZM25.8018 24.0347L34.9355 14.901L36.7033 16.6688L30.5872 22.7848H41.5004V25.2846H30.5872L36.7033 31.4006L34.9355 33.1684L25.8018 24.0347ZM13.1345 33.1684L22.2682 24.0347L13.1345 14.901L11.3668 16.6688L17.4828 22.7848H6.50195V25.2846H17.4828L11.3668 31.4006L13.1345 33.1684ZM24.036 25.802L14.9023 34.9357L16.6701 36.7035L22.7854 30.5881V41.4999L24.036 41.5006L25.2866 41.4999L25.2859 30.5874L31.4019 36.7035L33.1697 34.9357L24.036 25.802Z" fill={`url(#${uid}-paint1_linear_3051_46883)`}/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint2_linear_3051_46883)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_46883`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_46883"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_46883" result="effect2_innerShadow_3051_46883"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_46883"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_46883" result="effect3_innerShadow_3051_46883"/>
</filter>
<filter id={`${uid}-filter1_d_3051_46883`} x="3.16667" y="3.16667" width="41.6667" height="46.6667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.66667" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_46883"/>
<feOffset dy="2.5"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_46883"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_46883" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_46883`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_46883`} x1="24.0012" y1="6.49976" x2="24.0012" y2="41.5006" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_3051_46883`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_46883`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      ) : (
        <><g filter={`url(#${uid}-filter0_iii_3051_46883)`}>
<g clipPath={`url(#${uid}-clip0_3051_46883)`}>
<rect width="48" height="48" rx="12" fill="#0A0A0A"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_46883)`}/>
<g filter={`url(#${uid}-filter1_d_3051_46883)`}>
<path fillRule="evenodd" clipRule="evenodd" d="M24.036 22.2674L33.1697 13.1337L31.4019 11.3659L25.2859 17.482V6.49976H22.7861V17.482L16.6701 11.3659L14.9023 13.1337L24.036 22.2674ZM25.8018 24.0347L34.9355 14.901L36.7033 16.6688L30.5872 22.7848H41.5004V25.2846H30.5872L36.7033 31.4006L34.9355 33.1684L25.8018 24.0347ZM13.1345 33.1684L22.2682 24.0347L13.1345 14.901L11.3668 16.6688L17.4828 22.7848H6.50195V25.2846H17.4828L11.3668 31.4006L13.1345 33.1684ZM24.036 25.802L14.9023 34.9357L16.6701 36.7035L22.7854 30.5881V41.4999L24.036 41.5006L25.2866 41.4999L25.2859 30.5874L31.4019 36.7035L33.1697 34.9357L24.036 25.802Z" fill={`url(#${uid}-paint1_linear_3051_46883)`}/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint2_linear_3051_46883)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_46883`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_46883"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_46883" result="effect2_innerShadow_3051_46883"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_46883"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_46883" result="effect3_innerShadow_3051_46883"/>
</filter>
<filter id={`${uid}-filter1_d_3051_46883`} x="3.16667" y="3.16667" width="41.6667" height="46.6667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.66667" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_46883"/>
<feOffset dy="2.5"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_46883"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_46883" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_46883`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_46883`} x1="24.0012" y1="6.49976" x2="24.0012" y2="41.5006" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_3051_46883`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_46883`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      )}
    </svg>
  );
});
Convergence.displayName = "Convergence";
