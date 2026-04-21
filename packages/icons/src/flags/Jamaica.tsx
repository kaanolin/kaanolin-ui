// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Jamaica = forwardRef<SVGSVGElement, FlagProps>(function Jamaica(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#FFDA44"/>
<path d="M16.0884 2.06719C14.4022 0.771055 12.2914 0 10.0003 0C7.7091 0 5.59832 0.771094 3.91211 2.06719L10.0003 8.15531L16.0884 2.06719Z" fill="#6DA544"/>
<path d="M2.06715 3.91187C0.771094 5.59808 0 7.70882 0 9.99999C0 12.2912 0.771094 14.4019 2.06719 16.0882L8.15535 9.99999L2.06715 3.91187Z" fill="black"/>
<path d="M3.91211 17.9328C5.59836 19.229 7.7091 20 10.0003 20C12.2914 20 14.4022 19.2289 16.0884 17.9328L10.0003 11.8447L3.91211 17.9328Z" fill="#6DA544"/>
<path d="M17.9319 16.0881C19.228 14.4019 19.9991 12.2912 19.9991 9.99999C19.9991 7.70882 19.228 5.59808 17.9319 3.91187L11.8438 9.99999L17.9319 16.0881Z" fill="black"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000610352H0V19.9999H20V0.000610352Z" fill="#6DA544"/>
<path d="M8.43215 10.0001L0 18.4319V1.56775L8.43215 10.0001Z" fill="black"/>
<path d="M20.0005 1.56775V18.4319L11.5684 10.0001L20.0005 1.56775Z" fill="black"/>
<path d="M20 1.56779L11.5678 10.0002L20 18.432V19.9998H18.4326L10 11.5673L1.56738 19.9998H0V18.432L8.43215 10.0002L0 1.56779V0H1.56738L10 8.43244L18.4326 0H20V1.56779Z" fill="#FFDA44"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.000366211H0V19.9997H30V0.000366211Z" fill="#6DA544"/>
<path d="M12.6483 10.0004L0 18.4323V1.56787L12.6483 10.0004Z" fill="black"/>
<path d="M29.9998 1.56787V18.4323L17.3516 10.0004L29.9998 1.56787Z" fill="black"/>
<path d="M30 1.56783L17.3517 10.0004L30 18.4322V20H27.6489L15 11.5675L2.35107 20H0V18.4322L12.6483 10.0004L0 1.56783V0H2.35107L15 8.43255L27.6489 0H30V1.56783Z" fill="#0052B4"/>
<path d="M30 1.56783L17.3517 10.0004L30 18.4322V20H27.6489L15 11.5675L2.35107 20H0V18.4322L12.6483 10.0004L0 1.56783V0H2.35107L15 8.43255L27.6489 0H30V1.56783Z" fill="#FFDA44"/></> }
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
Jamaica.displayName = "Jamaica";
