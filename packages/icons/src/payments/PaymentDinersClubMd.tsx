// [collection] Figma variant — properties:
//   Size: md
//   Payment method: DinersClub
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const PaymentDinersClubMd = forwardRef<SVGSVGElement, IconBaseProps>(function PaymentDinersClubMd(
  { size = 32, color = "currentColor", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 46 32"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M4 0.5H42C43.933 0.5 45.5 2.067 45.5 4V28C45.5 29.933 43.933 31.5 42 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4C0.5 2.067 2.067 0.5 4 0.5Z" fill="white"/>
<path d="M4 0.5H42C43.933 0.5 45.5 2.067 45.5 4V28C45.5 29.933 43.933 31.5 42 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4C0.5 2.067 2.067 0.5 4 0.5Z" stroke="#E5E5E5"/>
<path fillRule="evenodd" clipRule="evenodd" d="M24.5783 6.40116C29.9814 6.31711 34.3716 10.688 34.4562 16.0672V16.1512C34.2874 21.4465 29.9816 25.7332 24.5783 25.7332H21.1174C15.8831 25.649 11.6613 21.3624 11.6613 16.1512C11.4928 10.9402 15.5458 6.56936 20.6955 6.40116H24.5783ZM21.3703 8.0828C16.9804 8.0829 13.35 11.6967 13.3498 16.0672C13.3498 20.4379 16.9803 24.0524 21.3703 24.0525C25.7604 24.0525 29.3908 20.4379 29.3908 16.0672C29.3906 11.6966 25.7603 8.08284 21.3703 8.0828ZM20.1037 21.4471C17.149 20.6905 15.3761 17.6642 16.1359 14.7224C16.6425 12.7894 18.1621 11.2767 20.1037 10.7722V21.4471ZM22.6369 10.7722C25.5916 11.5287 27.4492 14.4702 26.6896 17.4119C26.1831 19.4292 24.6631 20.9427 22.6369 21.4471V10.7722Z" fill="#0079BE"/>
    </svg>
  );
});
PaymentDinersClubMd.displayName = "PaymentDinersClubMd";
