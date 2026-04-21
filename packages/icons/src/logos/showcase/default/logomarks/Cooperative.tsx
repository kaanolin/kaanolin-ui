// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const Cooperative = forwardRef<SVGSVGElement, LogoProps>(function Cooperative(
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
        <><path d="m19 30.5c6.9036 0 12.5 5.5964 12.5 12.5h-5c0-4.1421-3.3579-7.5-7.5-7.5s-7.5 3.3579-7.5 7.5h-5c0-6.9036 5.5964-12.5 12.5-12.5zm-19-19c6.90356 0 12.5 5.5964 12.5 12.5s-5.59644 12.5-12.5 12.5v-5c4.14214 0 7.5-3.3579 7.5-7.5s-3.35786-7.5-7.5-7.5zm38 5c-4.1421 0-7.5 3.3579-7.5 7.5s3.3579 7.5 7.5 7.5v5c-6.9036 0-12.5-5.5964-12.5-12.5s5.5964-12.5 12.5-12.5zm-26.5-11.5c0 4.14214 3.3579 7.5 7.5 7.5s7.5-3.35786 7.5-7.5h5c0 6.9036-5.5964 12.5-12.5 12.5s-12.5-5.5964-12.5-12.5z" fill="#fff"/></>
      ) : (
        <><path d="m19 30.5c6.9036 0 12.5 5.5964 12.5 12.5h-5c0-4.1421-3.3579-7.5-7.5-7.5s-7.5 3.3579-7.5 7.5h-5c0-6.9036 5.5964-12.5 12.5-12.5zm-19-19c6.90356 0 12.5 5.5964 12.5 12.5s-5.59644 12.5-12.5 12.5v-5c4.14214 0 7.5-3.3579 7.5-7.5s-3.35786-7.5-7.5-7.5zm38 5c-4.1421 0-7.5 3.3579-7.5 7.5s3.3579 7.5 7.5 7.5v5c-6.9036 0-12.5-5.5964-12.5-12.5s5.5964-12.5 12.5-12.5zm-26.5-11.5c0 4.14214 3.3579 7.5 7.5 7.5s7.5-3.35786 7.5-7.5h5c0 6.9036-5.5964 12.5-12.5 12.5s-12.5-5.5964-12.5-12.5z" fill="#0a0a0a"/></>
      )}
    </svg>
  );
});
Cooperative.displayName = "Cooperative";
