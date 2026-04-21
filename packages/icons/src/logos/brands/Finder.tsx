// [brand] generated from plugin-misc-icons.json
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../../types";

export const Finder = forwardRef<SVGSVGElement, IconBaseProps>(function Finder(
  { size = 24, title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <g filter={`url(#${uid}-filter0_d_1334_1299)`}>
<rect x="2" y="4" width="28" height="24" rx="1" fill="#283544"/>
</g>
<path fillRule="evenodd" clipRule="evenodd" d="M17.2142 4H29.1538C29.5764 4 29.8934 4.28916 29.9991 4.77108V27.2289C29.9991 27.6145 29.5764 28 29.1538 28H19.433C19.0104 26.6506 18.7991 25.3012 18.5877 23.9518C21.1236 23.4699 23.4481 22.3133 25.033 20.4819C25.5613 19.7108 24.6104 19.2289 24.1877 19.7108C23.0255 21.4458 20.8066 22.506 18.4821 22.8916C18.1651 19.0361 18.4821 15.9518 18.4821 15.9518H14.3613C14.3613 15.9518 14.3613 9.78313 17.2142 4ZM22.4972 13.0602C23.0255 13.0602 23.3425 12.6747 23.3425 12.2892V10.747C23.3425 10.2651 22.9198 9.9759 22.4972 9.9759C21.9689 9.9759 21.6519 10.3614 21.6519 10.747V12.2892C21.6519 12.7711 22.0745 13.0602 22.4972 13.0602Z" fill={`url(#${uid}-paint0_linear_1334_1299)`}/>
<path fillRule="evenodd" clipRule="evenodd" d="M15.9472 24.1446C12.4604 24.1446 8.97359 22.8916 6.86038 20.4819C6.33208 19.7108 7.28302 19.2289 7.70566 19.7108C9.39623 21.9277 12.6717 23.0843 15.9472 23.0843C16.7031 23.0843 17.6377 22.988 17.6377 22.988C17.3208 20.2892 17.4264 17.8795 17.5321 16.7229H13.517V15.9518C13.517 15.9518 13.517 9.78313 16.3698 4H2.84528C2.31698 4 2 4.38554 2 4.77108V27.2289C2 27.6145 2.42264 28 2.84528 28H18.5C18.4499 27.7896 18.3998 27.5851 18.3503 27.3836C18.0923 26.3309 17.8539 25.3585 17.7434 24.0482C17.7434 24.0482 16.5156 24.1446 15.9472 24.1446ZM9.39623 9.9759C8.86793 9.9759 8.55094 10.3614 8.55094 10.747V12.2892C8.55094 12.6747 8.97359 12.9639 9.39623 12.9639C9.81887 12.9639 10.2415 12.6747 10.2415 12.2892V10.747C10.2415 10.3614 9.92453 9.9759 9.39623 9.9759Z" fill={`url(#${uid}-paint1_linear_1334_1299)`}/>
<defs>
<filter id={`${uid}-filter0_d_1334_1299`} x="1" y="3.5" width="30" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.5"/>
<feGaussianBlur stdDeviation="0.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1334_1299"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1334_1299" result="shape"/>
</filter>
<linearGradient id={`${uid}-paint0_linear_1334_1299`} x1="22.1802" y1="4" x2="22.1802" y2="28" gradientUnits="userSpaceOnUse">
<stop stopColor="#F7F6F7"/>
<stop offset="1" stopColor="#D9E4F0"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_1334_1299`} x1="10.25" y1="4" x2="10.25" y2="28" gradientUnits="userSpaceOnUse">
<stop stopColor="#2FD4FB"/>
<stop offset="1" stopColor="#2777EE"/>
</linearGradient>
</defs>
    </svg>
  );
});
Finder.displayName = "Finder";
