// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Seychelles = forwardRef<SVGSVGElement, FlagProps>(function Seychelles(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M16.7503 2.62254C14.9714 0.993945 12.6018 0 9.99996 0C9.57402 0 9.1543 0.0268359 8.74234 0.0785156L3.91301 5.65219L0.316406 12.5051C0.54875 13.4059 0.903984 14.2573 1.3623 15.0409L9.99996 10L16.7503 2.62254Z" fill="#FFDA44"/>
<path d="M18.3249 15.5405L4.33398 18.2405C5.94449 19.3499 7.89598 20 9.99949 20C13.473 20 16.5323 18.2288 18.3249 15.5405Z" fill="#6DA544"/>
<path d="M16.7509 2.6239L1.36719 15.0507C1.76957 15.7369 2.25133 16.3709 2.80004 16.94L19.9991 10C19.9991 7.07976 18.7471 4.4521 16.7509 2.6239Z" fill="#D80027"/>
<path d="M0 9.99998C0 10.8651 0.109922 11.7045 0.316445 12.5051L8.74238 0.0784912C3.8132 0.697007 0 4.9031 0 9.99998Z" fill="#0052B4"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M9.19742 0L0 20L16.6932 0H9.19742Z" fill="#FFDA44"/>
<path d="M20 14.3004L0 19.9999H20V14.3004Z" fill="#6DA544"/>
<path d="M20 0H16.6932L0 20L20 8.01664V0Z" fill="#D80027"/>
<path d="M0 0V20L9.19742 0H0Z" fill="#0052B4"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0H0V20H30V0Z" fill="#F0F0F0"/>
<path d="M13.7961 0L0 20L25.0397 0H13.7961Z" fill="#FFDA44"/>
<path d="M30 14.3004L0 19.9999H30V14.3004Z" fill="#6DA544"/>
<path d="M30 0H25.0397L0 20L30 8.01661V0Z" fill="#D80027"/>
<path d="M0 0V20L13.7961 0H0Z" fill="#0052B4"/></> }
  };
  const s = shapes[shape] ?? shapes["circle"]!;
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={s.viewBox}
      fill="none"
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {s.body}
    </svg>
  );
});
Seychelles.displayName = "Seychelles";
