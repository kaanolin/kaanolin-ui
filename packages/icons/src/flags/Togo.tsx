// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Togo = forwardRef<SVGSVGElement, FlagProps>(function Togo(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#FFDA44"/>
<path d="M9.99922 0C9.99195 7.8125e-05 9.56445 4 9.56445 4H17.9997C16.1753 1.57121 13.2708 0 9.99922 0Z" fill="#496E2D"/>
<path d="M10.0004 20C13.272 20 16.1765 18.4288 18.0009 16H2C3.82437 18.4288 6.72887 20 10.0004 20Z" fill="#496E2D"/>
<path d="M19.799 8H9.56445L9.99922 12H19.799C19.9302 11.3538 19.9992 10.685 19.9992 10C19.9992 9.31504 19.9302 8.64621 19.799 8Z" fill="#496E2D"/>
<path d="M10 12C10 9.91305 10 2.34781 10 0C4.47719 0 0 4.47719 0 10C0 10.685 0.0690625 11.3538 0.200234 12H10Z" fill="#D80027"/>
<path d="M5.51828 4.78259L6.16578 6.77537H8.26129L6.56609 8.00712L7.21351 9.99998L5.51828 8.76834L3.82305 9.99998L4.47059 8.00712L2.77539 6.77537H4.87082L5.51828 4.78259Z" fill="#F0F0F0"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#FFDA44"/>
<path d="M20 0H0V4H20V0Z" fill="#496E2D"/>
<path d="M20 16H0V20H20V16Z" fill="#496E2D"/>
<path d="M20 8H0V12H20V8Z" fill="#496E2D"/>
<path d="M11.9565 0H0V11.9565H11.9565V0Z" fill="#D80027"/>
<path d="M5.97918 3.36963L6.62668 5.3624H8.72219L7.02699 6.59416L7.67445 8.58701L5.97918 7.35537L4.28395 8.58701L4.93152 6.59416L3.23633 5.3624H5.33172L5.97918 3.36963Z" fill="#F0F0F0"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#FFDA44"/>
<path d="M30 0H0V3.99987H30V0Z" fill="#496E2D"/>
<path d="M30 16.0001H0V20H30V16.0001Z" fill="#496E2D"/>
<path d="M30 7.99976H0V11.9996H30V7.99976Z" fill="#496E2D"/>
<path d="M11.9563 0H0V11.9565H11.9563V0Z" fill="#D80027"/>
<path d="M5.97895 2.84778L6.7559 5.23916H9.27051L7.23625 6.71728L8.0132 9.10877L5.97895 7.63077L3.94463 9.10877L4.72176 6.71728L2.6875 5.23916H5.20193L5.97895 2.84778Z" fill="#F0F0F0"/></> }
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
Togo.displayName = "Togo";
