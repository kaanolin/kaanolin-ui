// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Laos = forwardRef<SVGSVGElement, FlagProps>(function Laos(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M19.0077 5.65219C17.3902 2.30723 13.9645 0 9.99992 0C6.03531 0 2.60969 2.30723 0.992188 5.65219L9.99992 6.52176L19.0077 5.65219Z" fill="#D80027"/>
<path d="M0.992188 14.3478C2.60969 17.6928 6.03531 20 9.99992 20C13.9645 20 17.3902 17.6928 19.0077 14.3478L9.99992 13.4783L0.992188 14.3478Z" fill="#D80027"/>
<path d="M19.0077 5.65222H0.992266C0.356562 6.96687 0 8.44179 0 10C0 11.5583 0.356562 13.0332 0.992266 14.3478H19.0077C19.6435 13.0332 20 11.5583 20 10C20 8.44179 19.6435 6.96687 19.0077 5.65222Z" fill="#0052B4"/>
<path d="M9.99973 13.4782C11.9207 13.4782 13.478 11.921 13.478 9.99997C13.478 8.07899 11.9207 6.52173 9.99973 6.52173C8.07875 6.52173 6.52148 8.07899 6.52148 9.99997C6.52148 11.921 8.07875 13.4782 9.99973 13.4782Z" fill="#F0F0F0"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000244141H0V19.9998H20V0.000244141Z" fill="#0052B4"/>
<path d="M20 0H0V6.66652H20V0Z" fill="#D80027"/>
<path d="M20 13.3335H0V20H20V13.3335Z" fill="#D80027"/>
<path d="M9.5 13C10.8807 13 12 11.8807 12 10.5C12 9.11929 10.8807 8 9.5 8C8.11929 8 7 9.11929 7 10.5C7 11.8807 8.11929 13 9.5 13Z" fill="#F0F0F0"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#0052B4"/>
<path d="M30 0H0V6.66665H30V0Z" fill="#D80027"/>
<path d="M30 13.3334H0V20H30V13.3334Z" fill="#D80027"/>
<path d="M14.9994 12.7826C16.5362 12.7826 17.782 11.5368 17.782 9.99996C17.782 8.46313 16.5362 7.21729 14.9994 7.21729C13.4626 7.21729 12.2168 8.46313 12.2168 9.99996C12.2168 11.5368 13.4626 12.7826 14.9994 12.7826Z" fill="#F0F0F0"/></> }
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
Laos.displayName = "Laos";
