// [collection] Figma variant — properties:
//   File type: Default / Code
//   Type: Solid
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const FileTypeDefaultCodeSolid = forwardRef<SVGSVGElement, IconBaseProps>(function FileTypeDefaultCodeSolid(
  { size = 32, color = "currentColor", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
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
      <path d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z" fill="#4F46E5"/>
<path opacity="0.3" d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="white"/>
<path d="M23.3334 27.3333L26.6667 24L23.3334 20.6667M16.6667 20.6667L13.3334 24L16.6667 27.3333M21.3334 18L18.6667 30" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
FileTypeDefaultCodeSolid.displayName = "FileTypeDefaultCodeSolid";
