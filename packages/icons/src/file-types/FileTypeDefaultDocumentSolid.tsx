// [collection] Figma variant — properties:
//   File type: Default / Document
//   Type: Solid
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const FileTypeDefaultDocumentSolid = forwardRef<SVGSVGElement, IconBaseProps>(function FileTypeDefaultDocumentSolid(
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
      <path d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z" fill="#2563EB"/>
<path opacity="0.3" d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="white"/>
<path d="M12.7999 20H27.1999M12.7999 23.2H27.1999M12.7999 26.4H27.1999M12.7999 29.6H23.9999" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
FileTypeDefaultDocumentSolid.displayName = "FileTypeDefaultDocumentSolid";
