// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const ImgCompress = forwardRef<SVGSVGElement, LogoProps>(function ImgCompress(
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
        <><g fill="#fff"><path d="m16 4c0 8.8366-7.16344 16-16 16 4.90695 0 9.46995 1.4726 13.2712 4 6.4668-4.2997 10.7288-11.6521 10.7288-20z"/><path d="m40 20c-8.8366 0-16-7.1634-16-16 0 4.90695-1.4726 9.47-4 13.2712 4.2997 6.4668 11.6521 10.7288 20 10.7288z" opacity=".8"/><path d="m24 44c0-8.8366 7.1634-16 16-16-4.9069 0-9.47-1.4726-13.2712-4-6.4668 4.2997-10.7288 11.6521-10.7288 20z" opacity=".6"/><path d="m.00000035 28c8.83655965 0 15.99999965 7.1634 15.99999965 16 0-4.907 1.4726-9.47 4-13.2712-4.2997-6.4668-11.65212-10.7288-20-10.7288z" opacity=".4"/></g></>
      ) : (
        <><g fill="#2563eb"><path d="m16 4c0 8.8366-7.16344 16-16 16 4.90695 0 9.46995 1.4726 13.2712 4 6.4668-4.2997 10.7288-11.6521 10.7288-20z"/><path d="m40 20c-8.8366 0-16-7.1634-16-16 0 4.90695-1.4726 9.47-4 13.2712 4.2997 6.4668 11.6521 10.7288 20 10.7288z" opacity=".8"/><path d="m24 44c0-8.8366 7.1634-16 16-16-4.9069 0-9.47-1.4726-13.2712-4-6.4668 4.2997-10.7288 11.6521-10.7288 20z" opacity=".6"/><path d="m.00000035 28c8.83655965 0 15.99999965 7.1634 15.99999965 16 0-4.907 1.4726-9.47 4-13.2712-4.2997-6.4668-11.65212-10.7288-20-10.7288z" opacity=".4"/></g></>
      )}
    </svg>
  );
});
ImgCompress.displayName = "ImgCompress";
