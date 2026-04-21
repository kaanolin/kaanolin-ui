// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Bangladesh = forwardRef<SVGSVGElement, FlagProps>(function Bangladesh(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#496E2D"/>
<path d="M7.82633 14.3478C10.2276 14.3478 12.1741 12.4012 12.1741 9.99997C12.1741 7.59874 10.2276 5.65216 7.82633 5.65216C5.4251 5.65216 3.47852 7.59874 3.47852 9.99997C3.47852 12.4012 5.4251 14.3478 7.82633 14.3478Z" fill="#D80027"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#496E2D"/>
<path d="M8.55078 15C11.3122 15 13.5508 12.7614 13.5508 10C13.5508 7.23858 11.3122 5 8.55078 5C5.78936 5 3.55078 7.23858 3.55078 10C3.55078 12.7614 5.78936 15 8.55078 15Z" fill="#D80027"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#496E2D"/>
<path d="M12.8266 14.3477C15.228 14.3477 17.1746 12.401 17.1746 9.99969C17.1746 7.59835 15.228 5.65167 12.8266 5.65167C10.4252 5.65167 8.47852 7.59835 8.47852 9.99969C8.47852 12.401 10.4252 14.3477 12.8266 14.3477Z" fill="#D80027"/></> }
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
Bangladesh.displayName = "Bangladesh";
