import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { cx } from "@kaanolin/utils";
import { statusDotStyles, statusDotHaloStyles } from "./StatusDot.styles";

/* ========== StatusDot ========== */

export type StatusDotStatus = NonNullable<
  VariantProps<typeof statusDotStyles>["status"]
>;

export interface StatusDotProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statusDotStyles> {
  /** Render an outer pulsing halo (use for live/active states). */
  pulse?: boolean;
  /** Accessible label announced to screen readers. */
  label?: string;
}

const StatusDot = React.forwardRef<HTMLSpanElement, StatusDotProps>(
  ({ className, status, size, pulse, label, ...props }, ref) => (
    <span
      ref={ref}
      role={label ? "status" : undefined}
      aria-label={label}
      className={cx(statusDotStyles({ status, size }), className)}
      {...props}
    >
      {pulse && (
        <span
          aria-hidden="true"
          className={cx(statusDotHaloStyles({ status }))}
        />
      )}
    </span>
  ),
);

StatusDot.displayName = "StatusDot";

export { StatusDot };
