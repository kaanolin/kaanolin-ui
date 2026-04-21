// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const UnitedArabEmirates = forwardRef<SVGSVGElement, FlagProps>(function UnitedArabEmirates(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M5.65234 13.4783L6.52191 19.3781C7.6052 19.7801 8.77695 20 10.0002 20C14.2998 20 17.9652 17.2863 19.3781 13.4783H5.65234Z" fill="black"/>
<path d="M5.65234 6.52176L6.52191 0.621914C7.6052 0.219922 8.77695 0 10.0002 0C14.2998 0 17.9652 2.71375 19.3781 6.52176H5.65234Z" fill="#6DA544"/>
<path d="M0 9.99996C0 14.2996 2.71379 17.965 6.52176 19.378V0.621948C2.71379 2.03488 0 5.70031 0 9.99996Z" fill="#A2001D"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#F0F0F0"/>
<path d="M20 0H0V6.66652H20V0Z" fill="#6DA544"/>
<path d="M20 13.3335H0V20H20V13.3335Z" fill="black"/>
<path d="M10 0H0V20H10V0Z" fill="#A2001D"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#F0F0F0"/>
<path d="M30 0H0V6.66643H30V0Z" fill="#6DA544"/>
<path d="M30 13.3329H0V19.9993H30V13.3329Z" fill="black"/>
<path d="M9.99978 0H0V20H9.99978V0Z" fill="#A2001D"/></> }
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
UnitedArabEmirates.displayName = "UnitedArabEmirates";
