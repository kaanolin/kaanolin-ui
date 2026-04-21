// [collection] Figma variant — properties:
//   Platform: Webflow
//   Grayscale: True
//   State: Hover
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const SocialWebflowTrueHover = forwardRef<SVGSVGElement, IconBaseProps>(function SocialWebflowTrueHover(
  { size = 32, color = "currentColor", title, "aria-label": ariaLabel, ...rest },
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
      <path fillRule="evenodd" clipRule="evenodd" d="M24 4.52002L16.3419 19.4909H9.14881L12.3537 13.2863H12.2099C9.56592 16.7187 5.62095 18.9782 0 19.4909V13.3722C0 13.3722 3.59586 13.1598 5.70976 10.9373H0V4.52014H6.41715V9.7982L6.56118 9.79761L9.1835 4.52014H14.0366V9.76473L14.1806 9.7645L16.9013 4.52002H24Z" fill="#737373"/>
    </svg>
  );
});
SocialWebflowTrueHover.displayName = "SocialWebflowTrueHover";
