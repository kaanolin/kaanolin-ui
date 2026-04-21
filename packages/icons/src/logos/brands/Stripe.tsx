// [brand] generated from plugin-misc-icons.json
import { forwardRef } from "react";
import type { IconBaseProps } from "../../types";

export const Stripe = forwardRef<SVGSVGElement, IconBaseProps>(function Stripe(
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
      <path d="M2.87195 6.36808C2 8.07937 2 10.3196 2 14.8V17.2C2 21.6804 2 23.9206 2.87195 25.6319C3.63893 27.1372 4.86278 28.3611 6.36808 29.1281C8.07937 30 10.3196 30 14.8 30H17.2C21.6804 30 23.9206 30 25.6319 29.1281C27.1372 28.3611 28.3611 27.1372 29.1281 25.6319C30 23.9206 30 21.6804 30 17.2V14.8C30 10.3196 30 8.07937 29.1281 6.36808C28.3611 4.86278 27.1372 3.63893 25.6319 2.87195C23.9206 2 21.6804 2 17.2 2H14.8C10.3196 2 8.07937 2 6.36808 2.87195C4.86278 3.63893 3.63893 4.86278 2.87195 6.36808Z" fill="#635BFF"/>
<path d="M9.5 22.5V12.5L22.5 9.5V19.5L9.5 22.5Z" fill="white"/>
    </svg>
  );
});
Stripe.displayName = "Stripe";
