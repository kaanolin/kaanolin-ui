// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Latvia = forwardRef<SVGSVGElement, FlagProps>(function Latvia(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M9.99926 0C5.37898 0 1.49125 3.13363 0.34375 7.39129H19.6548C18.5073 3.13363 14.6195 0 9.99926 0Z" fill="#A2001D"/>
<path d="M9.99926 20.0001C14.6195 20.0001 18.5073 16.8664 19.6548 12.6088H0.34375C1.49125 16.8664 5.37898 20.0001 9.99926 20.0001Z" fill="#A2001D"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000244141H0V19.9998H20V0.000244141Z" fill="#F0F0F0"/>
<path d="M20 0H0V6.66652H20V0Z" fill="#A2001D"/>
<path d="M20 13.3335H0V20H20V13.3335Z" fill="#A2001D"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#F0F0F0"/>
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
Latvia.displayName = "Latvia";
