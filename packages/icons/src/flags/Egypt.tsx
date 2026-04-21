// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Egypt = forwardRef<SVGSVGElement, FlagProps>(function Egypt(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M9.9991 0C5.69945 0 2.03402 2.71375 0.621094 6.52176H19.3771C17.9642 2.71375 14.2987 0 9.9991 0Z" fill="#D80027"/>
<path d="M9.9991 20C14.2987 20 17.9642 17.2863 19.3771 13.4783H0.621094C2.03402 17.2863 5.69945 20 9.9991 20Z" fill="black"/>
<path d="M13.478 8.91303H10.8693C10.8693 8.43279 10.48 8.04346 9.99977 8.04346C9.51953 8.04346 9.1302 8.43279 9.1302 8.91303H6.52148C6.52148 9.3933 6.9398 9.7826 7.42004 9.7826H7.39105C7.39105 10.2629 7.78035 10.6522 8.26063 10.6522C8.26063 11.1324 8.64992 11.5217 9.1302 11.5217H10.8693C11.3496 11.5217 11.7389 11.1324 11.7389 10.6522C12.2192 10.6522 12.6085 10.2629 12.6085 9.7826H12.5795C13.0598 9.7826 13.478 9.3933 13.478 8.91303Z" fill="#FF9811"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000244141H0V19.9998H20V0.000244141Z" fill="#F0F0F0"/>
<path d="M20 0H0V6.66652H20V0Z" fill="#D80027"/>
<path d="M20 13.3335H0V20H20V13.3335Z" fill="black"/>
<path d="M13.478 8.98554H10.8693C10.8693 8.5053 10.48 8.11597 9.99977 8.11597C9.51953 8.11597 9.1302 8.5053 9.1302 8.98554H6.52148C6.52148 9.46581 6.9398 9.85511 7.42004 9.85511H7.39105C7.39105 10.3354 7.78035 10.7247 8.26063 10.7247C8.26063 11.205 8.64992 11.5942 9.1302 11.5942H10.8693C11.3496 11.5942 11.7389 11.205 11.7389 10.7247C12.2192 10.7247 12.6085 10.3354 12.6085 9.85511H12.5795C13.0598 9.85511 13.478 9.46581 13.478 8.98554Z" fill="#FF9811"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#F0F0F0"/>
<path d="M30 0H0V6.66665H30V0Z" fill="#D80027"/>
<path d="M30 13.3334H0V20H30V13.3334Z" fill="black"/>
<path d="M18.75 8.84511H15.9375C15.9375 8.32737 15.5177 7.90759 15 7.90759C14.4823 7.90759 14.0625 8.32737 14.0625 8.84511H11.25C11.25 9.36286 11.701 9.78263 12.2187 9.78263H12.1875C12.1875 10.3004 12.6073 10.7202 13.125 10.7202C13.125 11.2379 13.5448 11.6577 14.0625 11.6577H15.9375C16.4552 11.6577 16.875 11.2379 16.875 10.7202C17.3927 10.7202 17.8125 10.3004 17.8125 9.78263H17.7813C18.299 9.78263 18.75 9.36292 18.75 8.84511Z" fill="#FF9811"/></> }
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
Egypt.displayName = "Egypt";
