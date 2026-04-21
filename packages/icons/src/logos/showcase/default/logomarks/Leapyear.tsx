// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const Leapyear = forwardRef<SVGSVGElement, LogoProps>(function Leapyear(
  { size, mode = "light", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const viewBox = mode === "dark" ? "0 0 32 48" : "0 0 32 48";
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
        <><g fill="#fff"><path d="m21.3333 18.6667v-10.6667h-21.3333v10.6667z"/><path d="m21.3329 29.3332c-5.891 0-10.6667 4.7757-10.6667 10.6667l-10.66489681.0004v-.2753c.14659281-11.6097 9.56705681-20.9847 21.19429681-21.058l10.8044.0005v21.3333h-10.6667z"/></g></>
      ) : (
        <><g fill="#f59e0b"><path d="m21.3333 18.6667v-10.6667h-21.3333v10.6667z"/><path d="m21.3329 29.3332c-5.891 0-10.6667 4.7757-10.6667 10.6667l-10.66489681.0004v-.2753c.14659281-11.6097 9.56705681-20.9847 21.19429681-21.058l10.8044.0005v21.3333h-10.6667z"/></g></>
      )}
    </svg>
  );
});
Leapyear.displayName = "Leapyear";
