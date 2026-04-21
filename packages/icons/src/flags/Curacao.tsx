// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Curacao = forwardRef<SVGSVGElement, FlagProps>(function Curacao(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#FFDA44"/>
<path d="M9.99918 20C13.2804 20 16.1925 18.4196 18.0159 15.9786H1.98242C3.80586 18.4196 6.71793 20 9.99918 20Z" fill="#0052B4"/>
<path d="M20 10C20 4.47719 15.5228 0 10 0C4.47719 0 0 4.47719 0 10C0 11.1825 0.20582 12.3169 0.582656 13.3699H19.4173C19.7942 12.3169 20 11.1825 20 10Z" fill="#0052B4"/>
<path d="M6.84434 6.41339L7.38391 8.07402H9.13016L7.71746 9.1005L8.25703 10.7612L6.84434 9.7348L5.43164 10.7612L5.97129 9.1005L4.55859 8.07402H6.30477L6.84434 6.41339Z" fill="#F0F0F0"/>
<path d="M3.84602 4.67419L4.16977 5.6706H5.21754L4.36992 6.28646L4.69367 7.2829L3.84602 6.66705L2.9984 7.2829L3.32219 6.28646L2.47461 5.6706H3.52234L3.84602 4.67419Z" fill="#F0F0F0"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#0052B4"/>
<path d="M5.89277 6.27332L6.35531 7.69671H7.85211L6.64121 8.57652L7.10371 10L5.89277 9.12027L4.68191 10L5.14449 8.57652L3.93359 7.69671H5.43031L5.89277 6.27332Z" fill="#F0F0F0"/>
<path d="M3.32203 4.78259L3.59949 5.63662H4.49758L3.77105 6.16455L4.04859 7.01861L3.32203 6.49076L2.59551 7.01861L2.87301 6.16455L2.14648 5.63662H3.04453L3.32203 4.78259Z" fill="#F0F0F0"/>
<path d="M20 13.75H0V16.25H20V13.75Z" fill="#FFDA44"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#0052B4"/>
<path d="M30 14.0624H0V15.9375H30V14.0624Z" fill="#FFDA44"/>
<path d="M8.5416 3.69574L9.08119 5.35638H10.8275L9.41477 6.38285L9.9543 8.04361L8.5416 7.01726L7.12891 8.04361L7.66855 6.38285L6.25586 5.35638H8.00201L8.5416 3.69574Z" fill="#F0F0F0"/>
<path d="M5.54332 1.95654L5.86711 2.95295H6.91482L6.06727 3.56884L6.391 4.56531L5.54332 3.94948L4.6957 4.56531L5.01949 3.56884L4.17188 2.95295H5.21965L5.54332 1.95654Z" fill="#F0F0F0"/></> }
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
Curacao.displayName = "Curacao";
