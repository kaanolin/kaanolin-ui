// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const GuineaBissau = forwardRef<SVGSVGElement, FlagProps>(function GuineaBissau(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M9.99973 0C9.09715 0 8.22277 0.120313 7.39102 0.344492L6.52148 10L7.39105 19.6555C8.22277 19.8797 9.09715 20 9.99973 20C15.5225 20 19.9997 15.5228 19.9997 10C19.9997 4.47719 15.5225 0 9.99973 0Z" fill="#FFDA44"/>
<path d="M6.52148 10L7.39105 19.6555C8.22277 19.8797 9.09715 20 9.99973 20C15.5225 20 19.9997 15.5228 19.9997 10H6.52148Z" fill="#6DA544"/>
<path d="M0 10C0 13.7905 2.10898 17.0881 5.21738 18.7841V1.21594C2.10898 2.91196 0 6.20961 0 10Z" fill="#D80027"/>
<path d="M0 9.99999C0 14.6203 3.13363 18.508 7.39129 19.6555V0.344482C3.13363 1.49198 0 5.37972 0 9.99999Z" fill="#D80027"/>
<path d="M3.77809 7.39124L4.42555 9.38405H6.52109L4.82586 10.6158L5.47328 12.6087L3.77809 11.377L2.08281 12.6087L2.73039 10.6158L1.03516 9.38405H3.13059L3.77809 7.39124Z" fill="black"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#6DA544"/>
<path d="M20 0.000366211H0V9.99994H20V0.000366211Z" fill="#FFDA44"/>
<path d="M7.10129 0H0V20H7.10129V0Z" fill="#D80027"/>
<path d="M3.84059 7.39124L4.48805 9.38405H6.58355L4.88836 10.6158L5.53578 12.6087L3.84059 11.377L2.14531 12.6087L2.79289 10.6158L1.09766 9.38405H3.19305L3.84059 7.39124Z" fill="black"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#6DA544"/>
<path d="M30 0H0V9.99968H30V0Z" fill="#FFDA44"/>
<path d="M10.6519 0H0V20H10.6519V0Z" fill="#D80027"/>
<path d="M5.76166 6.43323L6.64684 9.15763H9.51172L7.19404 10.8416L8.07928 13.5661L5.76166 11.8823L3.44393 13.5661L4.32934 10.8416L2.01172 9.15763H4.87643L5.76166 6.43323Z" fill="black"/></> }
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
GuineaBissau.displayName = "GuineaBissau";
