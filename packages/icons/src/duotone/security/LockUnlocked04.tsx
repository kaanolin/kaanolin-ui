// [duotone] generated from source/icons/Duotone icons/
import { forwardRef } from "react";
import type { DuotoneIconProps } from "../../types";

export const LockUnlocked04 = forwardRef<SVGSVGElement, DuotoneIconProps>(function LockUnlocked04(
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
      <path opacity="0.12" d="M12 22C15.866 22 19 18.866 19 15C19 11.134 15.866 8 12 8C8.13401 8 5 11.134 5 15C5 18.866 8.13401 22 12 22Z" fill="currentColor"/>
<path d="M7 10V8C7 5.23858 9.23858 3 12 3C13.6358 3 15.0882 3.78555 16.0004 5M12 14V16M19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
LockUnlocked04.displayName = "LockUnlocked04";
