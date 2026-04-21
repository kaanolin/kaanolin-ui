// [brand] generated from plugin-misc-icons.json
import { forwardRef } from "react";
import type { IconBaseProps } from "../../types";

export const Dropbox = forwardRef<SVGSVGElement, IconBaseProps>(function Dropbox(
  { size = 24, title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <circle cx="16" cy="16" r="14" fill="#0F287F"/>
<path fillRule="evenodd" clipRule="evenodd" d="M11 8L6 11L11 14L6 17L11 20L16 17L21 20L26 17L21 14L26 11L21 8L16 11L11 8ZM16 11L21 14L16 17L11 14L16 11Z" fill="#DAF8FE"/>
<path d="M11 22L16 19L21 22L16 25L11 22Z" fill="#DAF8FE"/>
    </svg>
  );
});
Dropbox.displayName = "Dropbox";
