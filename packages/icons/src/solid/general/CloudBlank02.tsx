// [solid] generated from source/icons/Solid icons/
import { forwardRef } from "react";
import type { SolidIconProps } from "../../types";

export const CloudBlank02 = forwardRef<SVGSVGElement, SolidIconProps>(function CloudBlank02(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M1 11.5C1 6.80558 4.80558 3 9.5 3C12.5447 3 15.2141 4.6011 16.7144 7.00347C20.205 7.11661 23 9.9819 23 13.5C23 17.0899 20.0898 20 16.5 20H9.5C4.80558 20 1 16.1944 1 11.5Z" fill="currentColor"/>
    </svg>
  );
});
CloudBlank02.displayName = "CloudBlank02";
