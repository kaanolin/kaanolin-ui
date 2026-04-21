// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Romania = forwardRef<SVGSVGElement, FlagProps>(function Romania(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M13.4784 0.621953C12.395 0.220039 11.2234 5.19912e-09 10.0002 5.19912e-09C8.77695 -3.90573e-05 7.60523 0.220039 6.52191 0.621953L5.65234 9.99996L6.52191 19.378C7.6052 19.78 8.77691 20 10.0002 20C11.2233 20 12.3951 19.78 13.4784 19.378L14.3479 10L13.4784 0.621953Z" fill="#FFDA44"/>
<path d="M20.0003 9.99996C20.0003 5.70035 17.2865 2.03484 13.4785 0.621948V19.378C17.2865 17.965 20.0002 14.2996 20.0003 9.99996Z" fill="#D80027"/>
<path d="M0 10C0 14.2997 2.71375 17.9651 6.52168 19.3781L6.52172 0.62207C2.71375 2.03496 0 5.70035 0 10Z" fill="#0052B4"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000244141H0V19.9998H20V0.000244141Z" fill="#FFDA44"/>
<path d="M6.66651 0H0V20H6.66651V0Z" fill="#0052B4"/>
<path d="M20.0005 0H13.334V20H20.0005V0Z" fill="#D80027"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V19.9994H30V0Z" fill="#FFDA44"/>
<path d="M9.99977 0H0V20H9.99977V0Z" fill="#0052B4"/>
<path d="M29.9998 0H20V20H29.9998V0Z" fill="#D80027"/></> }
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
Romania.displayName = "Romania";
