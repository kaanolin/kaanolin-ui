// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Senegal = forwardRef<SVGSVGElement, FlagProps>(function Senegal(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M14.3484 0.992266C13.0337 0.356562 11.5588 0 10.0006 0C8.44238 0 6.96746 0.356562 5.65277 0.992266L4.7832 10L5.65277 19.0077C6.96746 19.6434 8.44238 20 10.0006 20C11.5588 20 13.0337 19.6434 14.3484 19.0077L15.218 10L14.3484 0.992266Z" fill="#FFDA44"/>
<path d="M9.99898 6.52173L10.8623 9.17876H13.6563L11.396 10.8211L12.2593 13.4782L9.99898 11.836L7.73863 13.4782L8.60211 10.8211L6.3418 9.17876H9.13566L9.99898 6.52173Z" fill="#496E2D"/>
<path d="M5.65218 0.992676C2.30726 2.61014 0 6.03549 0 10.0001C0 13.9646 2.30726 17.39 5.65218 19.0074V0.992676Z" fill="#496E2D"/>
<path d="M14.3477 0.992676V19.0074C17.6926 17.39 19.9998 13.9646 19.9998 10.0001C19.9998 6.03549 17.6926 2.61014 14.3477 0.992676Z" fill="#D80027"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#FFDA44"/>
<path d="M6.66652 0H0V20H6.66652V0Z" fill="#496E2D"/>
<path d="M19.9995 0H13.333V20H19.9995V0Z" fill="#D80027"/>
<path d="M9.99988 7.31226L10.667 9.36542H12.826L11.0794 10.6345L11.7465 12.6878L9.99988 11.4188L8.25324 12.6878L8.92043 10.6345L7.17383 9.36542H9.33273L9.99988 7.31226Z" fill="#496E2D"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V19.9994H30V0Z" fill="#FFDA44"/>
<path d="M29.9996 0H19.3477V20H29.9996V0Z" fill="#D80027"/>
<path d="M10.6519 0H0V20H10.6519V0Z" fill="#496E2D"/>
<path d="M15 6.52148L15.8632 9.17851H18.6573L16.397 10.8208L17.2603 13.4779L15 11.8358L12.7396 13.4779L13.6031 10.8208L11.3428 9.17851H14.1366L15 6.52148Z" fill="#496E2D"/></> }
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
Senegal.displayName = "Senegal";
