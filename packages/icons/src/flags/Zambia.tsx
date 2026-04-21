// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Zambia = forwardRef<SVGSVGElement, FlagProps>(function Zambia(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#496E2D"/>
<path d="M13.913 10H10V20C11.1689 20 12.2907 19.7988 13.3333 19.4302L13.913 10Z" fill="#D80027"/>
<path d="M16.6676 17.4529C18.7132 15.6218 20.0009 12.9614 20.0009 10H16.0879L16.6676 17.4529Z" fill="#FF9811"/>
<path d="M13.334 10V19.4302C14.5761 18.9911 15.7055 18.3138 16.6673 17.4529V10H13.334Z" fill="black"/>
<path d="M18.478 6.52179H15.8693C15.8693 6.04156 15.48 5.65222 14.9998 5.65222C14.5195 5.65222 14.1302 6.04156 14.1302 6.52179H11.5215C11.5215 7.00207 11.9398 7.39136 12.42 7.39136H12.3911C12.3911 7.87164 12.7803 8.26093 13.2606 8.26093C13.2606 8.74121 13.6499 9.1305 14.1302 9.1305H15.8693C16.3496 9.1305 16.7389 8.74121 16.7389 8.26093C17.2191 8.26093 17.6085 7.87164 17.6085 7.39136H17.5795C18.0598 7.39132 18.478 7.00203 18.478 6.52179Z" fill="#FF9811"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#496E2D"/>
<path d="M19.166 7.63586H17.291C17.291 7.29071 17.0112 7.01086 16.666 7.01086C16.3209 7.01086 16.041 7.29071 16.041 7.63586H14.166C14.166 7.98102 14.4667 8.26086 14.8118 8.26086H14.791C14.791 8.60602 15.0708 8.88586 15.416 8.88586C15.416 9.23102 15.6958 9.51086 16.041 9.51086H17.291C17.6362 9.51086 17.916 9.23102 17.916 8.88586C18.2612 8.88586 18.541 8.60602 18.541 8.26086H18.5202C18.8654 8.26086 19.166 7.98106 19.166 7.63586Z" fill="#FF9811"/>
<path d="M15.5562 10H13.334V20H15.5562V10Z" fill="#D80027"/>
<path d="M19.9995 10H17.7773V20H19.9995V10Z" fill="#FF9811"/>
<path d="M17.7769 10H15.5547V20H17.7769V10Z" fill="black"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#496E2D"/>
<path d="M28.75 6.45373H25.9375C25.9375 5.936 25.5177 5.51624 25 5.51624C24.4823 5.51624 24.0625 5.936 24.0625 6.45373H21.25C21.25 6.97145 21.701 7.39122 22.2187 7.39122H22.1875C22.1875 7.90894 22.6071 8.32871 23.125 8.32871C23.125 8.84643 23.5446 9.2662 24.0625 9.2662H25.9375C26.4552 9.2662 26.875 8.84643 26.875 8.32871C27.3927 8.32871 27.8125 7.90894 27.8125 7.39122H27.7813C28.2991 7.39122 28.75 6.97145 28.75 6.45373Z" fill="#FF9811"/>
<path d="M23.3333 9.99963H20V19.9993H23.3333V9.99963Z" fill="#D80027"/>
<path d="M29.9993 9.99963H26.666V19.9993H29.9993V9.99963Z" fill="#FF9811"/>
<path d="M26.6673 9.99963H23.334V19.9993H26.6673V9.99963Z" fill="black"/></> }
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
Zambia.displayName = "Zambia";
