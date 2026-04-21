// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Jordan = forwardRef<SVGSVGElement, FlagProps>(function Jordan(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M6.08738 6.52176H19.3784C17.9655 2.71375 14.3 0 10.0004 0C7.23895 0 4.73922 1.11949 2.92969 2.92926L6.08738 6.52176Z" fill="black"/>
<path d="M6.08738 13.4783H19.3784C17.9655 17.2863 14.3 20 10.0004 20C7.23895 20 4.73922 18.8805 2.92969 17.0708L6.08738 13.4783Z" fill="#6DA544"/>
<path d="M2.92893 2.92896C-0.976309 6.83419 -0.976309 13.1659 2.92893 17.0711C4.54271 15.4574 6.09478 13.9053 10 10L2.92893 2.92896Z" fill="#D80027"/>
<path d="M3.96809 7.82605L4.51688 8.97367L5.75629 8.68722L5.20121 9.83179L6.19789 10.6222L4.95699 10.9018L4.96043 12.1739L3.96809 11.378L2.9757 12.1739L2.97918 10.9018L1.73828 10.6222L2.73492 9.83179L2.17992 8.68722L3.41926 8.97367L3.96809 7.82605Z" fill="#F0F0F0"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#F0F0F0"/>
<path d="M20 0H0V6.66652H20V0Z" fill="black"/>
<path d="M20 13.3335H0V20H20V13.3335Z" fill="#6DA544"/>
<path d="M0 20L10 10L0 0V20Z" fill="#D80027"/>
<path d="M3.04395 7.5625L3.65926 8.84914L5.04879 8.52801L4.42652 9.81125L5.54394 10.6974L4.1527 11.011L4.15656 12.4372L3.04395 11.5449L1.93133 12.4372L1.9352 11.011L0.543945 10.6974L1.66137 9.81125L1.0391 8.52801L2.42863 8.84914L3.04395 7.5625Z" fill="#F0F0F0"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.000488281H0V19.9998H30V0.000488281Z" fill="#F0F0F0"/>
<path d="M30 0.000488281H0V6.6669H30V0.000488281Z" fill="black"/>
<path d="M30 13.3334H0V19.9998H30V13.3334Z" fill="#6DA544"/>
<path d="M15 10.0004L0 20V0L15 10.0004Z" fill="#D80027"/>
<path d="M4.56543 8.172L5.02691 9.13696L6.06906 8.89615L5.60236 9.8586L6.44043 10.5232L5.39699 10.7584L5.39986 11.828L4.56543 11.1588L3.731 11.828L3.73393 10.7584L2.69043 10.5232L3.5285 9.8586L3.0618 8.89615L4.10395 9.13696L4.56543 8.172Z" fill="#F0F0F0"/></> }
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
Jordan.displayName = "Jordan";
