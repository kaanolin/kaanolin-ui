// [duotone] generated from source/icons/Duotone icons/
import { forwardRef } from "react";
import type { DuotoneIconProps } from "../../types";

export const Link01 = forwardRef<SVGSVGElement, DuotoneIconProps>(function Link01(
  { size = 24, color = "currentColor", strokeWidth = 2, title, "aria-label": ariaLabel, ...rest },
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
      <path d="M12.7071 18.3639L11.2929 19.7781C9.34027 21.7308 6.17444 21.7308 4.22182 19.7781C2.2692 17.8255 2.2692 14.6597 4.22182 12.7071L5.63603 11.2929M18.364 12.7071L19.7782 11.2929C21.7308 9.34024 21.7308 6.17441 19.7782 4.22179C17.8255 2.26917 14.6597 2.26917 12.7071 4.22179L11.2929 5.636M8.5 15.4999L15.5 8.49994" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
Link01.displayName = "Link01";
