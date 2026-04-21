// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const Sonorous = forwardRef<SVGSVGElement, LogoProps>(function Sonorous(
  { size, mode = "light", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const viewBox = mode === "dark" ? "0 0 42 48" : "0 0 42 48";
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
        <><g stroke="#fff" strokeWidth="6"><path d="m29.8393 32.8389c-7.4199 7.42-19.4501 7.42-26.87003 0"/><path d="m23.1218 26.1214c-3.71 3.7099-9.725 3.7099-13.43502 0" opacity=".5"/><path d="m12.1607 15.1611c7.4199-7.41996 19.4501-7.41996 26.87 0" opacity=".5"/><path d="m18.8782 21.8786c3.71-3.7099 9.725-3.7099 13.435 0"/></g></>
      ) : (
        <><g stroke="#1d4ed8" strokeWidth="6"><path d="m29.8393 32.8389c-7.4199 7.42-19.4501 7.42-26.87003 0"/><path d="m23.1218 26.1214c-3.71 3.7099-9.725 3.7099-13.43502 0" opacity=".5"/><path d="m12.1607 15.1611c7.4199-7.41996 19.4501-7.41996 26.87 0" opacity=".5"/><path d="m18.8782 21.8786c3.71-3.7099 9.725-3.7099 13.435 0"/></g></>
      )}
    </svg>
  );
});
Sonorous.displayName = "Sonorous";
