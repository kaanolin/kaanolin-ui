// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Tonga = forwardRef<SVGSVGElement, FlagProps>(function Tonga(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M6.5218 5.21742V3.91309H5.21742V5.21742H3.91309V6.5218H5.21742V7.82613H6.5218V6.5218H7.82613V5.21742H6.5218Z" fill="#D80027"/>
<path d="M10 0V10C4.47719 10 2.28223 10 0 10C0 15.5228 4.47719 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47719 15.5228 0 10 0Z" fill="#D80027"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#D80027"/>
<path d="M10 0H0V10H10V0Z" fill="#F0F0F0"/>
<path d="M5.72473 4.27531V2.82605H4.27543V4.27531H2.82617V5.7246H4.27543V7.17386H5.72473V5.7246H7.17398V4.27531H5.72473Z" fill="#D80027"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#D80027"/>
<path d="M15 0H0V9.99968H15V0Z" fill="#F0F0F0"/>
<path d="M8.28283 4.21705V2.65186H6.71756V4.21705H5.15234V5.78225H6.71756V7.34745H8.28283V5.78225H9.84805V4.21705H8.28283Z" fill="#D80027"/></> }
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
Tonga.displayName = "Tonga";
