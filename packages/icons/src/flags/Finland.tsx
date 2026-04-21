// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Finland = forwardRef<SVGSVGElement, FlagProps>(function Finland(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M19.9154 8.69564H7.82613L7.82609 0.237671C6.90195 0.442593 6.02582 0.774741 5.21738 1.21587V8.69556V8.6956H0.0846484C0.0289844 9.12259 0 9.55791 0 9.99998C0 10.442 0.0289844 10.8774 0.0846484 11.3043H5.21734H5.21738V18.784C6.02582 19.2251 6.90195 19.5574 7.82609 19.7622V11.3044V11.3044H19.9154C19.9709 10.8774 20 10.442 20 9.99998C20 9.55791 19.9709 9.12259 19.9154 8.69564Z" fill="#0052B4"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#F0F0F0"/>
<path d="M20 8.75H7.5V0H5V8.75H0V11.25H5V20H7.5V11.25H20V8.75Z" fill="#0052B4"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.000305176H0V20H30V0.000305176Z" fill="#F0F0F0"/>
<path d="M30 8.74999V11.2497H10.7609V19.9997H8.26043V11.2497H0V8.74999H8.26043V0H10.7609V8.74999H30Z" fill="#2E52B2"/></> }
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
Finland.displayName = "Finland";
