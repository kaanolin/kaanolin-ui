// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const Luckycharm = forwardRef<SVGSVGElement, LogoProps>(function Luckycharm(
  { size, mode = "light", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const viewBox = mode === "dark" ? "0 0 39 48" : "0 0 39 48";
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
        <><g fill="#fff"><path d="m30 4.5c4.9706 0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9h-9v-9c0-4.97056 4.0294-9 9-9z" opacity=".5"/><path d="m0 13.5c0-4.97056 4.02944-9 9-9 4.9706 0 9 4.02944 9 9v9h-9c-4.97056 0-9-4.0294-9-9z"/><path d="m9 43.5c-4.97056 0-9.00000006-4.0294-9-9s4.02944-9 9-9h9v9c0 4.9706-4.0294 9-9 9z"/><path d="m39 34.5c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9v-9h9c4.9706 0 9 4.0294 9 9z"/></g></>
      ) : (
        <><g fill="#15803d"><path d="m30 4.5c4.9706 0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9h-9v-9c0-4.97056 4.0294-9 9-9z" opacity=".5"/><path d="m0 13.5c0-4.97056 4.02944-9 9-9 4.9706 0 9 4.02944 9 9v9h-9c-4.97056 0-9-4.0294-9-9z"/><path d="m9 43.5c-4.97056 0-9.00000006-4.0294-9-9s4.02944-9 9-9h9v9c0 4.9706-4.0294 9-9 9z"/><path d="m39 34.5c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9v-9h9c4.9706 0 9 4.0294 9 9z"/></g></>
      )}
    </svg>
  );
});
Luckycharm.displayName = "Luckycharm";
