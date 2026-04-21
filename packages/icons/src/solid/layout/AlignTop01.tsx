// [solid] generated from source/icons/Solid icons/
import { forwardRef } from "react";
import type { SolidIconProps } from "../../types";

export const AlignTop01 = forwardRef<SVGSVGElement, SolidIconProps>(function AlignTop01(
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
      <path d="M2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3C22 3.55228 21.5523 4 21 4H3C2.44772 4 2 3.55228 2 3Z" fill="currentColor"/>
<path d="M13 9.41421L18.2929 14.7071C18.6834 15.0976 19.3166 15.0976 19.7071 14.7071C20.0976 14.3166 20.0976 13.6834 19.7071 13.2929L12.7071 6.29289C12.3166 5.90237 11.6834 5.90237 11.2929 6.29289L4.29289 13.2929C3.90237 13.6834 3.90237 14.3166 4.29289 14.7071C4.68342 15.0976 5.31658 15.0976 5.70711 14.7071L11 9.41421L11 21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21L13 9.41421Z" fill="currentColor"/>
    </svg>
  );
});
AlignTop01.displayName = "AlignTop01";
