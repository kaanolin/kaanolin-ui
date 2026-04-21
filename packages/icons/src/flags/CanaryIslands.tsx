// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const CanaryIslands = forwardRef<SVGSVGElement, FlagProps>(function CanaryIslands(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10.0007 0C8.77754 0 7.60578 0.220039 6.5225 0.621992L6.52251 10L6.52246 19.378C7.60578 19.78 8.77754 20 10.0007 20C11.2239 20 12.3957 19.78 13.479 19.378L13.4998 10L13.479 0.621992C12.3957 0.220039 11.2239 0 10.0007 0Z" fill="#338AF3"/>
<path d="M20.0003 10C20.0003 5.70037 17.2865 2.03494 13.4785 0.622009V19.3781C17.2865 17.9651 20.0003 14.2997 20.0003 10Z" fill="#FFDA44"/>
<path d="M6.52176 19.378V0.622009C2.71375 2.03494 0 5.70037 0 10C0 14.2997 2.71375 17.9651 6.52176 19.378Z" fill="#F0F0F0"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#338AF3"/>
<path d="M6.66651 0H0V20H6.66651V0Z" fill="#F0F0F0"/>
<path d="M20.0005 0H13.334V20H20.0005V0Z" fill="#FFDA44"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#338AF3"/>
<path d="M9.99977 0H0V20H9.99977V0Z" fill="#F0F0F0"/>
<path d="M29.9998 0H20V20H29.9998V0Z" fill="#FFDA44"/></> }
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
CanaryIslands.displayName = "CanaryIslands";
