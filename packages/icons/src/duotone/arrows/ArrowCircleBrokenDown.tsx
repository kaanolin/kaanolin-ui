// [duotone] generated from source/icons/Duotone icons/
import { forwardRef } from "react";
import type { DuotoneIconProps } from "../../types";

export const ArrowCircleBrokenDown = forwardRef<SVGSVGElement, DuotoneIconProps>(function ArrowCircleBrokenDown(
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
      <path opacity="0.12" d="M12 22.0001C17.5228 22.0001 22 17.5229 22 12.0001C22 8.29866 19.989 5.06694 17 3.33789H7C4.01099 5.06694 2 8.29866 2 12.0001C2 17.5229 6.47715 22.0001 12 22.0001Z" fill="currentColor"/>
<path d="M17 3.33782C19.989 5.06687 22 8.29859 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 8.29859 4.01099 5.06687 7 3.33782M8 12L12 16M12 16L16 12M12 16V2" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
ArrowCircleBrokenDown.displayName = "ArrowCircleBrokenDown";
