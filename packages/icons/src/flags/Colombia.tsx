// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Colombia = forwardRef<SVGSVGElement, FlagProps>(function Colombia(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M0 10C0 4.47719 4.47719 0 10 0C15.5228 0 20 4.47719 20 10L10 10.8696L0 10Z" fill="#FFDA44"/>
<path d="M1.33789 15C3.06699 17.9889 6.2984 20 9.99977 20C13.7011 20 16.9325 17.9889 18.6616 15L9.99977 14.3478L1.33789 15Z" fill="#D80027"/>
<path d="M18.6619 15C19.5127 13.5291 20 11.8215 20 10H0C0 11.8215 0.487266 13.5291 1.33812 15H18.6619Z" fill="#0052B4"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#FFDA44"/>
<path d="M20 15.1035H0V20H20V15.1035Z" fill="#D80027"/>
<path d="M20 10H0V15.1035H20V10Z" fill="#0052B4"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#FFDA44"/>
<path d="M30 15.1034H0V20H30V15.1034Z" fill="#D80027"/>
<path d="M30 10H0V15.1034H30V10Z" fill="#0052B4"/></> }
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
Colombia.displayName = "Colombia";
