// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Argentina = forwardRef<SVGSVGElement, FlagProps>(function Argentina(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M9.99992 0C6.03531 0 2.60969 2.30723 0.992188 5.65219H19.0076C17.3902 2.30723 13.9645 0 9.99992 0Z" fill="#338AF3"/>
<path d="M9.99992 20C13.9645 20 17.3902 17.6928 19.0077 14.3478H0.992188C2.60969 17.6928 6.03531 20 9.99992 20Z" fill="#338AF3"/>
<path d="M12.9895 9.99998L11.7682 10.5745L12.4185 11.7572L11.0923 11.5035L10.9243 12.8432L10.0006 11.8579L9.07684 12.8432L8.90883 11.5035L7.58266 11.7572L8.23297 10.5744L7.01172 9.99998L8.23301 9.42549L7.58266 8.24275L8.90879 8.49643L9.07687 7.15674L10.0006 8.14205L10.9243 7.15674L11.0923 8.49643L12.4186 8.24275L11.7682 9.42553L12.9895 9.99998Z" fill="#FFDA44"/></> },
    square: { viewBox: "0 0 20 20", body: <><path d="M20 0.000244141H0V19.9998H20V0.000244141Z" fill="#F0F0F0"/>
<path d="M20 0H0V6.66652H20V0Z" fill="#338AF3"/>
<path d="M20 13.3335H0V20H20V13.3335Z" fill="#338AF3"/>
<path d="M12.5 9.99999L11.4785 10.4805L12.0224 11.4698L10.9132 11.2576L10.7726 12.3782L10 11.5541L9.22734 12.3782L9.08684 11.2576L7.97758 11.4698L8.52148 10.4805L7.5 9.99999L8.52152 9.51948L7.97758 8.53022L9.0868 8.74233L9.22738 7.62183L10 8.44593L10.7727 7.62183L10.9132 8.74233L12.0225 8.53022L11.4785 9.51952L12.5 9.99999Z" fill="#FFDA44"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><path d="M30 0.00012207H0V20.0001H30V0.00012207Z" fill="#F0F0F0"/>
<path d="M30 0.00012207H0V6.66677H30V0.00012207Z" fill="#338AF3"/>
<path d="M30 13.3335H0V20.0001H30V13.3335Z" fill="#338AF3"/>
<path d="M17.3917 10.0001L16.4146 10.4597L16.9349 11.406L15.8739 11.203L15.7395 12.2748L15.0005 11.4865L14.2615 12.2748L14.1271 11.203L13.0662 11.4059L13.5864 10.4596L12.6094 10.0001L13.5865 9.5405L13.0662 8.59431L14.1271 8.79723L14.2615 7.72546L15.0005 8.51374L15.7395 7.72546L15.8739 8.79723L16.9349 8.59431L16.4146 9.54056L17.3917 10.0001Z" fill="#FFDA44"/></> }
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
Argentina.displayName = "Argentina";
