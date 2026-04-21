// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Cuba = forwardRef<SVGSVGElement, FlagProps>(function Cuba(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M0.001 1.73914H0V18.2609H0.001V10.0001V1.73914Z" fill="#FF9811"/>
<path d="M9.99992 20C15.5227 20 19.9998 15.5228 19.9998 10C19.9998 4.47715 15.5227 0 9.99992 0C4.47712 0 0 4.47715 0 10C0 15.5228 4.47712 20 9.99992 20Z" fill="#F0F0F0"/>
<path d="M10.0004 6.10352e-05C6.72885 6.10352e-05 3.82441 1.57128 2 4.00008H18.0008C16.1764 1.57124 13.2719 6.10352e-05 10.0004 6.10352e-05Z" fill="#0052B4"/>
<path d="M10.0004 20C13.2719 20 16.1764 18.4288 18.0008 16H2C3.82437 18.4288 6.72885 20 10.0004 20Z" fill="#0052B4"/>
<path d="M0 10.0001C0 10.685 0.0690622 11.3539 0.200273 12.0001H19.7997C19.9309 11.3539 19.9999 10.685 19.9999 10.0001C19.9999 9.31511 19.9309 8.64627 19.7997 8.00006H0.200273C0.0690622 8.64627 0 9.31511 0 10.0001Z" fill="#0052B4"/>
<path d="M2.92889 2.92896C-0.976295 6.83416 -0.976295 13.1659 2.92889 17.0712C4.54267 15.4574 6.09469 13.9053 9.99991 10.0001L2.92889 2.92896Z" fill="#D80027"/>
<path d="M4.04761 7.39136L4.69503 9.38414H6.79057L5.09538 10.6159L5.7428 12.6087L4.04761 11.377L2.35234 12.6087L2.99992 10.6159L1.30469 9.38414H3.40007L4.04761 7.39136Z" fill="#F0F0F0"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M0.001 1.73907H0V18.2609H0.001V10V1.73907Z" fill="#FF9811"/>
<path d="M20 0.000305176H0V19.9999H20V0.000305176Z" fill="#F0F0F0"/>
<path d="M20 0.000305176H0V4.00032H20V0.000305176Z" fill="#0052B4"/>
<path d="M20 7.99994H0V12H20V7.99994Z" fill="#0052B4"/>
<path d="M20 16H0V20H20V16Z" fill="#0052B4"/>
<path d="M10 10.0003L0 20V0L10 10.0003Z" fill="#D80027"/>
<path d="M3.26168 7.62231L3.8518 9.43857H5.76173L4.21665 10.5612L4.80677 12.3776L3.26168 11.255L1.71656 12.3776L2.3068 10.5612L0.761719 9.43857H2.67157L3.26168 7.62231Z" fill="#F0F0F0"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.000305176H0V19.9997H30V0.000305176Z" fill="#F0F0F0"/>
<path d="M30 0.000305176H0V4.00006H30V0.000305176Z" fill="#0052B4"/>
<path d="M30 8.00043H0V12.0002H30V8.00043Z" fill="#0052B4"/>
<path d="M30 15.9999H0V19.9996H30V15.9999Z" fill="#0052B4"/>
<path d="M15 10.0003L0 20V0L15 10.0003Z" fill="#D80027"/>
<path d="M4.89127 7.39136L5.53874 9.38412H7.63423L5.93905 10.6158L6.58645 12.6086L4.89127 11.377L3.1961 12.6086L3.84362 10.6158L2.14844 9.38412H4.24381L4.89127 7.39136Z" fill="#F0F0F0"/></> }
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
Cuba.displayName = "Cuba";
