// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const Snowflake01 = forwardRef<SVGSVGElement, DuocolorIconProps>(function Snowflake01(
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
      <path opacity="0.4" d="M18.0622 8.5L5.93783 15.5M18.0621 15.4999L5.93774 8.49986M12 5L12 19" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.1602 4.40192L18.0622 8.5L22.1602 9.59808M1.83972 14.4019L5.9378 15.5L4.83972 19.5981M22.1602 14.4018L18.0622 15.4999L19.1602 19.598M4.83986 4.40203L5.93794 8.50011L1.83986 9.59819M8.99998 2L12 5L15 2M8.99998 22L12 19L15 22" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
Snowflake01.displayName = "Snowflake01";
