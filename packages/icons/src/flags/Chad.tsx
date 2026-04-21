// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Chad = forwardRef<SVGSVGElement, FlagProps>(function Chad(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M9.99996 0C8.77676 0 7.605 0.220039 6.52172 0.621992L6.08691 10L6.52168 19.378C7.605 19.78 8.77676 20 9.99996 20C11.2232 20 12.3949 19.78 13.4782 19.378L13.913 10L13.4782 0.621992C12.3949 0.220039 11.2232 0 9.99996 0Z" fill="#FFDA44"/>
<path d="M20.0003 10C20.0003 5.70037 17.2865 2.03494 13.4785 0.622009V19.3781C17.2865 17.9651 20.0003 14.2997 20.0003 10Z" fill="#D80027"/>
<path d="M6.52176 19.378V0.622009C2.71375 2.03494 0 5.70037 0 10C0 14.2997 2.71375 17.9651 6.52176 19.378Z" fill="#0052B4"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#FFDA44"/>
<path d="M6.66652 0H0V20H6.66652V0Z" fill="#0052B4"/>
<path d="M19.9995 0H13.333V20H19.9995V0Z" fill="#D80027"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#FFDA44"/>
<path d="M9.99978 0H0V20H9.99978V0Z" fill="#0052B4"/>
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
Chad.displayName = "Chad";
