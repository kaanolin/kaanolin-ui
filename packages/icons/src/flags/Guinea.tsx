// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Guinea = forwardRef<SVGSVGElement, FlagProps>(function Guinea(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M13.4792 0.622031C12.3959 0.220039 11.2241 0 10.0009 0C8.7777 0 7.60598 0.220039 6.5227 0.621953L6.08789 10L6.52266 19.378C7.60598 19.78 8.7777 20 10.0009 20C11.2241 20 12.3959 19.78 13.4792 19.378L13.914 10L13.4792 0.622031Z" fill="#FFDA44"/>
<path d="M0 10C0 14.2996 2.71375 17.9651 6.52176 19.378V0.621948C2.71375 2.03492 0 5.70031 0 10Z" fill="#D80027"/>
<path d="M20.0003 10C20.0003 5.70031 17.2865 2.03492 13.4785 0.621948V19.378C17.2865 17.9651 20.0003 14.2996 20.0003 10Z" fill="#6DA544"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#FFDA44"/>
<path d="M6.66652 0H0V20H6.66652V0Z" fill="#D80027"/>
<path d="M20.0005 0H13.334V20H20.0005V0Z" fill="#6DA544"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V19.9994H30V0Z" fill="#FFDA44"/>
<path d="M29.9996 0H19.3477V20H29.9996V0Z" fill="#6DA544"/>
<path d="M10.6519 0H0V20H10.6519V0Z" fill="#D80027"/></> }
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
Guinea.displayName = "Guinea";
