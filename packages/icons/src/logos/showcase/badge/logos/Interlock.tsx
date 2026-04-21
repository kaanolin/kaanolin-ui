// [logo-showcase] generated from source/icons/Logos/
import { forwardRef, useId } from "react";
import type { LogoProps } from "../../../../types";

export const Interlock = forwardRef<SVGSVGElement, LogoProps>(function Interlock(
  { size, mode = "light", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const viewBox = mode === "dark" ? "0 0 165 48" : "0 0 165 48";
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
        <><g filter={`url(#${uid}-filter0_iii_3046_38770)`}>
<g clipPath={`url(#${uid}-clip0_3046_38770)`}>
<rect width="48" height="48" rx="12" fill="#7C3AED"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3046_38770)`}/>
<g filter={`url(#${uid}-filter1_d_3046_38770)`}>
<path d="M21.8203 8.1814C27.4705 8.468 32.0396 12.8408 32.6387 18.4031C36.0778 20.3859 38.3935 24.0993 38.3936 28.3542L38.3789 28.9451C38.0712 35.01 33.0564 39.8326 26.915 39.8328L26.3242 39.8181C20.6728 39.5317 16.1008 35.1583 15.5029 29.5945C12.2252 27.7039 9.96782 24.2423 9.76465 20.2371L9.75 19.6462C9.75 13.3065 14.8897 8.16675 21.2295 8.16675L21.8203 8.1814ZM32.4326 22.1394C31.2937 27.2797 26.7125 31.1246 21.2295 31.1248L20.6387 31.1101C20.0823 31.0819 19.5366 31.0136 19.0039 30.9089C20.0819 34.2497 23.2156 36.6667 26.915 36.6667C31.5056 36.6665 35.2274 32.9448 35.2275 28.3542C35.2275 25.8815 34.1465 23.662 32.4326 22.1394ZM26.915 20.0417C22.5971 20.0417 19.0483 23.3344 18.6416 27.5457C19.4563 27.8124 20.3257 27.9587 21.2295 27.9587C25.5476 27.9586 29.0956 24.6655 29.502 20.4539C28.6877 20.1874 27.8184 20.0418 26.915 20.0417ZM21.2295 11.3337C16.6386 11.3337 12.917 15.0554 12.917 19.6462C12.9171 22.118 13.9973 24.3365 15.71 25.8591C16.8496 20.7194 21.4324 16.8748 26.915 16.8748L27.5059 16.8894C28.0618 16.9176 28.6073 16.986 29.1396 17.0906C28.0613 13.7505 24.9284 11.3339 21.2295 11.3337Z" fill={`url(#${uid}-paint1_linear_3046_38770)`}/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint2_linear_3046_38770)`} strokeWidth="2"/>
</g>
<path d="M117.548 33V12.033H121.579V33H117.548Z" fill="white"/>
<path d="M60 33V12.7H64.379V33H60Z" fill="white"/>
<path d="M66.5903 33V18.384H70.6503V20.414C71.4623 18.993 73.0863 18.152 75.0873 18.152C78.3933 18.152 80.5392 20.53 80.5392 23.894V33H76.4792V24.793C76.4792 23.024 75.3483 21.748 73.6663 21.748C71.8973 21.748 70.6503 23.111 70.6503 24.996V33H66.5903Z" fill="white"/>
<path d="M87.8004 14.063H83.7694V18.384H80.9564V21.748H83.7694V27.693C83.7694 31.086 85.9444 33 89.3084 33H91.7154V29.607H89.8594C88.5544 29.607 87.8004 28.94 87.8004 27.519V21.748H91.7154V18.384H87.8004V14.063Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M102.25 28.041H106.194C105.614 31.202 102.83 33.232 99.2343 33.232C94.2753 33.232 91.7233 29.346 91.7233 25.663C91.7233 21.951 93.9853 18.152 98.9443 18.152C104.106 18.152 106.165 21.951 106.165 25.286C106.165 25.837 106.136 26.272 106.107 26.591H95.6093C95.8993 28.65 97.2043 29.926 99.2343 29.926C100.858 29.926 101.931 29.288 102.25 28.041ZM98.9443 21.11C97.1173 21.11 96.0153 22.009 95.6673 24.039H102.134C102.018 22.415 100.887 21.11 98.9443 21.11Z" fill="white"/>
<path d="M114.193 21.748H116.6V18.384H114.947C113.178 18.384 112.076 18.993 111.293 20.82V18.384H107.233V33H111.293V25.895C111.293 23.401 112.192 21.748 114.193 21.748Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M122.851 25.692C122.851 30.042 126.07 33.232 130.565 33.232C132.872 33.232 134.843 32.3914 136.215 30.9847C137.538 32.382 139.451 33.232 141.755 33.232C145.554 33.232 148.57 30.796 149.005 27.548H144.887C144.597 28.853 143.408 29.752 141.929 29.752C139.725 29.752 138.42 28.07 138.42 25.692C138.42 23.314 139.696 21.603 141.871 21.603C143.35 21.603 144.597 22.56 144.829 23.865H148.889C148.628 20.472 145.583 18.152 141.755 18.152C139.451 18.152 137.538 19.0019 136.215 20.3992C134.843 18.9926 132.872 18.152 130.565 18.152C126.07 18.152 122.851 21.342 122.851 25.692ZM134.216 25.5257C134.151 23.181 132.69 21.603 130.565 21.603C128.39 21.603 126.911 23.256 126.911 25.692C126.911 28.099 128.39 29.752 130.565 29.752C132.69 29.752 134.15 28.1742 134.216 25.8571C134.215 25.8022 134.215 25.7472 134.215 25.692C134.215 25.6364 134.215 25.5809 134.216 25.5257Z" fill="white"/>
<path d="M155.811 26.823L159.958 33H164.83L158.537 24.126L164.366 18.384H159.262L154.187 23.372V12.033H150.127V33H154.187V28.418L155.811 26.823Z" fill="white"/>
<defs>
<filter id={`${uid}-filter0_iii_3046_38770`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3046_38770"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3046_38770" result="effect2_innerShadow_3046_38770"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3046_38770"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3046_38770" result="effect3_innerShadow_3046_38770"/>
</filter>
<filter id={`${uid}-filter1_d_3046_38770`} x="6.58333" y="4.20833" width="34.9779" height="44.3333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.58333" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3046_38770"/>
<feOffset dy="2.375"/>
<feGaussianBlur stdDeviation="2.375"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3046_38770"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3046_38770" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3046_38770`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3046_38770`} x1="24.0718" y1="8.16675" x2="24.0718" y2="39.8328" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_3046_38770`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3046_38770`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      ) : (
        <><g filter={`url(#${uid}-filter0_iii_3046_38770)`}>
<g clipPath={`url(#${uid}-clip0_3046_38770)`}>
<rect width="48" height="48" rx="12" fill="#7C3AED"/>
<rect width="48" height="48" fill={`url(#${uid}-paint0_linear_3046_38770)`}/>
<g filter={`url(#${uid}-filter1_d_3046_38770)`}>
<path d="M21.8203 8.1814C27.4705 8.468 32.0396 12.8408 32.6387 18.4031C36.0778 20.3859 38.3935 24.0993 38.3936 28.3542L38.3789 28.9451C38.0712 35.01 33.0564 39.8326 26.915 39.8328L26.3242 39.8181C20.6728 39.5317 16.1008 35.1583 15.5029 29.5945C12.2252 27.7039 9.96782 24.2423 9.76465 20.2371L9.75 19.6462C9.75 13.3065 14.8897 8.16675 21.2295 8.16675L21.8203 8.1814ZM32.4326 22.1394C31.2937 27.2797 26.7125 31.1246 21.2295 31.1248L20.6387 31.1101C20.0823 31.0819 19.5366 31.0136 19.0039 30.9089C20.0819 34.2497 23.2156 36.6667 26.915 36.6667C31.5056 36.6665 35.2274 32.9448 35.2275 28.3542C35.2275 25.8815 34.1465 23.662 32.4326 22.1394ZM26.915 20.0417C22.5971 20.0417 19.0483 23.3344 18.6416 27.5457C19.4563 27.8124 20.3257 27.9587 21.2295 27.9587C25.5476 27.9586 29.0956 24.6655 29.502 20.4539C28.6877 20.1874 27.8184 20.0418 26.915 20.0417ZM21.2295 11.3337C16.6386 11.3337 12.917 15.0554 12.917 19.6462C12.9171 22.118 13.9973 24.3365 15.71 25.8591C16.8496 20.7194 21.4324 16.8748 26.915 16.8748L27.5059 16.8894C28.0618 16.9176 28.6073 16.986 29.1396 17.0906C28.0613 13.7505 24.9284 11.3339 21.2295 11.3337Z" fill={`url(#${uid}-paint1_linear_3046_38770)`}/>
</g>
</g>
<rect x="1" y="1" width="46" height="46" rx="11" stroke={`url(#${uid}-paint2_linear_3046_38770)`} strokeWidth="2"/>
</g>
<path d="M117.548 33V12.033H121.579V33H117.548Z" fill="#0A0A0A"/>
<path d="M60 33V12.7H64.379V33H60Z" fill="#0A0A0A"/>
<path d="M66.5903 33V18.384H70.6503V20.414C71.4623 18.993 73.0863 18.152 75.0873 18.152C78.3933 18.152 80.5392 20.53 80.5392 23.894V33H76.4792V24.793C76.4792 23.024 75.3483 21.748 73.6663 21.748C71.8973 21.748 70.6503 23.111 70.6503 24.996V33H66.5903Z" fill="#0A0A0A"/>
<path d="M87.8004 14.063H83.7694V18.384H80.9564V21.748H83.7694V27.693C83.7694 31.086 85.9444 33 89.3084 33H91.7154V29.607H89.8594C88.5544 29.607 87.8004 28.94 87.8004 27.519V21.748H91.7154V18.384H87.8004V14.063Z" fill="#0A0A0A"/>
<path fillRule="evenodd" clipRule="evenodd" d="M102.25 28.041H106.194C105.614 31.202 102.83 33.232 99.2343 33.232C94.2753 33.232 91.7233 29.346 91.7233 25.663C91.7233 21.951 93.9853 18.152 98.9443 18.152C104.106 18.152 106.165 21.951 106.165 25.286C106.165 25.837 106.136 26.272 106.107 26.591H95.6093C95.8993 28.65 97.2043 29.926 99.2343 29.926C100.858 29.926 101.931 29.288 102.25 28.041ZM98.9443 21.11C97.1173 21.11 96.0153 22.009 95.6673 24.039H102.134C102.018 22.415 100.887 21.11 98.9443 21.11Z" fill="#0A0A0A"/>
<path d="M114.193 21.748H116.6V18.384H114.947C113.178 18.384 112.076 18.993 111.293 20.82V18.384H107.233V33H111.293V25.895C111.293 23.401 112.192 21.748 114.193 21.748Z" fill="#0A0A0A"/>
<path fillRule="evenodd" clipRule="evenodd" d="M122.851 25.692C122.851 30.042 126.07 33.232 130.565 33.232C132.872 33.232 134.843 32.3914 136.215 30.9847C137.538 32.382 139.451 33.232 141.755 33.232C145.554 33.232 148.57 30.796 149.005 27.548H144.887C144.597 28.853 143.408 29.752 141.929 29.752C139.725 29.752 138.42 28.07 138.42 25.692C138.42 23.314 139.696 21.603 141.871 21.603C143.35 21.603 144.597 22.56 144.829 23.865H148.889C148.628 20.472 145.583 18.152 141.755 18.152C139.451 18.152 137.538 19.0019 136.215 20.3992C134.843 18.9926 132.872 18.152 130.565 18.152C126.07 18.152 122.851 21.342 122.851 25.692ZM134.216 25.5257C134.151 23.181 132.69 21.603 130.565 21.603C128.39 21.603 126.911 23.256 126.911 25.692C126.911 28.099 128.39 29.752 130.565 29.752C132.69 29.752 134.15 28.1742 134.216 25.8571C134.215 25.8022 134.215 25.7472 134.215 25.692C134.215 25.6364 134.215 25.5809 134.216 25.5257Z" fill="#0A0A0A"/>
<path d="M155.811 26.823L159.958 33H164.83L158.537 24.126L164.366 18.384H159.262L154.187 23.372V12.033H150.127V33H154.187V28.418L155.811 26.823Z" fill="#0A0A0A"/>
<defs>
<filter id={`${uid}-filter0_iii_3046_38770`} x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3046_38770"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_3046_38770" result="effect2_innerShadow_3046_38770"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3046_38770"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3046_38770" result="effect3_innerShadow_3046_38770"/>
</filter>
<filter id={`${uid}-filter1_d_3046_38770`} x="6.58333" y="4.20833" width="34.9779" height="44.3333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.58333" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3046_38770"/>
<feOffset dy="2.375"/>
<feGaussianBlur stdDeviation="2.375"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3046_38770"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3046_38770" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_3046_38770`} x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.12"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_3046_38770`} x1="24.0718" y1="8.16675" x2="24.0718" y2="39.8328" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0.5"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_3046_38770`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.12"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_3046_38770`}>
<rect width="48" height="48" rx="12" fill="white"/>
</clipPath>
</defs></>
      )}
    </svg>
  );
});
Interlock.displayName = "Interlock";
