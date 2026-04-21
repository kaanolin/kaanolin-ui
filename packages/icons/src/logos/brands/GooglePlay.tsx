// [brand] generated from plugin-misc-icons.json
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../../types";

export const GooglePlay = forwardRef<SVGSVGElement, IconBaseProps>(function GooglePlay(
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
      <mask id={`${uid}-mask0_1334_1799`} style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="7" y="3" width="24" height="26">
<path d="M30.0484 14.4004C31.3172 15.0986 31.3172 16.9014 30.0484 17.5996L9.75627 28.7659C8.52052 29.4459 7 28.5634 7 27.1663L7 4.83374C7 3.43657 8.52052 2.55415 9.75627 3.23415L30.0484 14.4004Z" fill="#C4C4C4"/>
</mask>
<g mask={`url(#${uid}-mask0_1334_1799)`}>
<path d="M7.63473 28.5465L20.2923 15.8178L7.84319 3.29871C7.34653 3.61709 7 4.16678 7 4.83378V27.1663C7 27.7354 7.25223 28.219 7.63473 28.5465Z" fill={`url(#${uid}-paint0_linear_1334_1799)`}/>
<path d="M30.049 14.4004C31.3178 15.0986 31.3178 16.9014 30.049 17.5996L24.9297 20.4166L20.293 15.8176L24.6933 11.4532L30.049 14.4004Z" fill={`url(#${uid}-paint1_linear_1334_1799)`}/>
<path d="M24.9292 20.4166L20.2924 15.8176L7.63477 28.5464C8.19139 29.023 9.02389 29.1689 9.75635 28.7658L24.9292 20.4166Z" fill={`url(#${uid}-paint2_linear_1334_1799)`}/>
<path d="M7.84375 3.29865L20.2928 15.8177L24.6932 11.4533L9.7568 3.23415C9.111 2.87878 8.38743 2.95013 7.84375 3.29865Z" fill={`url(#${uid}-paint3_linear_1334_1799)`}/>
</g>
<defs>
<linearGradient id={`${uid}-paint0_linear_1334_1799`} x1="15.6769" y1="10.8739" x2="7.07106" y2="19.5505" gradientUnits="userSpaceOnUse">
<stop stopColor="#00C3FF"/>
<stop offset="1" stopColor="#1BE2FA"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_1334_1799`} x1="20.293" y1="15.8177" x2="31.7391" y2="15.8177" gradientUnits="userSpaceOnUse">
<stop stopColor="#FFCE00"/>
<stop offset="1" stopColor="#FFEA00"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_1334_1799`} x1="7.36932" y1="30.1002" x2="22.595" y2="17.8934" gradientUnits="userSpaceOnUse">
<stop stopColor="#DE2453"/>
<stop offset="1" stopColor="#FE3944"/>
</linearGradient>
<linearGradient id={`${uid}-paint3_linear_1334_1799`} x1="8.10823" y1="1.90137" x2="22.598" y2="13.7365" gradientUnits="userSpaceOnUse">
<stop stopColor="#11D574"/>
<stop offset="1" stopColor="#01F176"/>
</linearGradient>
</defs>
    </svg>
  );
});
GooglePlay.displayName = "GooglePlay";
