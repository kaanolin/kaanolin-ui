// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Nigeria = forwardRef<SVGSVGElement, FlagProps>(function Nigeria(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M0 10C0 14.2997 2.71375 17.9651 6.52176 19.3781V0.62207C2.71375 2.03496 0 5.70043 0 10Z" fill="#6DA544"/>
<path d="M20.0003 10C20.0003 5.70043 17.2865 2.03496 13.4785 0.62207V19.3781C17.2865 17.9651 20.0003 14.2997 20.0003 10Z" fill="#6DA544"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#F0F0F0"/>
<path d="M6.66651 0H0V20H6.66651V0Z" fill="#6DA544"/>
<path d="M20.0005 0H13.334V20H20.0005V0Z" fill="#6DA544"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#F0F0F0"/>
<path d="M9.99977 0H0V20H9.99977V0Z" fill="#6DA544"/>
<path d="M29.9998 0H20V20H29.9998V0Z" fill="#6DA544"/></> }
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
Nigeria.displayName = "Nigeria";
