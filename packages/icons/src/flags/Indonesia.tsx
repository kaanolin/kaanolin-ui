// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Indonesia = forwardRef<SVGSVGElement, FlagProps>(function Indonesia(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M0 10C0 4.47719 4.47719 0 10 0C15.5228 0 20 4.47719 20 10" fill="#A2001D"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#F0F0F0"/>
<path d="M20 0H0V10H20V0Z" fill="#A2001D"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#F0F0F0"/>
<path d="M30 0H0V10H30V0Z" fill="#A2001D"/></> }
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
Indonesia.displayName = "Indonesia";
