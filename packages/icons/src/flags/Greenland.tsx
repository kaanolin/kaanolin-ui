// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Greenland = forwardRef<SVGSVGElement, FlagProps>(function Greenland(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M0 10C0 4.47719 4.47719 0 10 0C15.5228 0 20 4.47719 20 10C19.5652 10 10 11.3043 10 11.3043L0 10Z" fill="#F0F0F0"/>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10" fill="#D80027"/>
<path d="M6.95645 14.7826C9.59781 14.7826 11.7391 12.6414 11.7391 10C11.7391 7.35866 9.59781 5.21741 6.95645 5.21741C4.31508 5.21741 2.17383 7.35866 2.17383 10C2.17383 12.6414 4.31508 14.7826 6.95645 14.7826Z" fill="#F0F0F0"/>
<path d="M2.17383 10C2.17383 7.35874 4.31508 5.21741 6.95645 5.21741C9.59785 5.21741 11.7391 7.3587 11.7391 10" fill="#D80027"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000671387H0V20H20V0.000671387Z" fill="#D80027"/>
<path d="M20 0V9.76672L0 10.01V0H20Z" fill="#F0F0F0"/>
<path d="M7.9707 14.9998C10.7321 14.9998 12.9707 12.7613 12.9707 9.99988C12.9707 7.23849 10.7321 4.99994 7.9707 4.99994C5.20928 4.99994 2.9707 7.23849 2.9707 9.99988C2.9707 12.7613 5.20928 14.9998 7.9707 14.9998Z" fill="#F0F0F0"/>
<path d="M2.9707 9.99988C2.9707 7.23854 5.2093 4.99994 7.9707 4.99994C10.7322 4.99994 12.9707 7.23854 12.9707 9.99988" fill="#D80027"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.000366211H0V20H30V0.000366211Z" fill="#D80027"/>
<path d="M30 0V9.76703L0 10.0103V0H30Z" fill="#F0F0F0"/>
<path d="M11.9562 14.7825C14.5974 14.7825 16.7386 12.6414 16.7386 10.0002C16.7386 7.35892 14.5974 5.21777 11.9562 5.21777C9.31497 5.21777 7.17383 7.35892 7.17383 10.0002C7.17383 12.6414 9.31497 14.7825 11.9562 14.7825Z" fill="#F0F0F0"/>
<path d="M7.17383 10.0002C7.17383 7.35891 9.31514 5.21759 11.9564 5.21759C14.5978 5.21759 16.739 7.35891 16.739 10.0002" fill="#D80027"/></> }
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
Greenland.displayName = "Greenland";
