// [collection] Figma variant — properties:
//   Integration: Figma
//   Grayscale: False
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const IntegrationFigmaFalse = forwardRef<SVGSVGElement, IconBaseProps>(function IntegrationFigmaFalse(
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
      <path d="M7.3337 17.9999C8.80572 17.9999 10.0004 16.8053 10.0004 15.3333V12.6666H7.3337C5.86169 12.6666 4.66699 13.8613 4.66699 15.3333C4.66699 16.8053 5.86169 17.9999 7.3337 17.9999Z" fill="#24CB71"/>
<path d="M4.66699 10C4.66699 8.528 5.86169 7.33331 7.3337 7.33331H10.0004V12.6666H7.3337C5.86169 12.6667 4.66699 11.472 4.66699 10Z" fill="#874FFF"/>
<path d="M4.66699 4.66669C4.66699 3.19469 5.86169 2 7.3337 2H10.0004V7.33332H7.3337C5.86169 7.33332 4.66699 6.13869 4.66699 4.66669Z" fill="#FF3737"/>
<path d="M10 2H12.6667C14.1387 2 15.3334 3.19469 15.3334 4.66669C15.3334 6.13869 14.1387 7.33332 12.6667 7.33332H10V2Z" fill="#FF7237"/>
<path d="M15.3334 10C15.3334 11.472 14.1387 12.6667 12.6667 12.6667C11.1947 12.6667 10 11.472 10 10C10 8.528 11.1947 7.33331 12.6667 7.33331C14.1387 7.33331 15.3334 8.528 15.3334 10Z" fill="#00B6FF"/>
    </svg>
  );
});
IntegrationFigmaFalse.displayName = "IntegrationFigmaFalse";
