// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const FrenchPolynesia = forwardRef<SVGSVGElement, FlagProps>(function FrenchPolynesia(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M1.21582 5.21738H18.784C17.088 2.10895 13.7904 0 9.99992 0C6.20949 0 2.91188 2.10895 1.21582 5.21738Z" fill="#D80027"/>
<path d="M9.99992 20C13.7904 20 17.088 17.891 18.784 14.7826H1.21582C2.91188 17.891 6.20949 20 9.99992 20Z" fill="#D80027"/>
<path d="M13.478 9.99997C13.478 11.921 11.9207 13.0434 9.99973 13.0434C8.07875 13.0434 6.52148 11.921 6.52148 9.99997C6.52148 8.07895 8.07875 6.52173 9.99973 6.52173C11.9207 6.52173 13.478 8.07895 13.478 9.99997Z" fill="#FFDA44"/>
<path d="M13.478 10C13.478 11.921 11.9207 13.4782 9.99973 13.4782C8.07875 13.4782 6.52148 11.921 6.52148 10" fill="#0052B4"/>
<path d="M7.82617 9.13043H8.69574V10.8696H7.82617V9.13043Z" fill="#D80027"/>
<path d="M11.3047 9.13043H12.1743V10.8696H11.3047V9.13043Z" fill="#D80027"/>
<path d="M9.56543 7.82611H10.435V10.8696H9.56543V7.82611Z" fill="#D80027"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000244141H0V19.9999H20V0.000244141Z" fill="#F0F0F0"/>
<path d="M20 0H0V6.66655H20V0Z" fill="#D80027"/>
<path d="M20 13.3334H0V20H20V13.3334Z" fill="#D80027"/>
<path d="M12.609 9.99996C12.609 11.4407 11.4411 12.2826 10.0003 12.2826C8.55957 12.2826 7.3916 11.4407 7.3916 9.99996C7.3916 8.55921 8.55957 7.39124 10.0003 7.39124C11.4411 7.39124 12.609 8.55921 12.609 9.99996Z" fill="#FFDA44"/>
<path d="M12.609 9.99994C12.609 11.4407 11.4411 12.6087 10.0003 12.6087C8.55957 12.6087 7.3916 11.4407 7.3916 9.99994" fill="#0052B4"/>
<path d="M9.02133 9.34778H8.36914V10.6521H9.02133V9.34778Z" fill="#D80027"/>
<path d="M11.6307 9.34778H10.9785V10.6521H11.6307V9.34778Z" fill="#D80027"/>
<path d="M10.326 8.36951H9.67383V10.6521H10.326V8.36951Z" fill="#D80027"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#F0F0F0"/>
<path d="M30 0H0V6.66665H30V0Z" fill="#D80027"/>
<path d="M30 13.3334H0V20H30V13.3334Z" fill="#D80027"/>
<path d="M17.2256 10C17.2256 11.2294 16.2289 11.9479 14.9995 11.9479C13.7701 11.9479 12.7734 11.2294 12.7734 10C12.7734 8.77057 13.7701 7.77386 14.9995 7.77386C16.2289 7.77386 17.2256 8.77057 17.2256 10Z" fill="#FFDA44"/>
<path d="M17.2256 10C17.2256 11.2294 16.2289 12.2261 14.9995 12.2261C13.7701 12.2261 12.7734 11.2294 12.7734 10" fill="#0052B4"/>
<path d="M14.1659 9.44373H13.6094V10.557H14.1659V9.44373Z" fill="#D80027"/>
<path d="M16.3915 9.44373H15.835V10.557H16.3915V9.44373Z" fill="#D80027"/>
<path d="M15.2782 8.60889H14.7217V10.5568H15.2782V8.60889Z" fill="#D80027"/></> }
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
FrenchPolynesia.displayName = "FrenchPolynesia";
