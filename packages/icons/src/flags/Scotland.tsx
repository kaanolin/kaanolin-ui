// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Scotland = forwardRef<SVGSVGElement, FlagProps>(function Scotland(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M16.0884 2.06719C14.4022 0.771055 12.2914 0 10.0003 0C7.7091 0 5.59832 0.771094 3.91211 2.06719L10.0003 8.15531L16.0884 2.06719Z" fill="#0052B4"/>
<path d="M2.06715 3.91187C0.771094 5.59808 0 7.70882 0 9.99999C0 12.2912 0.771094 14.4019 2.06719 16.0882L8.15535 9.99999L2.06715 3.91187Z" fill="#0052B4"/>
<path d="M3.91211 17.9328C5.59836 19.229 7.7091 20 10.0003 20C12.2914 20 14.4022 19.2289 16.0884 17.9328L10.0003 11.8447L3.91211 17.9328Z" fill="#0052B4"/>
<path d="M17.9329 16.0881C19.229 14.4019 20 12.2912 20 9.99999C20 7.70882 19.229 5.59808 17.9329 3.91187L11.8447 9.99999L17.9329 16.0881Z" fill="#0052B4"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#0052B4"/>
<path d="M20 1.87523L11.8752 10L20 18.1248V20H18.1248L10 11.8752L1.87523 20H0V18.1248L8.12477 10L0 1.87523V0H1.87523L10 8.12477L18.1248 0H20V1.87523Z" fill="#F0F0F0"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.000244141H0V20H30V0.000244141Z" fill="#F0F0F0"/>
<path d="M30 0.000244141H0V20H30V0.000244141Z" fill="#0052B4"/>
<path d="M17.6517 9.99982L30 1.76773V0H27.3483L15 8.23204L2.65166 0H0V1.76773L12.3483 9.99982L0 18.2319V19.9995H2.65166L15 11.7676L27.3483 19.9995H30V18.2319L17.6517 9.99982Z" fill="#F0F0F0"/></> }
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
Scotland.displayName = "Scotland";
