// [brand] generated from plugin-misc-icons.json
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../../types";

export const Cursor = forwardRef<SVGSVGElement, IconBaseProps>(function Cursor(
  { size = 24, title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 23"
      fill="none"
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <g filter={`url(#${uid}-filter0_d_9342_257183)`}>
<path d="M6.35352 3.46045L14.3789 11.5034L15.2305 12.3569H11.2549L13.6367 16.8237L13.8721 17.2642L13.4307 17.4995L11.666 18.4409L11.2246 18.6763L10.9893 18.2349L8.39941 13.3794L6.34766 15.3618L5.5 16.1792V2.60498L6.35352 3.46045Z" fill="black" stroke="white"/>
</g>
<defs>
<filter id={`${uid}-filter0_d_9342_257183`} x="-2" y="-1" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4049 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9342_257183"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9342_257183" result="shape"/>
</filter>
</defs>
    </svg>
  );
});
Cursor.displayName = "Cursor";
