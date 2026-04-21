// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Cameroon = forwardRef<SVGSVGElement, FlagProps>(function Cameroon(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M14.3484 0.992266C13.0337 0.356562 11.5588 0 10.0006 0C8.44238 0 6.96746 0.356562 5.65277 0.992266L4.7832 10L5.65277 19.0077C6.96746 19.6434 8.44238 20 10.0006 20C11.5588 20 13.0337 19.6434 14.3484 19.0077L15.218 10L14.3484 0.992266Z" fill="#D80027"/>
<path d="M9.99898 6.52173L10.8623 9.17872H13.6563L11.396 10.8211L12.2593 13.4782L9.99898 11.836L7.73863 13.4782L8.60211 10.8211L6.3418 9.17872H9.13566L9.99898 6.52173Z" fill="#FFDA44"/>
<path d="M5.65218 0.992615C2.30726 2.61004 0 6.03539 0 10C0 13.9646 2.30726 17.39 5.65218 19.0074V0.992615Z" fill="#496E2D"/>
<path d="M14.3477 0.992615V19.0074C17.6926 17.39 19.9998 13.9646 19.9998 10C19.9998 6.03543 17.6926 2.61004 14.3477 0.992615Z" fill="#FFDA44"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#D80027"/>
<path d="M6.66651 0H0V20H6.66651V0Z" fill="#496E2D"/>
<path d="M20.0005 0H13.334V20H20.0005V0Z" fill="#FFDA44"/>
<path d="M9.99996 7.62238L10.5901 9.43863H12.5L10.9549 10.5613L11.545 12.3777L9.99996 11.2551L8.45484 12.3777L9.04508 10.5613L7.5 9.43863H9.40984L9.99996 7.62238Z" fill="#FFDA44"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#D80027"/>
<path d="M9.99977 0H0V20H9.99977V0Z" fill="#496E2D"/>
<path d="M29.9998 0H20V20H29.9998V0Z" fill="#FFDA44"/>
<path d="M15 7.2171L15.6906 9.34274H17.9258L16.1176 10.6566L16.8082 12.7823L15 11.4685L13.1917 12.7823L13.8825 10.6566L12.0742 9.34274H14.3093L15 7.2171Z" fill="#FFDA44"/></> }
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
Cameroon.displayName = "Cameroon";
