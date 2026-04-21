// [brand] generated from plugin-misc-icons.json
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../../types";

export const JbDotmemory = forwardRef<SVGSVGElement, IconBaseProps>(function JbDotmemory(
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
      <g clipPath={`url(#${uid}-clip0_1334_1546)`}>
<path d="M3.65635 29.76L0.0449219 17.1886L23.6335 20.6629L20.2506 32L3.65635 29.76Z" fill={`url(#${uid}-paint0_linear_1334_1546)`}/>
<path d="M10.7421 0.0457143L19.245 2.46857L28.8907 0L31.9993 21.1657L6.125 17.1886L10.7421 0.0457143Z" fill={`url(#${uid}-paint1_linear_1334_1546)`}/>
<path d="M32 21.0743L30.7657 13.2114L11.7029 6.58282L0.0457143 9.09711L0 17.2343L22.6743 23.4514L32 21.0743Z" fill={`url(#${uid}-paint2_linear_1334_1546)`}/>
<path d="M6.125 6.12567H25.8736V25.8742H6.125V6.12567Z" fill="black"/>
<path d="M7.95312 22.1714H15.3588V23.4057H7.95312V22.1714Z" fill="white"/>
<path d="M7.95312 8.68567H11.1074C13.6674 8.68567 15.4503 10.4685 15.4503 12.7542V12.8C15.4503 15.0857 13.6674 16.9142 11.1074 16.9142H7.95312V8.68567ZM9.73598 10.3314V15.2685H11.0617C12.5246 15.2685 13.5303 14.2628 13.5303 12.8C13.5303 11.3371 12.5246 10.3314 11.0617 10.3314H9.73598Z" fill="white"/>
<path d="M15.9082 8.73138H17.8739L19.9768 12.16L22.1253 8.73138H24.0453V16.8685H22.2625V11.52L19.9768 14.9942H19.9311L17.6911 11.5657V16.8685H15.9082V8.73138Z" fill="white"/>
</g>
<defs>
<linearGradient id={`${uid}-paint0_linear_1334_1546`} x1="9.36012" y1="8.58608" x2="14.8399" y2="31.5237" gradientUnits="userSpaceOnUse">
<stop stopColor="#7866FF"/>
<stop offset="0.023" stopColor="#7E64FE"/>
<stop offset="0.195" stopColor="#AA56F3"/>
<stop offset="0.349" stopColor="#C94CEC"/>
<stop offset="0.48" stopColor="#DC45E8"/>
<stop offset="0.57" stopColor="#E343E6"/>
<stop offset="0.641" stopColor="#E859BC"/>
<stop offset="0.819" stopColor="#F48F58"/>
<stop offset="0.942" stopColor="#FCB019"/>
<stop offset="1" stopColor="#FFBD00"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_1334_1546`} x1="22.5904" y1="18.949" x2="14.957" y2="3.43588" gradientUnits="userSpaceOnUse">
<stop stopColor="#7866FF"/>
<stop offset="0.202" stopColor="#965CF8"/>
<stop offset="0.64" stopColor="#E343E6"/>
<stop offset="0.968" stopColor="#FFBD00"/>
</linearGradient>
<linearGradient id={`${uid}-paint2_linear_1334_1546`} x1="12.0471" y1="24.5047" x2="16.5531" y2="13.8157" gradientUnits="userSpaceOnUse">
<stop offset="0.118" stopColor="#E343E6"/>
<stop offset="0.211" stopColor="#C84CEC"/>
<stop offset="0.338" stopColor="#AB55F3"/>
<stop offset="0.472" stopColor="#955DF8"/>
<stop offset="0.618" stopColor="#8562FC"/>
<stop offset="0.781" stopColor="#7B65FE"/>
<stop offset="1" stopColor="#7866FF"/>
</linearGradient>
<clipPath id={`${uid}-clip0_1334_1546`}>
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
});
JbDotmemory.displayName = "JbDotmemory";
