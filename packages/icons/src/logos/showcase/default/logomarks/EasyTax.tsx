// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const EasyTax = forwardRef<SVGSVGElement, LogoProps>(function EasyTax(
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
        <><g fill="#fff"><path d="m32 26c0 5.5228-4.4772 10-10 10s-10-4.4772-10-10h-8c0 9.9411 8.0589 18 18 18s18-8.0589 18-18-8.0589-18-18-18v8c5.5228 0 10 4.4772 10 10z"/><path d="m10 4c0 5.52285-4.47715 10-10 10v8c9.94113 0 18-8.0589 18-18z" opacity=".5"/></g></>
      ) : (
        <><g fill="#2563eb"><path d="m32 26c0 5.5228-4.4772 10-10 10s-10-4.4772-10-10h-8c0 9.9411 8.0589 18 18 18s18-8.0589 18-18-8.0589-18-18-18v8c5.5228 0 10 4.4772 10 10z"/><path d="m10 4c0 5.52285-4.47715 10-10 10v8c9.94113 0 18-8.0589 18-18z" opacity=".5"/></g></>
      )}
    </svg>
  );
});
EasyTax.displayName = "EasyTax";
