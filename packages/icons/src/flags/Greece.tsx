// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Greece = forwardRef<SVGSVGElement, FlagProps>(function Greece(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M10 7.3913H19.6555C19.4048 6.46107 19.0237 5.58447 18.5323 4.78259H10V7.3913Z" fill="#338AF3"/>
<path d="M3.77418 17.8261H16.2239C17.1365 17.0992 17.9192 16.2164 18.5313 15.2174H1.4668C2.07895 16.2163 2.8616 17.0992 3.77418 17.8261Z" fill="#338AF3"/>
<path d="M3.4773 2.41949C2.69113 3.09649 2.01148 3.89371 1.4668 4.78262H3.4773V2.41949Z" fill="#338AF3"/>
<path d="M10 10C10 8.98141 10 8.12895 10 7.3913H6.08695V10H3.47824V7.3913H0.344492C0.120313 8.22309 0 9.09739 0 10C0 10.9026 0.120313 11.7769 0.344492 12.6087H19.6555C19.8797 11.7769 20 10.9026 20 10H10Z" fill="#338AF3"/>
<path d="M10.0009 0C8.6123 0 7.28984 0.28332 6.08789 0.794844V4.78262H10.0009C10.0009 3.87199 10.0009 3.0975 10.0009 2.17391H16.2258C14.5176 0.813438 12.3544 0 10.0009 0Z" fill="#338AF3"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#F0F0F0"/>
<path d="M20 0H0V2.50002H20V0Z" fill="#338AF3"/>
<path d="M20 5.00012H0V7.50014H20V5.00012Z" fill="#338AF3"/>
<path d="M20 14.9999H0V17.4999H20V14.9999Z" fill="#338AF3"/>
<path d="M11.0869 0H0V11.2496H11.0869V0Z" fill="#338AF3"/>
<path d="M11.0869 3.88892H0V6.1112H11.0869V3.88892Z" fill="#F0F0F0"/>
<path d="M6.65393 0H4.43164V10.3915H6.65393V0Z" fill="#F0F0F0"/>
<path d="M20 10.0001H0V12.5001H20V10.0001Z" fill="#338AF3"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#F0F0F0"/>
<path d="M30 0H0V2.49998H30V0Z" fill="#338AF3"/>
<path d="M30 5.00037H0V7.50035H30V5.00037Z" fill="#338AF3"/>
<path d="M30 10.0002H0V12.5002H30V10.0002Z" fill="#338AF3"/>
<path d="M30 15.0002H0V17.5002H30V15.0002Z" fill="#338AF3"/>
<path d="M11.0867 0H0V10.0002H11.0867V0Z" fill="#338AF3"/>
<path d="M11.0867 3.88916H0V6.1112H11.0867V3.88916Z" fill="#F0F0F0"/>
<path d="M6.65365 0H4.43164V10.0002H6.65365V0Z" fill="#F0F0F0"/></> }
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
Greece.displayName = "Greece";
