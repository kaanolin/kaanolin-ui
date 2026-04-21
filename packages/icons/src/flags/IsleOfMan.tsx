// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const IsleOfMan = forwardRef<SVGSVGElement, FlagProps>(function IsleOfMan(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#D80027"/>
<path d="M13.7024 6.70355L12.9956 9.22585L10.8749 8.83425L9.50984 6.02039L5.82207 7.32902L5.53125 6.50949L4.56641 6.39062L5.2934 8.43941L7.83125 7.79039L8.55246 9.82277L6.79809 12.4119L9.77531 14.9512L9.21102 15.6128L9.59047 16.5079L11.0013 14.8538L9.17031 12.9805L10.5698 11.3398L13.6893 11.5645L14.3998 7.71648L15.2549 7.87441L15.8404 7.09824L13.7024 6.70355Z" fill="#F0F0F0"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0H0V20H20V0Z" fill="#D80027"/>
<path d="M13.0361 7.06132L12.4501 9.15265L10.6917 8.82796L9.5598 6.49487L6.50211 7.57991L6.26094 6.90042L5.46094 6.80187L6.06371 8.50062L8.16797 7.96249L8.76598 9.64761L7.31137 11.7944L9.77988 13.8999L9.31195 14.4484L9.62656 15.1906L10.7964 13.8192L9.27824 12.2659L10.4386 10.9055L13.0251 11.0919L13.6142 7.9014L14.3232 8.03229L14.8087 7.38874L13.0361 7.06132Z" fill="#F0F0F0"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#D80027"/>
<path d="M18.7024 6.7034L17.9956 9.22572L15.8749 8.83408L14.5098 6.02026L10.8221 7.32888L10.5312 6.5094L9.56641 6.39051L10.2934 8.43928L12.8313 7.79025L13.5525 9.82261L11.7981 12.4117L14.7753 14.951L14.211 15.6126L14.5904 16.5077L16.0012 14.8537L14.1702 12.9804L15.5697 11.3397L18.6892 11.5645L19.3997 7.71653L20.2548 7.87444L20.8404 7.09832L18.7024 6.7034Z" fill="#F0F0F0"/></> }
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
IsleOfMan.displayName = "IsleOfMan";
