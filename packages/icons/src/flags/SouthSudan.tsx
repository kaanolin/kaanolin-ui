// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const SouthSudan = forwardRef<SVGSVGElement, FlagProps>(function SouthSudan(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M9.99999 20C15.5228 20 20 15.5228 20 9.99999C20 4.47715 15.5228 0 9.99999 0C4.47715 0 0 4.47715 0 9.99999C0 15.5228 4.47715 20 9.99999 20Z" fill="#F0F0F0"/>
<path d="M19.2203 6.12316C17.7059 2.52586 14.1484 0 10.0004 0C7.23894 0 4.73922 1.11949 2.92969 2.92926L5.43398 6.12316H19.2203Z" fill="black"/>
<path d="M5.46238 13.8406L2.92969 17.0707C4.73922 18.8805 7.23894 19.9999 10.0004 19.9999C14.1624 19.9999 17.73 17.4572 19.2357 13.8406H5.46238Z" fill="#496E2D"/>
<path d="M2.17383 7.3551V12.6087H19.6555C19.8798 11.777 19.9999 10.9026 19.9999 10C19.9999 9.08432 19.8765 8.1976 19.646 7.3551H2.17383Z" fill="#A2001D"/>
<path d="M2.92892 2.92896C-0.976308 6.83419 -0.976308 13.1659 2.92892 17.0711C4.54271 15.4573 6.09478 13.9053 10 10L2.92892 2.92896Z" fill="#0052B4"/>
<path d="M3.25676 7.51379L4.47726 9.21696L6.47445 8.58239L5.23183 10.2696L6.45234 11.9729L4.46375 11.3124L3.22109 12.9996L3.23476 10.9042L1.24609 10.2437L3.24312 9.60914L3.25676 7.51379Z" fill="#FFDA44"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000610352H0V19.9999H20V0.000610352Z" fill="#F0F0F0"/>
<path d="M20 13.9133H0V19.9998H20V13.9133Z" fill="#496E2D"/>
<path d="M20 0H0V6.12383H20V0Z" fill="black"/>
<path d="M20 7.35559H0V12.6086H20V7.35559Z" fill="#A2001D"/>
<path d="M10 10.0002L0 19.9998V0L10 10.0002Z" fill="#0052B4"/>
<path d="M2.71148 7.49988L3.82391 9.0522L5.64422 8.47381L4.51164 10.0116L5.6241 11.564L3.81156 10.9621L2.67895 12.4998L2.69145 10.59L0.878906 9.98797L2.69902 9.40958L2.71148 7.49988Z" fill="#FFDA44"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.000366211H0V19.9997H30V0.000366211Z" fill="#F0F0F0"/>
<path d="M30 13.9131H0V19.9997H30V13.9131Z" fill="#496E2D"/>
<path d="M30 0.000366211H0V6.12423H30V0.000366211Z" fill="black"/>
<path d="M30 7.35608H0V12.6093H30V7.35608Z" fill="#A2001D"/>
<path d="M15 10.0004L0 20V0L15 10.0004Z" fill="#0052B4"/>
<path d="M4.28799 7.2572L5.50855 8.96033L7.50566 8.32576L6.26307 10.013L7.48357 11.7162L5.49496 11.0558L4.2523 12.7429L4.26602 10.6475L2.27734 9.987L4.27439 9.35243L4.28799 7.2572Z" fill="#FFDA44"/></> }
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
SouthSudan.displayName = "SouthSudan";
