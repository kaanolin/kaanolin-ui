// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Malta = forwardRef<SVGSVGElement, FlagProps>(function Malta(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M10 0C15.5228 0 20 4.47719 20 10C20 15.5228 15.5228 20 10 20" fill="#D80027"/>
<path d="M6.95637 3.9131V2.60876H5.65203V3.9131H4.34766V5.21744H5.65203V6.52181H6.95637V5.21744H8.2607V3.9131H6.95637Z" fill="#ACABB1"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000610352H0V20H20V0.000610352Z" fill="#F0F0F0"/>
<path d="M20 0H10V19.9998H20V0Z" fill="#D80027"/>
<path d="M7.68102 2.2923V1.25061H6.63934V2.2923H5.59766V3.33399H6.63934V4.37565H7.68102V3.33399H8.72266V2.2923H7.68102Z" fill="#ACABB1"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V19.9994H30V0Z" fill="#F0F0F0"/>
<path d="M30 0H15V20H30V0Z" fill="#D80027"/>
<path d="M12.2011 3.12539V1.87537H10.9512V3.12539H9.70117V4.3753H10.9512V5.62533H12.2011V4.3753H13.4512V3.12539H12.2011Z" fill="#ACABB1"/></> }
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
Malta.displayName = "Malta";
