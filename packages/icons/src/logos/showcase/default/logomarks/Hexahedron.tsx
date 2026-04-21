// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const Hexahedron = forwardRef<SVGSVGElement, LogoProps>(function Hexahedron(
  { size, mode = "light", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const viewBox = mode === "dark" ? "0 0 37 48" : "0 0 37 48";
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
        <><g fill="#fff"><path d="m18.5002 22.9265 17.2647-9.9611-17.2647-9.9654-17.26515 9.9654z"/><path d="m17.265 25.0653-17.265-9.961v19.9303l17.265 9.9654z"/><path d="m19.7363 25.0652v19.9348l17.2646-9.9654v-19.9304z" opacity=".5"/></g></>
      ) : (
        <><g fill="#2563eb"><path d="m18.5002 22.9265 17.2647-9.9611-17.2647-9.9654-17.26515 9.9654z"/><path d="m17.265 25.0653-17.265-9.961v19.9303l17.265 9.9654z"/><path d="m19.7363 25.0652v19.9348l17.2646-9.9654v-19.9304z" opacity=".5"/></g></>
      )}
    </svg>
  );
});
Hexahedron.displayName = "Hexahedron";
