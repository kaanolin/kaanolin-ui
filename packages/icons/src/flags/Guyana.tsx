// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Guyana = forwardRef<SVGSVGElement, FlagProps>(function Guyana(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M9.99998 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 9.99998 0C4.47714 0 0 4.47715 0 10C0 15.5228 4.47714 20 9.99998 20Z" fill="#F0F0F0"/>
<path d="M10.0004 0C8.23242 0 6.57195 0.459453 5.13086 1.26453V18.7355C6.57199 19.5405 8.23242 20 10.0004 20C15.5232 20 20.0004 15.5228 20.0004 10C20.0004 4.47719 15.5232 0 10.0004 0Z" fill="#6DA544"/>
<path d="M5.15949 1.24805C4.53039 1.59668 3.94297 2.01105 3.40629 2.48215C3.46055 2.43457 3.51535 2.38754 3.57059 2.34113L11.2294 9.99996L3.57055 17.6588C3.51527 17.6124 3.46051 17.5654 3.40625 17.5178C3.94293 17.9889 4.53039 18.4032 5.15945 18.7519L19.9996 9.99996L5.15949 1.24805Z" fill="#F0F0F0"/>
<path d="M4.31547 1.77271C4.01051 1.98388 3.71762 2.2111 3.43852 2.45396L10.0002 9.99997L3.43848 17.546C3.71758 17.7888 4.01047 18.0161 4.31543 18.2272L18.2884 9.99997L4.31547 1.77271Z" fill="#FFDA44"/>
<path d="M3.5707 2.34119C3.3484 2.52798 3.13387 2.7238 2.92871 2.92892L9.13022 10L2.92871 17.0711C3.13387 17.2763 3.34836 17.4721 3.5707 17.6588L11.2295 10L3.5707 2.34119Z" fill="black"/>
<path d="M2.92892 2.92896C-0.976307 6.83419 -0.976307 13.1659 2.92892 17.0711C4.54271 15.4574 6.09477 13.9053 10 10L2.92892 2.92896Z" fill="#D80027"/></> },
    square: { viewBox: "0 0 20 20", body: <><path fillRule="evenodd" clipRule="evenodd" d="M0 0H20V20H0V0Z" fill="#6DA544"/>
<path fillRule="evenodd" clipRule="evenodd" d="M0 0L20 10L0 20V0Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M0 0.764648L18 9.9174L0 19.0701V0.764648Z" fill="#FFDA44"/>
<path fillRule="evenodd" clipRule="evenodd" d="M0 0.041626L9.69249 9.95898L0 19.8763V0.041626Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M0 1.12524L8.6415 9.91735L0 18.7094V1.12524Z" fill="#D80027"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 20V9.99951L0 20H30Z" fill="#6DA544"/>
<path d="M0 0L30 9.99956V0H0Z" fill="#6DA544"/>
<path d="M0 0V1.05163L13.4222 9.99956L0 18.9475V20L15.0001 9.99956L0 0Z" fill="black"/>
<path d="M3.15625 17.8959L26.8449 9.99956L3.15625 2.10413L15.0006 9.99956L3.15625 17.8959Z" fill="#FFDA44"/>
<path d="M0 0L3.15572 2.10413L26.8444 9.99956L3.15572 17.8959L0 20L30 9.99956L0 0Z" fill="white"/>
<path d="M0 1.05164V9.99957V18.9475L13.4222 9.99957L0 1.05164Z" fill="#D80027"/></> }
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
Guyana.displayName = "Guyana";
