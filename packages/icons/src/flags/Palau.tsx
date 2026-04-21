// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Palau = forwardRef<SVGSVGElement, FlagProps>(function Palau(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#338AF3"/>
<path d="M7.82633 14.3478C10.2276 14.3478 12.1741 12.4013 12.1741 10C12.1741 7.5988 10.2276 5.65222 7.82633 5.65222C5.4251 5.65222 3.47852 7.5988 3.47852 10C3.47852 12.4013 5.4251 14.3478 7.82633 14.3478Z" fill="#FFDA44"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#338AF3"/>
<path d="M8.55105 12.8987C10.152 12.8987 11.4498 11.6009 11.4498 10C11.4498 8.39912 10.152 7.10132 8.55105 7.10132C6.95014 7.10132 5.65234 8.39912 5.65234 10C5.65234 11.6009 6.95014 12.8987 8.55105 12.8987Z" fill="#FFDA44"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#338AF3"/>
<path d="M12.8266 14.3476C15.228 14.3476 17.1746 12.401 17.1746 9.99963C17.1746 7.59829 15.228 5.65161 12.8266 5.65161C10.4252 5.65161 8.47852 7.59829 8.47852 9.99963C8.47852 12.401 10.4252 14.3476 12.8266 14.3476Z" fill="#FFDA44"/></> }
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
Palau.displayName = "Palau";
