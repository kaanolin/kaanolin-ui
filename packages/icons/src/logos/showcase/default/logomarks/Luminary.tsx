// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const Luminary = forwardRef<SVGSVGElement, LogoProps>(function Luminary(
  { size, mode = "light", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const viewBox = mode === "dark" ? "0 0 38 48" : "0 0 38 48";
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
        <><g fill="#fff"><path d="m0 24c0-4.0995 1.29832-7.8957 3.50621-11h9.49379v1.7789c-3.01021 1.9627-5 5.3595-5 9.2211 0 6.0751 4.9249 11 11 11v8c-10.49341 0-19-8.5066-19-19z"/><path d="m34.4938 35c2.2079-3.1043 3.5062-6.9005 3.5062-11 0-10.4934-8.5066-19-19-19v8c6.0751 0 11 4.9249 11 11 0 3.8616-1.9898 7.2584-5 9.2211v1.7789z"/></g></>
      ) : (
        <><g fill="#0a0a0a"><path d="m0 24c0-4.0995 1.29832-7.8957 3.50621-11h9.49379v1.7789c-3.01021 1.9627-5 5.3595-5 9.2211 0 6.0751 4.9249 11 11 11v8c-10.49341 0-19-8.5066-19-19z"/><path d="m34.4938 35c2.2079-3.1043 3.5062-6.9005 3.5062-11 0-10.4934-8.5066-19-19-19v8c6.0751 0 11 4.9249 11 11 0 3.8616-1.9898 7.2584-5 9.2211v1.7789z"/></g></>
      )}
    </svg>
  );
});
Luminary.displayName = "Luminary";
