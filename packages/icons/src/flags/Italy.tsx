// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Italy = forwardRef<SVGSVGElement, FlagProps>(function Italy(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M20.0003 9.99996C20.0003 5.70031 17.2865 2.03488 13.4785 0.621948V19.378C17.2865 17.965 20.0003 14.2996 20.0003 9.99996Z" fill="#D80027"/>
<path d="M0 9.99996C0 14.2996 2.71375 17.965 6.52176 19.378V0.621948C2.71375 2.03488 0 5.70031 0 9.99996Z" fill="#6DA544"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M13.3333 0H6.66663H0V20H6.66663H13.3333H20V0H13.3333Z" fill="#F0F0F0"/>
<path d="M6.66651 0H0V20H6.66651V0Z" fill="#6DA544"/>
<path d="M20.0005 0H13.334V20H20.0005V0Z" fill="#D80027"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M20 0H9.99994H0V19.9995H9.99994H20H30V0H20Z" fill="#F0F0F0"/>
<path d="M9.99977 0.00012207H0V19.9999H9.99977V0.00012207Z" fill="#6DA544"/>
<path d="M29.9998 0.00012207H20V19.9999H29.9998V0.00012207Z" fill="#D80027"/></> }
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
Italy.displayName = "Italy";
