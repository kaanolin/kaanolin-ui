// [logo-showcase] generated from source/icons/Logos/
import { forwardRef, useId } from "react";
import type { LogoProps } from "../../../../types";

export const Stack3dLab = forwardRef<SVGSVGElement, LogoProps>(function Stack3dLab(
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
        <><g filter={`url(#${uid}-filter0_iii_3051_47013)`}>
<g clipPath={`url(#${uid}-clip0_3051_47013)`}>
<rect width="48" height="48" rx="12" fill="#2563EB"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_47013)`}/>
<g filter={`url(#${uid}-filter1_d_3051_47013)`}>
<path fillRule="evenodd" clipRule="evenodd" d="M29.8847 7.51041C30.2201 7.33547 30.6208 7.3407 30.9514 7.52435L38.5463 11.7431C38.9035 11.9415 39.125 12.318 39.125 12.7266L39.1245 21.1638C39.1244 21.5829 38.8914 21.9673 38.5199 22.1611L19.1147 32.2858C18.7794 32.4608 18.3786 32.4555 18.0479 32.2718L10.4551 28.0532C10.098 27.8548 9.87654 27.4785 9.87647 27.07L9.875 18.6327C9.87493 18.2135 10.1079 17.829 10.4796 17.6351L29.8847 7.51041ZM12.1251 19.3144L12.1261 25.2141L29.2815 16.2632L29.2805 10.3635L12.1251 19.3144ZM31.5305 10.4198L31.5315 16.2831L36.8746 19.2518L36.875 13.3885L31.5305 10.4198ZM35.6271 21.1326L30.3899 18.2227L13.3738 27.1009L18.6111 30.0108L35.6271 21.1326Z" fill={`url(#${uid}-paint1_linear_3051_47013)`}/>
<path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M19.1153 40.724C18.7799 40.8989 18.3792 40.8937 18.0486 40.71L10.4537 36.4913C10.0965 36.2928 9.87498 35.9163 9.87501 35.5077L9.87553 27.0706C9.87555 26.6515 10.1086 26.2671 10.4801 26.0732L29.8853 15.9485C30.2206 15.7736 30.6214 15.7788 30.9521 15.9625L38.5449 20.1812C38.902 20.3796 39.1235 20.7559 39.1235 21.1644L39.125 29.6017C39.1251 30.0209 38.8921 30.4053 38.5204 30.5992L19.1153 40.724ZM36.8749 28.92L36.8739 23.0203L19.7185 31.9712L19.7195 37.8708L36.8749 28.92ZM17.4695 37.8146L17.4685 31.9513L12.1254 28.9826L12.125 34.8458L17.4695 37.8146ZM13.3729 27.1018L18.6101 30.0116L35.6262 21.1335L30.3889 18.2236L13.3729 27.1018Z" fill={`url(#${uid}-paint2_linear_3051_47013)`}/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint3_linear_3051_47013)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_47013`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_47013"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_47013" result="effect2_innerShadow_3051_47013"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_47013"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_47013" result="effect3_innerShadow_3051_47013"/>
</filter>
<filter id={`${uid}-filter1_d_3051_47013`} x="6.875" y="5.25" width="35.25" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_47013"/>
<feOffset dy="2.25"/>
<feGaussianBlur stdDeviation="2.25"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_47013"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_47013" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_47013`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_47013`} x1="24.5" y1="8.50781" x2="24.5" y2="31.2884" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_3051_47013`} x1="24.5" y1="39.7266" x2="24.5" y2="16.9459" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint3_linear_3051_47013`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_47013`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      ) : (
        <><g filter={`url(#${uid}-filter0_iii_3051_47013)`}>
<g clipPath={`url(#${uid}-clip0_3051_47013)`}>
<rect width="48" height="48" rx="12" fill="#2563EB"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3051_47013)`}/>
<g filter={`url(#${uid}-filter1_d_3051_47013)`}>
<path fillRule="evenodd" clipRule="evenodd" d="M29.8847 7.51041C30.2201 7.33547 30.6208 7.3407 30.9514 7.52435L38.5463 11.7431C38.9035 11.9415 39.125 12.318 39.125 12.7266L39.1245 21.1638C39.1244 21.5829 38.8914 21.9673 38.5199 22.1611L19.1147 32.2858C18.7794 32.4608 18.3786 32.4555 18.0479 32.2718L10.4551 28.0532C10.098 27.8548 9.87654 27.4785 9.87647 27.07L9.875 18.6327C9.87493 18.2135 10.1079 17.829 10.4796 17.6351L29.8847 7.51041ZM12.1251 19.3144L12.1261 25.2141L29.2815 16.2632L29.2805 10.3635L12.1251 19.3144ZM31.5305 10.4198L31.5315 16.2831L36.8746 19.2518L36.875 13.3885L31.5305 10.4198ZM35.6271 21.1326L30.3899 18.2227L13.3738 27.1009L18.6111 30.0108L35.6271 21.1326Z" fill={`url(#${uid}-paint1_linear_3051_47013)`}/>
<path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M19.1153 40.724C18.7799 40.8989 18.3792 40.8937 18.0486 40.71L10.4537 36.4913C10.0965 36.2928 9.87498 35.9163 9.87501 35.5077L9.87553 27.0706C9.87555 26.6515 10.1086 26.2671 10.4801 26.0732L29.8853 15.9485C30.2206 15.7736 30.6214 15.7788 30.9521 15.9625L38.5449 20.1812C38.902 20.3796 39.1235 20.7559 39.1235 21.1644L39.125 29.6017C39.1251 30.0209 38.8921 30.4053 38.5204 30.5992L19.1153 40.724ZM36.8749 28.92L36.8739 23.0203L19.7185 31.9712L19.7195 37.8708L36.8749 28.92ZM17.4695 37.8146L17.4685 31.9513L12.1254 28.9826L12.125 34.8458L17.4695 37.8146ZM13.3729 27.1018L18.6101 30.0116L35.6262 21.1335L30.3889 18.2236L13.3729 27.1018Z" fill={`url(#${uid}-paint2_linear_3051_47013)`}/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint3_linear_3051_47013)`} strokeWidth="2"/>
</g>
<defs>
<filter id={`${uid}-filter0_iii_3051_47013`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_47013"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3051_47013" result="effect2_innerShadow_3051_47013"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_47013"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3051_47013" result="effect3_innerShadow_3051_47013"/>
</filter>
<filter id={`${uid}-filter1_d_3051_47013`} x="6.875" y="5.25" width="35.25" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_47013"/>
<feOffset dy="2.25"/>
<feGaussianBlur stdDeviation="2.25"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_47013"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_47013" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3051_47013`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3051_47013`} x1="24.5" y1="8.50781" x2="24.5" y2="31.2884" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_3051_47013`} x1="24.5" y1="39.7266" x2="24.5" y2="16.9459" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint3_linear_3051_47013`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3051_47013`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      )}
    </svg>
  );
});
Stack3dLab.displayName = "Stack3dLab";
