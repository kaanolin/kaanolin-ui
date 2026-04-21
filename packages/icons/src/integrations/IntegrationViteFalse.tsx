// [collection] Figma variant — properties:
//   Integration: Vite
//   Grayscale: False
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../types";

export const IntegrationViteFalse = forwardRef<SVGSVGElement, IconBaseProps>(function IntegrationViteFalse(
  { size = 32, color = "currentColor", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
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
      <g clipPath={`url(#${uid}-clip0_12464_573753)`}>
<path d="M18.4228 4.54918L10.6802 18.3941C10.5204 18.68 10.1097 18.6817 9.94742 18.3972L2.05142 4.55052C1.87465 4.24053 2.13972 3.86505 2.49099 3.92784L10.2418 5.31325C10.2912 5.32208 10.3418 5.322 10.3913 5.31299L17.98 3.92982C18.3301 3.86601 18.5964 4.23859 18.4228 4.54918Z" fill={`url(#${uid}-paint0_linear_12464_573753)`}/>
<path d="M13.9337 2.11136L8.20405 3.23407C8.10988 3.25252 8.04015 3.33233 8.03447 3.4281L7.68202 9.38078C7.67372 9.52099 7.80249 9.62981 7.93933 9.59825L9.53455 9.23009C9.6838 9.19568 9.81867 9.32713 9.788 9.47722L9.31405 11.798C9.28216 11.9543 9.4288 12.0878 9.58135 12.0415L10.5666 11.7421C10.7194 11.6957 10.8661 11.8296 10.8338 11.986L10.0807 15.6314C10.0335 15.8595 10.3369 15.9838 10.4633 15.7883L10.5478 15.6577L15.2167 6.34022C15.2949 6.18421 15.16 6.00633 14.9887 6.03939L13.3467 6.3563C13.1923 6.38605 13.0611 6.24234 13.1046 6.09138L14.1764 2.37615C14.2199 2.22492 14.0882 2.0811 13.9337 2.11136Z" fill={`url(#${uid}-paint1_linear_12464_573753)`}/>
</g>
<defs>
<linearGradient id={`${uid}-paint0_linear_12464_573753`} x1="1.85863" y1="3.43304" x2="11.4947" y2="16.5197" gradientUnits="userSpaceOnUse">
<stop stopColor="#41D1FF"/>
<stop offset="1" stopColor="#BD34FE"/>
</linearGradient>
<linearGradient id={`${uid}-paint1_linear_12464_573753`} x1="9.79675" y1="2.41618" x2="11.5399" y2="14.3739" gradientUnits="userSpaceOnUse">
<stop stopColor="#FFEA83"/>
<stop offset="0.0833333" stopColor="#FFDD35"/>
<stop offset="1" stopColor="#FFA800"/>
</linearGradient>
<clipPath id={`${uid}-clip0_12464_573753`}>
<rect width="17" height="17" fill="white" transform="translate(1.77246 2.04596)"/>
</clipPath>
</defs>
    </svg>
  );
});
IntegrationViteFalse.displayName = "IntegrationViteFalse";
