// [collection] Figma variant — properties:
//   Size: md
//   Payment method: Ayden
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const PaymentAydenMd = forwardRef<SVGSVGElement, IconBaseProps>(function PaymentAydenMd(
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
<path d="M5 13H10.2942C10.8792 13 11.353 13.4738 11.353 14.0588V19.353H6.05884C5.47383 19.353 5 18.8792 5 18.2942V15.6471H7.64709V17.7648H8.70593V14.5883H5V13Z" fill="#00D16A"/>
<path d="M34.647 13V19.353H37.2941V14.5883H38.3529V19.353H41V14.0589C41 13.4739 40.5262 13 39.9412 13H34.647Z" fill="#00D16A"/>
<path d="M19.824 22.0001H25.1182C25.7032 22.0001 26.1771 21.5263 26.1771 20.9413V13H23.53V17.7648H22.4711V13H19.824V18.2942C19.824 18.8792 20.2979 19.353 20.8829 19.353H23.53V20.4119H19.824V22.0001Z" fill="#00D16A"/>
<path d="M33.5886 19.353H28.2944C27.7094 19.353 27.2356 18.8792 27.2356 18.2942V13H32.5298C33.1148 13 33.5886 13.4738 33.5886 14.0588V16.7059H30.9415V14.5883H29.8827V17.7648H33.5886V19.353Z" fill="#00D16A"/>
<path d="M18.7645 10.3529V19.353H13.4703C12.8853 19.353 12.4115 18.8792 12.4115 18.2942V14.0588C12.4115 13.4738 12.8853 13 13.4703 13H15.0586V17.7648H16.1174V10.3529H18.7645Z" fill="#00D16A"/>
    </svg>
  );
});
PaymentAydenMd.displayName = "PaymentAydenMd";
