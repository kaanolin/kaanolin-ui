// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const SaoTomeAndPrincipe = forwardRef<SVGSVGElement, FlagProps>(function SaoTomeAndPrincipe(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#FFDA44"/>
<path d="M6.08738 6.52176H19.3784C17.9655 2.71375 14.3 0 10.0004 0C7.23895 0 4.73922 1.11949 2.92969 2.92926L6.08738 6.52176Z" fill="#6DA544"/>
<path d="M6.08738 13.4783H19.3784C17.9655 17.2863 14.3 20 10.0004 20C7.23895 20 4.73922 18.8805 2.92969 17.0708L6.08738 13.4783Z" fill="#6DA544"/>
<path d="M2.92893 2.92896C-0.976309 6.83419 -0.976309 13.1659 2.92893 17.0711C4.54271 15.4574 6.09478 13.9053 10 10L2.92893 2.92896Z" fill="#D80027"/>
<path d="M12.6978 8.26086L13.1295 9.58946H14.5264L13.3963 10.4106L13.8279 11.7391L12.6978 10.918L11.5676 11.7391L11.9993 10.4106L10.8691 9.58946H12.2661L12.6978 8.26086Z" fill="black"/>
<path d="M17.0455 8.26086L17.4771 9.58946H18.8741L17.7439 10.4106L18.1756 11.7391L17.0455 10.918L15.9153 11.7391L16.347 10.4106L15.2168 9.58946H16.6137L17.0455 8.26086Z" fill="black"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#FFDA44"/>
<path d="M20 0.00012207H0V6.66665H20V0.00012207Z" fill="#6DA544"/>
<path d="M20 13.3335H0V20H20V13.3335Z" fill="#6DA544"/>
<path d="M10 10.0003L0 20V0L10 10.0003Z" fill="#D80027"/>
<path d="M13.0991 8.47925L13.4765 9.64097H14.6981L13.7098 10.3591L14.0873 11.5208L13.0991 10.8028L12.1108 11.5208L12.4882 10.3591L11.5 9.64097H12.7216L13.0991 8.47925Z" fill="black"/>
<path d="M16.9018 8.47925L17.2793 9.64097H18.5008L17.5126 10.3591L17.89 11.5208L16.9018 10.8028L15.9136 11.5208L16.291 10.3591L15.3027 9.64097H16.5243L16.9018 8.47925Z" fill="black"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.000366211H0V19.9997H30V0.000366211Z" fill="#FFDA44"/>
<path d="M30 0.000366211H0V6.6668H30V0.000366211Z" fill="#6DA544"/>
<path d="M30 13.3333H0V19.9997H30V13.3333Z" fill="#6DA544"/>
<path d="M15 10.0004L0 20V0L15 10.0004Z" fill="#D80027"/>
<path d="M17.6978 8.26086L18.1295 9.58941H19.5265L18.3963 10.4106L18.8279 11.7392L17.6978 10.918L16.5677 11.7392L16.9993 10.4106L15.8691 9.58941H17.2661L17.6978 8.26086Z" fill="black"/>
<path d="M22.0455 8.26086L22.4771 9.58941H23.8741L22.7439 10.4106L23.1756 11.7392L22.0455 10.918L20.9153 11.7392L21.347 10.4106L20.2168 9.58941H21.6138L22.0455 8.26086Z" fill="black"/></> }
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
SaoTomeAndPrincipe.displayName = "SaoTomeAndPrincipe";
