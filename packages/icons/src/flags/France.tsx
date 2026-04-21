// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const France = forwardRef<SVGSVGElement, FlagProps>(function France(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M20.0003 10C20.0003 5.70037 17.2865 2.03494 13.4785 0.622009V19.3781C17.2865 17.9651 20.0003 14.2997 20.0003 10Z" fill="#D80027"/>
<path d="M0 10C0 14.2997 2.71379 17.9651 6.52176 19.378V0.622009C2.71379 2.03494 0 5.70037 0 10Z" fill="#0052B4"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#F0F0F0"/>
<path d="M6.66652 0H0V20H6.66652V0Z" fill="#0052B4"/>
<path d="M19.9995 0H13.333V20H19.9995V0Z" fill="#D80027"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#F0F0F0"/>
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
France.displayName = "France";
