// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const PictelAI = forwardRef<SVGSVGElement, LogoProps>(function PictelAI(
  { size, mode = "light", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const viewBox = mode === "dark" ? "0 0 48 48" : "0 0 48 48";
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
        <><g fill="#fff"><path d="m20.5742 20.5713h6.85714v6.85714h-6.85714z"/><path d="m20.5742 27.4287h6.85714v6.85714h-6.85714z" opacity=".6"/><path d="m27.4258 27.4287h6.85714v6.85714h-6.85714z" opacity=".32"/><path d="m34.2852 27.4287h6.85714v6.85714h-6.85714z" opacity=".07"/><path d="m13.7148 27.4287h6.85714v6.85714h-6.85714z" opacity=".32"/><path d="m6.85742 27.4287h6.85714v6.85714h-6.85714z" opacity=".07"/><path d="m20.5742 34.2856h6.85714v6.85714h-6.85714z" opacity=".32"/><path d="m13.7148 34.2856h6.85714v6.85714h-6.85714z" opacity=".07"/><path d="m27.4258 34.2856h6.85714v6.85714h-6.85714z" opacity=".07"/><path d="m20.5742 41.1431h6.85714v6.85714h-6.85714z" opacity=".07"/><path d="m13.7148 20.5713h6.85714v6.85714h-6.85714z" opacity=".6"/><path d="m6.85742 20.5713h6.85714v6.85714h-6.85714z" opacity=".32"/><path d="m0 20.5713h6.85714v6.85714h-6.85714z" opacity=".07"/><path d="m27.4258 20.5713h6.85714v6.85714h-6.85714z" opacity=".6"/><path d="m34.2852 20.5713h6.85714v6.85714h-6.85714z" opacity=".32"/><path d="m41.1426 20.5713h6.85714v6.85714h-6.85714z" opacity=".07"/><path d="m20.5742 13.7144h6.85714v6.85714h-6.85714z" opacity=".6"/><path d="m13.7148 13.7144h6.85714v6.85714h-6.85714z" opacity=".32"/><path d="m13.7148 6.85693h6.85714v6.85714h-6.85714z" opacity=".07"/><path d="m6.85742 13.7144h6.85714v6.85714h-6.85714z" opacity=".07"/><path d="m27.4258 13.7144h6.85714v6.85714h-6.85714z" opacity=".32"/><path d="m27.4258 6.85693h6.85714v6.85714h-6.85714z" opacity=".07"/><path d="m34.2852 13.7144h6.85714v6.85714h-6.85714z" opacity=".07"/><path d="m20.5742 6.85693h6.85714v6.85714h-6.85714z" opacity=".32"/><path d="m20.5742 0h6.85714v6.85714h-6.85714z" opacity=".07"/></g></>
      ) : (
        <><g fill="#0a0a0a"><path d="m20.5742 20.5713h6.85714v6.85714h-6.85714z"/><path d="m20.5742 27.4287h6.85714v6.85714h-6.85714z" opacity=".6"/><path d="m27.4258 27.4287h6.85714v6.85714h-6.85714z" opacity=".32"/><path d="m34.2852 27.4287h6.85714v6.85714h-6.85714z" opacity=".07"/><path d="m13.7148 27.4287h6.85714v6.85714h-6.85714z" opacity=".32"/><path d="m6.85742 27.4287h6.85714v6.85714h-6.85714z" opacity=".07"/><path d="m20.5742 34.2856h6.85714v6.85714h-6.85714z" opacity=".32"/><path d="m13.7148 34.2856h6.85714v6.85714h-6.85714z" opacity=".07"/><path d="m27.4258 34.2856h6.85714v6.85714h-6.85714z" opacity=".07"/><path d="m20.5742 41.1431h6.85714v6.85714h-6.85714z" opacity=".07"/><path d="m13.7148 20.5713h6.85714v6.85714h-6.85714z" opacity=".6"/><path d="m6.85742 20.5713h6.85714v6.85714h-6.85714z" opacity=".32"/><path d="m0 20.5713h6.85714v6.85714h-6.85714z" opacity=".07"/><path d="m27.4258 20.5713h6.85714v6.85714h-6.85714z" opacity=".6"/><path d="m34.2852 20.5713h6.85714v6.85714h-6.85714z" opacity=".32"/><path d="m41.1426 20.5713h6.85714v6.85714h-6.85714z" opacity=".07"/><path d="m20.5742 13.7144h6.85714v6.85714h-6.85714z" opacity=".6"/><path d="m13.7148 13.7144h6.85714v6.85714h-6.85714z" opacity=".32"/><path d="m13.7148 6.85693h6.85714v6.85714h-6.85714z" opacity=".07"/><path d="m6.85742 13.7144h6.85714v6.85714h-6.85714z" opacity=".07"/><path d="m27.4258 13.7144h6.85714v6.85714h-6.85714z" opacity=".32"/><path d="m27.4258 6.85693h6.85714v6.85714h-6.85714z" opacity=".07"/><path d="m34.2852 13.7144h6.85714v6.85714h-6.85714z" opacity=".07"/><path d="m20.5742 6.85693h6.85714v6.85714h-6.85714z" opacity=".32"/><path d="m20.5742 0h6.85714v6.85714h-6.85714z" opacity=".07"/></g></>
      )}
    </svg>
  );
});
PictelAI.displayName = "PictelAI";
