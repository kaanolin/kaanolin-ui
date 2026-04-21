// [brand] generated from plugin-misc-icons.json
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../../types";

export const JbDottrace = forwardRef<SVGSVGElement, IconBaseProps>(function JbDottrace(
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
      <g clipPath={`url(#${uid}-clip0_1334_1566)`}>
<path d="M30.7657 7.31429L19.9771 0L0 14.2171L5.07429 32L26.9257 27.5657L30.7657 7.31429Z" fill={`url(#${uid}-paint0_linear_1334_1566)`}/>
<path d="M30.7654 7.31429L19.9768 0L17.3711 7.17714V21.8514H31.9997L30.7654 7.31429Z" fill={`url(#${uid}-paint1_linear_1334_1566)`}/>
<path d="M6.125 6.12567H25.8736V25.8742H6.125V6.12567Z" fill="black"/>
<path d="M7.95312 22.1714H15.3588V23.4057H7.95312V22.1714Z" fill="white"/>
<path d="M7.95312 8.73138H11.1074C13.6674 8.73138 15.4503 10.4685 15.4503 12.8C15.4503 15.0857 13.6674 16.8685 11.1074 16.8685H7.95312V8.73138ZM9.7817 10.3771V15.2685H11.1531C12.616 15.2685 13.6217 14.2628 13.6217 12.8457V12.8C13.6217 11.3371 12.616 10.3314 11.1531 10.3314H9.7817V10.3771Z" fill="white"/>
<path d="M18.4217 10.3771H15.9531V8.73138H22.6731V10.3771H20.2046V16.9142H18.4217V10.3771Z" fill="white"/>
</g>
<defs>
<linearGradient id={`${uid}-paint0_linear_1334_1566`} x1="-0.608914" y1="19.9941" x2="30.6478" y2="11.9301" gradientUnits="userSpaceOnUse">
<stop offset="0.124" stopColor="#7866FF"/>
<stop offset="0.538" stopColor="#FE2EB6"/>
<stop offset="0.855" stopColor="#FD0486"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_1334_1566`} x1="20.9894" y1="17.7874" x2="30.929" y2="4.15954" gradientUnits="userSpaceOnUse">
<stop offset="0.124" stopColor="#FF0080"/>
<stop offset="0.259" stopColor="#FE0385"/>
<stop offset="0.411" stopColor="#FA0C92"/>
<stop offset="0.571" stopColor="#F41BA9"/>
<stop offset="0.736" stopColor="#EB2FC8"/>
<stop offset="0.866" stopColor="#E343E6"/>
</linearGradient>
<clipPath id={`${uid}-clip0_1334_1566`}>
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
});
JbDottrace.displayName = "JbDottrace";
