// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const Watchtower = forwardRef<SVGSVGElement, LogoProps>(function Watchtower(
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
        <><g stroke="#fff" strokeWidth="3"><circle cx="20" cy="24" r="18.5"/><circle cx="15.75" cy="19.75" r="12.5"/><circle cx="20" cy="24" r="6.5"/></g></>
      ) : (
        <><g stroke="#0a0a0a" strokeWidth="3"><circle cx="20" cy="24" r="18.5"/><circle cx="15.75" cy="19.75" r="12.5"/><circle cx="20" cy="24" r="6.5"/></g></>
      )}
    </svg>
  );
});
Watchtower.displayName = "Watchtower";
