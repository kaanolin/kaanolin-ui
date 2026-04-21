// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Lebanon = forwardRef<SVGSVGElement, FlagProps>(function Lebanon(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M9.99992 0C6.03531 0 2.60969 2.30723 0.992188 5.65218H19.0076C17.3902 2.30723 13.9645 0 9.99992 0Z" fill="#D80027"/>
<path d="M9.99992 20C13.9645 20 17.3902 17.6927 19.0077 14.3478H0.992188C2.60969 17.6927 6.03531 20 9.99992 20Z" fill="#D80027"/>
<path d="M12.608 11.7392L9.99934 6.95654L7.39062 11.7392H9.34715V13.0435H10.6515V11.7392H12.608Z" fill="#6DA544"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#F0F0F0"/>
<path d="M20 0H0V6.66652H20V0Z" fill="#D80027"/>
<path d="M20 13.3335H0V20H20V13.3335Z" fill="#D80027"/>
<path d="M12.1431 11.4286L10.0003 7.5L7.85742 11.4286H9.46457V12.5H10.536V11.4286H12.1431Z" fill="#6DA544"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#F0F0F0"/>
<path d="M30 0H0V6.66665H30V0Z" fill="#D80027"/>
<path d="M30 13.3334H0V20H30V13.3334Z" fill="#D80027"/>
<path d="M17.0081 11.3393L14.9992 7.65625L12.9902 11.3393H14.4969V12.3439H15.5014V11.3393H17.0081Z" fill="#6DA544"/></> }
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
Lebanon.displayName = "Lebanon";
