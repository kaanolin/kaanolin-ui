// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const SierraLeone = forwardRef<SVGSVGElement, FlagProps>(function SierraLeone(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M19.378 13.4783C19.78 12.395 20 11.2232 20 10C20 8.77683 19.78 7.60511 19.378 6.52179L10 5.65222L0.621992 6.52179C0.22 7.60511 0 8.77683 0 10C0 11.2232 0.22 12.395 0.621992 13.4783L10 14.3478L19.378 13.4783Z" fill="#F0F0F0"/>
<path d="M9.99914 20C14.2987 20 17.9642 17.2863 19.3771 13.4783H0.621094C2.03406 17.2863 5.69945 20 9.99914 20Z" fill="#338AF3"/>
<path d="M9.99914 0C5.69945 0 2.03406 2.71375 0.621094 6.52176H19.3771C17.9642 2.71375 14.2987 0 9.99914 0Z" fill="#6DA544"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000244141H0V19.9998H20V0.000244141Z" fill="#F0F0F0"/>
<path d="M20 0H0V6.66652H20V0Z" fill="#6DA544"/>
<path d="M20 13.3335H0V20H20V13.3335Z" fill="#338AF3"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#F0F0F0"/>
<path d="M30 0H0V6.66665H30V0Z" fill="#6DA544"/>
<path d="M30 13.3334H0V20H30V13.3334Z" fill="#338AF3"/></> }
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
SierraLeone.displayName = "SierraLeone";
