// [collection] Figma variant — properties:
//   Platform: Tumblr
//   Grayscale: True
//   State: Hover
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const SocialTumblrTrueHover = forwardRef<SVGSVGElement, IconBaseProps>(function SocialTumblrTrueHover(
  { size = 32, color = "currentColor", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
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
      <path d="M14.6 24C11 24 8.3 22.15 8.3 17.7V10.6H5V6.75C8.6 5.8 10.1 2.7 10.3 0H14.05V6.1H18.4V10.6H14.05V16.8C14.05 18.65 15 19.3 16.5 19.3H18.6V24H14.6Z" fill="#737373"/>
    </svg>
  );
});
SocialTumblrTrueHover.displayName = "SocialTumblrTrueHover";
