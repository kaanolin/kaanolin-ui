// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Vietnam = forwardRef<SVGSVGElement, FlagProps>(function Vietnam(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#D80027"/>
<path d="M9.9993 5.21741L11.0785 8.53885H14.5709L11.7455 10.5916L12.8247 13.9131L9.9993 11.8603L7.17391 13.9131L8.25313 10.5916L5.42773 8.53885H8.92008L9.9993 5.21741Z" fill="#FFDA44"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M7.68129 0H0V20H7.68129H20V0H7.68129Z" fill="#D80027"/>
<path d="M10.0002 5.57507L11.0266 8.7339H14.348L11.6609 10.6862L12.6873 13.8451L10.0002 11.8928L7.31301 13.8451L8.33945 10.6862L5.65234 8.7339H8.97375L10.0002 5.57507Z" fill="#FFDA44"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M11.5219 0H0V20H11.5219H30V0H11.5219Z" fill="#D80027"/>
<path d="M15 4.21545L16.3279 8.30228H20.625L17.1485 10.8281L18.4765 14.915L15 12.3892L11.5235 14.915L12.8515 10.8281L9.375 8.30228H13.6721L15 4.21545Z" fill="#FFDA44"/></> }
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
Vietnam.displayName = "Vietnam";
