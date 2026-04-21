// [duocolor] generated from source/icons/Duocolor icons/
import { forwardRef } from "react";
import type { DuocolorIconProps } from "../../types";

export const Certificate02 = forwardRef<SVGSVGElement, DuocolorIconProps>(function Certificate02(
  { size = 24, color = "currentColor", strokeWidth = 2, title, "aria-label": ariaLabel, ...rest },
  ref,
) {
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
      <path opacity="0.4" d="M19 2H5C3.89543 2 3 2.99492 3 4.22222V19.7778C3 21.0051 3.89543 22 5 22H19C20.1046 22 21 21.0051 21 19.7778V4.22222C21 2.99492 20.1046 2 19 2Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 18.5H15M7 15H17M11.9976 6.21194C11.2978 5.4328 10.1309 5.22321 9.25414 5.93667C8.37738 6.65013 8.25394 7.84299 8.94247 8.6868C9.631 9.53061 11.9976 11.5 11.9976 11.5C11.9976 11.5 14.3642 9.53061 15.0527 8.6868C15.7413 7.84299 15.6329 6.64262 14.7411 5.93667C13.8492 5.23072 12.6974 5.4328 11.9976 6.21194Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});
Certificate02.displayName = "Certificate02";
