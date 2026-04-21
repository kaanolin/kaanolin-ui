// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const DominicanRepublic = forwardRef<SVGSVGElement, FlagProps>(function DominicanRepublic(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M0.34375 12.6087C1.26711 16.0346 3.96465 18.7322 7.39059 19.6555V12.6087H0.34375Z" fill="#D80027"/>
<path d="M7.39055 0.344482C3.96465 1.2678 1.26707 3.96538 0.34375 7.39128H7.39059V0.344482H7.39055Z" fill="#0052B4"/>
<path d="M19.6562 7.39128C18.7329 3.96538 16.0353 1.2678 12.6094 0.344482V7.39132H19.6562V7.39128Z" fill="#D80027"/>
<path d="M12.6094 19.6555C16.0353 18.7321 18.7329 16.0346 19.6562 12.6086H12.6094V19.6555Z" fill="#0052B4"/>
<path d="M12.608 10C12.608 11.4408 11.4401 12.6087 9.99934 12.6087C8.55859 12.6087 7.39062 11.4408 7.39062 10C7.39062 8.55923 9.99934 7.3913 9.99934 7.3913C9.99934 7.3913 12.608 8.55923 12.608 10Z" fill="#496E2D"/>
<path d="M7.39062 10C7.39062 8.55923 8.55859 7.3913 9.99934 7.3913C11.4401 7.3913 12.608 8.55923 12.608 10" fill="#0052B4"/>
<path d="M8.5332 8.69568V10.3261C8.5332 11.1365 9.19016 11.7935 10.0006 11.7935C10.811 11.7935 11.468 11.1365 11.468 10.3261V8.69568H8.5332Z" fill="#D80027"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000671387H0V20H20V0.000671387Z" fill="#F0F0F0"/>
<path d="M8.26086 12.609H0V19.9998H8.26086V12.609Z" fill="#D80027"/>
<path d="M8.26086 0H0V7.39167H8.26086V0Z" fill="#0052B4"/>
<path d="M19.9991 0H11.7383V7.39167H19.9991V0Z" fill="#D80027"/>
<path d="M19.9991 12.609H11.7383V19.9998H19.9991V12.609Z" fill="#0052B4"/>
<path d="M12.5 10.0001C12.5 11.3808 11.3807 12.5001 10 12.5001C8.6193 12.5001 7.5 11.3808 7.5 10.0001C7.5 8.61937 10 7.50012 10 7.50012C10 7.50012 12.5 8.61937 12.5 10.0001Z" fill="#496E2D"/>
<path d="M7.5 10.0001C7.5 8.61937 8.6193 7.50012 10 7.50012C11.3807 7.50012 12.5 8.61937 12.5 10.0001" fill="#0052B4"/>
<path d="M8.59375 8.75012V10.3126C8.59375 11.0893 9.22336 11.7189 10 11.7189C10.7766 11.7189 11.4062 11.0893 11.4062 10.3126V8.75012H8.59375Z" fill="#D80027"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#F0F0F0"/>
<path d="M12.3913 12.6088H0V20H12.3913V12.6088Z" fill="#D80027"/>
<path d="M12.3913 0H0V7.39188H12.3913V0Z" fill="#0052B4"/>
<path d="M30.0007 0H17.6094V7.39188H30.0007V0Z" fill="#D80027"/>
<path d="M30.0007 12.6088H17.6094V20H30.0007V12.6088Z" fill="#0052B4"/>
<path d="M17.6079 10.0004C17.6079 11.4411 16.44 12.6091 14.9993 12.6091C13.5585 12.6091 12.3906 11.4412 12.3906 10.0004C12.3906 8.55958 14.9993 7.39166 14.9993 7.39166C14.9993 7.39166 17.6079 8.55958 17.6079 10.0004Z" fill="#496E2D"/>
<path d="M12.3906 10.0004C12.3906 8.55964 13.5585 7.39166 14.9993 7.39166C16.44 7.39166 17.6079 8.55958 17.6079 10.0004" fill="#0052B4"/>
<path d="M13.5332 8.69598V10.3264C13.5332 11.1368 14.1902 11.7937 15.0006 11.7937C15.811 11.7937 16.4679 11.1368 16.4679 10.3264V8.69598H13.5332Z" fill="#D80027"/></> }
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
DominicanRepublic.displayName = "DominicanRepublic";
