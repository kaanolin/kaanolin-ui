// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Slovenia = forwardRef<SVGSVGElement, FlagProps>(function Slovenia(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M19.378 6.5218H8.69566V3.91309H3.47824V6.5218H0.621992C0.220039 7.60508 0 8.77684 0 10C0 11.2232 0.220039 12.395 0.621992 13.4783L10 14.3479L19.378 13.4783C19.78 12.395 20 11.2232 20 10C20 8.77684 19.78 7.60508 19.378 6.5218Z" fill="#0052B4"/>
<path d="M9.9991 20C14.2987 20 17.9642 17.2863 19.3771 13.4783H0.621094C2.03402 17.2863 5.69945 20 9.9991 20Z" fill="#D80027"/>
<path d="M3.47852 6.5218V7.39133C3.47852 9.38825 6.08723 10.0001 6.08723 10.0001C6.08723 10.0001 8.69594 9.38825 8.69594 7.39133V6.5218L7.82637 7.39137L6.08723 6.08704L4.34809 7.39137L3.47852 6.5218Z" fill="#F0F0F0"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V19.9998H20V0Z" fill="#F0F0F0"/>
<path d="M20 6.6665H0V13.3333H20V6.6665Z" fill="#0052B4"/>
<path d="M20 13.3333H0V20H20V13.3333Z" fill="#D80027"/>
<path d="M9.12457 7.68112V8.26071C9.12457 9.59205 7.38543 9.99992 7.38543 9.99992C7.38543 9.99992 5.64629 9.59209 5.64629 8.26071V7.68112L5.64062 5.95497L9.11887 5.94458L9.12457 7.68112Z" fill="#F0F0F0"/>
<path d="M9.88281 7.55437V8.38619C9.88281 10.2969 7.38688 10.8822 7.38688 10.8822C7.38688 10.8822 4.89094 10.2969 4.89094 8.38619V7.55437L4.88281 5.07706L9.87469 5.06213L9.88281 7.55437Z" fill="#0052B4"/>
<path d="M9.8825 7.55437V8.3862C9.8825 10.2969 7.38656 10.8822 7.38656 10.8822C7.38656 10.8822 4.89062 10.2969 4.89062 8.3862V7.55437L5.72301 8.3862L7.38656 7.13818L9.05074 8.3862L9.8825 7.55437Z" fill="#F0F0F0"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#F0F0F0"/>
<path d="M30 6.66663H0V13.3333H30V6.66663Z" fill="#0052B4"/>
<path d="M30 13.3334H0V20H30V13.3334Z" fill="#D80027"/>
<path d="M13.6888 6.52178V7.39115C13.6888 9.38812 11.0801 9.99992 11.0801 9.99992C11.0801 9.99992 8.47139 9.38818 8.47139 7.39115V6.52178L8.46289 3.93258L13.6803 3.91699L13.6888 6.52178Z" fill="#F0F0F0"/>
<path d="M13.6888 6.52178V7.39115C13.6888 9.38812 11.0801 9.99992 11.0801 9.99992C11.0801 9.99992 8.47139 9.38818 8.47139 7.39115V6.52178L8.46289 3.93258L13.6803 3.91699L13.6888 6.52178Z" fill="#0052B4"/>
<path d="M13.6881 6.5218V7.39118C13.6881 9.38815 11.0794 9.99994 11.0794 9.99994C11.0794 9.99994 8.4707 9.38821 8.4707 7.39118V6.5218L9.3407 7.39118L11.0794 6.08679L12.8188 7.39118L13.6881 6.5218Z" fill="#F0F0F0"/></> }
  };
  const s = shapes[shape] ?? shapes["circle"]!;
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={s.viewBox}
      fill="none"
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {s.body}
    </svg>
  );
});
Slovenia.displayName = "Slovenia";
