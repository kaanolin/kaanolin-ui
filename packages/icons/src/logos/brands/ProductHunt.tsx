// [brand] generated from plugin-misc-icons.json
import { forwardRef } from "react";
import type { IconBaseProps } from "../../types";

export const ProductHunt = forwardRef<SVGSVGElement, IconBaseProps>(function ProductHunt(
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
      <circle cx="16" cy="16" r="14" fill="#D85637"/>
<path fillRule="evenodd" clipRule="evenodd" d="M11 9H18C20.7614 9 23 11.2386 23 14C23 16.7614 20.7614 19 18 19H14V23H11V9ZM14 16V12H18C19.1046 12 20 12.8954 20 14C20 15.1046 19.1046 16 18 16H14Z" fill="white"/>
    </svg>
  );
});
ProductHunt.displayName = "ProductHunt";
