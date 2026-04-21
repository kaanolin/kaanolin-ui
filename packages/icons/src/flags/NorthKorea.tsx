// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const NorthKorea = forwardRef<SVGSVGElement, FlagProps>(function NorthKorea(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M10.0004 0C6.96953 0 4.25379 1.34859 2.41992 3.47824H17.5809C15.7471 1.34859 13.0313 0 10.0004 0Z" fill="#0052B4"/>
<path d="M17.5809 16.5217H2.41992C4.25379 18.6514 6.96953 20 10.0004 20C13.0313 20 15.7471 18.6514 17.5809 16.5217Z" fill="#0052B4"/>
<path d="M18.5323 4.78259H1.46773C0.536914 6.30154 0 8.08798 0 9.99998C0 11.912 0.536914 13.6985 1.46773 15.2174H18.5323C19.4631 13.6985 20 11.912 20 9.99998C20 8.08798 19.4631 6.30154 18.5323 4.78259Z" fill="#D80027"/>
<path d="M6.1525 13.8478C8.27759 13.8478 10.0003 12.1251 10.0003 10C10.0003 7.87495 8.27759 6.15222 6.1525 6.15222C4.02741 6.15222 2.30469 7.87495 2.30469 10C2.30469 12.1251 4.02741 13.8478 6.1525 13.8478Z" fill="#F0F0F0"/>
<path d="M6.15184 6.15222L7.01516 8.80929H9.81352L7.54879 10.4516L8.41887 13.1166L6.15184 11.4665L3.88824 13.1135L4.75488 10.4516L2.49219 8.80929H5.28848L6.15184 6.15222Z" fill="#D80027"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 3.3335H0V16.667H20V3.3335Z" fill="#91DC5A"/>
<path d="M20 0H0V20H20V0Z" fill="#F0F0F0"/>
<path d="M20 0H0V3.35086H20V0Z" fill="#0052B4"/>
<path d="M20 16.65H0V20H20V16.65Z" fill="#0052B4"/>
<path d="M20 4.68042H0V15.32H20V4.68042Z" fill="#D80027"/>
<path d="M6.25 13.75C8.32107 13.75 10 12.0711 10 10C10 7.92893 8.32107 6.25 6.25 6.25C4.17893 6.25 2.5 7.92893 2.5 10C2.5 12.0711 4.17893 13.75 6.25 13.75Z" fill="#F0F0F0"/>
<path d="M6.2502 6.25024L7.09164 8.83974H9.81879L7.61164 10.4403L8.45957 13.0375L6.2502 11.4294L4.04414 13.0345L4.88875 10.4403L2.68359 8.83974H5.40875L6.2502 6.25024Z" fill="#D80027"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#91DC5A"/>
<path d="M30 0H0V20H30V0Z" fill="#F0F0F0"/>
<path d="M30 0H0V3.35082H30V0Z" fill="#0052B4"/>
<path d="M30 16.6492H0V19.9993H30V16.6492Z" fill="#0052B4"/>
<path d="M30 4.68066H0V15.3201H30V4.68066Z" fill="#D80027"/>
<path d="M11.1524 13.8474C13.2775 13.8474 15.0002 12.1247 15.0002 9.99967C15.0002 7.87465 13.2775 6.15198 11.1524 6.15198C9.02738 6.15198 7.30469 7.87465 7.30469 9.99967C7.30469 12.1247 9.02738 13.8474 11.1524 13.8474Z" fill="#F0F0F0"/>
<path d="M11.1518 6.15234L12.0151 8.80931H14.8134L12.5487 10.4516L13.4188 13.1164L11.1518 11.4664L8.88824 13.1133L9.75484 10.4516L7.49219 8.80931H10.2884L11.1518 6.15234Z" fill="#D80027"/></> }
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
NorthKorea.displayName = "NorthKorea";
