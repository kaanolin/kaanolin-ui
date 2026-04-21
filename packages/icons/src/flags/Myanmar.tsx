// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Myanmar = forwardRef<SVGSVGElement, FlagProps>(function Myanmar(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M19.378 13.4783C19.78 12.395 20 11.2232 20 10C20 8.77683 19.78 7.60507 19.378 6.52179L10 5.65222L0.621992 6.52179C0.220039 7.60507 0 8.77683 0 10C0 11.2232 0.220039 12.395 0.621992 13.4783L10 14.3478L19.378 13.4783Z" fill="#6DA544"/>
<path d="M19.3771 6.52176C17.9642 2.71375 14.2987 0 9.9991 0C5.69945 0 2.03402 2.71375 0.621094 6.52176H19.3771Z" fill="#FFDA44"/>
<path d="M9.9991 20C14.2987 20 17.9642 17.2863 19.3771 13.4783H0.621094C2.03402 17.2863 5.69945 20 9.9991 20Z" fill="#D80027"/>
<path d="M16.8573 8.46042H11.6188L9.99996 3.47827L8.38113 8.46042H3.14258L7.38066 11.5396L5.76184 16.5218L9.99996 13.4783L14.2381 16.5217L12.6193 11.5395L16.8573 8.46042Z" fill="#F0F0F0"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000244141H0V19.9998H20V0.000244141Z" fill="#6DA544"/>
<path d="M20 0H0V6.66652H20V0Z" fill="#FFDA44"/>
<path d="M20 13.3335H0V20H20V13.3335Z" fill="#D80027"/>
<path d="M16.956 8.43809H11.6418L9.99949 3.38391L8.35723 8.43809H3.04297L7.3423 11.5617L5.70008 16.616L9.99949 13.5285L14.2989 16.616L12.6566 11.5617L16.956 8.43809Z" fill="#F0F0F0"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#6DA544"/>
<path d="M30 0H0V6.66665H30V0Z" fill="#FFDA44"/>
<path d="M30 13.3334H0V20H30V13.3334Z" fill="#D80027"/>
<path d="M22.5 8.31605H16.7705L15 2.86694L13.2295 8.3161H7.5L12.1352 11.6839L10.3647 17.1331L15 13.8043L19.6352 17.1331L17.8647 11.6839L22.5 8.31605Z" fill="#F0F0F0"/></> }
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
Myanmar.displayName = "Myanmar";
