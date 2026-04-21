// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const RepublicOfTheCongo = forwardRef<SVGSVGElement, FlagProps>(function RepublicOfTheCongo(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M5.42136 18.8924L12.7676 12.7671L18.8929 5.42079C17.9406 3.57517 16.4305 2.06427 14.5856 1.11072L7.23355 7.23301L1.11133 14.585C2.0648 16.43 3.5757 17.94 5.42136 18.8924Z" fill="#FFDA44"/>
<path d="M17.0707 17.0714C20.2256 13.9165 20.8313 9.1783 18.8889 5.41479L5.41406 18.8896C9.17757 20.832 13.9158 20.2263 17.0707 17.0714Z" fill="#D80027"/>
<path d="M2.92864 2.92863C-0.226281 6.08355 -0.831905 10.8217 1.1104 14.5853L14.5853 1.11043C10.8218 -0.831946 6.08356 -0.226244 2.92864 2.92863Z" fill="#6DA544"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#D80027"/>
<path d="M17.333 0.000244141L4 19.9996H0V0.000244141H17.333Z" fill="#6DA544"/>
<path d="M19.537 0.000244141L6.20398 19.9996H0.464844L13.7979 0.000244141H19.537Z" fill="#FFDA44"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#D80027"/>
<path d="M25.9996 0L6 19.9994H0V0H25.9996Z" fill="#6DA544"/>
<path d="M29.3036 0L9.30402 19.9994H0.695312L20.6949 0H29.3036Z" fill="#FFDA44"/></> }
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
RepublicOfTheCongo.displayName = "RepublicOfTheCongo";
