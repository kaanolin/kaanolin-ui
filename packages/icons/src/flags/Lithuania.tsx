// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Lithuania = forwardRef<SVGSVGElement, FlagProps>(function Lithuania(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M19.378 13.4783C19.78 12.395 20 11.2232 20 10C20 8.77683 19.78 7.60507 19.378 6.52179L10 5.65222L0.621992 6.52179C0.22 7.60507 0 8.77683 0 10C0 11.2232 0.22 12.395 0.621992 13.4783L10 14.3478L19.378 13.4783Z" fill="#6DA544"/>
<path d="M19.3771 6.52176C17.9642 2.71375 14.2987 0 9.9991 0C5.69945 0 2.03402 2.71375 0.621094 6.52176H19.3771Z" fill="#FFDA44"/>
<path d="M9.9991 20C14.2987 20 17.9642 17.2863 19.3771 13.4783H0.621094C2.03402 17.2863 5.69945 20 9.9991 20Z" fill="#D80027"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000244141H0V19.9998H20V0.000244141Z" fill="#6DA544"/>
<path d="M20 0H0V6.66652H20V0Z" fill="#FFDA44"/>
<path d="M20 13.3335H0V20H20V13.3335Z" fill="#D80027"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#6DA544"/>
<path d="M30 0H0V6.66665H30V0Z" fill="#FFDA44"/>
<path d="M30 13.3334H0V20H30V13.3334Z" fill="#D80027"/></> }
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
Lithuania.displayName = "Lithuania";
