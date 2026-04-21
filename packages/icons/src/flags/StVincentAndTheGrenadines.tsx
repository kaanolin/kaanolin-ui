// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const StVincentAndTheGrenadines = forwardRef<SVGSVGElement, FlagProps>(function StVincentAndTheGrenadines(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M14.7824 1.2159C13.3617 0.440742 11.7323 0 9.99984 0C8.26742 0 6.63797 0.440742 5.21723 1.2159L4.34766 10L5.21723 18.7841C6.63797 19.5593 8.26742 20 9.99984 20C11.7323 20 13.3617 19.5593 14.7824 18.7841L15.652 10L14.7824 1.2159Z" fill="#FFDA44"/>
<path d="M5.21738 18.784V1.21582C2.10894 2.91191 0 6.20953 0 9.99996C0 13.7904 2.10894 17.088 5.21738 18.784Z" fill="#338AF3"/>
<path d="M20.0006 9.99996C20.0006 6.20953 17.8916 2.91191 14.7832 1.21582V18.784C17.8916 17.088 20.0006 13.7904 20.0006 9.99996Z" fill="#6DA544"/>
<path d="M7.82512 12.6087L6.08594 9.99995L7.82508 7.39124L9.56429 9.99995L7.82512 12.6087Z" fill="#6DA544"/>
<path d="M12.1747 12.6087L10.4355 9.99995L12.1747 7.39124L13.9138 9.99995L12.1747 12.6087Z" fill="#6DA544"/>
<path d="M10.0009 16.0869L8.26172 13.4782L10.0009 10.8695L11.74 13.4782L10.0009 16.0869Z" fill="#6DA544"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#FFDA44"/>
<path d="M6.66651 0H0V20H6.66651V0Z" fill="#338AF3"/>
<path d="M20.0005 0H13.334V20H20.0005V0Z" fill="#6DA544"/>
<path d="M8.36887 10.6522L7.06445 8.69566L8.36883 6.73914L9.67324 8.69566L8.36887 10.6522Z" fill="#6DA544"/>
<path d="M11.6305 10.6522L10.3262 8.69566L11.6305 6.73914L12.9349 8.69566L11.6305 10.6522Z" fill="#6DA544"/>
<path d="M9.99965 13.2608L8.69531 11.3043L9.99965 9.34778L11.304 11.3043L9.99965 13.2608Z" fill="#6DA544"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#FFDA44"/>
<path d="M9.99977 0H0V20H9.99977V0Z" fill="#338AF3"/>
<path d="M29.9998 0H20V20H29.9998V0Z" fill="#6DA544"/>
<path d="M12.5543 11.6301L10.5977 8.69537L12.5542 5.76062L14.5108 8.69537L12.5543 11.6301Z" fill="#6DA544"/>
<path d="M17.4448 11.6301L15.4883 8.69537L17.4448 5.76062L19.4014 8.69537L17.4448 11.6301Z" fill="#6DA544"/>
<path d="M14.9995 15.5431L13.043 12.6083L14.9995 9.67358L16.956 12.6083L14.9995 15.5431Z" fill="#6DA544"/></> }
  };
  const s = shapes[shape] ?? shapes["circle"]!;
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={s.viewBox}
      fill="none"
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {s.body}
    </svg>
  );
});
StVincentAndTheGrenadines.displayName = "StVincentAndTheGrenadines";
