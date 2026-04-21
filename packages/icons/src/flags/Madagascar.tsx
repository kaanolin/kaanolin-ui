// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Madagascar = forwardRef<SVGSVGElement, FlagProps>(function Madagascar(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M6.52148 9.99999V19.378C7.60477 19.78 8.77652 20 9.99973 20C15.5225 20 19.9997 15.5228 19.9997 9.99999C19.9997 4.47718 6.52148 9.99999 6.52148 9.99999Z" fill="#6DA544"/>
<path d="M9.99973 0C8.77652 0 7.60477 0.220039 6.52148 0.621992V10H19.9997C19.9997 4.47719 15.5225 0 9.99973 0Z" fill="#D80027"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#F0F0F0"/>
<path d="M20.0005 19.9997V9.99988C14.2585 9.99988 7.68164 9.99988 7.68164 9.99988V19.9998H20.0005V19.9997Z" fill="#6DA544"/>
<path d="M20.0005 0H7.68164V9.99992C7.68164 9.99992 14.2585 9.99992 20.0005 9.99992V0Z" fill="#D80027"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 19.9997V0C16.0166 0 0 0 0 0V19.9997H30Z" fill="#6DA544"/>
<path d="M30 0.00012207H0V9.99983C0 9.99983 16.0166 9.99983 30 9.99983V0.00012207Z" fill="#D80027"/>
<path d="M10.6519 0.000244141H0V20H10.6519V0.000244141Z" fill="#F0F0F0"/></> }
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
Madagascar.displayName = "Madagascar";
