// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const Shutterframe = forwardRef<SVGSVGElement, LogoProps>(function Shutterframe(
  { size, mode = "light", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const viewBox = mode === "dark" ? "0 0 33 48" : "0 0 33 48";
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
        <><g fill="#fff"><path d="m8.90776 17.2143 14.84614-8.57144-8.9077-5.14286-14.84586752 8.5713-.00033248 17.1426 8.90769 5.1429z"/><path d="m32.8965 17.7859v17.1429l-14.8462 8.5711-8.90772-5.1429 14.84612-8.5714.0001-17.1425z"/></g></>
      ) : (
        <><g fill="#0a0a0a"><path d="m8.90776 17.2143 14.84614-8.57144-8.9077-5.14286-14.84586752 8.5713-.00033248 17.1426 8.90769 5.1429z"/><path d="m32.8965 17.7859v17.1429l-14.8462 8.5711-8.90772-5.1429 14.84612-8.5714.0001-17.1425z"/></g></>
      )}
    </svg>
  );
});
Shutterframe.displayName = "Shutterframe";
