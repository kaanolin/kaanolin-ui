// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const DemocraticRepublicOfCongo = forwardRef<SVGSVGElement, FlagProps>(function DemocraticRepublicOfCongo(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M18.8905 5.41466C18.4284 4.51939 17.8228 3.67908 17.0723 2.92861C16.3218 2.17811 15.4814 1.57244 14.5862 1.11041L7.5413 7.54033L1.11133 14.5852C1.5734 15.4805 2.17906 16.3208 2.92953 17.0713C3.68 17.8218 4.52036 18.4274 5.41559 18.8895L12.4605 12.4595L18.8905 5.41466Z" fill="#FFDA44"/>
<path d="M2.92961 17.0714C3.3491 17.4909 3.79672 17.865 4.26621 18.1944L18.1953 4.26529C17.866 3.7958 17.4918 3.34818 17.0723 2.92869C16.6528 2.5092 16.2052 2.1351 15.7357 1.80573L1.80664 15.7348C2.13598 16.2042 2.51008 16.6519 2.92961 17.0714Z" fill="#D80027"/>
<path d="M2.92868 2.92859C-0.226285 6.08354 -0.83195 10.8217 1.11047 14.5852L14.5853 1.11043C10.8218 -0.831955 6.08361 -0.226214 2.92868 2.92859Z" fill="#338AF3"/>
<path d="M17.0707 17.0713C20.2256 13.9164 20.8312 9.17821 18.8889 5.41473L5.41406 18.8895C9.17754 20.8319 13.9158 20.2263 17.0707 17.0713Z" fill="#338AF3"/>
<path d="M5.32891 3.04315L5.86852 4.70397H7.61477L6.20204 5.73038L6.74165 7.39115L5.32891 6.36471L3.9161 7.39115L4.45578 5.73038L3.04297 4.70397H4.78922L5.32891 3.04315Z" fill="#FFDA44"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#338AF3"/>
<path d="M20 0V4.30434L4.30477 19.9996H0V15.6957L15.6952 0.000429687H17.5396L17.54 0H20Z" fill="#FFDA44"/>
<path d="M2.45965 19.9996L20 2.45992V0H17.54L17.5397 0.000351562L0 17.5406V19.9996H2.45965Z" fill="#D80027"/>
<path d="M5 2.37799L5.59016 4.19432H7.5L5.95492 5.31694L6.54508 7.13322L5 6.01069L3.45492 7.13322L4.04508 5.31694L2.5 4.19432H4.40984L5 2.37799Z" fill="#FFDA44"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#338AF3"/>
<path d="M30 3.91913V0H24.1213L0 16.0809V20H5.87871L30 3.91913Z" fill="#FFDA44"/>
<path d="M30 0V2.35112L3.52693 20H0V17.6489L26.4731 0H30Z" fill="#D80027"/>
<path d="M10.3287 3.04346L10.8683 4.70416H12.6145L11.2018 5.73057L11.7414 7.39127L10.3287 6.36486L8.91607 7.39127L9.45566 5.73057L8.04297 4.70416H9.78912L10.3287 3.04346Z" fill="#FFDA44"/></> }
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
DemocraticRepublicOfCongo.displayName = "DemocraticRepublicOfCongo";
