// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const PuertoRico = forwardRef<SVGSVGElement, FlagProps>(function PuertoRico(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M10.0004 0C6.72887 0 3.82437 1.57121 2 4H18.0009C16.1765 1.57121 13.272 0 10.0004 0Z" fill="#D80027"/>
<path d="M10.0004 20C13.272 20 16.1765 18.4288 18.0009 16H2C3.82437 18.4288 6.72887 20 10.0004 20Z" fill="#D80027"/>
<path d="M0 10C0 10.685 0.0690625 11.3538 0.200273 12H19.7998C19.931 11.3538 20 10.685 20 10C20 9.31504 19.9309 8.64621 19.7998 8H0.200273C0.0690625 8.64621 0 9.31504 0 10Z" fill="#D80027"/>
<path d="M2.92893 2.92896C-0.976309 6.83419 -0.976309 13.1659 2.92893 17.0711C4.54271 15.4574 6.09478 13.9053 10 10L2.92893 2.92896Z" fill="#0052B4"/>
<path d="M4.04762 7.39124L4.69508 9.38405H6.79063L5.09539 10.6158L5.74281 12.6087L4.04762 11.377L2.35234 12.6087L2.99992 10.6158L1.30469 9.38405H3.40008L4.04762 7.39124Z" fill="#F0F0F0"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000488281H0V19.9996H20V0.000488281Z" fill="#F0F0F0"/>
<path d="M20 0H0V4H20V0Z" fill="#D80027"/>
<path d="M20 8H0V12H20V8Z" fill="#D80027"/>
<path d="M20 16H0V20H20V16Z" fill="#D80027"/>
<path d="M0 20L10 10L0 0V20Z" fill="#0052B4"/>
<path d="M3.26062 7.31213L3.92773 9.3653H6.08676L4.34016 10.6344L5.00723 12.6876L3.26062 11.4187L1.51398 12.6876L2.18121 10.6344L0.43457 9.3653H2.59352L3.26062 7.31213Z" fill="#F0F0F0"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.000366211H0V19.9997H30V0.000366211Z" fill="#F0F0F0"/>
<path d="M30 0.000366211H0V4.00011H30V0.000366211Z" fill="#D80027"/>
<path d="M30 7.99988H0V11.9996H30V7.99988Z" fill="#D80027"/>
<path d="M30 16H0V19.9997H30V16Z" fill="#D80027"/>
<path d="M15 10.0004L0 20V0L15 10.0004Z" fill="#0052B4"/>
<path d="M4.89154 6.43359L5.77672 9.15806H8.6416L6.32398 10.842L7.20916 13.5665L4.89154 11.8826L2.57387 13.5665L3.45922 10.842L1.1416 9.15806H4.00637L4.89154 6.43359Z" fill="#F0F0F0"/></> }
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
PuertoRico.displayName = "PuertoRico";
