// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Guernsey = forwardRef<SVGSVGElement, FlagProps>(function Guernsey(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M19.9154 8.69566H11.3044H11.3044V0.0846484C10.8774 0.0290625 10.4421 0 10 0C9.55793 0 9.12262 0.0290625 8.69566 0.0846484V8.69566H0.0846484C0.0290625 9.12262 0 9.55793 0 10C0 10.4421 0.0290625 10.8774 0.0846484 11.3043H8.69559H8.69563V19.9154C9.12262 19.9709 9.55793 20 10 20C10.4421 20 10.8774 19.971 11.3043 19.9154V11.3045V11.3044H19.9154C19.9709 10.8774 20 10.4421 20 10C20 9.55793 19.9709 9.12262 19.9154 8.69566Z" fill="#D80027"/>
<path d="M12.8258 10.4347L13.478 10.8695V9.1304L12.8258 9.5652H10.4345V7.17388L10.8693 6.52173H9.13016L9.56496 7.17388V9.5652H7.17363L6.52148 9.1304V10.8695L7.17363 10.4347H9.56496V12.8261L9.13016 13.4782H10.8693L10.4345 12.8261V10.4347H12.8258Z" fill="#FFDA44"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#F0F0F0"/>
<path d="M11.25 0H8.75V20H11.25V0Z" fill="#D80027"/>
<path d="M20 8.75H0V11.25H20V8.75Z" fill="#D80027"/>
<path d="M12.8258 10.4347L13.478 10.8695V9.1304L12.8258 9.5652H10.4345V7.17388L10.8693 6.52173H9.13016L9.56496 7.17388V9.5652H7.17363L6.52148 9.1304V10.8695L7.17363 10.4347H9.56496V12.8261L9.13016 13.4782H10.8693L10.4345 12.8261V10.4347H12.8258Z" fill="#FFDA44"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.000183105H0V20H30V0.000183105Z" fill="#F0F0F0"/>
<path d="M16.875 0H13.125V8.1248H0V11.8747H13.125V19.9995H16.875V11.8747H30V8.1248H16.875V0Z" fill="#D80027"/>
<path d="M18.71 10.5704L19.566 11.141V8.85849L18.71 9.42912H15.5714V6.29061L16.1421 5.43463H13.8595L14.4301 6.29061V9.42912H11.2915L10.4355 8.85849V11.141L11.2915 10.5704H14.4301V13.7089L13.8595 14.5649H16.1421L15.5714 13.7089V10.5704H18.71Z" fill="#FFDA44"/></> }
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
Guernsey.displayName = "Guernsey";
