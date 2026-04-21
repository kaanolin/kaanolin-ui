// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const SaintKittsAndNevis = forwardRef<SVGSVGElement, FlagProps>(function SaintKittsAndNevis(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#FFDA44"/>
<path d="M2.9295 17.0711C3.34899 17.4906 3.79661 17.8647 4.2661 18.1941L18.1946 4.26557C17.8653 3.79604 17.4912 3.34846 17.0716 2.92896C16.6521 2.50947 16.2045 2.13545 15.7351 1.80603L1.80664 15.7346C2.13594 16.2041 2.51 16.6516 2.9295 17.0711Z" fill="black"/>
<path d="M2.92856 2.92895C-0.226258 6.08376 -0.831925 10.8218 1.11043 14.5851L14.5847 1.11089C10.8214 -0.831421 6.08326 -0.225754 2.92856 2.92895Z" fill="#6DA544"/>
<path d="M17.0703 17.0711C20.2251 13.9164 20.8307 9.17833 18.8885 5.41492L5.41406 18.8893C9.17744 20.8315 13.9155 20.2259 17.0703 17.0711Z" fill="#D80027"/>
<path d="M6.35891 11.7973L7.29243 12.2729L8.03329 11.5321L7.86938 12.5668L8.80286 13.0425L7.76805 13.2064L7.60415 14.2412L7.12852 13.3077L6.09375 13.4716L6.83457 12.7308L6.35891 11.7973Z" fill="#F0F0F0"/>
<path d="M11.7964 6.3583L12.7299 6.83396L13.4707 6.09314L13.3069 7.12787L14.2404 7.60358L13.2056 7.76748L13.0417 8.80225L12.566 7.86877L11.5312 8.03264L12.2721 7.29182L11.7964 6.3583Z" fill="#F0F0F0"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#D80027"/>
<path d="M20 0H0V20" fill="#6DA544"/>
<path d="M20 0V4.30434L4.30477 19.9996H0V15.6957L15.6952 0.000429687H17.5396L17.54 0H20Z" fill="#FFDA44"/>
<path d="M2.45965 19.9996L20 2.45992V0H17.54L17.5397 0.000351562L0 17.5406V19.9996H2.45965Z" fill="black"/>
<path d="M6.97059 11.2809L7.71969 11.6626L8.3141 11.0681L8.18262 11.8985L8.93172 12.2801L8.10133 12.4117L7.9698 13.242L7.58816 12.493L6.75781 12.6245L7.35223 12.03L6.97059 11.2809Z" fill="#F0F0F0"/>
<path d="M11.2812 6.97083L12.0303 7.35247L12.6247 6.75806L12.4932 7.58841L13.2423 7.97005L12.4119 8.10157L12.2804 8.93196L11.8988 8.18286L11.0684 8.31438L11.6629 7.71993L11.2812 6.97083Z" fill="#F0F0F0"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.00012207H0V19.9999H30V0.00012207Z" fill="#D80027"/>
<path d="M30 0H0V19.9996" fill="#6DA544"/>
<path d="M26.1726 0H24.4825L0 16.3214V17.4481V19.9996H3.82734H5.51748L30 3.67815V2.55147V0H26.1726Z" fill="#FFDA44"/>
<path d="M30 0H26.1726L0 17.4481V19.9996H3.82734L30 2.55147V0Z" fill="black"/>
<path d="M10.9126 10.5824L12.0202 11.4337L13.1721 10.6435L12.7047 11.9599L13.8122 12.8113L12.4158 12.7735L11.9483 14.0899L11.5527 12.7501L10.1562 12.7124L11.3082 11.9221L10.9126 10.5824Z" fill="#F0F0F0"/>
<path d="M16.9439 6.44482L18.0514 7.29617L19.2033 6.50594L18.7359 7.82234L19.8435 8.67369L18.447 8.63589L17.9795 9.95235L17.5839 8.61252L16.1875 8.57478L17.3395 7.78454L16.9439 6.44482Z" fill="#F0F0F0"/></> }
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
SaintKittsAndNevis.displayName = "SaintKittsAndNevis";
