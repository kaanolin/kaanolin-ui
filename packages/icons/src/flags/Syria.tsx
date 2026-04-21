// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Syria = forwardRef<SVGSVGElement, FlagProps>(function Syria(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M9.9991 0C5.69945 0 2.03402 2.71375 0.621094 6.52176H19.3771C17.9642 2.71375 14.2987 0 9.9991 0Z" fill="#D80027"/>
<path d="M9.9991 20C14.2987 20 17.9642 17.2863 19.3771 13.4783H0.621094C2.03402 17.2863 5.69945 20 9.9991 20Z" fill="black"/>
<path d="M5.97523 7.60876L6.5148 9.26939H8.26102L6.84832 10.2959L7.38793 11.9566L5.97523 10.9302L4.56254 11.9566L5.10215 10.2959L3.68945 9.26939H5.43566L5.97523 7.60876Z" fill="#6DA544"/>
<path d="M14.0241 7.60876L14.5636 9.26939H16.3099L14.8971 10.2959L15.4368 11.9566L14.0241 10.9302L12.6114 11.9566L13.151 10.2959L11.7383 9.26939H13.4845L14.0241 7.60876Z" fill="#6DA544"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#F0F0F0"/>
<path d="M20 0H0V6.66652H20V0Z" fill="#D80027"/>
<path d="M20 13.3335H0V20H20V13.3335Z" fill="black"/>
<path d="M6.31652 7.7876L6.82969 9.36697H8.49043L7.14684 10.3432L7.66008 11.9226L6.31652 10.9465L4.97293 11.9226L5.48617 10.3432L4.14258 9.36697H5.80332L6.31652 7.7876Z" fill="#6DA544"/>
<path d="M13.6837 7.7876L14.1969 9.36697H15.8576L14.514 10.3432L15.0273 11.9226L13.6837 10.9465L12.3401 11.9226L12.8534 10.3432L11.5098 9.36697H13.1705L13.6837 7.7876Z" fill="#6DA544"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#F0F0F0"/>
<path d="M30 0H0V6.66643H30V0Z" fill="#D80027"/>
<path d="M30 13.3329H0V19.9993H30V13.3329Z" fill="black"/>
<path d="M10.9752 7.60852L11.5147 9.26911H13.2609L11.8482 10.2955L12.3878 11.9562L10.9752 10.9299L9.5625 11.9562L10.1021 10.2955L8.68945 9.26911H10.4356L10.9752 7.60852Z" fill="#6DA544"/>
<path d="M19.024 7.60852L19.5636 9.26911H21.3098L19.8971 10.2955L20.4367 11.9562L19.024 10.9299L17.6114 11.9562L18.151 10.2955L16.7383 9.26911H18.4845L19.024 7.60852Z" fill="#6DA544"/></> }
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
Syria.displayName = "Syria";
