// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const StLucia = forwardRef<SVGSVGElement, FlagProps>(function StLucia(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#338AF3"/>
<path d="M6.30469 13.4782H13.696L10.0004 4.78259L6.30469 13.4782Z" fill="#F3F3F3"/>
<path d="M7.58789 12.6087L9.99918 7.12402L12.4105 12.6087H7.58789Z" fill="#333333"/>
<path d="M6.30469 13.4782H13.696L10.0004 10L6.30469 13.4782Z" fill="#FFDA44"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#338AF3"/>
<path d="M6.73828 13.2566H13.26L9.99914 5.58398L6.73828 13.2566Z" fill="#F3F3F3"/>
<path d="M7.87305 12.4894L10.0007 7.6499L12.1283 12.4894H7.87305Z" fill="#333333"/>
<path d="M6.73828 13.2566H13.26L9.99914 10.1876L6.73828 13.2566Z" fill="#FFDA44"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#338AF3"/>
<path d="M11.3047 13.4779H18.6961L15.0004 4.78235L11.3047 13.4779Z" fill="#F3F3F3"/>
<path d="M12.5879 12.6083L14.9992 7.12366L17.4105 12.6083H12.5879Z" fill="#333333"/>
<path d="M11.3047 13.4778H18.6961L15.0004 9.99963L11.3047 13.4778Z" fill="#FFDA44"/></> }
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
StLucia.displayName = "StLucia";
