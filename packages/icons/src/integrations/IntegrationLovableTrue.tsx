// [collection] Figma variant — properties:
//   Integration: Lovable
//   Grayscale: True
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../types";

export const IntegrationLovableTrue = forwardRef<SVGSVGElement, IconBaseProps>(function IntegrationLovableTrue(
  { size = 32, color = "currentColor", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <g clipPath={`url(#${uid}-clip0_12464_573798)`}>
<path fillRule="evenodd" clipRule="evenodd" d="M7.63094 2.5C9.91191 2.5 11.7619 4.35417 11.7619 6.64214V8.21643H13.1367C15.4178 8.21643 17.2677 10.0706 17.2677 12.3585C17.2677 14.6452 15.4185 16.5 13.1367 16.5H3.5V6.64144C3.5 4.35417 5.34927 2.5 7.63094 2.5Z" fill="#A3A3A3"/>
</g>
<defs>
<clipPath id={`${uid}-clip0_12464_573798`}>
<rect width="14" height="14" fill="white" transform="translate(3.5 2.5)"/>
</clipPath>
</defs>
    </svg>
  );
});
IntegrationLovableTrue.displayName = "IntegrationLovableTrue";
