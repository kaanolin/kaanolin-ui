// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const Quotient = forwardRef<SVGSVGElement, LogoProps>(function Quotient(
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
        <><g fill="#fff"><path clipRule="evenodd" d="m19.9957 35.3266c6.2579 0 11.3309-5.073 11.3309-11.3309s-5.073-11.3309-11.3309-11.3309-11.33089 5.073-11.33089 11.3309 5.07299 11.3309 11.33089 11.3309zm0 8.6648c11.0434 0 19.9957-8.9523 19.9957-19.9957 0-11.0433-8.9523-19.9957-19.9957-19.9957-11.04331 0-19.9957 8.9524-19.9957 19.9957 0 11.0434 8.95239 19.9957 19.9957 19.9957z" fillRule="evenodd" opacity=".7"/><path d="m20.2237 24.4335c2.0824-2.0823 5.4585-2.0823 7.5409 0l10.3686 10.3687c2.0824 2.0823 2.0824 5.4585 0 7.5409-2.0823 2.0823-5.4585 2.0823-7.5408 0l-10.3687-10.3687c-2.0823-2.0824-2.0823-5.4585 0-7.5409z" opacity=".7"/></g></>
      ) : (
        <><path clipRule="evenodd" d="m19.9957 35.3266c6.2579 0 11.3309-5.073 11.3309-11.3309s-5.073-11.3309-11.3309-11.3309-11.33089 5.073-11.33089 11.3309 5.07299 11.3309 11.33089 11.3309zm0 8.6648c11.0434 0 19.9957-8.9523 19.9957-19.9957 0-11.0433-8.9523-19.9957-19.9957-19.9957-11.04331 0-19.9957 8.9524-19.9957 19.9957 0 11.0434 8.95239 19.9957 19.9957 19.9957z" fill="#9333ea" fillRule="evenodd"/><path d="m20.2237 24.4335c2.0824-2.0823 5.4585-2.0823 7.5409 0l10.3686 10.3687c2.0824 2.0823 2.0824 5.4585 0 7.5409-2.0823 2.0823-5.4585 2.0823-7.5408 0l-10.3687-10.3687c-2.0823-2.0824-2.0823-5.4585 0-7.5409z" fill="#f472b6"/></>
      )}
    </svg>
  );
});
Quotient.displayName = "Quotient";
