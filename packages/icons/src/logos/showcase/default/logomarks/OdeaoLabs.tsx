// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const OdeaoLabs = forwardRef<SVGSVGElement, LogoProps>(function OdeaoLabs(
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
        <><g fill="#fff"><path d="m0 4h10v10h-10z"/><path d="m20 4h10v10h-10z" opacity=".6"/><path d="m10 14h10v10h-10z" opacity=".6"/><path d="m20 14h10v10h-10z" opacity=".45"/><path d="m30 14h10v10h-10z" opacity=".3"/><path d="m0 24h10v10h-10z" opacity=".6"/><path d="m10 24h10v10h-10z" opacity=".45"/><path d="m20 24h10v10h-10z" opacity=".3"/><path d="m30 24h10v10h-10z" opacity=".15"/><path d="m10 34h10v10h-10z" opacity=".3"/><path d="m20 34h10v10h-10z" opacity=".15"/></g></>
      ) : (
        <><g fill="#2563eb"><path d="m0 4h10v10h-10z"/><path d="m20 4h10v10h-10z" opacity=".6"/><path d="m10 14h10v10h-10z" opacity=".6"/><path d="m20 14h10v10h-10z" opacity=".45"/><path d="m30 14h10v10h-10z" opacity=".3"/><path d="m0 24h10v10h-10z" opacity=".6"/><path d="m10 24h10v10h-10z" opacity=".45"/><path d="m20 24h10v10h-10z" opacity=".3"/><path d="m30 24h10v10h-10z" opacity=".15"/><path d="m10 34h10v10h-10z" opacity=".3"/><path d="m20 34h10v10h-10z" opacity=".15"/></g></>
      )}
    </svg>
  );
});
OdeaoLabs.displayName = "OdeaoLabs";
