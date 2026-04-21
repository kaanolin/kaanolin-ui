// [collection] Figma variant — properties:
//   Integration: Bolt
//   Grayscale: True
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const IntegrationBoltTrue = forwardRef<SVGSVGElement, IconBaseProps>(function IntegrationBoltTrue(
  { size = 32, color = "currentColor", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
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
      <path fillRule="evenodd" clipRule="evenodd" d="M11.2 15.9872C10.075 15.9872 8.95 15.6122 8.35001 14.7122L8.12501 15.7622L4 17.9372L4.45 15.7622L7.44999 2.11218H11.125L10.075 6.91219C10.9 6.0122 11.725 5.63719 12.775 5.63719C15.025 5.63719 16.45 7.06219 16.45 9.7622C16.45 12.4622 14.725 15.9872 11.2 15.9872ZM12.625 10.5122C12.625 11.7872 11.725 12.7622 10.525 12.7622C9.32501 12.7622 9.25 12.5372 8.87499 12.0872L9.47501 9.61219C9.92499 9.16218 10.375 8.93717 10.975 8.93717C11.875 8.93717 12.625 9.61219 12.625 10.5872V10.5122Z" fill="#A3A3A3"/>
    </svg>
  );
});
IntegrationBoltTrue.displayName = "IntegrationBoltTrue";
