// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const MarshallIsland = forwardRef<SVGSVGElement, FlagProps>(function MarshallIsland(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 8.32176 19.5859 6.74039 18.8554 5.35156L9.98824 10.0117L14.6484 1.14461C13.2596 0.414062 11.6782 0 10 0C4.47719 0 0 4.47719 0 10C0 12.7614 1.1193 15.2614 2.92891 17.0711C4.73855 18.8807 7.23855 20 10 20Z" fill="#0052B4"/>
<path d="M18.8456 5.3625C18.3879 4.49125 17.7927 3.67324 17.0602 2.94066C16.3275 2.20809 15.5096 1.61297 14.6383 1.15527L2.91797 17.0828L18.8456 5.3625Z" fill="#F0F0F0"/>
<path d="M2.91797 17.0828L18.8456 5.36251C18.3879 4.49126 17.7927 3.67325 17.0602 2.94067L2.91797 17.0828Z" fill="#FF9811"/>
<path d="M8.68477 5.86416L7.46352 6.43861L8.11387 7.62142L6.78769 7.36771L6.61965 8.7074L5.6959 7.72205L4.77215 8.7074L4.60418 7.36771L3.27801 7.62134L3.92828 6.43857L2.70703 5.86416L3.92832 5.28966L3.27801 4.10693L4.6041 4.36056L4.77219 3.02087L5.6959 4.00623L6.61965 3.02087L6.78769 4.36056L8.11391 4.10693L7.46355 5.2897L8.68477 5.86416Z" fill="#F0F0F0"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#0052B4"/>
<path d="M7.82602 4.75639L6.67121 5.29956L7.28613 6.41791L6.03223 6.17803L5.87332 7.44475L4.99992 6.51311L4.12648 7.44475L3.96762 6.17803L2.71371 6.41784L3.32855 5.29952L2.17383 4.75639L3.32863 4.21319L2.71371 3.09487L3.96758 3.33467L4.12652 2.06799L4.99992 2.99963L5.87336 2.06799L6.03223 3.33467L7.28617 3.09487L6.67125 4.21319L7.82602 4.75639Z" fill="#F0F0F0"/>
<path d="M15.8069 0L0 19.6986V19.919L19.678 0H15.8069Z" fill="#F0F0F0"/>
<path d="M20 0H19.678L0 19.919V20H0.14543L20 3.89664V0Z" fill="#FF9811"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#0052B4"/>
<path d="M13.7023 5.84656L12.481 6.42096L13.1314 7.60382L11.8053 7.3501L11.6372 8.68982L10.7135 7.70449L9.78969 8.68982L9.6217 7.3501L8.29549 7.60382L8.94588 6.42096L7.72461 5.84656L8.94588 5.27203L8.29549 4.08929L9.62164 4.34289L9.78975 3.00317L10.7135 3.98851L11.6372 3.00317L11.8053 4.34289L13.1315 4.08929L12.4811 5.27209L13.7023 5.84656Z" fill="#F0F0F0"/>
<path d="M25.0147 0L0 19.6986V19.9191L29.517 0H25.0147Z" fill="#F0F0F0"/>
<path d="M30 0H29.517L0 19.9191V20H0.218145L30 3.02708V0Z" fill="#FF9811"/></> }
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
MarshallIsland.displayName = "MarshallIsland";
