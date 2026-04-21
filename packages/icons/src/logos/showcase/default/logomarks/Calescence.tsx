// [logo-showcase] generated from source/icons/Logos/
import { forwardRef } from "react";
import type { LogoProps } from "../../../../types";

export const Calescence = forwardRef<SVGSVGElement, LogoProps>(function Calescence(
  { size, mode = "light", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const viewBox = mode === "dark" ? "0 0 35 48" : "0 0 35 48";
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
        <><g clipRule="evenodd" fill="#fff" fillRule="evenodd"><path d="m34.6416 14v8.0492h-9.9697v-2.2927z"/><path d="m34.6394 14.0001-9.9697 5.7565-7.3513-4.2436v-11.513z" opacity=".9"/><path d="m17.3207 4v11.513l-7.34902 4.2436-9.96972688-5.7565z" opacity=".8"/><path d="m9.96973 19.7565v8.4868l-9.96973 5.756v-19.9993z" opacity=".7"/><path d="m17.3187 32.4871v11.5129l-17.3187-10.0006 9.96973-5.756z" opacity=".6"/><path d="m34.6394 33.9994-17.321 10.0006v-11.5129l7.3513-4.2437z" opacity=".5"/><path d="m34.6416 25.9507v8.0487l-9.9697-5.756v-2.2927z" opacity=".4"/></g></>
      ) : (
        <><g clipRule="evenodd" fill="#2563eb" fillRule="evenodd"><path d="m34.6416 14v8.0492h-9.9697v-2.2927z"/><path d="m34.6394 14.0001-9.9697 5.7565-7.3513-4.2436v-11.513z" opacity=".9"/><path d="m17.3207 4v11.513l-7.34902 4.2436-9.96972688-5.7565z" opacity=".8"/><path d="m9.96973 19.7565v8.4868l-9.96973 5.756v-19.9993z" opacity=".7"/><path d="m17.3187 32.4871v11.5129l-17.3187-10.0006 9.96973-5.756z" opacity=".6"/><path d="m34.6394 33.9994-17.321 10.0006v-11.5129l7.3513-4.2437z" opacity=".5"/><path d="m34.6416 25.9507v8.0487l-9.9697-5.756v-2.2927z" opacity=".4"/></g></>
      )}
    </svg>
  );
});
Calescence.displayName = "Calescence";
