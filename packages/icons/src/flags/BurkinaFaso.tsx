// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const BurkinaFaso = forwardRef<SVGSVGElement, FlagProps>(function BurkinaFaso(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M0 10C0 4.47719 4.47719 0 10 0C15.5228 0 20 4.47719 20 10C19.5652 10 10 11.3043 10 11.3043L0 10Z" fill="#D80027"/>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10" fill="#6DA544"/>
<path d="M10.0009 6.52173L10.7562 8.84665H13.2011L11.2232 10.2836L11.9786 12.6087L10.0009 11.1718L8.02312 12.6087L8.77863 10.2836L6.80078 8.84665H9.24547L10.0009 6.52173Z" fill="#FFDA44"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000671387H0V20H20V0.000671387Z" fill="#6DA544"/>
<path d="M20 0V9.76672L0 10.01V0H20Z" fill="#D80027"/>
<path d="M9.9991 6.60883L10.7688 8.97786H13.26L11.2446 10.4421L12.0143 12.8112L9.9991 11.3471L7.98379 12.8112L8.75359 10.4421L6.73828 8.97786H9.2293L9.9991 6.60883Z" fill="#FFDA44"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#6DA544"/>
<path d="M30 0H0V9.99968H30V0Z" fill="#D80027"/>
<path d="M15.0009 6.52148L15.7562 8.8464H18.2011L16.2233 10.2834L16.9787 12.6084L15.0009 11.1714L13.0231 12.6084L13.7786 10.2834L11.8008 8.8464H14.2454L15.0009 6.52148Z" fill="#FFDA44"/></> }
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
BurkinaFaso.displayName = "BurkinaFaso";
