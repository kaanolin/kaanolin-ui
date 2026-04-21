// [brand] generated from plugin-misc-icons.json
import { forwardRef } from "react";
import type { IconBaseProps } from "../../types";

export const Amd = forwardRef<SVGSVGElement, IconBaseProps>(function Amd(
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
      <path d="M11 21V12L4 19V28H13L20 21H11Z" fill="#19A771"/>
<path d="M28 4H4L11 11H21V21L28 28V4Z" fill="#19A771"/>
    </svg>
  );
});
Amd.displayName = "Amd";
