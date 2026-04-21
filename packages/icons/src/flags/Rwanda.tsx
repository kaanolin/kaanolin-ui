// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Rwanda = forwardRef<SVGSVGElement, FlagProps>(function Rwanda(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M0 9.99994C0 11.7324 0.440742 13.3618 1.2159 14.7826L10 15.6521L18.7841 14.7826C19.5593 13.3618 20 11.7324 20 9.99994L10 9.13037L0 9.99994Z" fill="#FFDA44"/>
<path d="M18.7841 5.21738C17.088 2.10895 13.7904 0 10 0C6.20957 0 2.91195 2.10895 1.2159 5.21738C0.440742 6.63812 0 8.26758 0 10H20C20 8.26758 19.5593 6.63812 18.7841 5.21738Z" fill="#338AF3"/>
<path d="M10.0009 20C13.7913 20 17.0889 17.891 18.785 14.7826H1.2168C2.91285 17.891 6.21047 20 10.0009 20Z" fill="#496E2D"/>
<path d="M11.3047 5.85236L12.526 6.42685L11.8757 7.60966L13.2018 7.35599L13.3699 8.69564L14.2936 7.71033L15.2173 8.69564L15.3853 7.35599L16.7115 7.60958L16.0612 6.42681L17.2824 5.85236L16.0611 5.27794L16.7115 4.09513L15.3854 4.3488L15.2173 3.00916L14.2936 3.99447L13.3698 3.00916L13.2018 4.3488L11.8756 4.09513L12.526 5.27798L11.3047 5.85236Z" fill="#FFDA44"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#338AF3"/>
<path d="M20 10H0V14.7826H20V10Z" fill="#FFDA44"/>
<path d="M20 14.7826H0V20H20V14.7826Z" fill="#496E2D"/>
<path d="M12.1152 5L13.1891 5.50512L12.6173 6.54512L13.7834 6.32203L13.9311 7.5L14.7433 6.63363L15.5555 7.5L15.7032 6.32203L16.8693 6.54508L16.2975 5.50508L17.3714 5L16.2975 4.49488L16.8693 3.45492L15.7033 3.67797L15.5555 2.5L14.7433 3.36637L13.9311 2.5L13.7834 3.67797L12.6172 3.45492L13.1891 4.49492L12.1152 5Z" fill="#FFDA44"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#338AF3"/>
<path d="M30 9.99963H0V14.7819H30V9.99963Z" fill="#FFDA44"/>
<path d="M30 14.7821H0V19.9994H30V14.7821Z" fill="#496E2D"/>
<path d="M16.3047 5.85214L17.526 6.42659L16.8757 7.60935L18.2018 7.35564L18.3698 8.69537L19.2936 7.71007L20.2173 8.69537L20.3853 7.35564L21.7115 7.60935L21.0612 6.42659L22.2824 5.85214L21.0611 5.27764L21.7115 4.09493L20.3853 4.34858L20.2173 3.00891L19.2936 3.99421L18.3698 3.00891L18.2018 4.34858L16.8756 4.09493L17.526 5.27775L16.3047 5.85214Z" fill="#FFDA44"/></> }
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
Rwanda.displayName = "Rwanda";
