// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Aruba = forwardRef<SVGSVGElement, FlagProps>(function Aruba(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#FFDA44"/>
<path d="M10.0004 20C13.0313 20 15.7471 18.6514 17.5809 16.5217H2.41992C4.25379 18.6514 6.96953 20 10.0004 20Z" fill="#338AF3"/>
<path d="M20 10C20 4.47719 15.5228 0 10 0C4.47719 0 0 4.47719 0 10C0 10.9026 0.120313 11.7769 0.344492 12.6087H19.6555C19.8797 11.7769 20 10.9026 20 10Z" fill="#338AF3"/>
<path d="M0.794922 13.913C0.987695 14.366 1.21305 14.8016 1.46777 15.2174H18.5323C18.787 14.8016 19.0124 14.366 19.2052 13.913H0.794922Z" fill="#338AF3"/>
<path d="M4.58266 6.30715L2.62891 5.44488L4.58266 4.58262L5.44488 2.62891L6.30711 4.58262L8.26082 5.44488L6.30711 6.30715L5.44488 8.26086L4.58266 6.30715Z" fill="#F0F0F0"/>
<path d="M5.44422 3.70575L5.97668 4.91235L7.18332 5.44489L5.97668 5.97739L5.44422 7.18399L4.91168 5.97739L3.70508 5.44489L4.91168 4.91235L5.44422 3.70575Z" fill="#D80027"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#338AF3"/>
<path d="M4.23453 5.76551L2.5 5L4.23453 4.23449L5 2.5L5.76547 4.23449L7.5 5L5.76547 5.76551L5 7.5L4.23453 5.76551Z" fill="#F0F0F0"/>
<path d="M4.99906 3.45599L5.4718 4.5272L6.54305 4.99998L5.4718 5.47275L4.99906 6.54396L4.52633 5.47275L3.45508 4.99998L4.52633 4.5272L4.99906 3.45599Z" fill="#D80027"/>
<path d="M20 11.7391H0V12.6087H20V11.7391Z" fill="#FFDA44"/>
<path d="M20 13.4783H0V14.3478H20V13.4783Z" fill="#FFDA44"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.00012207H0V20.0001H30V0.00012207Z" fill="#338AF3"/>
<path d="M2.84456 4.78576L0.890625 3.92341L2.84456 3.06114L3.70663 1.1073L4.56887 3.06114L6.52273 3.92341L4.56887 4.78576L3.70663 6.73944L2.84456 4.78576Z" fill="#F0F0F0"/>
<path d="M3.70586 2.1842L4.23837 3.39088L5.44508 3.92341L4.23837 4.45594L3.70586 5.66262L3.17352 4.45594L1.9668 3.92341L3.17352 3.39088L3.70586 2.1842Z" fill="#D80027"/>
<path d="M30 12.6093H0V13.9139H30V12.6093Z" fill="#FFDA44"/>
<path d="M30 15.2179H0V16.5225H30V15.2179Z" fill="#FFDA44"/></> }
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
Aruba.displayName = "Aruba";
