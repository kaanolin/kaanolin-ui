// [brand] generated from plugin-misc-icons.json
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../../types";

export const JbToolboxApp = forwardRef<SVGSVGElement, IconBaseProps>(function JbToolboxApp(
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
      <g clipPath={`url(#${uid}-clip0_1334_1665)`}>
<path d="M16 32.076L30 24.065V8.05701L16 16.067V32.076Z" fill="#000001"/>
<path d="M19 24.5556V27L25 23.4444V21L19 24.5556Z" fill="white"/>
<path d="M16 0.0759888L2 8.05699V24.065L16 32.076V16.067L30 8.05699L16 0.0759888Z" fill={`url(#${uid}-paint0_linear_1334_1665)`}/>
</g>
<defs>
<linearGradient id={`${uid}-paint0_linear_1334_1665`} x1="2.18" y1="23.255" x2="30.041" y2="8.78199" gradientUnits="userSpaceOnUse">
<stop offset="0.043" stopColor="#FF8618"/>
<stop offset="0.382" stopColor="#FF246E"/>
<stop offset="0.989" stopColor="#AF1DF5"/>
</linearGradient>
<clipPath id={`${uid}-clip0_1334_1665`}>
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
});
JbToolboxApp.displayName = "JbToolboxApp";
