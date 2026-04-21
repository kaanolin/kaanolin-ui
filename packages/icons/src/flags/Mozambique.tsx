// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Mozambique = forwardRef<SVGSVGElement, FlagProps>(function Mozambique(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M9.99999 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 9.99999 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 9.99999 20Z" fill="#F0F0F0"/>
<path d="M5.40555 13.9131L2.92969 17.0708C4.73922 18.8805 7.23894 20 10.0004 20C14.1344 20 17.6818 17.4911 19.2048 13.9131H5.40555Z" fill="#FFDA44"/>
<path d="M19.2203 6.12316C17.7059 2.52586 14.1484 0 10.0004 0C7.23894 0 4.73922 1.11949 2.92969 2.92926L5.43398 6.12316H19.2203Z" fill="#496E2D"/>
<path d="M2.17383 7.3551V12.6087H19.6555C19.8798 11.777 19.9999 10.9026 19.9999 10C19.9999 9.08432 19.8765 8.1976 19.646 7.3551H2.17383Z" fill="black"/>
<path d="M2.92892 2.92896C-0.976308 6.83419 -0.976308 13.1659 2.92892 17.0711C4.54271 15.4574 6.09478 13.9053 10 10L2.92892 2.92896Z" fill="#A2001D"/>
<path d="M4.04762 7.39124L4.69508 9.38405H6.79062L5.09539 10.6158L5.74281 12.6087L4.04762 11.377L2.35234 12.6087L2.99992 10.6158L1.30469 9.38405H3.40008L4.04762 7.39124Z" fill="#FFDA44"/>
<path d="M2.15234 10H5.94234V11.7391H2.15234V10Z" fill="#F0F0F0"/>
<path d="M6.65929 8.00616L6.04441 7.39124L4.04644 9.3892L2.04848 7.39124L1.43359 8.00616L3.43332 10.0023L1.43359 12.0021L2.04848 12.6087L4.04644 10.6143L6.04441 12.6087L6.65929 12.0021L4.65957 10.0023L6.65929 8.00616Z" fill="black"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000610352H0V20H20V0.000610352Z" fill="#F0F0F0"/>
<path d="M20 13.9131H0V19.9997H20V13.9131Z" fill="#FFDA44"/>
<path d="M20 0H0V6.12355H20V0Z" fill="#496E2D"/>
<path d="M20 7.35559H0V12.6087H20V7.35559Z" fill="black"/>
<path d="M10 10.0003L0 19.9999V0L10 10.0003Z" fill="#A2001D"/>
<path d="M3.2616 7.31226L3.92871 9.36544H6.08773L4.34113 10.6346L5.0082 12.6878L3.2616 11.4188L1.51496 12.6878L2.18219 10.6346L0.435547 9.36544H2.59449L3.2616 7.31226Z" fill="#FFDA44"/>
<path d="M5.21336 10H1.30859V11.7918H5.21336V10Z" fill="#F0F0F0"/>
<path d="M5.95246 7.94578L5.31891 7.31226L3.26039 9.3708L1.20188 7.31226L0.568359 7.94578L2.62871 10.0025L0.568359 12.0629L1.20188 12.6878L3.26039 10.633L5.31891 12.6878L5.95246 12.0629L3.89211 10.0025L5.95246 7.94578Z" fill="black"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.000366211H0V19.9997H30V0.000366211Z" fill="#F0F0F0"/>
<path d="M30 13.9131H0V19.9997H30V13.9131Z" fill="#FFDA44"/>
<path d="M30 0.000366211H0V6.12423H30V0.000366211Z" fill="#496E2D"/>
<path d="M30 7.35608H0V12.6093H30V7.35608Z" fill="black"/>
<path d="M15 10.0004L0 20V0L15 10.0004Z" fill="#A2001D"/>
<path d="M4.89057 6.43359L5.77574 9.15806H8.64062L6.32301 10.842L7.20818 13.5665L4.89057 11.8826L2.57289 13.5665L3.45824 10.842L1.14062 9.15806H4.00539L4.89057 6.43359Z" fill="#FFDA44"/>
<path d="M7.48164 10H2.30078V12.3776H7.48164V10Z" fill="#F0F0F0"/>
<path d="M8.46264 7.27423L7.62199 6.43359L4.89047 9.16509L2.159 6.43359L1.31836 7.27423L4.05223 10.0033L1.31836 12.7372L2.159 13.5665L4.89047 10.8399L7.62199 13.5665L8.46264 12.7372L5.72871 10.0033L8.46264 7.27423Z" fill="black"/></> }
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
Mozambique.displayName = "Mozambique";
