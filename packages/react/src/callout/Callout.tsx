import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { cx } from "@kaanolin/utils";
import {
  calloutStyles,
  calloutIconStyles,
  calloutBodyStyles,
  calloutTitleStyles,
  calloutDescriptionStyles,
} from "./Callout.styles";

type CalloutTone = NonNullable<VariantProps<typeof calloutStyles>["tone"]>;

export interface CalloutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof calloutStyles> {
  /** Optional leading icon. When omitted, a default glyph is picked per tone. */
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  /** Optional heading shown above the description. */
  title?: string;
}

const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  ({ className, tone, icon: Icon, title, children, ...props }, ref) => {
    const effectiveTone = (tone ?? "info") as CalloutTone;
    const FallbackIcon = Icon ?? defaultIconByTone[effectiveTone];
    return (
      <div
        ref={ref}
        role="note"
        className={cx(calloutStyles({ tone }), className)}
        {...props}
      >
        {FallbackIcon ? (
          <FallbackIcon className={cx(calloutIconStyles())} aria-hidden="true" />
        ) : null}
        <div className={cx(calloutBodyStyles())}>
          {title ? <p className={cx(calloutTitleStyles())}>{title}</p> : null}
          {children ? <div className={cx(calloutDescriptionStyles())}>{children}</div> : null}
        </div>
      </div>
    );
  },
);

Callout.displayName = "Callout";

export { Callout };

const baseIconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const InfoIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...baseIconProps} {...p}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const SuccessIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...baseIconProps} {...p}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const WarningIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...baseIconProps} {...p}>
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const ErrorIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...baseIconProps} {...p}>
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

const defaultIconByTone: Record<CalloutTone, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  info: InfoIcon,
  success: SuccessIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  neutral: InfoIcon,
};
