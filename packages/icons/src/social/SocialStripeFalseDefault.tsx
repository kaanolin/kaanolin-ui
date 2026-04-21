// [collection] Figma variant — properties:
//   Platform: Stripe
//   Grayscale: False
//   State: Default
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../types";

export const SocialStripeFalseDefault = forwardRef<SVGSVGElement, IconBaseProps>(function SocialStripeFalseDefault(
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
      viewBox="0 0 24 24"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <g clipPath={`url(#${uid}-clip0_9337_588281)`}>
<path d="M0 11.04C0 7.17564 0 5.24346 0.752055 3.76747C1.41358 2.46915 2.46915 1.41358 3.76747 0.752055C5.24346 0 7.17564 0 11.04 0H12.96C16.8244 0 18.7565 0 20.2325 0.752055C21.5309 1.41358 22.5864 2.46915 23.2479 3.76747C24 5.24346 24 7.17564 24 11.04V12.96C24 16.8244 24 18.7565 23.2479 20.2325C22.5864 21.5309 21.5309 22.5864 20.2325 23.2479C18.7565 24 16.8244 24 12.96 24H11.04C7.17564 24 5.24346 24 3.76747 23.2479C2.46915 22.5864 1.41358 21.5309 0.752055 20.2325C0 18.7565 0 16.8244 0 12.96V11.04Z" fill="#635BFF"/>
<path d="M5.5 18.5V8.5L18.5 5.5V15.5L5.5 18.5Z" fill="white"/>
</g>
<defs>
<clipPath id={`${uid}-clip0_9337_588281`}>
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
});
SocialStripeFalseDefault.displayName = "SocialStripeFalseDefault";
