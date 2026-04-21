// [brand] generated from plugin-misc-icons.json
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../../types";

export const JbDotcover = forwardRef<SVGSVGElement, IconBaseProps>(function JbDotcover(
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
      <g clipPath={`url(#${uid}-clip0_1334_1536)`}>
<path d="M19.5657 0L0 2.19429V12.2514L4.89143 28.6171L29.5314 22.3543L19.5657 0Z" fill={`url(#${uid}-paint0_linear_1334_1536)`}/>
<path d="M32.0009 18.8801L30.1266 10.1486L25.9209 15.9543L22.9952 24.7772L22.0352 32.0001L29.258 27.4286L32.0009 18.8801Z" fill={`url(#${uid}-paint1_linear_1334_1536)`}/>
<path d="M30.1252 10.1486L23.9995 7.22284L16.8224 7.86284L9.78238 12.7543L8.36523 21.5314L14.5367 29.9428L22.0338 32L30.1252 10.1486Z" fill={`url(#${uid}-paint2_linear_1334_1536)`}/>
<path d="M6.125 6.12567H25.8736V25.8742H6.125V6.12567Z" fill="black"/>
<path d="M8 8.73138H11.2C13.76 8.73138 15.5429 10.5142 15.5429 12.8V12.8457C15.5429 15.1314 13.76 16.9142 11.2 16.9142H8V8.73138ZM9.78286 10.3771V15.3142H11.1543C12.6171 15.3142 13.6229 14.3085 13.6229 12.8914V12.8457C13.6229 11.3828 12.6171 10.3771 11.1543 10.3771H9.78286Z" fill="white"/>
<path d="M8 22.1714H15.4057V23.4057H8V22.1714Z" fill="white"/>
<path d="M16.1836 12.8457C16.1836 10.5142 17.9207 8.59424 20.435 8.59424C21.9893 8.59424 22.9036 9.0971 23.6807 9.87424L22.5379 11.2C21.8979 10.6057 21.2579 10.2857 20.435 10.2857C19.0636 10.2857 18.0579 11.4285 18.0579 12.8457V12.8914C18.0579 14.3085 19.0179 15.4514 20.435 15.4514C21.3493 15.4514 21.9436 15.0857 22.5836 14.4914L23.7264 15.6342C22.9036 16.5485 21.9436 17.0971 20.3893 17.0971C18.0122 17.0514 16.1836 15.2228 16.1836 12.8457Z" fill="white"/>
</g>
<defs>
<linearGradient id={`${uid}-paint0_linear_1334_1536`} x1="16.9367" y1="25.4341" x2="10.7694" y2="2.47863" gradientUnits="userSpaceOnUse">
<stop offset="0.048" stopColor="#7866FF"/>
<stop offset="0.135" stopColor="#8265FA"/>
<stop offset="0.281" stopColor="#9C64EE"/>
<stop offset="0.467" stopColor="#C661D9"/>
<stop offset="0.608" stopColor="#EB5FC7"/>
<stop offset="0.729" stopColor="#FA6398"/>
<stop offset="0.769" stopColor="#FF6488"/>
<stop offset="0.995" stopColor="#FF7500"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_1334_1536`} x1="31.594" y1="23.0634" x2="26.1353" y2="21.089" gradientUnits="userSpaceOnUse">
<stop offset="0.247" stopColor="#7866FF"/>
<stop offset="0.346" stopColor="#8F5FFA"/>
<stop offset="0.531" stopColor="#B353F1"/>
<stop offset="0.705" stopColor="#CD4AEB"/>
<stop offset="0.859" stopColor="#DD45E7"/>
<stop offset="0.979" stopColor="#E343E6"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_1334_1536`} x1="26.0622" y1="21.4126" x2="10.8475" y2="15.0249" gradientUnits="userSpaceOnUse">
<stop offset="0.006" stopColor="#E343E6"/>
<stop offset="0.064" stopColor="#E649CA"/>
<stop offset="0.19" stopColor="#EF5982"/>
<stop offset="0.372" stopColor="#FD7110"/>
<stop offset="0.398" stopColor="#FF7500"/>
</linearGradient>
<clipPath id={`${uid}-clip0_1334_1536`}>
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
});
JbDotcover.displayName = "JbDotcover";
