// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const Visionwork = forwardRef<SVGSVGElement, LogoProps>(function Visionwork(
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
        <><g fill="#fff"><path d="m35.8177 36.8043c-.5005 1.0368-1.5503 1.6957-2.7016 1.6957h-16.3076c-2.2193 0-3.6703-2.3261-2.6944-4.3193l11.2624-23c.5037-1.0286 1.5491-1.6807 2.6944-1.6807h16.1486c2.212 0 3.6633 2.3122 2.7017 4.3042z"/><path d="m6.87054 26.7399c1.05114 2.3025 4.30556 2.3487 5.42166.077l6.3838-12.9941c.9793-1.9934-.4716-4.3228-2.6926-4.3228h-12.31585c-2.18399 0-3.6360556 2.2591-2.729061 4.2459z" opacity=".5"/></g></>
      ) : (
        <><g fill="#4f46e5"><path d="m35.8177 36.8043c-.5005 1.0368-1.5503 1.6957-2.7016 1.6957h-16.3076c-2.2193 0-3.6703-2.3261-2.6944-4.3193l11.2624-23c.5037-1.0286 1.5491-1.6807 2.6944-1.6807h16.1486c2.212 0 3.6633 2.3122 2.7017 4.3042z"/><path d="m6.87054 26.7399c1.05114 2.3025 4.30556 2.3487 5.42166.077l6.3838-12.9941c.9793-1.9934-.4716-4.3228-2.6926-4.3228h-12.31585c-2.18399 0-3.6360556 2.2591-2.729061 4.2459z" opacity=".5"/></g></>
      )}
    </svg>
  );
});
Visionwork.displayName = "Visionwork";
