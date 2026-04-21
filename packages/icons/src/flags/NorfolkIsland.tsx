// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const NorfolkIsland = forwardRef<SVGSVGElement, FlagProps>(function NorfolkIsland(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M14.3474 0.992266C13.0327 0.356562 11.5579 0 9.99961 0C8.44137 0 6.96649 0.356562 5.6518 0.992266L4.78223 10L5.6518 19.0077C6.96649 19.6434 8.44137 20 9.99961 20C11.5579 20 13.0327 19.6434 14.3474 19.0077L15.217 10L14.3474 0.992266Z" fill="#F0F0F0"/>
<path d="M5.65219 0.992676C2.30723 2.6101 0 6.03545 0 10.0001C0 13.9647 2.30723 17.39 5.65219 19.0074V0.992676Z" fill="#6DA544"/>
<path d="M14.3477 0.992676V19.0074C17.6926 17.39 19.9998 13.9646 19.9998 10.0001C19.9998 6.03549 17.6926 2.6101 14.3477 0.992676Z" fill="#6DA544"/>
<path d="M12.609 13.0435L10.0003 4.78259L7.3916 13.0435H9.34813V15.2174H10.6525V13.0435H12.609Z" fill="#6DA544"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M19.9997 0H0V20H19.9997V0Z" fill="#F0F0F0"/>
<path d="M6.66656 0H0V20H6.66656V0Z" fill="#6DA544"/>
<path d="M20.0005 0H13.334V20H20.0005V0Z" fill="#6DA544"/>
<path d="M11.875 12.1875L10 6.25L8.125 12.1875H9.53126V13.75H10.4688V12.1875H11.875Z" fill="#6DA544"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#F0F0F0"/>
<path d="M9.99977 0H0V20H9.99977V0Z" fill="#6DA544"/>
<path d="M29.9998 0H20V20H29.9998V0Z" fill="#6DA544"/>
<path d="M17.8125 13.281L15 4.37476L12.1875 13.281H14.2969V15.6246H15.7031V13.281H17.8125Z" fill="#6DA544"/></> }
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
NorfolkIsland.displayName = "NorfolkIsland";
