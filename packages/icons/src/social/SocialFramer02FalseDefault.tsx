// [collection] Figma variant — properties:
//   Platform: Framer 02
//   Grayscale: False
//   State: Default
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../types";

export const SocialFramer02FalseDefault = forwardRef<SVGSVGElement, IconBaseProps>(function SocialFramer02FalseDefault(
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
      <g clipPath={`url(#${uid}-clip0_9337_588027)`}>
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="black"/>
<path d="M17.3332 5V10.3333H11.9998L6.6665 5H17.3332ZM6.6665 10.3333H11.9998L17.3332 15.6667H11.9998V21L6.6665 15.6667V10.3333Z" fill="white"/>
</g>
<defs>
<clipPath id={`${uid}-clip0_9337_588027`}>
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
});
SocialFramer02FalseDefault.displayName = "SocialFramer02FalseDefault";
