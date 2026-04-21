// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const BalearicIslandsES = forwardRef<SVGSVGElement, FlagProps>(function BalearicIslandsES(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M9.99996 0C15.5228 0 19.9999 4.47719 19.9999 10C19.9999 15.5228 15.5228 20 9.99996 20C4.47717 20 0 15.5228 0 10" fill="#FFDA44"/>
<path d="M9.7832 4.44446H18.3161C17.7543 3.60512 17.0686 2.8559 16.2854 2.22223H9.7832V4.44446Z" fill="#D80027"/>
<path d="M9.7832 8.88894H19.9388C19.8536 8.11839 19.6809 7.37437 19.4308 6.66675H9.7832V8.88894Z" fill="#D80027"/>
<path d="M0.570545 13.3333H19.4308C19.6809 12.6257 19.8537 11.8816 19.9389 11.1111H0.0625C0.147656 11.8817 0.32039 12.6258 0.570545 13.3333Z" fill="#D80027"/>
<path d="M3.71425 17.7778H16.2839C17.067 17.1441 17.7528 16.3948 18.3146 15.5555H1.68359C2.24547 16.3948 2.93109 17.1441 3.71425 17.7778Z" fill="#D80027"/>
<path d="M10 0C4.47717 0 -3.90621e-05 4.47719 2.55604e-10 10.0001C2.28226 10 4.47717 10.0001 9.99996 10.0001L10 0Z" fill="#4A1F63"/>
<path d="M8.2608 5.21741V6.08698H7.82603V5.21741H6.95647V6.08698H6.5217V4.34784H4.78257V6.08698H4.34777V5.21741H3.47824V6.08698H3.04343V5.21741H2.17383V7.82608H9.13036V5.21741H8.2608Z" fill="#F0F0F0"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M19.9999 0H0V20H19.9999V0Z" fill="#D80027"/>
<path d="M19.9999 4.44434H0V6.66649H19.9999V4.44434Z" fill="#FFDA44"/>
<path d="M19.9999 8.88916H0V11.1113H19.9999V8.88916Z" fill="#FFDA44"/>
<path d="M19.9999 13.3335H0V15.5557H19.9999V13.3335Z" fill="#FFDA44"/>
<path d="M19.9999 17.7778H0V20H19.9999V17.7778Z" fill="#FFDA44"/>
<path d="M19.9999 0H0V2.22216H19.9999V0Z" fill="#FFDA44"/>
<path d="M9.99996 0H0V10H9.99996V0Z" fill="#4A1F63"/>
<path d="M6.87496 4.37506V5.00007H6.5625V4.37506H5.9375V5.00007H5.62496V3.75006H4.375V5.00007H4.06246V4.37506H3.43746V5.00007H3.125V4.37506H2.5V6.25003H7.49996V4.37506H6.87496Z" fill="#F0F0F0"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#D80027"/>
<path d="M30 4.44391H0V6.66582H30V4.44391Z" fill="#FFDA44"/>
<path d="M30 8.88837H0V11.1103H30V8.88837Z" fill="#FFDA44"/>
<path d="M30 13.3329H0V15.5549H30V13.3329Z" fill="#FFDA44"/>
<path d="M30 17.7775H0V19.9994H30V17.7775Z" fill="#FFDA44"/>
<path d="M30 0H0V2.22191H30V0Z" fill="#FFDA44"/>
<path d="M15 0H0V9.99968H15V0Z" fill="#4A1F63"/>
<path d="M10.1084 4.13014V4.99972H9.67361V4.13014H8.80408V4.99972H8.36926V3.26056H6.6302V4.99972H6.19537V4.13014H5.32584V4.99972H4.89102V4.13014H4.02148V6.73882H10.978V4.13014H10.1084Z" fill="#F0F0F0"/></> }
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
BalearicIslandsES.displayName = "BalearicIslandsES";
