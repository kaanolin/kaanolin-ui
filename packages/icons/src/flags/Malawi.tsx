// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Malawi = forwardRef<SVGSVGElement, FlagProps>(function Malawi(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M0 9.99996C0 11.2232 0.220039 12.3949 0.621992 13.4782L10 13.913L19.378 13.4782C19.78 12.3949 20 11.2232 20 9.99996C20 8.77676 19.78 7.60504 19.378 6.52172L10 6.08691L0.621992 6.52168C0.220039 7.60504 0 8.77676 0 9.99996Z" fill="#D80027"/>
<path d="M9.9991 0C5.69945 0 2.03402 2.71375 0.621094 6.52176H19.3771C17.9642 2.71375 14.2987 0 9.9991 0Z" fill="black"/>
<path d="M19.3771 13.4783H0.621094C2.03402 17.2862 5.69945 20 9.9991 20C14.2987 20 17.9642 17.2862 19.3771 13.4783Z" fill="#496E2D"/>
<path d="M12.9895 4.78261L11.7682 4.20816L12.4186 3.02539L11.0924 3.2791L10.9243 1.93933L10.0006 2.92468L9.07687 1.93933L8.90879 3.2791L7.58266 3.02539L8.23301 4.20816L7.01172 4.78261H12.9895Z" fill="#D80027"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000244141H0V19.9999H20V0.000244141Z" fill="#D80027"/>
<path d="M20 0H0V6.66655H20V0Z" fill="black"/>
<path d="M20 13.3335H0V20H20V13.3335Z" fill="#496E2D"/>
<path d="M13.478 4.98776L12.0568 4.31928L12.8136 2.94283L11.2703 3.23802L11.0747 1.67896L9.99973 2.82564L8.92477 1.67896L8.72918 3.23802L7.1859 2.94279L7.94273 4.31924L6.52148 4.98776H13.478Z" fill="#D80027"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#D80027"/>
<path d="M30 0H0V6.66665H30V0Z" fill="black"/>
<path d="M30 13.3334H0V20H30V13.3334Z" fill="#496E2D"/>
<path d="M17.9895 4.78253L16.7682 4.20807L17.4186 3.02527L16.0924 3.27893L15.9243 1.93921L15.0006 2.92454L14.0769 1.93921L13.9088 3.27893L12.5827 3.02527L13.233 4.20807L12.0117 4.78253H17.9895Z" fill="#D80027"/></> }
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
Malawi.displayName = "Malawi";
