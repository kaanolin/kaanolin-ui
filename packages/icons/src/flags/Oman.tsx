// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Oman = forwardRef<SVGSVGElement, FlagProps>(function Oman(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M0 10C0 13.7905 2.10898 17.0881 5.21738 18.7841V1.21594C2.10898 2.91196 0 6.20961 0 10Z" fill="#D80027"/>
<path d="M19.378 13.4782C19.78 12.3949 20 11.2232 20 9.99997C20 8.77677 19.78 7.60501 19.378 6.52173H0.622031C0.220039 7.60501 0 8.77677 0 9.99997C0 11.2232 0.220039 12.3949 0.622031 13.4782L10 14.3478L19.378 13.4782Z" fill="#D80027"/>
<path d="M9.99906 20C14.2987 20 17.9641 17.2863 19.3771 13.4783H0.621094C2.03398 17.2863 5.69945 20 9.99906 20Z" fill="#6DA544"/>
<path d="M0 9.99999C0 14.6203 3.13363 18.508 7.39129 19.6555V0.344482C3.13363 1.49198 0 5.37972 0 9.99999Z" fill="#D80027"/>
<path d="M6.11734 4.40058L5.19504 3.47827L4.5802 4.09319L3.96535 3.47827L3.04305 4.40058L3.65793 5.01546L3.04297 5.63038L3.96527 6.55269L4.58016 5.93776L5.19504 6.55269L6.11734 5.63038L5.50246 5.01546L6.11734 4.40058Z" fill="#F0F0F0"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.00012207H0V20H20V0.00012207Z" fill="#D80027"/>
<path d="M8.69582 4.53621L7.78277 3.62317L7.17414 4.23192L6.56547 3.62317L5.65246 4.53621L6.26109 5.14492L5.65234 5.75363L6.56539 6.66663L7.1741 6.05796L7.78277 6.66663L8.69582 5.75363L8.08715 5.14492L8.69582 4.53621Z" fill="#F0F0F0"/>
<path d="M20 0H10V6.66649H20V0Z" fill="#F0F0F0"/>
<path d="M20 13.3334H10V19.9999H20V13.3334Z" fill="#6DA544"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V19.9994H30V0Z" fill="#D80027"/>
<path d="M30 0H0V20H30V0Z" fill="#D80027"/>
<path d="M11.1173 4.40083L10.1951 3.47852L9.58017 4.09339L8.96535 3.47852L8.04303 4.40083L8.65791 5.01565L8.04297 5.63052L8.96523 6.55284L9.58012 5.93796L10.1951 6.55284L11.1173 5.63052L10.5024 5.01565L11.1173 4.40083Z" fill="#F0F0F0"/>
<path d="M29.9993 0H12.3906V6.52229H29.9993V0Z" fill="#F0F0F0"/>
<path d="M29.9993 13.4777H12.3906V19.9993H29.9993V13.4777Z" fill="#6DA544"/></> }
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
Oman.displayName = "Oman";
