// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Spain = forwardRef<SVGSVGElement, FlagProps>(function Spain(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M0 10C0 11.2232 0.220039 12.395 0.621992 13.4783L10 14.3478L19.378 13.4783C19.78 12.395 20 11.2232 20 10C20 8.77683 19.78 7.60511 19.378 6.52179L10 5.65222L0.621992 6.52179C0.220039 7.60511 0 8.77683 0 10Z" fill="#FFDA44"/>
<path d="M19.3781 6.52176C17.9652 2.71379 14.2997 0 10.0001 0C5.70043 0 2.035 2.71379 0.62207 6.52176H19.3781Z" fill="#D80027"/>
<path d="M0.62207 13.4783C2.035 17.2862 5.70043 20 10.0001 20C14.2997 20 17.9652 17.2862 19.3781 13.4783H0.62207Z" fill="#D80027"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#FFDA44"/>
<path d="M20 0H0V6.66652H20V0Z" fill="#D80027"/>
<path d="M20 13.3335H0V20H20V13.3335Z" fill="#D80027"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#FFDA44"/>
<path d="M30 0H0V6.66643H30V0Z" fill="#D80027"/>
<path d="M30 13.3329H0V19.9993H30V13.3329Z" fill="#D80027"/></> }
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
Spain.displayName = "Spain";
