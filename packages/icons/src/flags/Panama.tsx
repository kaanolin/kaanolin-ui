// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Panama = forwardRef<SVGSVGElement, FlagProps>(function Panama(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M0 10C0 15.5228 4.47719 20 10 20C10 16.1971 10 10 10 10C10 10 3.47824 10 0 10Z" fill="#0052B4"/>
<path d="M10 0C15.5228 0 20 4.47719 20 10C16.1971 10 10 10 10 10C10 10 10 3.47824 10 0Z" fill="#D80027"/>
<path d="M5.95195 3.47827L6.59949 5.47116H8.69492L6.99969 6.7028L7.64719 8.69569L5.95195 7.46401L4.25672 8.69569L4.90422 6.7028L3.20898 5.47116H5.30441L5.95195 3.47827Z" fill="#0052B4"/>
<path d="M14.0477 11.3043L14.6952 13.2972H16.7906L15.0954 14.5289L15.7429 16.5217L14.0477 15.2901L12.3524 16.5217L12.9999 14.5289L11.3047 13.2972H13.4001L14.0477 11.3043Z" fill="#D80027"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#F0F0F0"/>
<path d="M10 10C10 10 10 14.9984 10 20H0V10H3.33348C6.52086 10 10 10 10 10Z" fill="#0052B4"/>
<path d="M20 0V10H16.6665C13.1322 10 10 10 10 10C10 10 10 4.70754 10 0H20Z" fill="#D80027"/>
<path d="M4.99934 2.51892L5.61516 4.41423H7.60805L5.99578 5.58564L6.6116 7.48095L4.99934 6.30958L3.38707 7.48095L4.00289 5.58564L2.39062 4.41423H4.38352L4.99934 2.51892Z" fill="#0052B4"/>
<path d="M14.9993 12.5189L15.6152 14.4142H17.608L15.9958 15.5856L16.6116 17.481L14.9993 16.3096L13.3871 17.481L14.0029 15.5856L12.3906 14.4142H14.3835L14.9993 12.5189Z" fill="#D80027"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#F0F0F0"/>
<path d="M15 10C15 10 15 14.9984 15 20H0V10H5.00021C9.78129 10 15 10 15 10Z" fill="#0052B4"/>
<path d="M30 0V10H24.9998C19.6983 10 15 10 15 10C15 10 15 4.70752 15 0H30Z" fill="#D80027"/>
<path d="M7.49924 2.20886L8.19205 4.34108H10.434L8.62025 5.65894L9.31301 7.79115L7.49924 6.47335L5.68547 7.79115L6.37822 5.65894L4.56445 4.34108H6.80643L7.49924 2.20886Z" fill="#0052B4"/>
<path d="M22.4992 12.2089L23.1921 14.3411H25.434L23.6203 15.6589L24.313 17.7912L22.4992 16.4733L20.6855 17.7912L21.3782 15.6589L19.5645 14.3411H21.8064L22.4992 12.2089Z" fill="#D80027"/></> }
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
Panama.displayName = "Panama";
