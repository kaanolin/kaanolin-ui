// [collection] Figma variant — properties:
//   Platform: Wise
//   Grayscale: True
//   State: Hover
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../types";

export const SocialWiseTrueHover = forwardRef<SVGSVGElement, IconBaseProps>(function SocialWiseTrueHover(
  { size = 32, color = "currentColor", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <g clipPath={`url(#${uid}-clip0_9337_588383)`}>
<path fillRule="evenodd" clipRule="evenodd" d="M6 0C2.68629 0 0 2.68629 0 6V18C0 21.3137 2.68629 24 6 24H18C21.3137 24 24 21.3137 24 18V6C24 2.68629 21.3137 0 18 0H6ZM7.81933 9.79256L3.42871 14.921H11.268L12.1493 12.5024H8.79033L10.8432 10.1302L10.8498 10.0668L9.51464 7.77103H15.5188L10.8643 20.5715H14.0491L19.6693 5.14288H5.14908L7.81801 9.79256H7.81933Z" fill="#737373"/>
</g>
<defs>
<clipPath id={`${uid}-clip0_9337_588383`}>
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
});
SocialWiseTrueHover.displayName = "SocialWiseTrueHover";
