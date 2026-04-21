// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Maldives = forwardRef<SVGSVGElement, FlagProps>(function Maldives(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#D80027"/>
<path d="M3.47852 5.21741H16.522V14.7826H3.47852V5.21741Z" fill="#6DA544"/>
<path d="M11.6101 12.8261C10.0493 12.8261 8.78402 11.5608 8.78402 10C8.78402 8.43923 10.0493 7.17392 11.6101 7.17392C12.0968 7.17392 12.5547 7.29696 12.9545 7.5136C12.3273 6.90028 11.4697 6.52173 10.5232 6.52173C8.60223 6.52173 7.04492 8.07899 7.04492 9.99997C7.04492 11.9209 8.60223 13.4782 10.5232 13.4782C11.4697 13.4782 12.3273 13.0997 12.9545 12.4863C12.5547 12.7031 12.0968 12.8261 11.6101 12.8261Z" fill="#F0F0F0"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#D80027"/>
<path d="M15 6.33337H5V13.6669H15V6.33337Z" fill="#6DA544"/>
<path d="M11.2343 12.1665C10.0377 12.1665 9.0677 11.1965 9.0677 9.99989C9.0677 8.80329 10.0377 7.83325 11.2343 7.83325C11.6075 7.83325 11.9585 7.92759 12.265 8.09368C11.7842 7.62353 11.1266 7.33325 10.401 7.33325C8.92828 7.33325 7.73438 8.52716 7.73438 9.99989C7.73438 11.4726 8.92832 12.6665 10.401 12.6665C11.1267 12.6665 11.7842 12.3763 12.265 11.9061C11.9585 12.0722 11.6075 12.1665 11.2343 12.1665Z" fill="#F0F0F0"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#D80027"/>
<path d="M21.522 5.21741H8.47852V14.7827H21.522V5.21741Z" fill="#6DA544"/>
<path d="M16.6101 12.8258C15.0494 12.8258 13.784 11.5605 13.784 9.99969C13.784 8.43889 15.0493 7.17363 16.6101 7.17363C17.0968 7.17363 17.5547 7.29667 17.9545 7.51329C17.3273 6.9 16.4696 6.52148 15.5232 6.52148C13.6022 6.52148 12.0449 8.07871 12.0449 9.99969C12.0449 11.9207 13.6022 13.4779 15.5232 13.4779C16.4697 13.4779 17.3273 13.0993 17.9545 12.4861C17.5547 12.7028 17.0969 12.8258 16.6101 12.8258Z" fill="#F0F0F0"/></> }
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
Maldives.displayName = "Maldives";
