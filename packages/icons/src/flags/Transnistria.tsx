// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Transnistria = forwardRef<SVGSVGElement, FlagProps>(function Transnistria(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M19.6548 7.39128C18.5073 3.13363 14.6195 0 9.99926 0C5.37898 0 1.49125 3.13363 0.34375 7.39128L9.99926 7.82609L19.6548 7.39128Z" fill="#A2001D"/>
<path d="M0.34375 12.6088C1.49125 16.8664 5.37898 20 9.99926 20C14.6195 20 18.5073 16.8664 19.6548 12.6088L9.99926 12.174L0.34375 12.6088Z" fill="#A2001D"/>
<path d="M19.6555 7.39124H0.344492C0.120313 8.22299 0 9.09733 0 9.99994C0 10.9026 0.120313 11.7769 0.344492 12.6087H19.6555C19.8797 11.7769 20 10.9026 20 9.99994C20 9.09733 19.8797 8.22299 19.6555 7.39124Z" fill="#6DA544"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000244141H0V19.9998H20V0.000244141Z" fill="#6DA544"/>
<path d="M20 0H0V6.66652H20V0Z" fill="#A2001D"/>
<path d="M20 13.3335H0V20H20V13.3335Z" fill="#A2001D"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#6DA544"/>
<path d="M30 0H0V6.66665H30V0Z" fill="#A2001D"/>
<path d="M30 13.3334H0V20H30V13.3334Z" fill="#A2001D"/></> }
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
Transnistria.displayName = "Transnistria";
