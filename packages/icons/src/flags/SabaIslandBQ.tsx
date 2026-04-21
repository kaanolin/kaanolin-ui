// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const SabaIslandBQ = forwardRef<SVGSVGElement, FlagProps>(function SabaIslandBQ(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M10 3.70451e-06C9.99066 -0.00702754 -0.00265572 9.99738 5.29435e-07 10C5.29435e-07 4.47719 4.47719 3.70451e-06 10 3.70451e-06Z" fill="#D80027"/>
<path d="M10 3.70453e-06C10.0093 -0.00702754 20.0027 9.99734 20 10C20 4.47719 15.5228 3.70453e-06 10 3.70453e-06Z" fill="#D80027"/>
<path d="M10 20C9.99066 20.007 -0.00265572 10.0027 5.29435e-07 10C5.29435e-07 15.5228 4.47719 20 10 20Z" fill="#0052B4"/>
<path d="M10 20C10.0093 20.007 20.0027 10.0027 20 10C20 15.5228 15.5228 20 10 20Z" fill="#0052B4"/>
<path d="M9.9993 5.21741L11.0785 8.53885H14.5709L11.7455 10.5916L12.8247 13.9131L9.9993 11.8603L7.17391 13.9131L8.25313 10.5916L5.42773 8.53885H8.92008L9.9993 5.21741Z" fill="#FFDA44"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#0052B4"/>
<path d="M20 0H0V10H20V0Z" fill="#D80027"/>
<path d="M20 10C20.0026 10.0026 10.0091 20.0072 10 20C9.99086 20.0072 -0.00261667 10.0026 5.13971e-07 10C-0.00261667 9.99738 9.99086 -0.00718363 10 3.87089e-06C10.0091 -0.00718363 20.0026 9.99738 20 10Z" fill="#F0F0F0"/>
<path d="M10 4.95483L11.1804 8.58753H15L11.9098 10.8326L13.0902 14.4654L10 12.2202L6.90984 14.4654L8.0902 10.8326L5 8.58753H8.81965L10 4.95483Z" fill="#FFDA44"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.000366211H0V20H30V0.000366211Z" fill="#0052B4"/>
<path d="M30 0V9.76703L0 10.0103V0H30Z" fill="#D80027"/>
<path d="M24.9996 10.0002C25.0022 10.0028 15.0089 20.0072 14.9998 20C14.9906 20.0072 4.99742 10.0028 5 10.0002C4.99742 9.99755 14.9906 -0.00683695 14.9998 0.000370103C15.0089 -0.00683695 25.0021 9.99755 24.9996 10.0002Z" fill="#F0F0F0"/>
<path d="M14.9993 5.21753L16.0786 8.53893H19.5709L16.7455 10.5917L17.8247 13.9132L14.9993 11.8604L12.1739 13.9132L13.2531 10.5917L10.4277 8.53893H13.9201L14.9993 5.21753Z" fill="#FFDA44"/></> }
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
SabaIslandBQ.displayName = "SabaIslandBQ";
