// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Belgium = forwardRef<SVGSVGElement, FlagProps>(function Belgium(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M13.4784 0.621992C12.3951 0.220039 11.2234 0 10.0002 0C8.77695 0 7.60523 0.220039 6.52191 0.621992L5.65234 10L6.52191 19.378C7.60523 19.78 8.77695 20 10.0002 20C11.2234 20 12.3951 19.78 13.4784 19.378L14.348 10L13.4784 0.621992Z" fill="#FFDA44"/>
<path d="M20.0003 9.99998C20.0003 5.70037 17.2865 2.0349 13.4785 0.622009V19.3781C17.2865 17.9651 20.0003 14.2997 20.0003 9.99998Z" fill="#D80027"/>
<path d="M0 9.99998C0 14.2997 2.71375 17.9651 6.52176 19.378V0.622009C2.71375 2.0349 0 5.70037 0 9.99998Z" fill="black"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000244141H0V19.9998H20V0.000244141Z" fill="#FFDA44"/>
<path d="M6.66651 0H0V20H6.66651V0Z" fill="black"/>
<path d="M20.0005 0H13.334V20H20.0005V0Z" fill="#D80027"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M29.9999 0H0V19.9994H29.9999V0Z" fill="#FFDA44"/>
<path d="M9.99977 0H0V20H9.99977V0Z" fill="black"/>
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
Belgium.displayName = "Belgium";
