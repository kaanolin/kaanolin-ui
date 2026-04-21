// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Ghana = forwardRef<SVGSVGElement, FlagProps>(function Ghana(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M0 10C0 11.2232 0.220039 12.3949 0.621992 13.4783L10 13.9131L19.378 13.4783C19.78 12.3949 20 11.2232 20 10C20 8.77682 19.78 7.6051 19.378 6.52178L10 6.08698L0.621992 6.52174C0.220039 7.6051 0 8.77682 0 10Z" fill="#FFDA44"/>
<path d="M9.9991 0C5.69945 0 2.03402 2.71375 0.621094 6.52176H19.3771C17.9642 2.71375 14.2987 0 9.9991 0Z" fill="#D80027"/>
<path d="M19.3771 13.4783H0.621094C2.03402 17.2862 5.69945 20 9.9991 20C14.2987 20 17.9642 17.2862 19.3771 13.4783Z" fill="#496E2D"/>
<path d="M9.99898 6.52179L10.8623 9.17882H13.6563L11.3961 10.8211L12.2593 13.4783L9.99898 11.8361L7.73863 13.4783L8.60207 10.8211L6.3418 9.17882H9.1357L9.99898 6.52179Z" fill="black"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000305176H0V20H20V0.000305176Z" fill="#FFDA44"/>
<path d="M20 0H0V6.66655H20V0Z" fill="#D80027"/>
<path d="M20 13.3334H0V20H20V13.3334Z" fill="#496E2D"/>
<path d="M10.1571 6.66663L10.9844 9.21296L13.3495 9.40046L11.1835 10.9743L12.3232 13.3333L10.1571 11.7595L7.99094 13.3333L8.8184 10.7868L6.65234 9.21296H9.3298L10.1571 6.66663Z" fill="black"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#FFDA44"/>
<path d="M30 0H0V6.66665H30V0Z" fill="#D80027"/>
<path d="M30 13.3334H0V20H30V13.3334Z" fill="#496E2D"/>
<path d="M14.9931 6.66656L15.8204 9.21299L18.1856 9.40049L16.0195 10.9744L17.1593 13.3334L14.9931 11.7596L12.8269 13.3334L13.6544 10.7869L11.4883 9.21299H14.1658L14.9931 6.66656Z" fill="black"/></> }
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
Ghana.displayName = "Ghana";
