// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Sudan = forwardRef<SVGSVGElement, FlagProps>(function Sudan(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M0.992266 5.65216C0.356562 6.96685 0 8.44174 0 9.99998C0 11.5582 0.356562 13.0331 0.992266 14.3478L10 15.2174L19.0077 14.3478C19.6434 13.0331 20 11.5582 20 9.99998C20 8.44174 19.6434 6.96685 19.0077 5.65216L10 4.78259L0.992266 5.65216Z" fill="#F0F0F0"/>
<path d="M0.992188 14.3478C2.60961 17.6927 6.03496 20 9.99957 20C13.9642 20 17.3895 17.6927 19.007 14.3478H0.992188Z" fill="black"/>
<path d="M0.992188 5.65219H19.007C17.3895 2.30723 13.9642 0 9.99957 0C6.03496 0 2.60961 2.30723 0.992188 5.65219Z" fill="#D80027"/>
<path d="M2.92893 2.92896C-0.976309 6.83419 -0.976309 13.1659 2.92893 17.0711C4.54271 15.4574 6.09478 13.9053 10 10.0001L2.92893 2.92896Z" fill="#496E2D"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000366211H0V19.9997H20V0.000366211Z" fill="#F0F0F0"/>
<path d="M20 0.00012207H0V6.6667H20V0.00012207Z" fill="#D80027"/>
<path d="M20 13.3334H0V19.9999H20V13.3334Z" fill="black"/>
<path d="M0 19.9998V0L10 10.0002L0 19.9998Z" fill="#496E2D"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.000366211H0V19.9997H30V0.000366211Z" fill="#F0F0F0"/>
<path d="M30 0.000366211H0V6.6668H30V0.000366211Z" fill="#D80027"/>
<path d="M30 13.3333H0V19.9997H30V13.3333Z" fill="black"/>
<path d="M0 20V0L15 10.0004L0 20Z" fill="#496E2D"/></> }
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
Sudan.displayName = "Sudan";
