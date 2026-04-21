// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const AntiguaAndBarbuda = forwardRef<SVGSVGElement, FlagProps>(function AntiguaAndBarbuda(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M0 10C0 10.685 0.0690625 11.3538 0.200273 12L10 12.6087L19.7998 12C19.931 11.3538 20 10.685 20 10C20 9.31505 19.9309 8.64622 19.7998 8.00001L10 7.3913L0.200273 8.00001C0.0690625 8.64622 0 9.31505 0 10Z" fill="#0052B4"/>
<path d="M19.8007 12H0.201172C1.1277 16.5645 5.16305 20 10.0009 20C14.8387 20 18.8741 16.5645 19.8007 12Z" fill="#F0F0F0"/>
<path d="M0.201172 8H19.8007C18.8741 3.43555 14.8388 0 10.0009 0C5.16297 0 1.1277 3.43555 0.201172 8Z" fill="black"/>
<path d="M14.348 8.00001H5.65234L7.42891 7.1643L6.48285 5.4438L8.41195 5.81274L8.65648 3.86395L10.0002 5.29731L11.3439 3.86395L11.5883 5.81274L13.5175 5.4438L12.5715 7.16438L14.348 8.00001Z" fill="#FFDA44"/>
<path d="M0 9.99999C0 15.5228 4.47719 20 10 20L1.99984 3.99963C0.744219 5.67108 0 7.74854 0 9.99999Z" fill="#A2001D"/>
<path d="M10 20C15.5228 20 20 15.5228 20 9.99999C20 7.74854 19.2558 5.67108 18.0002 3.99963L10 20Z" fill="#A2001D"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="black"/>
<path d="M14.4479 8.14488H5.55078L7.36851 7.28976L6.40055 5.52937L8.37433 5.90691L8.62456 3.91296L9.99933 5.37953L11.3742 3.91296L11.6243 5.90691L13.5981 5.52937L12.6302 7.28992L14.4479 8.14488Z" fill="#FFDA44"/>
<path d="M3.46746 7.99986C3.38 8.64607 3.33398 9.31489 3.33398 9.99989C3.33398 10.6849 3.38004 11.3537 3.46746 11.9999L10.0006 12.6086L16.5338 11.9999C16.6212 11.3537 16.6672 10.6849 16.6672 9.99986C16.6672 9.31486 16.6212 8.64607 16.5338 7.99982" fill="#0052B4"/>
<path d="M16.5331 11.9999H3.4668C4.08449 16.5644 6.77468 20 9.99995 20C13.2252 20 15.9154 16.5644 16.5331 11.9999Z" fill="#F0F0F0"/>
<path d="M9.99986 19.9998L0 0V19.9998H9.99986Z" fill="#A2001D"/>
<path d="M19.9999 19.9998V0L10 19.9998H19.9999Z" fill="#A2001D"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M29.9999 0.00012207H0V19.9999H29.9999V0.00012207Z" fill="black"/>
<path d="M5.20021 7.99987C5.06902 8.64611 5 9.3149 5 9.99993C5 10.6849 5.06908 11.3538 5.20021 12L14.9999 12.6086L24.7997 11.9999C24.9309 11.3536 24.9999 10.6848 24.9999 9.99981C24.9999 9.31479 24.9308 8.64599 24.7997 7.99976" fill="#0052B4"/>
<path d="M24.8006 11.9999H5.20117C6.12771 16.5644 10.1631 20 15.0009 20C19.8387 20 23.8741 16.5644 24.8006 11.9999Z" fill="#F0F0F0"/>
<path d="M19.348 7.99988H10.6523L12.4289 7.16421L11.4828 5.44359L13.4119 5.81262L13.6565 3.86377L15.0002 5.2971L16.3439 3.86377L16.5883 5.81262L18.5175 5.44359L17.5715 7.16427L19.348 7.99988Z" fill="#FFDA44"/>
<path d="M14.9998 19.9998L0 0V19.9998H14.9998Z" fill="#A2001D"/>
<path d="M29.9998 19.9998V0L15 19.9998H29.9998Z" fill="#A2001D"/></> }
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
AntiguaAndBarbuda.displayName = "AntiguaAndBarbuda";
