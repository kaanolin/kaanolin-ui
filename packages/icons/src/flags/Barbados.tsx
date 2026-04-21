// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Barbados = forwardRef<SVGSVGElement, FlagProps>(function Barbados(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M14.3484 0.992266C13.0337 0.356562 11.5588 0 10.0006 0C8.44238 0 6.96746 0.356562 5.65277 0.992266L4.7832 10L5.65277 19.0077C6.96746 19.6434 8.44238 20 10.0006 20C11.5588 20 13.0337 19.6434 14.3484 19.0077L15.218 10L14.3484 0.992266Z" fill="#FFDA44"/>
<path d="M5.65218 0.992615C2.30726 2.61004 0 6.03539 0 10C0 13.9646 2.30726 17.39 5.65218 19.0074V0.992615Z" fill="#0052B4"/>
<path d="M14.3477 0.992615V19.0074C17.6926 17.39 19.9998 13.9646 19.9998 10C19.9998 6.03543 17.6926 2.61004 14.3477 0.992615Z" fill="#0052B4"/>
<path d="M13.0433 6.08698L12.46 5.79534C12.4248 5.86569 11.6631 7.41541 11.5387 9.78264H10.652V6.08698L9.99984 5.21741L9.34765 6.08698V9.78264H8.46097C8.33652 7.41541 7.57488 5.86569 7.53969 5.79534L6.37305 6.37866C6.38109 6.39467 7.17379 8.00815 7.17379 10.4348V11.087H9.34769V14.7827H10.652V11.087H12.8259V10.4348C12.8259 9.18018 13.043 8.14565 13.2251 7.4987C13.4237 6.79323 13.6254 6.38124 13.6274 6.37713L13.0433 6.08698Z" fill="black"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#FFDA44"/>
<path d="M6.66651 0H0V20H6.66651V0Z" fill="#0052B4"/>
<path d="M20.0005 0H13.334V20H20.0005V0Z" fill="#0052B4"/>
<path d="M12.0289 7.39127L11.64 7.19682C11.6166 7.24373 11.1088 8.27686 11.0258 9.85502H10.4346V7.39123L9.99988 6.81158L9.56511 7.39127V9.85506H8.97398C8.89101 8.2769 8.38324 7.24377 8.3598 7.19686L7.58203 7.58573C7.58738 7.59639 8.11586 8.67205 8.11586 10.2899V10.7246H9.56511V13.1884H10.4347V10.7246H11.8839V10.2899C11.8839 9.45342 12.0287 8.76377 12.1501 8.33248C12.2825 7.86217 12.4169 7.58748 12.4182 7.58479L12.0289 7.39127Z" fill="black"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#FFDA44"/>
<path d="M9.99977 0H0V20H9.99977V0Z" fill="#0052B4"/>
<path d="M29.9998 0H20V20H29.9998V0Z" fill="#0052B4"/>
<path d="M18.0433 6.08669L17.46 5.79501C17.4248 5.86538 16.6632 7.41505 16.5387 9.78227H15.652V6.08663L14.9998 5.21716L14.3477 6.08669V9.78233H13.461C13.3365 7.41511 12.5749 5.86544 12.5397 5.79507L11.373 6.37836C11.3811 6.39436 12.1738 8.00789 12.1738 10.4345V11.0867H14.3477V14.7823H15.652V11.0867H17.8259V10.4345C17.8259 9.17987 18.043 8.14541 18.2251 7.49849C18.4237 6.79303 18.6254 6.381 18.6274 6.37696L18.0433 6.08669Z" fill="black"/></> }
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
Barbados.displayName = "Barbados";
