// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Liechtenstein = forwardRef<SVGSVGElement, FlagProps>(function Liechtenstein(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10C0.434766 10 10 8.69568 10 8.69568L20 10Z" fill="#D80027"/>
<path d="M0 10C0 4.47719 4.47719 0 10 0C15.5228 0 20 4.47719 20 10" fill="#0052B4"/>
<path d="M7.39121 6.95656C7.39121 6.23621 6.80723 5.65223 6.08688 5.65223C5.7527 5.65223 5.44813 5.77801 5.2173 5.98461V5.21742H5.65207V4.34785H5.2173V3.91309H4.34773V4.34785H3.91297V5.21742H4.34773V5.98461C4.11691 5.77801 3.81234 5.65223 3.47816 5.65223C2.75781 5.65223 2.17383 6.23621 2.17383 6.95656C2.17383 7.34277 2.34184 7.68965 2.60859 7.92852V8.6957H6.95641V7.92852C7.22324 7.68965 7.39121 7.34277 7.39121 6.95656Z" fill="#FFDA44"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000610352H0V20H20V0.000610352Z" fill="#D80027"/>
<path d="M20 0V9.76675L0 10.01V0H20Z" fill="#0052B4"/>
<path d="M7.50008 6.94756C7.50008 6.2572 6.94043 5.69754 6.25008 5.69754C5.92984 5.69754 5.63793 5.81805 5.41672 6.01606V5.2809H5.83336V4.44753H5.41672V4.03088H4.58336V4.44753H4.16672V5.2809H4.58336V6.01606C4.36219 5.81805 4.07027 5.69754 3.75 5.69754C3.05965 5.69754 2.5 6.2572 2.5 6.94756C2.5 7.31768 2.66102 7.65014 2.91664 7.87905V8.61422H7.08328V7.87905C7.33906 7.65014 7.50008 7.31768 7.50008 6.94756Z" fill="#FFDA44"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.000366211H0V20H30V0.000366211Z" fill="#D80027"/>
<path d="M30 0V9.76703L0 10.0103V0H30Z" fill="#0052B4"/>
<path d="M12.3911 6.95663C12.3911 6.23622 11.8072 5.65227 11.0868 5.65227C10.7526 5.65227 10.448 5.77801 10.2172 5.98462V5.21745H10.6521V4.34791H10.2172V3.91309H9.34772V4.34791H8.91289V5.21745H9.34772V5.98462C9.11691 5.77801 8.81229 5.65227 8.47818 5.65227C7.75777 5.65227 7.17383 6.23622 7.17383 6.95663C7.17383 7.34282 7.34182 7.68976 7.60865 7.92865V8.69582H11.9565V7.92865C12.2231 7.68976 12.3911 7.34288 12.3911 6.95663Z" fill="#FFDA44"/></> }
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
Liechtenstein.displayName = "Liechtenstein";
