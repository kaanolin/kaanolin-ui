// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Benin = forwardRef<SVGSVGElement, FlagProps>(function Benin(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M6.52148 9.13043L7.39105 19.6555C8.22281 19.8797 9.09711 20 9.99973 20C15.5225 20 19.9997 15.5228 19.9997 10L6.52148 9.13043Z" fill="#D80027"/>
<path d="M6.52148 10L7.39102 0.344492C8.22281 0.120313 9.09711 0 9.99973 0C15.5225 0 19.9997 4.47719 19.9997 10H6.52148Z" fill="#FFDA44"/>
<path d="M0 9.99999C0 14.6203 3.13363 18.508 7.39129 19.6555V0.344482C3.13363 1.49198 0 5.37972 0 9.99999Z" fill="#6DA544"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#6DA544"/>
<path d="M20.0004 0H7.68164V10H20.0004V0Z" fill="#FFDA44"/>
<path d="M20.0004 10H7.68164V20H20.0004V10Z" fill="#D80027"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.00012207H0V20.0001H30V0.00012207Z" fill="#6DA544"/>
<path d="M29.9996 0.00012207H11.5215V10.0001H29.9996V0.00012207Z" fill="#FFDA44"/>
<path d="M29.9996 10.0001H11.5215V20.0001H29.9996V10.0001Z" fill="#D80027"/></> }
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
Benin.displayName = "Benin";
