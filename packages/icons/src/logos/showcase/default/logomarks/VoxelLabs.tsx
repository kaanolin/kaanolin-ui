// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const VoxelLabs = forwardRef<SVGSVGElement, LogoProps>(function VoxelLabs(
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
        <><g fill="#fff"><path d="m0 37h7v7h-7z"/><path d="m7 37h7v7h-7z" opacity=".6"/><path d="m14 37h7v7h-7z" opacity=".32"/><path d="m21 37h7v7h-7z" opacity=".07"/><path d="m0 30h7v7h-7z" opacity=".6"/><path d="m7 30h7v7h-7z" opacity=".32"/><path d="m7 23h7v7h-7z" opacity=".07"/><path d="m14 30h7v7h-7z" opacity=".07"/><path d="m0 23h7v7h-7z" opacity=".32"/><path d="m0 16h7v7h-7z" opacity=".07"/><path d="m33 4h7v7h-7z"/><path d="m33 11h7v7h-7z" opacity=".6"/><path d="m26 11h7v7h-7z" opacity=".32"/><path d="m19 11h7v7h-7z" opacity=".07"/><path d="m33 18h7v7h-7z" opacity=".32"/><path d="m26 18h7v7h-7z" opacity=".07"/><path d="m33 25h7v7h-7z" opacity=".07"/><path d="m26 4h7v7h-7z" opacity=".6"/><path d="m19 4h7v7h-7z" opacity=".32"/><path d="m12 4h7v7h-7z" opacity=".07"/></g></>
      ) : (
        <><g fill="#0a0a0a"><path d="m0 37h7v7h-7z"/><path d="m7 37h7v7h-7z" opacity=".6"/><path d="m14 37h7v7h-7z" opacity=".32"/><path d="m21 37h7v7h-7z" opacity=".07"/><path d="m0 30h7v7h-7z" opacity=".6"/><path d="m7 30h7v7h-7z" opacity=".32"/><path d="m7 23h7v7h-7z" opacity=".07"/><path d="m14 30h7v7h-7z" opacity=".07"/><path d="m0 23h7v7h-7z" opacity=".32"/><path d="m0 16h7v7h-7z" opacity=".07"/><path d="m33 4h7v7h-7z"/><path d="m33 11h7v7h-7z" opacity=".6"/><path d="m26 11h7v7h-7z" opacity=".32"/><path d="m19 11h7v7h-7z" opacity=".07"/><path d="m33 18h7v7h-7z" opacity=".32"/><path d="m26 18h7v7h-7z" opacity=".07"/><path d="m33 25h7v7h-7z" opacity=".07"/><path d="m26 4h7v7h-7z" opacity=".6"/><path d="m19 4h7v7h-7z" opacity=".32"/><path d="m12 4h7v7h-7z" opacity=".07"/></g></>
      )}
    </svg>
  );
});
VoxelLabs.displayName = "VoxelLabs";
