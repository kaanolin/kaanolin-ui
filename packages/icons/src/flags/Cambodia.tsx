// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Cambodia = forwardRef<SVGSVGElement, FlagProps>(function Cambodia(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M0 10C0 11.7324 0.440742 13.3619 1.2159 14.7826L10 15.6522L18.7841 14.7826C19.5593 13.3619 20 11.7324 20 10C20 8.2676 19.5593 6.63815 18.7841 5.21741L10 4.34784L1.2159 5.21741C0.440742 6.63815 0 8.2676 0 10Z" fill="#D80027"/>
<path d="M1.2168 5.21738H18.785C17.0889 2.10895 13.7913 0 10.0009 0C6.21047 0 2.91285 2.10895 1.2168 5.21738Z" fill="#0052B4"/>
<path d="M10.0009 20C13.7913 20 17.0889 17.891 18.785 14.7826H1.2168C2.91285 17.891 6.21047 20 10.0009 20Z" fill="#0052B4"/>
<path d="M13.4784 11.9565V10.6522H12.6089V8.91303L11.7393 8.04346L10.8697 8.91303V7.17389L10.0002 6.30432L9.13059 7.17389V8.91303L8.26102 8.04346L7.39145 8.91303V10.6522H6.52191V11.9565H5.65234V13.2608H14.348V11.9565H13.4784Z" fill="#F0F0F0"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000244141H0V19.9998H20V0.000244141Z" fill="#D80027"/>
<path d="M20 0H0V6.66652H20V0Z" fill="#0052B4"/>
<path d="M20 13.3335H0V20H20V13.3335Z" fill="#0052B4"/>
<path d="M12.5 11.4176V10.4801H11.875V9.2301L11.25 8.6051L10.625 9.2301V7.9801L10 7.3551L9.375 7.9801V9.2301L8.75 8.6051L8.125 9.2301V10.4801H7.5V11.4176H6.875V12.3551H13.125V11.4176H12.5Z" fill="#F0F0F0"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#D80027"/>
<path d="M30 0H0V6.66665H30V0Z" fill="#0052B4"/>
<path d="M30 13.3334H0V20H30V13.3334Z" fill="#0052B4"/>
<path d="M17.7823 11.5218V10.4783H17.0867V9.08692L16.391 8.39128L15.6954 9.08692V7.69564L14.9997 6.99994L14.304 7.69564V9.08692L13.6084 8.39128L12.9128 9.08692V10.4783H12.2171V11.5218H11.5215V12.5652H18.478V11.5218H17.7823Z" fill="#F0F0F0"/></> }
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
Cambodia.displayName = "Cambodia";
