// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Sweden = forwardRef<SVGSVGElement, FlagProps>(function Sweden(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#FFDA44"/>
<path d="M7.82621 8.69566H19.9154C19.2762 3.78914 15.0808 0 10.0001 0C9.25344 0 8.52613 0.0825391 7.82617 0.237695L7.82621 8.69566Z" fill="#0052B4"/>
<path d="M5.21672 8.69567V1.21594C2.47086 2.71415 0.505195 5.46223 0.0839844 8.69571L5.21672 8.69567Z" fill="#0052B4"/>
<path d="M5.21668 11.3043H0.0839844C0.505195 14.5378 2.47086 17.2859 5.21672 18.784L5.21668 11.3043Z" fill="#0052B4"/>
<path d="M7.82617 11.3044V19.7623C8.52613 19.9174 9.25344 20 10.0001 20C15.0808 20 19.2762 16.2108 19.9154 11.3043H7.82617V11.3044Z" fill="#0052B4"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#0052B4"/>
<path d="M7.5 0H5V20H7.5V0Z" fill="#FFDA44"/>
<path d="M20 8.75H0V11.25H20V8.75Z" fill="#FFDA44"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.00012207H0V20H30V0.00012207Z" fill="#0052B4"/>
<path d="M11.25 0H7.5V8.1248H0V11.8747H7.5V19.9995H11.25V11.8747H30V8.1248H11.25V0Z" fill="#FFDA44"/></> }
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
Sweden.displayName = "Sweden";
