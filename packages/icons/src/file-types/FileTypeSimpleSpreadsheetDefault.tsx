// [collection] Figma variant — properties:
//   File type: Simple / Spreadsheet
//   Type: Default
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const FileTypeSimpleSpreadsheetDefault = forwardRef<SVGSVGElement, IconBaseProps>(function FileTypeSimpleSpreadsheetDefault(
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
      <path d="M8 0.75H24C24.1212 0.75 24.2375 0.798088 24.3232 0.883789L35.1162 11.6768C35.2019 11.7625 35.25 11.8788 35.25 12V36C35.25 37.7949 33.7949 39.25 32 39.25H8C6.20507 39.25 4.75 37.7949 4.75 36V4C4.75 2.20507 6.20508 0.75 8 0.75Z" stroke="#D4D4D4" strokeWidth="1.5"/>
<path d="M24 0.5V8C24 10.2091 25.7909 12 28 12H35.5" stroke="#D4D4D4" strokeWidth="1.5"/>
<path d="M11.9 24.9H28.1M11.9 24.9V21.3C11.9 20.3059 12.7059 19.5 13.7 19.5H17.3M11.9 24.9V28.5C11.9 29.4941 12.7059 30.3 13.7 30.3H17.3M28.1 24.9V28.5C28.1 29.4941 27.2941 30.3 26.3 30.3H17.3M28.1 24.9V21.3C28.1 20.3059 27.2941 19.5 26.3 19.5H17.3M17.3 19.5V30.3" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
FileTypeSimpleSpreadsheetDefault.displayName = "FileTypeSimpleSpreadsheetDefault";
