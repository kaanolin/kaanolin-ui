// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const Quixotic = forwardRef<SVGSVGElement, LogoProps>(function Quixotic(
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
        <><g fill="#fff"><path d="m10 24c0-5.5228 4.4772-10 10-10 5.5229 0 10 4.4772 10 10h10c0-11.0457-8.9543-20-20-20-11.04569 0-19.99999903 8.9543-20 20s8.9543 20 20 20v-10c-5.5228 0-10-4.4771-10-10z"/><path d="m20 24h10v10h-10z" opacity=".5"/><path d="m37.3244 34h-7.3244v7.3244c3.0363-1.7564 5.568-4.2881 7.3244-7.3244z"/></g></>
      ) : (
        <><g fill="#7c3aed"><path d="m10 24c0-5.5228 4.4772-10 10-10 5.5229 0 10 4.4772 10 10h10c0-11.0457-8.9543-20-20-20-11.04569 0-19.99999903 8.9543-20 20s8.9543 20 20 20v-10c-5.5228 0-10-4.4771-10-10z"/><path d="m20 24h10v10h-10z" opacity=".5"/><path d="m37.3244 34h-7.3244v7.3244c3.0363-1.7564 5.568-4.2881 7.3244-7.3244z"/></g></>
      )}
    </svg>
  );
});
Quixotic.displayName = "Quixotic";
