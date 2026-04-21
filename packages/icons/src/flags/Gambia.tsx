// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Gambia = forwardRef<SVGSVGElement, FlagProps>(function Gambia(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M10.0001 0C5.8659 0 2.31793 2.50883 0.794922 6.08695H19.2053C17.6823 2.50883 14.1343 0 10.0001 0Z" fill="#A2001D"/>
<path d="M10.0001 20C14.1343 20 17.6823 17.4911 19.2052 13.913H0.794922C2.31793 17.4911 5.8659 20 10.0001 20Z" fill="#496E2D"/>
<path d="M19.6555 7.3913H0.344492C0.120313 8.22305 0 9.09739 0 10C0 10.9026 0.120313 11.777 0.344492 12.6087H19.6555C19.8797 11.777 20 10.9026 20 10C20 9.09739 19.8797 8.22305 19.6555 7.3913Z" fill="#0052B4"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000671387H0V20H20V0.000671387Z" fill="#F0F0F0"/>
<path d="M20 13.9133H0V19.9998H20V13.9133Z" fill="#496E2D"/>
<path d="M20 0H0V6.12383H20V0Z" fill="#A2001D"/>
<path d="M20 7.35559H0V12.6086H20V7.35559Z" fill="#0052B4"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#F0F0F0"/>
<path d="M30 13.9131H0V20H30V13.9131Z" fill="#496E2D"/>
<path d="M30 0H0V6.12406H30V0Z" fill="#A2001D"/>
<path d="M30 7.35602H0V12.6094H30V7.35602Z" fill="#0052B4"/></> }
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
Gambia.displayName = "Gambia";
