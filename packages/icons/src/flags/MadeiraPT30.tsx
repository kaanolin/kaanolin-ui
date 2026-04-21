// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const MadeiraPT30 = forwardRef<SVGSVGElement, FlagProps>(function MadeiraPT30(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M14.3484 0.992266C13.0337 0.356562 11.5588 0 10.0006 0C8.44234 0 6.96746 0.356562 5.65277 0.992266L4.7832 10L5.65277 19.0077C6.96746 19.6434 8.44234 20 10.0006 20C11.5588 20 13.0337 19.6434 14.3484 19.0077L15.218 10L14.3484 0.992266Z" fill="#FFDA44"/>
<path d="M5.65218 0.992676C2.30722 2.61014 0 6.03549 0 10.0001C0 13.9646 2.30722 17.39 5.65218 19.0074V0.992676Z" fill="#0052B4"/>
<path d="M14.3477 0.992676V19.0074C17.6926 17.39 19.9998 13.9646 19.9998 10.0001C19.9998 6.03549 17.6926 2.61014 14.3477 0.992676Z" fill="#0052B4"/>
<path d="M12.8258 10.8695L13.478 11.7391V8.26083L12.8258 9.1304H10.8693V7.17388L11.7389 6.52173H8.26058L9.13015 7.17388V9.1304H7.17363L6.52148 8.26083V11.7391L7.17363 10.8695H9.13015V12.8261L8.26058 13.4782H11.7389L10.8693 12.8261V10.8695H12.8258Z" fill="#D80027"/>
<path d="M12.608 9.56518H10.4341V7.39124H9.56457V9.56518H7.39062V10.4347H9.56457V12.6087H10.4341V10.4347H12.608V9.56518Z" fill="#F0F0F0"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M19.9997 0H0V20H19.9997V0Z" fill="#FFDA44"/>
<path d="M6.66656 0H0V20H6.66656V0Z" fill="#0052B4"/>
<path d="M20.0005 0H13.334V20H20.0005V0Z" fill="#0052B4"/>
<path d="M12.2962 10.7066L12.826 11.4131V8.587L12.2962 9.29352H10.7065V7.70387L11.413 7.17395H8.58688L9.29341 7.70387V9.29352H7.70375L7.17383 8.587V11.4131L7.70375 10.7066H9.29341V12.2963L8.58688 12.8261H11.413L10.7065 12.2963V10.7066H12.2962Z" fill="#D80027"/>
<path d="M12.12 9.6467H10.3537V7.88037H9.64716V9.6467H7.88086V10.3532H9.64716V12.1195H10.3537V10.3532H12.12V9.6467Z" fill="#F0F0F0"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V19.9994H30V0Z" fill="#FFDA44"/>
<path d="M29.9996 0H19.3477V20H29.9996V0Z" fill="#0052B4"/>
<path d="M10.6519 0H0V20H10.6519V0Z" fill="#0052B4"/>
<path d="M17.9135 10.8965L18.586 11.7932V8.20632L17.9135 9.10303H15.8958V7.08543L16.7925 6.41284H13.2055L14.1023 7.08543V9.10303H12.0846L11.4121 8.20632V11.7932L12.0846 10.8965H14.1023V12.9142L13.2055 13.5867H16.7925L15.8958 12.9142V10.8965H17.9135Z" fill="#D80027"/>
<path d="M17.691 9.55128H15.4491V7.30945H14.5524V9.55128H12.3105V10.448H14.5524V12.6898H15.4491V10.448H17.691V9.55128Z" fill="#F0F0F0"/></> }
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
MadeiraPT30.displayName = "MadeiraPT30";
