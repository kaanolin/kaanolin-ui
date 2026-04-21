// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const SouthAfrica = forwardRef<SVGSVGElement, FlagProps>(function SouthAfrica(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M9.99999 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 9.99999 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 9.99999 20Z" fill="#F0F0F0"/>
<path d="M2.92892 17.0711C-0.976308 13.1659 -0.976308 6.83423 2.92892 2.92896C2.92865 2.92938 8.69568 10 8.69568 10L2.92892 17.0711Z" fill="black"/>
<path d="M8.69511 9.99998L1.32574 5.02002C1.09727 5.41717 0.895781 5.8317 0.722656 6.26076L4.45347 10L0.722773 13.7395C0.895742 14.1682 1.09703 14.5825 1.32535 14.9794L8.69511 9.99998Z" fill="#FFDA44"/>
<path d="M19.9156 8.69568H8.69566L2.9291 2.92908C2.30769 3.55048 1.76781 4.25326 1.32656 5.02009L6.29683 10L1.32617 14.9793C1.76742 15.7463 2.30754 16.4493 2.9291 17.0709L8.69566 11.3043H19.9156C19.9712 10.8774 20.0003 10.4421 20.0003 10C20.0003 9.55794 19.9712 9.12263 19.9156 8.69568Z" fill="#6DA544"/>
<path d="M3.91211 17.9327C5.5984 19.2289 7.70922 20.0001 10.0005 20.0001C14.6207 20.0001 18.5085 16.8664 19.656 12.6088H9.23613L3.91211 17.9327Z" fill="#0052B4"/>
<path d="M19.656 7.39129C18.5085 3.13363 14.6207 0 10.0005 0C7.70922 0 5.5984 0.771132 3.91211 2.0673L9.23609 7.39129H19.656Z" fill="#D80027"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#F0F0F0"/>
<path d="M4.45406 10L0 3.3158V16.6854L4.45406 10Z" fill="black"/>
<path d="M6.29655 9.99999L0 0.548584V3.31581L4.45406 10L0 16.6854V19.4476L6.29655 9.99999Z" fill="#FFDA44"/>
<path d="M19.9153 11.9566C19.9176 11.9308 19.9467 11.9051 20 11.8793V10V8.04344H19.9153H8.69538L3.3332 0H0V0.548594L6.29655 10L0 19.4476V20H3.3332L8.69538 11.9566H19.9153Z" fill="#6DA544"/>
<path d="M19.6554 13.9131H9.23558L5.17773 20H19.9999V13.9131H19.6554Z" fill="#0052B4"/>
<path d="M19.6554 6.08687H19.9999V0H5.17773L9.23558 6.08687H19.6554Z" fill="#D80027"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#F0F0F0"/>
<path d="M6.68108 10L0 3.3158V16.6854L6.68108 10Z" fill="black"/>
<path d="M9.44483 9.99996L0 0.548584V3.31579L6.68108 10L0 16.6854V19.4475L9.44483 9.99996Z" fill="#FFDA44"/>
<path d="M29.873 11.9565C29.8764 11.9308 29.9201 11.9051 30 11.8793V10V8.04345H29.873H13.0431L4.9998 0H0V0.548625L9.44483 10L0 19.4475V20H4.9998L13.0431 11.9565H29.873Z" fill="#6DA544"/>
<path d="M29.4841 13.9132H13.8543L7.76758 20.0001H30.0008V13.9132H29.4841Z" fill="#0052B4"/>
<path d="M29.4841 6.08685H30.0008V0H7.76758L13.8543 6.08685H29.4841Z" fill="#D80027"/></> }
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
SouthAfrica.displayName = "SouthAfrica";
