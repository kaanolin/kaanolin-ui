// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const Foresight = forwardRef<SVGSVGElement, LogoProps>(function Foresight(
  { size, mode = "light", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const viewBox = mode === "dark" ? "0 0 31 48" : "0 0 31 48";
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
        <><g fill="#fff"><path d="m0 17.8433 30.9054-17.8433-.8189 12.6994-26.32053 15.1961z"/><path d="m3.76562 27.8951 21.73568-12.5492-.8189 12.6994-17.15081 9.902z" opacity=".5"/><path d="m7.5293 37.9477 12.566-7.255-.8189 12.6994-7.9811 4.6079z" opacity=".25"/></g></>
      ) : (
        <><g fill="#4f46e5"><path d="m0 17.8433 30.9054-17.8433-.8189 12.6994-26.32053 15.1961z"/><path d="m3.76562 27.8951 21.73568-12.5492-.8189 12.6994-17.15081 9.902z" opacity=".5"/><path d="m7.5293 37.9477 12.566-7.255-.8189 12.6994-7.9811 4.6079z" opacity=".25"/></g></>
      )}
    </svg>
  );
});
Foresight.displayName = "Foresight";
