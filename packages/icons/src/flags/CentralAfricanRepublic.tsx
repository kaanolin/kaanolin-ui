// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const CentralAfricanRepublic = forwardRef<SVGSVGElement, FlagProps>(function CentralAfricanRepublic(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M9.99999 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 9.99999 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 9.99999 20Z" fill="#F0F0F0"/>
<path d="M18.784 5.21737C17.4918 2.84905 15.2698 1.0612 12.6086 0.343933L12.1738 5.21737H18.784Z" fill="#0052B4"/>
<path d="M1.2168 5.21737H7.82695L7.39218 0.343933C4.73097 1.0612 2.50902 2.84909 1.2168 5.21737Z" fill="#0052B4"/>
<path d="M12.1738 10V14.7826H18.784C19.5592 13.3619 19.9999 11.7324 19.9999 10H12.1738Z" fill="#6DA544"/>
<path d="M7.82609 10H0C0 11.7324 0.440742 13.3619 1.2159 14.7826H7.82605V10H7.82609Z" fill="#6DA544"/>
<path d="M1.2168 14.7826C2.50902 17.1509 4.73097 18.9388 7.39218 19.656L7.82695 15.394L1.2168 14.7826Z" fill="#FFDA44"/>
<path d="M12.6086 19.656C15.2698 18.9388 17.4918 17.1509 18.784 14.7826L12.1738 15.3939L12.6086 19.656Z" fill="#FFDA44"/>
<path d="M12.1738 15.3939L18.784 14.7826H12.1738V15.3939Z" fill="#FFDA44"/>
<path d="M7.82699 14.7826H1.2168L7.82699 15.3939V14.7826Z" fill="#FFDA44"/>
<path d="M9.99933 0C9.09672 0 8.22242 0.120313 7.39062 0.344492V19.6555C8.22242 19.8797 9.09672 20 9.99933 20C10.902 20 11.7762 19.8797 12.608 19.6555V0.344492C11.7762 0.120313 10.902 0 9.99933 0Z" fill="#D80027"/>
<path d="M5.37914 2.17389L5.64891 3.00424H6.52207L5.81574 3.51744L6.08555 4.3478L5.37914 3.83463L4.67277 4.3478L4.94266 3.51744L4.23633 3.00424H5.10941L5.37914 2.17389Z" fill="#FFDA44"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#D80027"/>
<path d="M8.26086 10H0V15H8.26086V10Z" fill="#6DA544"/>
<path d="M19.9991 10H11.7383V15H19.9991V10Z" fill="#6DA544"/>
<path d="M0 0V0.000234375V5H8.26086V0.000234375H11.7391V5H20V0.000234375V0H0Z" fill="#0052B4"/>
<path d="M19.9991 5H11.7383V10H19.9991V5Z" fill="#F0F0F0"/>
<path d="M8.26086 5H0V10H8.26086V5Z" fill="#F0F0F0"/>
<path d="M11.7391 19.9998H8.26086V15H0V19.9998V20H20V19.9998V15H11.7391V19.9998Z" fill="#FFDA44"/>
<path d="M6.30465 1.31116L6.59973 2.21928H7.55469L6.78219 2.78065L7.07727 3.68881L6.30465 3.12756L5.53211 3.68881L5.82727 2.78065L5.05469 2.21928H6.00961L6.30465 1.31116Z" fill="#FFDA44"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.000183105H0V20H30V0.000183105Z" fill="#D80027"/>
<path d="M12.3913 9.99976H0V14.9999H12.3913V9.99976Z" fill="#6DA544"/>
<path d="M30.0007 9.99976H17.6094V14.9999H30.0007V9.99976Z" fill="#6DA544"/>
<path d="M0 0V0.000175681V4.99982H12.3913V0.000175681H17.6087V4.99982H30V0.000175681V0H0Z" fill="#0052B4"/>
<path d="M30.0007 4.99963H17.6094V9.99975H30.0007V4.99963Z" fill="#F0F0F0"/>
<path d="M12.3913 4.99963H0V9.99975H12.3913V4.99963Z" fill="#F0F0F0"/>
<path d="M17.6087 19.9993H12.3913V14.9997H0V19.9993V19.9995H30V19.9993V14.9997H17.6087V19.9993Z" fill="#FFDA44"/>
<path d="M7.01195 1.52167L7.28172 2.35204H8.15488L7.44859 2.86525L7.71836 3.69557L7.01195 3.18242L6.30566 3.69557L6.57549 2.86525L5.86914 2.35204H6.74219L7.01195 1.52167Z" fill="#FFDA44"/></> }
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
CentralAfricanRepublic.displayName = "CentralAfricanRepublic";
