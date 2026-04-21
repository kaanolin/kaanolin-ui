// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Nauru = forwardRef<SVGSVGElement, FlagProps>(function Nauru(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#0052B4"/>
<path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#FFDA44"/>
<path d="M9.99902 0C4.76918 0 0.477852 4.01488 0.0371094 9.13043H19.961C19.5202 4.01488 15.2289 0 9.99902 0Z" fill="#0052B4"/>
<path d="M9.99902 19.9999C15.2289 19.9999 19.5202 15.9851 19.961 10.8695H0.0371094C0.477852 15.9851 4.76918 19.9999 9.99902 19.9999Z" fill="#0052B4"/>
<path d="M8.26004 13.4782L7.13949 14.0053L7.73617 15.0905L6.51941 14.8577L6.36523 16.0869L5.5177 15.1829L4.6702 16.0869L4.51602 14.8577L3.29922 15.0904L3.89594 14.0052L2.77539 13.4782L3.89598 12.9511L3.29922 11.866L4.51598 12.0987L4.67023 10.8695L5.5177 11.7735L6.36527 10.8695L6.51941 12.0987L7.73621 11.866L7.13953 12.9511L8.26004 13.4782Z" fill="#F0F0F0"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#0052B4"/>
<path d="M20 8.75H0V11.25H20V8.75Z" fill="#FFDA44"/>
<path d="M7.5 15L6.47848 15.4805L7.02242 16.4698L5.91316 16.2576L5.77262 17.3782L5 16.5541L4.22734 17.3782L4.08684 16.2576L2.97758 16.4698L3.52148 15.4805L2.5 15L3.52152 14.5195L2.97758 13.5302L4.0868 13.7423L4.22738 12.6218L5 13.4459L5.77266 12.6218L5.91316 13.7423L7.02246 13.5302L6.47852 14.5195L7.5 15Z" fill="#F0F0F0"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#0052B4"/>
<path d="M30 9.06213H0V10.9372H30V9.06213Z" fill="#FFDA44"/>
<path d="M10.2424 14.9999L9.12187 15.527L9.71859 16.6122L8.50178 16.3794L8.34762 17.6086L7.50012 16.7046L6.65256 17.6086L6.49846 16.3794L5.28164 16.6122L5.8783 15.527L4.75781 14.9999L5.87836 14.4728L5.28164 13.3876L6.4984 13.6203L6.65262 12.3911L7.50012 13.2952L8.34768 12.3911L8.50178 13.6203L9.71859 13.3876L9.12193 14.4729L10.2424 14.9999Z" fill="#F0F0F0"/></> }
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
Nauru.displayName = "Nauru";
