// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const Powersurge = forwardRef<SVGSVGElement, LogoProps>(function Powersurge(
  { size, mode = "light", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const viewBox = mode === "dark" ? "0 0 36 48" : "0 0 36 48";
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
        <><path clipRule="evenodd" d="m8 6c-4.41828 0-8 3.58172-8 8v20c0 4.4183 3.58172 8 8 8h20c4.4183 0 8-3.5817 8-8v-20c0-4.41828-3.5817-8-8-8zm0 5c-1.65685 0-3 1.3431-3 3v20c0 1.6569 1.34315 3 3 3h7c1.6569 0 3-1.3431 3-3v-20c0-1.6569-1.3431-3-3-3z" fill="#fff" fillRule="evenodd"/></>
      ) : (
        <><path clipRule="evenodd" d="m8 5c-4.41828 0-8 3.58172-8 8v20c0 4.4183 3.58172 8 8 8h20c4.4183 0 8-3.5817 8-8v-20c0-4.41828-3.5817-8-8-8zm0 5c-1.65685 0-3 1.3431-3 3v20c0 1.6569 1.34315 3 3 3h7c1.6569 0 3-1.3431 3-3v-20c0-1.6569-1.3431-3-3-3z" fill="#5b21b6" fillRule="evenodd"/></>
      )}
    </svg>
  );
});
Powersurge.displayName = "Powersurge";
