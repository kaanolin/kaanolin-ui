// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Tanzania = forwardRef<SVGSVGElement, FlagProps>(function Tanzania(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#FFDA44"/>
<path d="M2.92953 17.0711C3.34902 17.4906 3.7966 17.8647 4.26609 18.1941L18.1946 4.26552C17.8653 3.79603 17.4912 3.34845 17.0717 2.92896C16.6521 2.50947 16.2046 2.13541 15.7351 1.80603L1.80664 15.7346C2.13594 16.204 2.51008 16.6516 2.92953 17.0711Z" fill="black"/>
<path d="M2.92852 2.92884C-0.226246 6.08368 -0.83191 10.8216 1.11039 14.585L14.5847 1.11075C10.8213 -0.831552 6.08332 -0.225849 2.92852 2.92884Z" fill="#6DA544"/>
<path d="M17.0702 17.0711C20.225 13.9163 20.8306 9.17832 18.8884 5.41492L5.41406 18.8892C9.17738 20.8315 13.9154 20.2259 17.0702 17.0711Z" fill="#338AF3"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#338AF3"/>
<path d="M0 20V0H20" fill="#6DA544"/>
<path d="M20 0V4.30434L4.30477 19.9996H0V15.6957L15.6952 0.000429687H17.5396L17.54 0H20Z" fill="#FFDA44"/>
<path d="M2.45965 19.9996L20 2.45992V0H17.54L17.5397 0.000351562L0 17.5406V19.9996H2.45965Z" fill="black"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#338AF3"/>
<path d="M0 20V0H30" fill="#6DA544"/>
<path d="M30 3.91913V0H24.1213L0 16.0809V20H5.87871L30 3.91913Z" fill="#FFDA44"/>
<path d="M30 0V2.35112L3.52693 20H0V17.6489L26.4731 0H30Z" fill="black"/></> }
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
Tanzania.displayName = "Tanzania";
