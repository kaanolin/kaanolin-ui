// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Portugal = forwardRef<SVGSVGElement, FlagProps>(function Portugal(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M0 9.99996C0 14.2996 2.71375 17.965 6.52168 19.3779L7.39129 9.99992L6.52168 0.621948C2.71375 2.03492 0 5.70031 0 9.99996Z" fill="#6DA544"/>
<path d="M19.9998 10C19.9998 4.47719 15.5226 0 9.9998 0C8.7766 0 7.60484 0.220039 6.52148 0.621992V19.378C7.60484 19.78 8.7766 20 9.9998 20C15.5226 20 19.9998 15.5228 19.9998 10Z" fill="#D80027"/>
<path d="M6.52219 13.4782C8.44317 13.4782 10.0004 11.921 10.0004 9.99997C10.0004 8.07899 8.44317 6.52173 6.52219 6.52173C4.60121 6.52173 3.04395 8.07899 3.04395 9.99997C3.04395 11.921 4.60121 13.4782 6.52219 13.4782Z" fill="#FFDA44"/>
<path d="M4.56543 8.26086V10.4348C4.56543 11.5153 5.44137 12.3913 6.52195 12.3913C7.60254 12.3913 8.47848 11.5154 8.47848 10.4348V8.26086H4.56543Z" fill="#D80027"/>
<path d="M6.52133 11.0869C6.16172 11.0869 5.86914 10.7943 5.86914 10.4347V9.56519H7.17348V10.4348C7.17348 10.7943 6.8809 11.0869 6.52133 11.0869Z" fill="#F0F0F0"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#D80027"/>
<path d="M7.68129 0V10.3261V20H0V0H7.68129Z" fill="#6DA544"/>
<path d="M7.68164 13.75C9.75271 13.75 11.4316 12.0711 11.4316 10C11.4316 7.92893 9.75271 6.25 7.68164 6.25C5.61057 6.25 3.93164 7.92893 3.93164 10C3.93164 12.0711 5.61057 13.75 7.68164 13.75Z" fill="#FFDA44"/>
<path d="M5.57227 8.125V10.4688C5.57227 11.6337 6.51672 12.5781 7.68164 12.5781C8.84656 12.5781 9.79102 11.6337 9.79102 10.4688V8.125H5.57227Z" fill="#D80027"/>
<path d="M7.68164 11.1719C7.29395 11.1719 6.97852 10.8565 6.97852 10.4688V9.53125H8.38477V10.4688C8.38477 10.8565 8.06934 11.1719 7.68164 11.1719Z" fill="#F0F0F0"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#D80027"/>
<path d="M11.5219 0V10.3261V20H0V0H11.5219Z" fill="#6DA544"/>
<path d="M11.5215 13.75C13.5926 13.75 15.2715 12.0711 15.2715 9.99996C15.2715 7.92885 13.5926 6.24988 11.5215 6.24988C9.45042 6.24988 7.77148 7.92885 7.77148 9.99996C7.77148 12.0711 9.45042 13.75 11.5215 13.75Z" fill="#FFDA44"/>
<path d="M9.41211 8.125V10.4689C9.41211 11.6338 10.3565 12.5783 11.5215 12.5783C12.6864 12.5783 13.6309 11.6338 13.6309 10.4689V8.125H9.41211Z" fill="#D80027"/>
<path d="M11.5215 11.1719C11.1338 11.1719 10.8184 10.8565 10.8184 10.4688V9.53125H12.2247V10.4688C12.2246 10.8564 11.9091 11.1719 11.5215 11.1719Z" fill="#F0F0F0"/></> }
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
Portugal.displayName = "Portugal";
