// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Somalia = forwardRef<SVGSVGElement, FlagProps>(function Somalia(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#338AF3"/>
<path d="M9.99934 5.21741L11.0786 8.53885H14.5709L11.7455 10.5916L12.8247 13.9131L9.99934 11.8603L7.17395 13.9131L8.25316 10.5916L5.42773 8.53885H8.92012L9.99934 5.21741Z" fill="#F0F0F0"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#338AF3"/>
<path d="M10.0009 5.98865L10.9247 8.83162H13.914L11.4956 10.5887L12.4193 13.4317L10.0009 11.6747L7.58254 13.4317L8.50629 10.5887L6.08789 8.83162H9.07715L10.0009 5.98865Z" fill="#F0F0F0"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#338AF3"/>
<path d="M15 4.21533L16.3279 8.30208H20.625L17.1485 10.8278L18.4765 14.9146L15 12.3888L11.5235 14.9146L12.8515 10.8278L9.375 8.30208H13.6721L15 4.21533Z" fill="#F0F0F0"/></> }
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
Somalia.displayName = "Somalia";
