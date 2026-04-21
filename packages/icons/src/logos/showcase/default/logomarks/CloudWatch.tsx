// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const CloudWatch = forwardRef<SVGSVGElement, LogoProps>(function CloudWatch(
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
        <><g fill="#fff"><circle cx="27.5" cy="23.5" r="14.5"/><path d="m14.7196 16.6448c-1.1618-.4174-2.4141-.6448-3.7196-.6448-6.07513 0-11 4.9249-11 11s4.92487 11 11 11h16.5c-8.0081 0-14.5-6.4919-14.5-14.5 0-2.4797.6224-4.814 1.7196-6.8552z" opacity=".5"/></g></>
      ) : (
        <><circle cx="27.5" cy="23.5" fill="#7c3aed" r="14.5"/><path d="m14.7196 16.6448c-1.1618-.4174-2.4141-.6448-3.7196-.6448-6.07513 0-11 4.9249-11 11s4.92487 11 11 11h16.5c-8.0081 0-14.5-6.4919-14.5-14.5 0-2.4797.6224-4.814 1.7196-6.8552z" fill="#3b82f6"/></>
      )}
    </svg>
  );
});
CloudWatch.displayName = "CloudWatch";
