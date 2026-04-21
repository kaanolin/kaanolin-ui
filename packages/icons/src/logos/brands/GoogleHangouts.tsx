// [brand] generated from plugin-misc-icons.json
import { forwardRef } from "react";
import type { IconBaseProps } from "../../types";

export const GoogleHangouts = forwardRef<SVGSVGElement, IconBaseProps>(function GoogleHangouts(
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
      <circle cx="16" cy="16" r="14" fill="#0F9D58"/>
<path fillRule="evenodd" clipRule="evenodd" d="M15.9964 7C20.9646 7 25 11.0283 25 15.9964C25 20.6 21.463 25.2277 15.9964 28V24.5C11.2899 24.5 7 20.703 7 15.9964C7 11.0283 11.0283 7 15.9964 7ZM11 17V13H15V17C15 18.2 14.0329 19 13 19V17H11ZM17 17V13H21V17C21 18.2 20.0329 19 19 19V17H17Z" fill="white"/>
    </svg>
  );
});
GoogleHangouts.displayName = "GoogleHangouts";
