// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Chile = forwardRef<SVGSVGElement, FlagProps>(function Chile(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M20 9.99999C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 9.99999C0 4.47718 10 9.99999 10 9.99999C10 9.99999 17.5688 9.99999 20 9.99999Z" fill="#D80027"/>
<path d="M0 10C0 4.47719 4.47719 0 10 0V10C10 10 3.47824 10 0 10Z" fill="#0052B4"/>
<path d="M5.95293 3.47827L6.60047 5.47116H8.6959L7.00066 6.7028L7.64816 8.69569L5.95293 7.46401L4.2577 8.69569L4.9052 6.7028L3.20996 5.47116H5.30539L5.95293 3.47827Z" fill="#F0F0F0"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#D80027"/>
<path d="M20 0H10V10H20V0Z" fill="#F0F0F0"/>
<path d="M10 0H0V10H10V0Z" fill="#0052B4"/>
<path d="M5 2.62231L5.59016 4.43868H7.5L5.95492 5.56126L6.54508 7.37763L5 6.25505L3.45492 7.37763L4.04508 5.56126L2.5 4.43868H4.40984L5 2.62231Z" fill="#F0F0F0"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#D80027"/>
<path d="M30 0H15V10H30V0Z" fill="#F0F0F0"/>
<path d="M15 0H0V10H15V0Z" fill="#0052B4"/>
<path d="M7.5 1.43347L8.38523 4.15802H11.25L8.93238 5.84198L9.81762 8.56653L7.5 6.88269L5.18238 8.56653L6.06762 5.84198L3.75 4.15802H6.61477L7.5 1.43347Z" fill="#F0F0F0"/></> }
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
Chile.displayName = "Chile";
