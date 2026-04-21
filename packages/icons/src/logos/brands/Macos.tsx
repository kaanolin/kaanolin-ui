// [brand] generated from plugin-misc-icons.json
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../../types";

export const Macos = forwardRef<SVGSVGElement, IconBaseProps>(function Macos(
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
      <path d="M30 16C30 23.728 23.735 30 16 30C8.265 30 2 23.728 2 16C2 8.265 8.265 2 16 2C23.735 2 30 8.265 30 16Z" fill="white"/>
<path d="M21.5 6H23L17 16L23 26H21.5L16 17L10.5 26H9L15 16L9 6H10.5L16 15L21.5 6Z" fill={`url(#${uid}-paint0_linear_1334_909)`}/>
<defs>
<linearGradient id={`${uid}-paint0_linear_1334_909`} x1="16" y1="6" x2="16" y2="26" gradientUnits="userSpaceOnUse">
<stop stopColor="#5AB1DC"/>
<stop offset="0.256735" stopColor="#8396B0"/>
<stop offset="0.500792" stopColor="#A37F86"/>
<stop offset="1" stopColor="#EE5031"/>
</linearGradient>
</defs>
    </svg>
  );
});
Macos.displayName = "Macos";
