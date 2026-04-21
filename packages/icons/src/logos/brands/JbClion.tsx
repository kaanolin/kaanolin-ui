// [brand] generated from plugin-misc-icons.json
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../../types";

export const JbClion = forwardRef<SVGSVGElement, IconBaseProps>(function JbClion(
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
      <g clipPath={`url(#${uid}-clip0_1334_1430)`}>
<path d="M12.2962 12.9829L10.1934 13.8514L12.0676 0L19.4734 4.02286L12.2962 12.9829Z" fill={`url(#${uid}-paint0_linear_1334_1430)`}/>
<path d="M11.1086 19.2L12.2057 0L2.97143 5.80572L0 23.5429L11.1086 19.2Z" fill={`url(#${uid}-paint1_linear_1334_1430)`}/>
<path d="M31.36 9.60003L27.2457 1.23431L19.4743 4.02289L13.76 10.3772L0 23.5429L10.3771 31.0857L23.4057 19.3372L31.36 9.60003Z" fill={`url(#${uid}-paint2_linear_1334_1430)`}/>
<path d="M13.4391 13.6686L11.6562 24.64L18.9705 30.2629L26.9705 32L31.9991 20.5714L13.4391 13.6686Z" fill={`url(#${uid}-paint3_linear_1334_1430)`}/>
<path d="M6.125 6.12567H25.8736V25.8742H6.125V6.12567Z" fill="black"/>
<path d="M8 22.1714H15.4057V23.4057H8V22.1714Z" fill="white"/>
<path d="M7.86133 12.8457C7.86133 10.5142 9.59847 8.59424 12.1128 8.59424C13.667 8.59424 14.5813 9.0971 15.3585 9.87424L14.2156 11.2C13.5756 10.6057 12.9356 10.2857 12.1128 10.2857C10.7413 10.2857 9.73561 11.4285 9.73561 12.8457V12.8C9.73561 14.2171 10.6956 15.36 12.1128 15.36C13.027 15.36 13.6213 14.9942 14.2613 14.4L15.4042 15.5428C14.5813 16.4571 13.6213 17.0057 12.067 17.0057C9.64418 17.0514 7.86133 15.1771 7.86133 12.8457Z" fill="white"/>
<path d="M16.6387 8.73138H18.4215V15.4057H21.9872V16.9142H16.6387V8.73138Z" fill="white"/>
</g>
<defs>
<linearGradient id={`${uid}-paint0_linear_1334_1430`} x1="10.1723" y1="6.91977" x2="20.8695" y2="6.91977" gradientUnits="userSpaceOnUse">
<stop stopColor="#ED358C"/>
<stop offset="0.155" stopColor="#E9388C"/>
<stop offset="0.297" stopColor="#DE418C"/>
<stop offset="0.433" stopColor="#CC508C"/>
<stop offset="0.566" stopColor="#B2658D"/>
<stop offset="0.697" stopColor="#90808D"/>
<stop offset="0.826" stopColor="#67A18E"/>
<stop offset="0.951" stopColor="#37C78F"/>
<stop offset="1" stopColor="#22D88F"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_1334_1430`} x1="8.13714" y1="4.10606" x2="3.43086" y2="35.6869" gradientUnits="userSpaceOnUse">
<stop offset="0.091" stopColor="#22D88F"/>
<stop offset="0.903" stopColor="#029DE0"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_1334_1430`} x1="29.1822" y1="2.9678" x2="-3.00937" y2="36.9669" gradientUnits="userSpaceOnUse">
<stop offset="0.091" stopColor="#22D88F"/>
<stop offset="0.903" stopColor="#029DE0"/>
</linearGradient>
<linearGradient id={`${uid}-paint3_linear_1334_1430`} x1="18.3369" y1="22.5673" x2="30.5705" y2="24.3068" gradientUnits="userSpaceOnUse">
<stop offset="0.091" stopColor="#22D88F"/>
<stop offset="0.903" stopColor="#029DE0"/>
</linearGradient>
<clipPath id={`${uid}-clip0_1334_1430`}>
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
});
JbClion.displayName = "JbClion";
