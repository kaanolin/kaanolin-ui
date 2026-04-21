// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const LaunchSimple = forwardRef<SVGSVGElement, LogoProps>(function LaunchSimple(
  { size, mode = "light", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const viewBox = mode === "dark" ? "0 0 40 48" : "0 0 40 48";
  const [, , vbW, vbH] = viewBox.split(" ").map(Number);
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? vbW}
      height={size ? (typeof size === "number" ? (size * vbH) / vbW : undefined) : vbH}
      viewBox={viewBox}
      fill="none"
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {mode === "dark" ? (
        <><path clipRule="evenodd" d="m8 4c-4.41828 0-8 3.58172-8 8v24c0 4.4183 3.58172 8 8 8h24c4.4183 0 8-3.5817 8-8v-24c0-4.41828-3.5817-8-8-8zm3 15.5h9.9645l-11.73227 11.7322 3.53557 3.5356 11.7322-11.7323v9.9645h5v-16c0-1.3807-1.1193-2.5-2.5-2.5h-16z" fill="#fff" fillRule="evenodd"/></>
      ) : (
        <><path clipRule="evenodd" d="m8 4c-4.41828 0-8 3.58172-8 8v24c0 4.4183 3.58172 8 8 8h24c4.4183 0 8-3.5817 8-8v-24c0-4.41828-3.5817-8-8-8zm3 15.5h9.9645l-11.73227 11.7322 3.53557 3.5356 11.7322-11.7323v9.9645h5v-16c0-1.3807-1.1193-2.5-2.5-2.5h-16z" fill="#0a0a0a" fillRule="evenodd"/></>
      )}
    </svg>
  );
});
LaunchSimple.displayName = "LaunchSimple";
