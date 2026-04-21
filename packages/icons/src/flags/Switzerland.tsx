// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Switzerland = forwardRef<SVGSVGElement, FlagProps>(function Switzerland(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#D80027"/>
<path d="M15.218 8.26087H11.7397V4.78259H8.26145V8.26087H4.7832V11.7391H8.26145V15.2174H11.7397V11.7391H15.218V8.26087Z" fill="#F0F0F0"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#D80027"/>
<path d="M15.434 8.18839H11.8108V4.56519H8.18762V8.18839H4.56445V11.8116H8.18762V15.4347H11.8108V11.8116H15.434V8.18839Z" fill="#F0F0F0"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#D80027"/>
<path d="M20.87 8.0434H16.9569V4.13025H13.0439V8.0434H9.13086V11.9565H13.0439V15.8696H16.9569V11.9565H20.87V8.0434Z" fill="#F0F0F0"/></> }
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
Switzerland.displayName = "Switzerland";
