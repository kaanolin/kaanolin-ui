// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Djibouti = forwardRef<SVGSVGElement, FlagProps>(function Djibouti(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M9.13022 10.8696C9.13022 10.8696 2.93457 2.92754 2.92871 2.92895C4.73832 1.1193 7.23835 0 9.99978 0C15.5226 0 19.9998 4.47719 19.9998 10L9.13022 10.8696Z" fill="#338AF3"/>
<path d="M9.13022 10C9.13022 10 2.93457 17.0725 2.92871 17.0711C4.73832 18.8807 7.23835 20 9.99978 20C15.5226 20 19.9998 15.5228 19.9998 10H9.13022Z" fill="#6DA544"/>
<path d="M2.92892 2.92889C-0.976306 6.83413 -0.976306 13.1658 2.92892 17.0711C4.5427 15.4573 6.09477 13.9052 9.99999 9.99999L2.92892 2.92889Z" fill="#F0F0F0"/>
<path d="M4.04761 7.3913L4.69507 9.38411H6.79061L5.09538 10.6158L5.7428 12.6087L4.04761 11.377L2.35234 12.6087L2.99992 10.6158L1.30469 9.38411H3.40007L4.04761 7.3913Z" fill="#D80027"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000671387H0V20H20V0.000671387Z" fill="#6DA544"/>
<path d="M20 0V9.99988L0 10.01V0H20Z" fill="#338AF3"/>
<path d="M10 10.0002L0 19.9998V0L10 10.0002Z" fill="#F0F0F0"/>
<path d="M3.69555 7.51892L4.31133 9.41413H6.3043L4.69203 10.5856L5.30781 12.4809L3.69555 11.3095L2.08324 12.4809L2.69918 10.5856L1.08691 9.41413H3.07973L3.69555 7.51892Z" fill="#D80027"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.000366211H0V19.9997H30V0.000366211Z" fill="#6DA544"/>
<path d="M30 0V9.76689L0 10.0102V0H30Z" fill="#338AF3"/>
<path d="M15 10.0004L0 20V0L15 10.0004Z" fill="#F0F0F0"/>
<path d="M5.54373 7.39136L6.19119 9.38411H8.28674L6.5915 10.6159L7.23897 12.6087L5.54373 11.3771L3.84844 12.6087L4.49607 10.6159L2.80078 9.38411H4.89621L5.54373 7.39136Z" fill="#D80027"/></> }
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
Djibouti.displayName = "Djibouti";
