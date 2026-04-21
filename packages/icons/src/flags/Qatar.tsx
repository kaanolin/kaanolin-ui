// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Qatar = forwardRef<SVGSVGElement, FlagProps>(function Qatar(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M19.9991 10C19.9991 4.47719 15.5219 0 9.99906 0C8.04281 0 6.21805 0.562305 4.67672 1.53324L6.86863 2.46453L3.91211 3.7207L6.86863 4.97684L3.91211 6.23293L6.86863 7.48898L3.91211 8.74488L6.86863 10.0007L3.91211 11.2568L6.86863 12.5128L3.91211 13.7687L6.86863 15.0247L3.91211 16.2808L6.86863 17.5367L4.6777 18.4675C6.21883 19.438 8.0432 20 9.99906 20C15.5219 20 19.9991 15.5228 19.9991 10Z" fill="#751A46"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M19.9993 0.000610352H0.0859375V19.9999H19.9993V0.000610352Z" fill="#751A46"/>
<path d="M8.18182 4.0545L6.21948 5.54139L8.18182 7.02769L6.21948 8.51458L8.18182 10.0009L6.21948 11.4878L8.18182 12.974L6.21948 14.461L8.18182 15.9473L6.21948 17.4342L8.18182 18.9211L6.758 19.9998H0V0H6.75542L8.18182 1.08064L6.21948 2.56761L8.18182 4.0545Z" fill="#F0F0F0"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30.001 0.000366211H0.130859V19.9997H30.001V0.000366211Z" fill="#751A46"/>
<path d="M12.2727 4.05455L9.32922 5.54146L12.2727 7.02778L9.32922 8.51468L12.2727 10.001L9.32922 11.4878L12.2727 12.9742L9.32922 14.4611L12.2727 15.9474L9.32922 17.4344L12.2727 18.9213L10.137 20H0V0H10.1331L12.2727 1.08068L9.32922 2.56759L12.2727 4.05455Z" fill="#F0F0F0"/></> }
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
Qatar.displayName = "Qatar";
