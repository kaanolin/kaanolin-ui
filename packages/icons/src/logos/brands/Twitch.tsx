// [brand] generated from plugin-misc-icons.json
import { forwardRef } from "react";
import type { IconBaseProps } from "../../types";

export const Twitch = forwardRef<SVGSVGElement, IconBaseProps>(function Twitch(
  { size = 24, title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M22 10H20V16H22V10Z" fill="#6445A2"/>
<path d="M15 10H17V16H15V10Z" fill="#6445A2"/>
<path fillRule="evenodd" clipRule="evenodd" d="M5 8L6.56799 4H28V19L22 25H17L13.886 28H10V25H5V8ZM22 21L26 17V6H9V21H13V24L16 21H22Z" fill="#6445A2"/>
    </svg>
  );
});
Twitch.displayName = "Twitch";
