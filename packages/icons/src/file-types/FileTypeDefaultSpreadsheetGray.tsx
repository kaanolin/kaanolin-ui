// [collection] Figma variant — properties:
//   File type: Default / Spreadsheet
//   Type: Gray
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../types";

export const FileTypeDefaultSpreadsheetGray = forwardRef<SVGSVGElement, IconBaseProps>(function FileTypeDefaultSpreadsheetGray(
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
      <mask id={`${uid}-mask0_4916_412095`} style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="4" y="0" width="32" height="40">
<path d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z" fill={`url(#${uid}-paint0_linear_4916_412095)`}/>
</mask>
<g mask={`url(#${uid}-mask0_4916_412095)`}>
<path d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z" fill="#F5F5F5"/>
</g>
<path d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="#E5E5E5"/>
<path d="M12.8 24.8H27.2M12.8 24.8V21.6C12.8 20.7163 13.5164 20 14.4 20H17.6M12.8 24.8V28C12.8 28.8837 13.5164 29.6 14.4 29.6H17.6M27.2 24.8V28C27.2 28.8837 26.4837 29.6 25.6 29.6H17.6M27.2 24.8V21.6C27.2 20.7163 26.4837 20 25.6 20H17.6M17.6 20V29.6" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id={`${uid}-paint0_linear_4916_412095`} x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
<stop stopOpacity="0.4"/>
<stop offset="1"/>
</linearGradient>
</defs>
    </svg>
  );
});
FileTypeDefaultSpreadsheetGray.displayName = "FileTypeDefaultSpreadsheetGray";
