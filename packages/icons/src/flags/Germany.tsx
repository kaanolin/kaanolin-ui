// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Germany = forwardRef<SVGSVGElement, FlagProps>(function Germany(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M0.621094 13.4782C2.03402 17.2862 5.69945 20 9.9991 20C14.2987 20 17.9642 17.2862 19.3771 13.4782L9.9991 12.6087L0.621094 13.4782Z" fill="#FFDA44"/>
<path d="M9.9991 0C5.69945 0 2.03402 2.71375 0.621094 6.52175L9.9991 7.39129L19.3771 6.52172C17.9642 2.71375 14.2987 0 9.9991 0Z" fill="black"/>
<path d="M0.621992 6.52173C0.220039 7.60505 0 8.77677 0 9.99997C0 11.2232 0.220039 12.3949 0.621992 13.4782H19.378C19.78 12.3949 20 11.2232 20 9.99997C20 8.77677 19.78 7.60505 19.378 6.52173H0.621992Z" fill="#D80027"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#D80027"/>
<path d="M20 0H0V6.66652H20V0Z" fill="black"/>
<path d="M20 13.3335H0V20H20V13.3335Z" fill="#FFDA44"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#D80027"/>
<path d="M30 0H0V6.66643H30V0Z" fill="black"/>
<path d="M30 13.3329H0V19.9994H30V13.3329Z" fill="#FFDA44"/></> }
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
Germany.displayName = "Germany";
