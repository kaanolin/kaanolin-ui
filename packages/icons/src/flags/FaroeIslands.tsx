// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const FaroeIslands = forwardRef<SVGSVGElement, FlagProps>(function FaroeIslands(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M19.5644 9.99998L19.9144 8.69564C19.8563 8.25107 19.7691 7.8156 19.6547 7.39131H9.12961V0.0380249C8.68586 0.076228 8.25051 0.143767 7.82527 0.238064L6.08613 1.30431L5.21656 1.21654C4.75894 1.46623 4.32297 1.7506 3.91223 2.06619V7.39127H0.343672C0.229336 7.81556 0.142148 8.25103 0.0840234 8.6956L0.433945 9.99998L0.0839844 11.3043C0.142109 11.7489 0.229297 12.1844 0.343633 12.6087H3.91219V17.9337C4.32293 18.2494 4.75894 18.5337 5.21652 18.7834L6.52086 18.6956L7.82519 19.7619C8.25047 19.8561 8.68582 19.9236 9.12953 19.9619V12.6087H19.6546C19.7689 12.1844 19.8561 11.7489 19.9143 11.3044L19.5644 9.99998Z" fill="#0052B4"/>
<path d="M19.9154 8.69564H7.82613L7.82609 0.237671C6.90195 0.442593 6.02582 0.774741 5.21738 1.21587V8.6956H0.0846484C0.0290625 9.12259 0 9.55791 0 9.99998C0 10.442 0.0290625 10.8774 0.0846484 11.3043H5.21734H5.21738V18.784C6.02582 19.2251 6.90195 19.5574 7.82609 19.7622V11.3044V11.3044H19.9154C19.9709 10.8774 20 10.442 20 9.99998C20 9.55791 19.9709 9.12259 19.9154 8.69564Z" fill="#D80027"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#F0F0F0"/>
<path d="M20 7.66305H8.58695V0H3.91305V7.66305H0V12.337H3.91305V20H8.58695V12.337H20V7.66305Z" fill="#0052B4"/>
<path d="M20 8.75H7.5V0H5V8.75H0V11.25H5V20H7.5V11.25H20V8.75Z" fill="#D80027"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.000305176H0V20H30V0.000305176Z" fill="#F0F0F0"/>
<path d="M30 12.3368H11.8474V19.9997H10.7609H8.26043H7.17393V12.3368H0V11.2497V8.74999V7.66281H7.17393V0H8.26043H10.7609H11.8474V7.66281H30V8.74999V11.2497V12.3368Z" fill="#0052B4"/>
<path d="M30 8.74999V11.2497H10.7609V19.9997H8.26043V11.2497H0V8.74999H8.26043V0H10.7609V8.74999H30Z" fill="#D80027"/></> }
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
FaroeIslands.displayName = "FaroeIslands";
