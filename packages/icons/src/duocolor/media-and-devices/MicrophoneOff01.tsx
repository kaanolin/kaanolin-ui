// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const MicrophoneOff01 = forwardRef<SVGSVGElement, DuocolorIconProps>(function MicrophoneOff01(
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
      <path opacity="0.4" d="M15.0001 9.4V5C15.0001 3.34315 13.6569 2 12.0001 2C10.8224 2 9.8033 2.67852 9.31226 3.66593" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 2L22 22M12 19V22M12 19C8.13401 19 5 15.866 5 12V10M12 19C15.866 19 19 15.866 19 12V10M12 22H8M12 22H16M12 15C10.3431 15 9 13.6569 9 12V9L14.1226 14.12C13.5796 14.6637 12.8291 15 12 15Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
MicrophoneOff01.displayName = "MicrophoneOff01";
