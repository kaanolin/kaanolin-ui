// [collection] Figma variant — properties:
//   File type: Default / Video 01
//   Type: Solid
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../types";

export const FileTypeDefaultVideo01Solid = forwardRef<SVGSVGElement, IconBaseProps>(function FileTypeDefaultVideo01Solid(
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
      viewBox="0 0 40 40"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z" fill="#2563EB"/>
<path opacity="0.3" d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="white"/>
<g clipPath={`url(#${uid}-clip0_4916_414635)`}>
<path d="M13.3334 24H26.6667M13.3334 20.6666H16.6667M23.3334 20.6666H26.6667M13.3334 27.3333H16.6667M23.3334 27.3333H26.6667M16.6667 30.6666V17.3333M23.3334 30.6666V17.3333M16.5334 30.6666H23.4667C24.5868 30.6666 25.1469 30.6666 25.5747 30.4487C25.951 30.2569 26.257 29.951 26.4487 29.5746C26.6667 29.1468 26.6667 28.5868 26.6667 27.4666V20.5333C26.6667 19.4132 26.6667 18.8532 26.4487 18.4253C26.257 18.049 25.951 17.743 25.5747 17.5513C25.1469 17.3333 24.5868 17.3333 23.4667 17.3333H16.5334C15.4133 17.3333 14.8532 17.3333 14.4254 17.5513C14.0491 17.743 13.7431 18.049 13.5514 18.4253C13.3334 18.8532 13.3334 19.4132 13.3334 20.5333V27.4666C13.3334 28.5868 13.3334 29.1468 13.5514 29.5746C13.7431 29.951 14.0491 30.2569 14.4254 30.4487C14.8532 30.6666 15.4133 30.6666 16.5334 30.6666Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id={`${uid}-clip0_4916_414635`}>
<rect width="16" height="16" fill="white" transform="translate(12 16)"/>
</clipPath>
</defs>
    </svg>
  );
});
FileTypeDefaultVideo01Solid.displayName = "FileTypeDefaultVideo01Solid";
