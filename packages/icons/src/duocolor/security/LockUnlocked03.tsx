// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const LockUnlocked03 = forwardRef<SVGSVGElement, DuocolorIconProps>(function LockUnlocked03(
  { size = 24, color = "currentColor", strokeWidth = 2, title, "aria-label": ariaLabel, ...rest },
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
      <path opacity="0.4" d="M7 11V8C7 5.23858 9.23858 3 12 3C14.419 3 16.4367 4.71776 16.9 7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 15.8C4 14.1198 4 13.2798 4.32698 12.638C4.6146 12.0735 5.07354 11.6146 5.63803 11.327C6.27976 11 7.11984 11 8.8 11H15.2C16.8802 11 17.7202 11 18.362 11.327C18.9265 11.6146 19.3854 12.0735 19.673 12.638C20 13.2798 20 14.1198 20 15.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V15.8Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
LockUnlocked03.displayName = "LockUnlocked03";
