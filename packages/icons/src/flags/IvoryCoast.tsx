// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const IvoryCoast = forwardRef<SVGSVGElement, FlagProps>(function IvoryCoast(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10.0009 20C11.2241 20 12.3959 19.78 13.4792 19.378L13.914 10L13.4792 0.621992C12.3959 0.220039 11.2241 0 10.0009 0C8.77773 0 7.60598 0.220039 6.5227 0.621992L6.08789 10L6.52266 19.378C7.60598 19.78 8.77773 20 10.0009 20Z" fill="#F0F0F0"/>
<path d="M0 9.99996C0 14.2996 2.71375 17.965 6.52176 19.378V0.621948C2.71375 2.03488 0 5.70031 0 9.99996Z" fill="#FF9811"/>
<path d="M13.4785 0.621948V19.378C17.2865 17.965 20.0003 14.2996 20.0003 9.99996C20.0003 5.70031 17.2865 2.03488 13.4785 0.621948Z" fill="#6DA544"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M19.9997 0H0V20H19.9997V0Z" fill="#F0F0F0"/>
<path d="M6.66656 0H0V20H6.66656V0Z" fill="#FF9811"/>
<path d="M20.0005 0H13.334V20H20.0005V0Z" fill="#6DA544"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V19.9994H30V0Z" fill="#F0F0F0"/>
<path d="M29.9996 0H19.3477V20H29.9996V0Z" fill="#6DA544"/>
<path d="M10.6519 0H0V20H10.6519V0Z" fill="#FF9811"/></> }
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
IvoryCoast.displayName = "IvoryCoast";
