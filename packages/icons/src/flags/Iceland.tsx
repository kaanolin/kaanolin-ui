// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Iceland = forwardRef<SVGSVGElement, FlagProps>(function Iceland(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M0.34375 12.6088C0.922344 14.7556 2.19754 16.6163 3.9123 17.9338V12.6088H0.34375Z" fill="#0052B4"/>
<path d="M9.13086 19.962C9.4175 19.9867 9.70738 20.0001 10.0004 20.0001C14.6207 20.0001 18.5084 16.8664 19.6559 12.6088H9.13086V19.962Z" fill="#0052B4"/>
<path d="M19.6559 7.39129C18.5084 3.13363 14.6207 0 10.0004 0C9.70738 0 9.4175 0.0133594 9.13086 0.0380469V7.39129H19.6559Z" fill="#0052B4"/>
<path d="M3.9123 2.06616C2.19754 3.38374 0.922344 5.2444 0.34375 7.39124H3.9123V2.06616Z" fill="#0052B4"/>
<path d="M19.9154 8.69563H7.82613L7.82609 0.237671C6.90195 0.442593 6.02582 0.774741 5.21738 1.21587V8.6956H0.0846484C0.0289844 9.12259 0 9.5579 0 9.99997C0 10.442 0.0289844 10.8774 0.0846484 11.3043H5.21734H5.21738V18.784C6.02582 19.2251 6.90195 19.5574 7.82609 19.7622V11.3044V11.3043H19.9154C19.9709 10.8774 20 10.442 20 9.99997C20 9.5579 19.9709 9.12259 19.9154 8.69563Z" fill="#D80027"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#2E52B2"/>
<path d="M20 7.66305H8.58695V0H3.91305V7.66305H0V12.337H3.91305V20H8.58695V12.337H20V7.66305Z" fill="#F0F0F0"/>
<path d="M20 8.75H7.5V0H5V8.75H0V11.25H5V20H7.5V11.25H20V8.75Z" fill="#D80027"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.000244141H0V20H30V0.000244141Z" fill="#0052B4"/>
<path d="M30 12.3368H11.8474V19.9997H10.7609H8.26043H7.17393V12.3368H0V11.2497V8.74999V7.66281H7.17393V0H8.26043H10.7609H11.8474V7.66281H30V8.74999V11.2497V12.3368Z" fill="#F0F0F0"/>
<path d="M30 8.74999V11.2497H10.7609V19.9997H8.26043V11.2497H0V8.74999H8.26043V0H10.7609V8.74999H30Z" fill="#D80027"/></> }
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
Iceland.displayName = "Iceland";
