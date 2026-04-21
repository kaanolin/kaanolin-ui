// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const Globe03 = forwardRef<SVGSVGElement, DuocolorIconProps>(function Globe03(
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
      <path opacity="0.4" d="M12 22C9 20 8.07725 15.708 8 12C8.07725 8.29204 9 4 12 2M2 12C4 9 8.29203 8.07725 12 8C15.708 8.07725 20 9 22 12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12C20.6372 14.0442 18.2102 15.1239 15.6289 15.6289M12 22C6.47715 22 2 17.5228 2 12M12 22C14.0442 20.6372 15.1239 18.2102 15.6289 15.6289M2 12C2 6.47715 6.47715 2 12 2M2 12C4 15 8.29203 15.9228 12 16C13.1813 15.9754 14.422 15.865 15.6289 15.6289M12 2C15 4 15.9228 8.29203 16 12C15.9754 13.1813 15.865 14.422 15.6289 15.6289" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
Globe03.displayName = "Globe03";
