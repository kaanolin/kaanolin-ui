// [brand] generated from plugin-misc-icons.json
import { forwardRef } from "react";
import type { IconBaseProps } from "../../types";

export const Microsoft = forwardRef<SVGSVGElement, IconBaseProps>(function Microsoft(
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
      <rect x="17" y="17" width="10" height="10" fill="#FEBA08"/>
<rect x="5" y="17" width="10" height="10" fill="#05A6F0"/>
<rect x="17" y="5" width="10" height="10" fill="#80BC06"/>
<rect x="5" y="5" width="10" height="10" fill="#F25325"/>
    </svg>
  );
});
Microsoft.displayName = "Microsoft";
