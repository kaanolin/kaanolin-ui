// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const CostaRica = forwardRef<SVGSVGElement, FlagProps>(function CostaRica(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M19.378 6.52173H0.621992C0.220039 7.60505 0 8.77677 0 9.99997C0 11.2232 0.220039 12.3949 0.621992 13.4782H19.378C19.78 12.3949 20 11.2232 20 9.99997C20 8.77677 19.78 7.60505 19.378 6.52173Z" fill="#D80027"/>
<path d="M10.0004 0C6.96953 0 4.25379 1.34859 2.41992 3.47824H17.5809C15.7471 1.34859 13.0313 0 10.0004 0Z" fill="#0052B4"/>
<path d="M17.5809 16.5217H2.41992C4.25379 18.6514 6.96953 20 10.0004 20C13.0313 20 15.7471 18.6514 17.5809 16.5217Z" fill="#0052B4"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000244141H0V19.9998H20V0.000244141Z" fill="#F0F0F0"/>
<path d="M20 7.3913H0V12.6087H20V7.3913Z" fill="#D80027"/>
<path d="M20 15.6522H0V20H20V15.6522Z" fill="#0052B4"/>
<path d="M20 0H0V4.34781H20V0Z" fill="#0052B4"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V19.9993H30V0Z" fill="#F0F0F0"/>
<path d="M30 7.39105H0V12.6083H30V7.39105Z" fill="#D80027"/>
<path d="M30 15.652H0V20H30V15.652Z" fill="#0052B4"/>
<path d="M30 0H0V4.34801H30V0Z" fill="#0052B4"/></> }
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
CostaRica.displayName = "CostaRica";
