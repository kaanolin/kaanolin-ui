// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Bahamas = forwardRef<SVGSVGElement, FlagProps>(function Bahamas(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#FFDA44"/>
<path d="M6.08738 6.52176H19.3784C17.9655 2.71375 14.3 0 10.0004 0C7.23895 0 4.73922 1.11949 2.92969 2.92926L6.08738 6.52176Z" fill="#338AF3"/>
<path d="M6.08738 13.4783H19.3784C17.9655 17.2863 14.3 20 10.0004 20C7.23895 20 4.73922 18.8805 2.92969 17.0708L6.08738 13.4783Z" fill="#338AF3"/>
<path d="M2.92893 2.92889C-0.976309 6.83413 -0.976309 13.1658 2.92893 17.0711C4.54271 15.4573 6.09478 13.9052 10 9.99999L2.92893 2.92889Z" fill="black"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000305176H0V19.9999H20V0.000305176Z" fill="#FFDA44"/>
<path d="M20 6.10352e-05H0V6.66658H20V6.10352e-05Z" fill="#338AF3"/>
<path d="M20 13.3335H0V20H20V13.3335Z" fill="#338AF3"/>
<path d="M10 10.0003L0 20V0L10 10.0003Z" fill="black"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.000366211H0V19.9997H30V0.000366211Z" fill="#FFDA44"/>
<path d="M30 0.000366211H0V6.6668H30V0.000366211Z" fill="#338AF3"/>
<path d="M30 13.3333H0V19.9997H30V13.3333Z" fill="#338AF3"/>
<path d="M15 10.0004L0 20V0L15 10.0004Z" fill="black"/></> }
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
Bahamas.displayName = "Bahamas";
