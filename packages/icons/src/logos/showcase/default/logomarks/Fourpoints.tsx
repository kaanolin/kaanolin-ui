// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const Fourpoints = forwardRef<SVGSVGElement, LogoProps>(function Fourpoints(
  { size, mode = "light", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const viewBox = mode === "dark" ? "0 0 28 48" : "0 0 28 48";
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
        <><g fill="#fff"><path d="m10 15c0 2.7614-2.23858 5-5 5s-5-2.2386-5-5 2.23858-5 5-5 5 2.2386 5 5z"/><path d="m10 33c0 2.7614-2.23858 5-5 5s-5-2.2386-5-5 2.23858-5 5-5 5 2.2386 5 5z"/><path d="m28 15c0 2.7614-2.2386 5-5 5s-5-2.2386-5-5 2.2386-5 5-5 5 2.2386 5 5z"/><path d="m28 33c0 2.7614-2.2386 5-5 5s-5-2.2386-5-5 2.2386-5 5-5 5 2.2386 5 5z"/></g></>
      ) : (
        <><g fill="#0a0a0a"><path d="m10 15c0 2.7614-2.23858 5-5 5s-5-2.2386-5-5 2.23858-5 5-5 5 2.2386 5 5z"/><path d="m10 33c0 2.7614-2.23858 5-5 5s-5-2.2386-5-5 2.23858-5 5-5 5 2.2386 5 5z"/><path d="m28 15c0 2.7614-2.2386 5-5 5s-5-2.2386-5-5 2.2386-5 5-5 5 2.2386 5 5z"/><path d="m28 33c0 2.7614-2.2386 5-5 5s-5-2.2386-5-5 2.2386-5 5-5 5 2.2386 5 5z"/></g></>
      )}
    </svg>
  );
});
Fourpoints.displayName = "Fourpoints";
