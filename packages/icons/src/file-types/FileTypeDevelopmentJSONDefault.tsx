// [collection] Figma variant — properties:
//   File type: Development / JSON
//   Type: Default
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const FileTypeDevelopmentJSONDefault = forwardRef<SVGSVGElement, IconBaseProps>(function FileTypeDevelopmentJSONDefault(
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
      <path d="M11 0.75H27C27.1212 0.75 27.2375 0.798088 27.3232 0.883789L38.1162 11.6768C38.2019 11.7625 38.25 11.8788 38.25 12V36C38.25 37.7949 36.7949 39.25 35 39.25H11C9.20507 39.25 7.75 37.7949 7.75 36V4C7.75 2.20507 9.20508 0.75 11 0.75Z" stroke="#D4D4D4" strokeWidth="1.5"/>
<path d="M27 0.5V8C27 10.2091 28.7909 12 31 12H38.5" stroke="#D4D4D4" strokeWidth="1.5"/>
<rect x="1" y="18" width="34" height="16" rx="2" fill="#4F46E5"/>
<text fill="white" style={{ whiteSpace: "pre" }} xmlSpace="preserve" fontFamily="Inter" fontSize="10" fontWeight="bold" letterSpacing="0em"><tspan x="4.28418" y="29.6364">JSON</tspan></text>
    </svg>
  );
});
FileTypeDevelopmentJSONDefault.displayName = "FileTypeDevelopmentJSONDefault";
