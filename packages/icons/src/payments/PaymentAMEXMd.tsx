// [collection] Figma variant — properties:
//   Size: md
//   Payment method: AMEX
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const PaymentAMEXMd = forwardRef<SVGSVGElement, IconBaseProps>(function PaymentAMEXMd(
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
      <path d="M0 4C0 1.79086 1.79086 0 4 0H42C44.2091 0 46 1.79086 46 4V28C46 30.2091 44.2091 32 42 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="#1F72CD"/>
<path fillRule="evenodd" clipRule="evenodd" d="M8.12625 11.3334L3.88477 20.9957H8.96241L9.59189 19.4551H11.0307L11.6602 20.9957H17.2493V19.8199L17.7473 20.9957H20.6384L21.1364 19.795V20.9957H32.7602L34.1736 19.4951L35.497 20.9957L41.4672 21.0081L37.2123 16.1915L41.4672 11.3334H35.5896L34.2137 12.8062L32.932 11.3334H20.2869L19.201 13.8273L18.0897 11.3334H13.0227V12.4692L12.459 11.3334H8.12625ZM9.10919 12.7054H11.5843L14.3976 19.2575V12.7054H17.109L19.282 17.4032L21.2847 12.7054H23.9825V19.6388H22.3409L22.3275 14.2059L19.9343 19.6388H18.4659L16.0592 14.2059V19.6388H12.6822L12.042 18.0844H8.58305L7.94415 19.6374H6.13477L9.10919 12.7054ZM32.1593 12.7054H25.4844V19.6347H32.0559L34.174 17.3382L36.2156 19.6347H38.3497L35.2478 16.1902L38.3497 12.7054H36.3082L34.2008 14.9755L32.1593 12.7054ZM10.3124 13.8785L9.17285 16.6475H11.4507L10.3124 13.8785ZM27.1318 15.4067V14.141V14.1398H31.2968L33.1141 16.1639L31.2162 18.1991H27.1318V16.8174H30.7733V15.4067H27.1318Z" fill="white"/>
    </svg>
  );
});
PaymentAMEXMd.displayName = "PaymentAMEXMd";
