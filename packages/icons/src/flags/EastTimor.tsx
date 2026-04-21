// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const EastTimor = forwardRef<SVGSVGElement, FlagProps>(function EastTimor(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#FFDA44"/>
<path d="M9.99941 0C7.55109 0 5.30867 0.880352 3.57031 2.34117L14.3472 10L3.57031 17.6588C5.30867 19.1196 7.55109 20 9.99941 20C15.5222 20 19.9994 15.5228 19.9994 10C19.9994 4.47719 15.5222 0 9.99941 0Z" fill="#D80027"/>
<path d="M2.92893 2.92889C-0.976309 6.83413 -0.976309 13.1658 2.92893 17.0711C4.54271 15.4573 6.09478 13.9052 10 9.99999L2.92893 2.92889Z" fill="black"/>
<path d="M2.77184 7.70917L4.29371 9.14948L6.13387 8.14698L5.23445 10.0396L6.75637 11.4799L4.67848 11.2093L3.77895 13.1018L3.3943 11.042L1.31641 10.7713L3.15648 9.76889L2.77184 7.70917Z" fill="#F0F0F0"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#D80027"/>
<path d="M10 9.99991L0 0.313721V2.90608L6.08695 9.99991L0 17.0937V19.6861L10 9.99991Z" fill="#FFDA44"/>
<path d="M0 0.313721V19.6861L7.39129 9.99991L0 0.313721Z" fill="black"/>
<path d="M1.95812 7.90326L3.17449 9.05446L4.64523 8.25319L3.92641 9.76584L5.14273 10.9171L3.48199 10.7008L2.76309 12.2134L2.45566 10.567L0.794922 10.3507L2.26559 9.54954L1.95812 7.90326Z" fill="#F0F0F0"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#D80027"/>
<path d="M15 10L0 0.313721V2.90608L9.13043 10L0 17.0939V19.6863L15 10Z" fill="#FFDA44"/>
<path d="M0 0.313721V19.6863L11.0869 10L0 0.313721Z" fill="black"/>
<path d="M2.58918 7.50153L4.04887 8.88302L5.81377 7.92148L4.95109 9.73675L6.41072 11.1181L4.41783 10.8586L3.55516 12.6737L3.18625 10.6981L1.19336 10.4385L2.95814 9.47712L2.58918 7.50153Z" fill="#F0F0F0"/></> }
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
EastTimor.displayName = "EastTimor";
