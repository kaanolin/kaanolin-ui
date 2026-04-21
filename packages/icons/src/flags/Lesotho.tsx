// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Lesotho = forwardRef<SVGSVGElement, FlagProps>(function Lesotho(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M0 10C0 11.5582 0.356523 13.0331 0.992266 14.3478L10 14.7826L19.0077 14.3479C19.6435 13.0331 20 11.5582 20 10C20 8.44182 19.6435 6.9669 19.0077 5.65221L10 5.21741L0.992266 5.65217C0.356523 6.9669 0 8.44182 0 10Z" fill="#F0F0F0"/>
<path d="M9.99992 20C13.9645 20 17.3902 17.6927 19.0077 14.3478H0.992188C2.60969 17.6927 6.03531 20 9.99992 20Z" fill="#6DA544"/>
<path d="M9.99992 0C6.03531 0 2.60969 2.30723 0.992188 5.65218H19.0076C17.3902 2.30723 13.9645 0 9.99992 0Z" fill="#0052B4"/>
<path d="M10.6512 9.78265V7.39136H9.34687V9.78265L7.77148 11.3581C8.22965 12.1081 9.05586 12.6087 9.99906 12.6087C10.9423 12.6087 11.7684 12.1081 12.2266 11.3581L10.6512 9.78265Z" fill="black"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000244141H0V19.9999H20V0.000244141Z" fill="#F0F0F0"/>
<path d="M20 0H0V6.66655H20V0Z" fill="#0052B4"/>
<path d="M20 13.3335H0V20H20V13.3335Z" fill="#6DA544"/>
<path d="M10.6512 9.78253V7.39124H9.34687V9.78253L7.77148 11.358C8.22965 12.108 9.05586 12.6086 9.99906 12.6086C10.9423 12.6086 11.7684 12.108 12.2266 11.358L10.6512 9.78253Z" fill="black"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#F0F0F0"/>
<path d="M30 0H0V6.66665H30V0Z" fill="#0052B4"/>
<path d="M30 13.3334H0V20H30V13.3334Z" fill="#6DA544"/>
<path d="M15.6512 9.78261V7.39124H14.3469V9.78261L12.7715 11.3581C13.2296 12.1081 14.0559 12.6088 14.999 12.6088C15.9422 12.6088 16.7685 12.1081 17.2266 11.3581L15.6512 9.78261Z" fill="black"/></> }
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
Lesotho.displayName = "Lesotho";
