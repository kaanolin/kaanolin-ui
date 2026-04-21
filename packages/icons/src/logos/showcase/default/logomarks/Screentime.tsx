// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const Screentime = forwardRef<SVGSVGElement, LogoProps>(function Screentime(
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
        <><path clipRule="evenodd" d="m24.0001 9c-.0001-3.866-3.1341-7-7.0001-7h-9c-4.41828 0-8 3.58172-8 8v28c0 4.4183 3.58172 8 8 8h9c3.866 0 7-3.134 7-7 9.7067 0 17.8424-6.3971 20-15-2.1576-8.6029-10.2932-15-19.9999-15zm-.0001 9 .0001-9c-9.7068.00003-17.84245 6.3971-20.0001 15 2.15765 8.6029 10.2933 15 20 15v-9c3.3137 0 6-2.6863 6-6s-2.6863-6-6-6zm0 0v12c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6z" fill="#fff" fillRule="evenodd"/></>
      ) : (
        <><path clipRule="evenodd" d="m24.0001 9c-.0001-3.866-3.1341-7-7.0001-7h-9c-4.41828 0-8 3.58172-8 8v28c0 4.4183 3.58172 8 8 8h9c3.866 0 7-3.134 7-7 9.7067 0 17.8424-6.3971 20-15-2.1576-8.6029-10.2932-15-19.9999-15zm-.0001 9 .0001-9c-9.7068.00003-17.84245 6.3971-20.0001 15 2.15765 8.6029 10.2933 15 20 15v-9c3.3137 0 6-2.6863 6-6s-2.6863-6-6-6zm0 0v12c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6z" fill="#1d4ed8" fillRule="evenodd"/></>
      )}
    </svg>
  );
});
Screentime.displayName = "Screentime";
