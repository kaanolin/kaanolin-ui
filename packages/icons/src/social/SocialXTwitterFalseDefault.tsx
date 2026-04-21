// [collection] Figma variant — properties:
//   Platform: X (Twitter)
//   Grayscale: False
//   State: Default
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const SocialXTwitterFalseDefault = forwardRef<SVGSVGElement, IconBaseProps>(function SocialXTwitterFalseDefault(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.7663 22.5L10.4691 14.9496L3.83773 22.5H1.03223L9.22444 13.1751L1.03223 1.5H8.23518L13.2277 8.61615L19.4831 1.5H22.2886L14.4766 10.393L22.9692 22.5H15.7663ZM18.8905 20.3714H17.0018L5.04928 3.62864H6.93832L11.7254 10.3326L12.5532 11.4959L18.8905 20.3714Z" fill="black"/>
    </svg>
  );
});
SocialXTwitterFalseDefault.displayName = "SocialXTwitterFalseDefault";
