// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Suriname = forwardRef<SVGSVGElement, FlagProps>(function Suriname(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M19.378 6.52173H0.621953C0.220039 7.60509 0 8.77677 0 9.99997C0 11.2232 0.220039 12.3949 0.621953 13.4782H19.378C19.78 12.3949 20 11.2232 20 9.99997C20 8.77677 19.78 7.60509 19.378 6.52173Z" fill="#A2001D"/>
<path d="M10.0291 20C13.4542 20 16.4767 18.2777 18.2789 15.6522H1.7793C3.58156 18.2777 6.60398 20 10.0291 20Z" fill="#6DA544"/>
<path d="M10.0291 0.00012207C13.4542 0.00012207 16.4767 1.72247 18.2789 4.34793H1.7793C3.58156 1.72247 6.60398 0.00012207 10.0291 0.00012207Z" fill="#6DA544"/>
<path d="M9.99906 6.52173L10.8624 9.17876H13.6563L11.396 10.8211L12.2594 13.4782L9.99906 11.8361L7.73871 13.4782L8.60215 10.8211L6.3418 9.17876H9.13574L9.99906 6.52173Z" fill="#FFDA44"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#F0F0F0"/>
<path d="M20 6.52173H0V13.4782H20V6.52173Z" fill="#A2001D"/>
<path d="M20 15.6522H0V20H20V15.6522Z" fill="#6DA544"/>
<path d="M20 0H0V4.34781H20V0Z" fill="#6DA544"/>
<path d="M10.0284 6.52173L10.8917 9.17876H13.6857L11.4253 10.8211L12.2887 13.4782L10.0284 11.8361L7.76801 13.4782L8.63148 10.8211L6.37109 9.17876H9.16508L10.0284 6.52173Z" fill="#FFDA44"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#F0F0F0"/>
<path d="M30 6.52173H0V13.4784H30V6.52173Z" fill="#A2001D"/>
<path d="M30 15.652H0V20H30V15.652Z" fill="#6DA544"/>
<path d="M30 0H0V4.34801H30V0Z" fill="#6DA544"/>
<path d="M15.0438 7.77368L15.5964 9.47411H17.3845L15.9379 10.5252L16.4904 12.2258L15.0438 11.1748L13.5972 12.2258L14.1498 10.5252L12.7031 9.47411H14.4913L15.0438 7.77368Z" fill="#FFDA44"/></> }
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
Suriname.displayName = "Suriname";
