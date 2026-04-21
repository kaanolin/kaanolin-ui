// [brand] generated from plugin-misc-icons.json
import { forwardRef } from "react";
import type { IconBaseProps } from "../../types";

export const Sketch = forwardRef<SVGSVGElement, IconBaseProps>(function Sketch(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M8.10908 4.79018L16 4L23.8909 4.79018L29.9999 12.558L16 27.9999L2 12.558L8.10908 4.79018Z" fill="#FDB300"/>
<path d="M7.67063 12.558L15.9999 28L2 12.558H7.67063ZM24.3294 12.558L16.0001 28L30 12.558" fill="#EA6C00"/>
<path fillRule="evenodd" clipRule="evenodd" d="M7.66992 12.558H24.3285L15.9992 28" fill="#FDAD00"/>
<path d="M15.9992 4L8.1083 4.79004L7.66992 12.5579L15.9992 4ZM15.9993 4L23.8902 4.79004L24.3286 12.5579" fill="#FDD231"/>
<path d="M30 12.5579L23.891 4.79004L24.3294 12.5579H30ZM2 12.5579L8.10901 4.79004L7.67063 12.5579" fill="#FDAD00"/>
<path fillRule="evenodd" clipRule="evenodd" d="M15.9992 4L7.66992 12.5579H24.3285" fill="#FEEEB7"/>
    </svg>
  );
});
Sketch.displayName = "Sketch";
