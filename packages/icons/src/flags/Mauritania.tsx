// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Mauritania = forwardRef<SVGSVGElement, FlagProps>(function Mauritania(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#496E2D"/>
<path d="M9.99973 11.5528C8.33465 11.5528 6.94363 10.3826 6.60234 8.81986C6.54992 9.0601 6.52148 9.3092 6.52148 9.56521C6.52148 11.4863 8.07871 13.0435 9.99973 13.0435C11.9207 13.0435 13.478 11.4862 13.478 9.56521C13.478 9.3092 13.4495 9.0601 13.3971 8.81982C13.0558 10.3826 11.6648 11.5528 9.99973 11.5528Z" fill="#FFDA44"/>
<path d="M10.0004 6.95654L10.3241 7.95299H11.3719L10.5243 8.56881L10.848 9.56525L10.0004 8.94939L9.15273 9.56525L9.47652 8.56881L8.62891 7.95299H9.6766L10.0004 6.95654Z" fill="#FFDA44"/></> },
    square: { viewBox: "0 0 20 20", body: <><rect width="20" height="20" fill="#3A5D22"/>
<path d="M10 14.4643C5.21285 14.4643 1.21375 11.0999 0.232539 6.60706C0.0817578 7.29776 0 8.01401 0 8.75002C0 14.273 4.47695 18.75 10 18.75C15.523 18.75 20 14.273 20 8.75002C20 8.01413 19.9182 7.29776 19.7675 6.60706C18.7862 11.0999 14.7871 14.4643 10 14.4643Z" fill="#FFDA44"/>
<path d="M9.99953 1.25L10.9302 4.11477H13.9426L11.5057 5.88523L12.4364 8.75L9.99953 6.97949L7.56258 8.75L8.49352 5.88523L6.05664 4.11477H9.06875L9.99953 1.25Z" fill="#FFDA44"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#496E2D"/>
<path d="M15 12.5108C12.3073 12.5108 10.0577 10.6184 9.50584 8.09119C9.421 8.47966 9.375 8.8826 9.375 9.29656C9.375 12.4032 11.8933 14.9215 15 14.9215C18.1067 14.9215 20.625 12.4032 20.625 9.29656C20.625 8.88255 20.579 8.47966 20.4942 8.09119C19.9423 10.6184 17.6927 12.5108 15 12.5108Z" fill="#FFDA44"/>
<path d="M14.9991 5.07788L15.5226 6.68931H17.217L15.8463 7.68516L16.3699 9.29664L14.9991 8.30068L13.6283 9.29664L14.152 7.68516L12.7812 6.68931H14.4755L14.9991 5.07788Z" fill="#FFDA44"/></> }
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
Mauritania.displayName = "Mauritania";
