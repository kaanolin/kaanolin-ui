// [collection] Figma variant — properties:
//   Size: sm
//   Payment method: Visa
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const PaymentVisaSm = forwardRef<SVGSVGElement, IconBaseProps>(function PaymentVisaSm(
  { size = 32, color = "currentColor", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 34 24"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4C0.5 2.067 2.067 0.5 4 0.5Z" fill="white"/>
<path d="M4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4C0.5 2.067 2.067 0.5 4 0.5Z" stroke="#E5E5E5"/>
<path fillRule="evenodd" clipRule="evenodd" d="M10.751 15.8582H8.69129L7.14674 9.79235C7.07343 9.51332 6.91776 9.26664 6.68879 9.15038C6.11737 8.85821 5.4877 8.62568 4.80078 8.50841V8.27487H8.11886C8.57681 8.27487 8.92026 8.62568 8.97751 9.0331L9.77891 13.4086L11.8376 8.27487H13.8401L10.751 15.8582ZM14.9853 15.8582H13.04L14.6418 8.27484H16.5871L14.9853 15.8582ZM19.1035 10.3757C19.1607 9.96725 19.5042 9.73372 19.9049 9.73372C20.5346 9.67508 21.2205 9.79235 21.7929 10.0835L22.1364 8.45079C21.5639 8.21725 20.9343 8.09998 20.3628 8.09998C18.4748 8.09998 17.101 9.15038 17.101 10.6082C17.101 11.7173 18.0741 12.2996 18.761 12.6504C19.5042 13.0002 19.7904 13.2337 19.7332 13.5835C19.7332 14.1082 19.1607 14.3418 18.5893 14.3418C17.9024 14.3418 17.2155 14.1669 16.5868 13.8747L16.2433 15.5084C16.9303 15.7996 17.6734 15.9169 18.3603 15.9169C20.4773 15.9745 21.7929 14.9251 21.7929 13.35C21.7929 11.3664 19.1035 11.2502 19.1035 10.3757ZM28.6005 15.8582L27.0559 8.27484H25.3969C25.0534 8.27484 24.71 8.50838 24.5955 8.85818L21.7354 15.8582H23.7379L24.1375 14.7502H26.598L26.827 15.8582H28.6005ZM25.6837 10.3171L26.2551 13.1751H24.6533L25.6837 10.3171Z" fill="#172B85"/>
    </svg>
  );
});
PaymentVisaSm.displayName = "PaymentVisaSm";
