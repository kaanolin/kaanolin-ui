// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Bahrain = forwardRef<SVGSVGElement, FlagProps>(function Bahrain(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M9.99906 0C7.99219 0 6.12375 0.591602 4.55766 1.6093L7.12949 3.33309L3.91211 4.99973L7.12949 6.66637L3.91211 8.33301L7.12949 9.99945L3.91211 11.6661L7.12949 13.3327L3.91211 14.9995L7.12949 16.6661L4.55734 18.3904C6.12352 19.4083 7.99207 20 9.99906 20C15.5219 20 19.9991 15.5228 19.9991 10C19.9991 4.47719 15.5219 0 9.99906 0Z" fill="#D80027"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M19.9993 0.000671387H0.0859375V20H19.9993V0.000671387Z" fill="#D80027"/>
<path d="M8.18182 4.0545L6.21948 5.54139L8.18182 7.02769L6.21948 8.51458L8.18182 10.0009L6.21948 11.4878L8.18182 12.974L6.21948 14.461L8.18182 15.9473L6.21948 17.4342L8.18182 18.9211L6.758 19.9998H0V0H6.75542L8.18182 1.08064L6.21948 2.56761L8.18182 4.0545Z" fill="#F0F0F0"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30.001 0.000488281H0.130859V19.9998H30.001V0.000488281Z" fill="#D80027"/>
<path d="M12.2727 4.05467L9.32922 5.54158L12.2727 7.0279L9.32922 8.5148L12.2727 10.0011L9.32922 11.488L12.2727 12.9743L9.32922 14.4613L12.2727 15.9476L9.32922 17.4345L12.2727 18.9214L10.137 20.0001H0V0.00012207H10.1331L12.2727 1.0808L9.32922 2.56771L12.2727 4.05467Z" fill="#F0F0F0"/></> }
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
Bahrain.displayName = "Bahrain";
