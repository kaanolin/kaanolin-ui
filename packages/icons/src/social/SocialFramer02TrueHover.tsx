// [collection] Figma variant — properties:
//   Platform: Framer 02
//   Grayscale: True
//   State: Hover
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const SocialFramer02TrueHover = forwardRef<SVGSVGElement, IconBaseProps>(function SocialFramer02TrueHover(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM17.3332 10.3333V5H6.6665L11.9998 10.3333H6.6665V15.6667L11.9998 21V15.6667H17.3332L11.9998 10.3333H17.3332Z" fill="#737373"/>
    </svg>
  );
});
SocialFramer02TrueHover.displayName = "SocialFramer02TrueHover";
