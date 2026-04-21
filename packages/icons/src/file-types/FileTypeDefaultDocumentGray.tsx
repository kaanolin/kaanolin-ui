// [collection] Figma variant — properties:
//   File type: Default / Document
//   Type: Gray
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../types";

export const FileTypeDefaultDocumentGray = forwardRef<SVGSVGElement, IconBaseProps>(function FileTypeDefaultDocumentGray(
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
      <mask id={`${uid}-mask0_4916_412089`} style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="4" y="0" width="32" height="40">
<path d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z" fill={`url(#${uid}-paint0_linear_4916_412089)`}/>
</mask>
<g mask={`url(#${uid}-mask0_4916_412089)`}>
<path d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z" fill="#F5F5F5"/>
</g>
<path d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="#E5E5E5"/>
<path d="M12.7999 20H27.1999M12.7999 23.2H27.1999M12.7999 26.4H27.1999M12.7999 29.6H23.9999" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id={`${uid}-paint0_linear_4916_412089`} x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
<stop stopOpacity="0.4"/>
<stop offset="1"/>
</linearGradient>
</defs>
    </svg>
  );
});
FileTypeDefaultDocumentGray.displayName = "FileTypeDefaultDocumentGray";
