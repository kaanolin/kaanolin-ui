// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const Clandestine = forwardRef<SVGSVGElement, LogoProps>(function Clandestine(
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
        <><path d="m14.25 5c0 7.8701-6.37994 14.25-14.25 14.25v9.5h14.25v14.25h9.5c0-7.8701 6.3799-14.25 14.25-14.25v-9.5h-14.25v-14.25z" fill="#fff"/></>
      ) : (
        <><path d="m14.25 5c0 7.8701-6.37994 14.25-14.25 14.25v9.5h14.25v14.25h9.5c0-7.8701 6.3799-14.25 14.25-14.25v-9.5h-14.25v-14.25z" fill="#16a34a"/></>
      )}
    </svg>
  );
});
Clandestine.displayName = "Clandestine";
