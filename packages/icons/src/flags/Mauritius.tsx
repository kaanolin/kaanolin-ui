// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Mauritius = forwardRef<SVGSVGElement, FlagProps>(function Mauritius(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M1.2168 5.21738L10.0009 6.08695L18.785 5.21738C17.0889 2.10895 13.7913 0 10.0009 0C6.21047 0 2.91285 2.10895 1.2168 5.21738Z" fill="#D80027"/>
<path d="M1.2159 14.7826L10 15.6521L18.7841 14.7826C19.5593 13.3618 20 11.7324 20 9.99994L10 9.13037L0 9.99994C0 11.7324 0.440742 13.3618 1.2159 14.7826Z" fill="#FFDA44"/>
<path d="M1.2159 5.21741C0.440742 6.63815 0 8.2676 0 10H20C20 8.2676 19.5593 6.63815 18.7841 5.21741H10H1.2159Z" fill="#0052B4"/>
<path d="M10.0009 20C13.7913 20 17.0889 17.891 18.785 14.7826H1.2168C2.91285 17.891 6.21047 20 10.0009 20Z" fill="#6DA544"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000244141H0V19.9998H20V0.000244141Z" fill="#FFDA44"/>
<path d="M20 0H0V5H20V0Z" fill="#D80027"/>
<path d="M20 5H0V10H20V5Z" fill="#0052B4"/>
<path d="M20 15H0V20H20V15Z" fill="#6DA544"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V19.9994H30V0Z" fill="#FFDA44"/>
<path d="M30 0H0V5.00016H30V0Z" fill="#D80027"/>
<path d="M30 4.99951H0V9.99967H30V4.99951Z" fill="#0052B4"/>
<path d="M30 14.9999H0V20H30V14.9999Z" fill="#6DA544"/></> }
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
Mauritius.displayName = "Mauritius";
