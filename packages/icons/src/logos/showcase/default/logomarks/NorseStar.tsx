// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const NorseStar = forwardRef<SVGSVGElement, LogoProps>(function NorseStar(
  { size, mode = "light", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const viewBox = mode === "dark" ? "0 0 38 48" : "0 0 38 48";
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
        <><path d="M17.1019 28.5854V43H20.9019V28.5883L31.0921 38.7785L33.7791 36.0915L23.5876 25.9H38V22.1H23.5873L33.7788 11.9085L31.0918 9.22148L20.9019 19.4114V5H17.1019V19.4143L6.90904 9.22146L4.22203 11.9085L14.4136 22.1H0V25.9H14.4133L4.22175 36.0915L6.90875 38.7785L17.1019 28.5854Z" fill="white"/></>
      ) : (
        <><path d="M17.1019 28.5854V43H20.9019V28.5883L31.0921 38.7785L33.7791 36.0915L23.5876 25.9H38V22.1H23.5873L33.7788 11.9085L31.0918 9.22148L20.9019 19.4114V5H17.1019V19.4143L6.90904 9.22146L4.22203 11.9085L14.4136 22.1H0V25.9H14.4133L4.22175 36.0915L6.90875 38.7785L17.1019 28.5854Z" fill="#0A0A0A"/></>
      )}
    </svg>
  );
});
NorseStar.displayName = "NorseStar";
