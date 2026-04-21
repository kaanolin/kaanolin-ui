// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const CzechRepublic = forwardRef<SVGSVGElement, FlagProps>(function CzechRepublic(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M9.99999 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 9.99999 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 9.99999 20Z" fill="#F0F0F0"/>
<path d="M9.13121 10C9.13121 10 2.93555 17.0725 2.92969 17.0711C4.7393 18.8807 7.23933 20 10.0008 20C15.5236 20 20.0008 15.5228 20.0008 10H9.13121Z" fill="#D80027"/>
<path d="M2.92892 2.92889C-0.976308 6.83413 -0.976308 13.1658 2.92892 17.0711C4.54271 15.4573 6.09478 13.9052 10 9.99999L2.92892 2.92889Z" fill="#0052B4"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#D80027"/>
<path d="M20 0H0V10H20V0Z" fill="#F0F0F0"/>
<path d="M0 20L10 10L0 0V20Z" fill="#0052B4"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#0052B4"/>
<path d="M30 10V20H0L12.6085 10H30Z" fill="#D80027"/>
<path d="M30 0V10H12.6085L0 0H30Z" fill="#F0F0F0"/></> }
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
CzechRepublic.displayName = "CzechRepublic";
