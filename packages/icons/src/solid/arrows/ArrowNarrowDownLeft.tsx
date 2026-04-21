// [solid] generated from source/icons/Solid icons/
import { forwardRef } from "react";
import type { SolidIconProps } from "../../types";

export const ArrowNarrowDownLeft = forwardRef<SVGSVGElement, SolidIconProps>(function ArrowNarrowDownLeft(
  { size = 24, color = "currentColor", title, "aria-label": ariaLabel, ...rest },
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
      <path d="M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L7 15.5858V10C7 9.44772 6.55228 9 6 9C5.44772 9 5 9.44772 5 10V18C5 18.5523 5.44772 19 6 19H14C14.5523 19 15 18.5523 15 18C15 17.4477 14.5523 17 14 17H8.41421L18.7071 6.70711Z" fill="currentColor"/>
    </svg>
  );
});
ArrowNarrowDownLeft.displayName = "ArrowNarrowDownLeft";
