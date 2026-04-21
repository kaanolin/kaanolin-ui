// [brand] generated from plugin-misc-icons.json
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../../types";

export const MsPowerpoint = forwardRef<SVGSVGElement, IconBaseProps>(function MsPowerpoint(
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
      <circle cx="17" cy="16" r="14" fill={`url(#${uid}-paint0_linear_1334_1235)`}/>
<mask id={`${uid}-mask0_1334_1235`} style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="3" y="2" width="28" height="28">
<circle cx="17" cy="16" r="14" fill="#C4C4C4"/>
</mask>
<g mask={`url(#${uid}-mask0_1334_1235)`}>
<rect x="18" width="17" height="17" fill={`url(#${uid}-paint1_linear_1334_1235)`}/>
<path d="M6 12C6 10.3431 7.34315 9 9 9H17C18.6569 9 20 10.3431 20 12V24C20 25.6569 18.6569 27 17 27H6V12Z" fill="black" fillOpacity="0.3"/>
<rect x="1" width="17" height="17" fill="#EB6C4D"/>
</g>
<rect y="7" width="18" height="18" rx="2" fill={`url(#${uid}-paint2_linear_1334_1235)`}/>
<path d="M13 14.4571C13 12.3 11.5799 11 9.32787 11H6V21H8.06557V17.9571H9.2418C11.3504 17.9571 13 16.7571 13 14.4571ZM10.9057 14.5C10.9057 15.4714 10.2889 16.1 9.28484 16.1H8.06557V12.8714H9.27049C10.2746 12.8714 10.9057 13.4 10.9057 14.5Z" fill="white"/>
<defs>
<linearGradient id={`${uid}-paint0_linear_1334_1235`} x1="3" y1="17.931" x2="31" y2="17.931" gradientUnits="userSpaceOnUse">
<stop stopColor="#A73A24"/>
<stop offset="1" stopColor="#F75936"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_1334_1235`} x1="31.5" y1="10" x2="18" y2="10" gradientUnits="userSpaceOnUse">
<stop stopColor="#FDB8A3"/>
<stop offset="1" stopColor="#F1876D"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_1334_1235`} x1="7.38325e-08" y1="17.2414" x2="18" y2="17.2414" gradientUnits="userSpaceOnUse">
<stop stopColor="#A73A24"/>
<stop offset="1" stopColor="#F75936"/>
</linearGradient>
</defs>
    </svg>
  );
});
MsPowerpoint.displayName = "MsPowerpoint";
