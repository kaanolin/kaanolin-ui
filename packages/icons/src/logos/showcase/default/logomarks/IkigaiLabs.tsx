// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const IkigaiLabs = forwardRef<SVGSVGElement, LogoProps>(function IkigaiLabs(
  { size, mode = "light", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const viewBox = mode === "dark" ? "0 0 44 48" : "0 0 44 48";
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
        <><rect height="17" rx="8.5" stroke="#fff" strokeWidth="5" width="39" x="2.5" y="15.5"/></>
      ) : (
        <><rect height="17" rx="8.5" stroke="#0a0a0a" strokeWidth="5" width="39" x="2.5" y="15.5"/></>
      )}
    </svg>
  );
});
IkigaiLabs.displayName = "IkigaiLabs";
