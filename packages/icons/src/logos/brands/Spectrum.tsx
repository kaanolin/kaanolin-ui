// [brand] generated from plugin-misc-icons.json
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../../types";

export const Spectrum = forwardRef<SVGSVGElement, IconBaseProps>(function Spectrum(
  { size = 24, title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
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
      <path d="M2 11.6C2 8.23969 2 6.55953 2.65396 5.27606C3.2292 4.14708 4.14708 3.2292 5.27606 2.65396C6.55953 2 8.23969 2 11.6 2H20.4C23.7603 2 25.4405 2 26.7239 2.65396C27.8529 3.2292 28.7708 4.14708 29.346 5.27606C30 6.55953 30 8.23969 30 11.6V20.4C30 23.7603 30 25.4405 29.346 26.7239C28.7708 27.8529 27.8529 28.7708 26.7239 29.346C25.4405 30 23.7603 30 20.4 30H11.6C8.23969 30 6.55953 30 5.27606 29.346C4.14708 28.7708 3.2292 27.8529 2.65396 26.7239C2 25.4405 2 23.7603 2 20.4V11.6Z" fill={`url(#${uid}-paint0_linear_1334_782)`}/>
<path fillRule="evenodd" clipRule="evenodd" d="M9.24414 10.68C9.24414 9.88747 9.88661 9.245 10.6791 9.245C17.3093 9.245 22.6841 14.6198 22.6841 21.25C22.6841 22.0619 22.026 22.72 21.2141 22.72H17.5041C16.6923 22.72 16.0341 22.0619 16.0341 21.25C16.0341 18.2925 13.6366 15.895 10.6791 15.895C9.88661 15.895 9.24414 15.2525 9.24414 14.46V10.68Z" fill="white"/>
<defs>
<linearGradient id={`${uid}-paint0_linear_1334_782`} x1="30" y1="30" x2="2" y2="2" gradientUnits="userSpaceOnUse">
<stop stopColor="#3D35DE"/>
<stop offset="0.265" stopColor="#5137E8"/>
<stop offset="1" stopColor="#793CF8"/>
</linearGradient>
</defs>
    </svg>
  );
});
Spectrum.displayName = "Spectrum";
