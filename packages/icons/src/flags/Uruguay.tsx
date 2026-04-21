// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Uruguay = forwardRef<SVGSVGElement, FlagProps>(function Uruguay(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M10 7.3913H19.6555C19.4048 6.46107 19.0237 5.58447 18.5323 4.78259H10V7.3913Z" fill="#338AF3"/>
<path d="M3.77418 17.8261H16.2239C17.1365 17.0992 17.9192 16.2164 18.5313 15.2174H1.4668C2.07895 16.2163 2.8616 17.0992 3.77418 17.8261Z" fill="#338AF3"/>
<path d="M10 0V2.17391H16.2249C14.5167 0.813438 12.3535 0 10 0Z" fill="#338AF3"/>
<path d="M10 7.3913H19.6555C19.4048 6.46107 19.0237 5.58447 18.5323 4.78259H10V7.3913Z" fill="#338AF3"/>
<path d="M0 10C0 10.9026 0.120313 11.7769 0.344492 12.6087H19.6555C19.8797 11.7769 20 10.9026 20 10H0Z" fill="#338AF3"/>
<path d="M8.69648 5.85236L7.47516 6.42685L8.12551 7.60966L6.79934 7.35599L6.63129 8.69564L5.70762 7.71033L4.78387 8.69564L4.61586 7.35599L3.28969 7.60958L3.94 6.42681L2.71875 5.85236L3.94004 5.27794L3.28969 4.09513L4.61582 4.3488L4.78391 3.00916L5.70762 3.99447L6.63133 3.00916L6.79934 4.3488L8.12555 4.09513L7.47519 5.27798L8.69648 5.85236Z" fill="#FFDA44"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000244141H0V20H20V0.000244141Z" fill="#F0F0F0"/>
<path d="M20 0H0V2.49997H20V0Z" fill="#338AF3"/>
<path d="M20 5H0V7.49997H20V5Z" fill="#338AF3"/>
<path d="M20 14.9998H0V17.4997H20V14.9998Z" fill="#338AF3"/>
<path d="M20 9.99988H0V12.4998H20V9.99988Z" fill="#338AF3"/>
<path d="M9.99998 0.00012207H0V9.99997H9.99998V0.00012207Z" fill="#F0F0F0"/>
<path d="M7.71798 4.99997L6.60763 5.52227L7.19892 6.59761L5.99321 6.36695L5.84044 7.58494L5.00059 6.68913L4.16078 7.58494L4.00801 6.36695L2.80234 6.59757L3.39356 5.52223L2.2832 4.99997L3.3936 4.47771L2.80234 3.40237L4.00797 3.63299L4.16082 2.41504L5.00059 3.31081L5.84048 2.41504L5.99321 3.63299L7.19895 3.40237L6.60766 4.47771L7.71798 4.99997Z" fill="#FFDA44"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#F0F0F0"/>
<path d="M30 0H0V2.85721H30V0Z" fill="#338AF3"/>
<path d="M30 5.71448H0V8.57169H30V5.71448Z" fill="#338AF3"/>
<path d="M30 11.429H0V14.2862H30V11.429Z" fill="#338AF3"/>
<path d="M30 17.1427H0V19.9999H30V17.1427Z" fill="#338AF3"/>
<path d="M15 0H0V11.429H15V0Z" fill="#F0F0F0"/>
<path d="M11.25 5.71423L9.71771 6.43501L10.5336 7.91904L8.86975 7.6007L8.65893 9.28161L7.5 8.04538L6.34102 9.28161L6.13025 7.6007L4.46637 7.91899L5.28229 6.43501L3.75 5.71423L5.28229 4.99345L4.46637 3.50948L6.1302 3.82777L6.34107 2.14685L7.5 3.38315L8.65898 2.14685L8.86975 3.82777L10.5337 3.50948L9.71771 4.99351L11.25 5.71423Z" fill="#FFDA44"/></> }
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
Uruguay.displayName = "Uruguay";
