// [solid] generated from source/icons/Solid icons/
import { forwardRef } from "react";
import type { SolidIconProps } from "../../types";

export const Toggle02Right = forwardRef<SVGSVGElement, SolidIconProps>(function Toggle02Right(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M17 6C20.3137 6 23 8.68629 23 12C23 15.3137 20.3137 18 17 18C15.7733 18 14.6325 17.6318 13.6822 17H6C3.23858 17 1 14.7614 1 12C1 9.23858 3.23857 7 6 7H13.6822C14.6325 6.36815 15.7733 6 17 6ZM11.8027 9C11.2922 9.88252 11 10.9071 11 12C11 13.0929 11.2922 14.1175 11.8027 15H6C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9H11.8027Z" fill="currentColor"/>
    </svg>
  );
});
Toggle02Right.displayName = "Toggle02Right";
