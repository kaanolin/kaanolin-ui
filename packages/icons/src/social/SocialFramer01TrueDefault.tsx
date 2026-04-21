// [collection] Figma variant — properties:
//   Platform: Framer 01
//   Grayscale: True
//   State: Default
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const SocialFramer01TrueDefault = forwardRef<SVGSVGElement, IconBaseProps>(function SocialFramer01TrueDefault(
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
      <path d="M20 0V8H12L4 0H20ZM4 8H12L20 16H12V24L4 16V8Z" fill="#A3A3A3"/>
    </svg>
  );
});
SocialFramer01TrueDefault.displayName = "SocialFramer01TrueDefault";
