// [collection] Figma variant — properties:
//   Platform: Stripe
//   Grayscale: True
//   State: Default
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../types";

export const SocialStripeTrueDefault = forwardRef<SVGSVGElement, IconBaseProps>(function SocialStripeTrueDefault(
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
      <g clipPath={`url(#${uid}-clip0_9337_588284)`}>
<path d="M12.96 0C16.8242 0 18.7564 -3.54052e-05 20.2324 0.751953C21.5307 1.41348 22.5865 2.46926 23.248 3.76758C24 5.24355 24 7.17579 24 11.04V12.96C24 16.8242 24 18.7564 23.248 20.2324C22.5865 21.5307 21.5307 22.5865 20.2324 23.248C18.7564 24 16.8242 24 12.96 24H11.04C7.17579 24 5.24355 24 3.76758 23.248C2.46926 22.5865 1.41348 21.5307 0.751953 20.2324C-3.54052e-05 18.7564 0 16.8242 0 12.96V11.04C0 7.17579 -3.54052e-05 5.24355 0.751953 3.76758C1.41348 2.46926 2.46926 1.41348 3.76758 0.751953C5.24355 -3.54052e-05 7.17579 0 11.04 0H12.96ZM5.5 8.5V18.5L18.5 15.5V5.5L5.5 8.5Z" fill="#A3A3A3"/>
</g>
<defs>
<clipPath id={`${uid}-clip0_9337_588284`}>
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
});
SocialStripeTrueDefault.displayName = "SocialStripeTrueDefault";
