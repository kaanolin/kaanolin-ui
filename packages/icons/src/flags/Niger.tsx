// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Niger = forwardRef<SVGSVGElement, FlagProps>(function Niger(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M0.992266 5.65216C0.356562 6.96685 0 8.44173 0 9.99997C0 11.5582 0.356562 13.0331 0.992266 14.3478L10 15.2174L19.0077 14.3478C19.6434 13.0331 20 11.5582 20 9.99997C20 8.44173 19.6434 6.96685 19.0077 5.65216L10 4.78259L0.992266 5.65216Z" fill="#F0F0F0"/>
<path d="M0.992188 14.3478C2.60961 17.6927 6.03496 20 9.99957 20C13.9642 20 17.3895 17.6927 19.007 14.3478H0.992188Z" fill="#6DA544"/>
<path d="M0.992188 5.65218H19.007C17.3895 2.30723 13.9641 0 9.99957 0C6.035 0 2.60961 2.30723 0.992188 5.65218Z" fill="#FF9811"/>
<path d="M9.99973 13.4782C11.9207 13.4782 13.478 11.9209 13.478 9.99997C13.478 8.07899 11.9207 6.52173 9.99973 6.52173C8.07875 6.52173 6.52148 8.07899 6.52148 9.99997C6.52148 11.9209 8.07875 13.4782 9.99973 13.4782Z" fill="#FF9811"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000244141H0V19.9998H20V0.000244141Z" fill="#F0F0F0"/>
<path d="M20 0H0V6.66652H20V0Z" fill="#FF9811"/>
<path d="M20 13.3335H0V20H20V13.3335Z" fill="#6DA544"/>
<path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" fill="#FF9811"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#F0F0F0"/>
<path d="M30 0H0V6.66665H30V0Z" fill="#FF9811"/>
<path d="M30 13.3334H0V20H30V13.3334Z" fill="#6DA544"/>
<path d="M15 11.8751C16.0355 11.8751 16.875 11.0356 16.875 10C16.875 8.96448 16.0355 8.125 15 8.125C13.9645 8.125 13.125 8.96448 13.125 10C13.125 11.0356 13.9645 11.8751 15 11.8751Z" fill="#FF9811"/></> }
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
Niger.displayName = "Niger";
