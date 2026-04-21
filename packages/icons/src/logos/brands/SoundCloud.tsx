// [brand] generated from plugin-misc-icons.json
import { forwardRef } from "react";
import type { IconBaseProps } from "../../types";

export const SoundCloud = forwardRef<SVGSVGElement, IconBaseProps>(function SoundCloud(
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
      <circle cx="16" cy="16" r="14" fill="#FF5502"/>
<path d="M23.9302 21H15.7442V11.1105C16.5026 10.4179 17.485 10 18.5581 10C20.9329 10 22.8631 12.0462 22.9062 14.5881C23.2265 14.4663 23.5712 14.4 23.9302 14.4C25.6256 14.4 27 15.8775 27 17.7C27 19.5225 25.6256 21 23.9302 21Z" fill="white"/>
<path d="M15 12H14V21H15V12Z" fill="white"/>
<path d="M12 13H13V21H12V13Z" fill="white"/>
<path d="M11 15H10V21H11V15Z" fill="white"/>
<path d="M8 14H9V21H8V14Z" fill="white"/>
<path d="M7 16H6V21H7V16Z" fill="white"/>
    </svg>
  );
});
SoundCloud.displayName = "SoundCloud";
