// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Botswana = forwardRef<SVGSVGElement, FlagProps>(function Botswana(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M0.472188 6.9565C0.165859 7.91623 -3.90556e-05 8.93861 6.89667e-09 9.99998C-3.90556e-05 11.0613 0.165859 12.0837 0.472227 13.0435L10 13.4783L19.5277 13.0435C19.834 12.0837 20 11.0612 20 10C20 8.93869 19.8341 7.91623 19.5277 6.9565L9.99996 6.52173L0.472188 6.9565Z" fill="#F0F0F0"/>
<path d="M20 9.99999C20 9.40674 19.948 8.82565 19.8489 8.2608H0.151094C0.0519531 8.82565 0 9.40667 0 9.99995C0 10.5932 0.0519922 11.1743 0.151094 11.7391H19.8489C19.948 11.1742 20 10.5932 20 9.99999Z" fill="black"/>
<path d="M10.0004 20C14.462 20 18.2405 17.078 19.5282 13.0434H0.472656C1.76035 17.0779 5.53891 19.9999 10.0004 20Z" fill="#338AF3"/>
<path d="M10.0005 1.56654e-09C5.53895 1.56654e-09 1.76043 2.922 0.472656 6.95647L19.5281 6.95651C18.2405 2.922 14.462 -7.81237e-05 10.0005 1.56654e-09Z" fill="#338AF3"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#338AF3"/>
<path d="M20 7.35547H0V12.6086H20V7.35547Z" fill="black"/>
<path d="M20 6.92072H0V7.7903H20V6.92072Z" fill="white"/>
<path d="M20 12.1738H0V13.0434H20V12.1738Z" fill="white"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.00012207H0V20.0001H30V0.00012207Z" fill="#F0F0F0"/>
<path d="M30 13.9133H0V20.0001H30V13.9133Z" fill="#338AF3"/>
<path d="M30 0.00012207H0V6.12418H30V0.00012207Z" fill="#338AF3"/>
<path d="M30 7.35614H0V12.6095H30V7.35614Z" fill="black"/></> }
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
Botswana.displayName = "Botswana";
