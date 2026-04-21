// [brand] generated from plugin-misc-icons.json
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../../types";

export const TechCrunch = forwardRef<SVGSVGElement, IconBaseProps>(function TechCrunch(
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
      <circle cx="16" cy="16" r="14" fill={`url(#${uid}-paint0_linear_1334_1805)`}/>
<path d="M16 11V14H13V21H10V14H7V11H16Z" fill="white"/>
<path d="M19 14V18H25V21H16V14H19Z" fill="white"/>
<path d="M19 14V11H25V14H19Z" fill="white"/>
<defs>
<linearGradient id={`${uid}-paint0_linear_1334_1805`} x1="10" y1="5" x2="24.5" y2="26" gradientUnits="userSpaceOnUse">
<stop stopColor="#13B069"/>
<stop offset="1" stopColor="#12C833"/>
</linearGradient>
</defs>
    </svg>
  );
});
TechCrunch.displayName = "TechCrunch";
