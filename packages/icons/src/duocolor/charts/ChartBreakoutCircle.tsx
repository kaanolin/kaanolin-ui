// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const ChartBreakoutCircle = forwardRef<SVGSVGElement, DuocolorIconProps>(function ChartBreakoutCircle(
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
      <path opacity="0.4" d="M15.5 3.5V2M19.4393 4.56066L20.5 3.5M20.5103 8.5H22.0103" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.9506 12.9999C21.4489 18.0533 17.1853 21.9999 12 21.9999C6.47715 21.9999 2 17.5228 2 11.9999C2 6.81459 5.94668 2.55104 11 2.04932M12 7.99994H16V11.9999M15.6197 7.99994C13.2653 11.3275 9.38636 13.4999 5 13.4999C3.9971 13.4999 3.02072 13.3864 2.08302 13.1714" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
ChartBreakoutCircle.displayName = "ChartBreakoutCircle";
