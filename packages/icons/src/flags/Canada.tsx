// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Canada = forwardRef<SVGSVGElement, FlagProps>(function Canada(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M9.99999 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 9.99999 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 9.99999 20Z" fill="#F0F0F0"/>
<path d="M19.9998 9.99998C19.9998 6.03537 17.6926 2.60975 14.3477 0.992249V19.0077C17.6926 17.3902 19.9998 13.9646 19.9998 9.99998Z" fill="#D80027"/>
<path d="M0 9.99998C0 13.9646 2.30722 17.3902 5.65218 19.0077V0.992249C2.30722 2.60975 0 6.03537 0 9.99998Z" fill="#D80027"/>
<path d="M11.7389 11.3044L13.478 10.4348L12.6084 10V9.13045L10.8693 10L11.7389 8.26088H10.8693L9.99972 6.95654L9.13015 8.26088H8.26058L9.13015 10L7.39101 9.13045V10L6.52148 10.4348L8.26058 11.3044L7.82582 12.1739H9.56496V13.4783H10.4345V12.1739H12.1736L11.7389 11.3044Z" fill="#D80027"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000244141H0V19.9998H20V0.000244141Z" fill="#F0F0F0"/>
<path d="M6.66651 0H0V20H6.66651V0Z" fill="#D80027"/>
<path d="M20.0005 0H13.334V20H20.0005V0Z" fill="#D80027"/>
<path d="M11.5223 11.096L13.044 10.3351L12.2831 9.95467V9.19381L10.7614 9.95467L11.5223 8.43295H10.7614L10.0005 7.29163L9.23964 8.43295H8.47875L9.23964 9.95467L7.71789 9.19381V9.95467L6.95703 10.3351L8.47875 11.096L8.09832 11.8569H9.62007V12.9981H10.3809V11.8569H11.9027L11.5223 11.096Z" fill="#D80027"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V19.9994H30V0Z" fill="#F0F0F0"/>
<path d="M9.99977 0H0V20H9.99977V0Z" fill="#D80027"/>
<path d="M29.9998 0H20V20H29.9998V0Z" fill="#D80027"/>
<path d="M16.875 11.3889L18.75 10.4514L17.8125 9.98275V9.04526L15.9375 9.98275L16.875 8.10777H15.9375L15 6.70148L14.0625 8.10777H13.125L14.0625 9.98275L12.1875 9.04526V9.98275L11.25 10.4514L13.125 11.3889L12.6563 12.3264H14.5313V13.7327H15.4688V12.3264H17.3438L16.875 11.3889Z" fill="#D80027"/></> }
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
Canada.displayName = "Canada";
