import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { cx } from "@kaanolin/utils";
import {
  statCardStyles,
  statCardLabelStyles,
  statCardValueStyles,
  statCardDeltaStyles,
  statCardDescriptionStyles,
} from "./StatCard.styles";

export interface StatCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof statCardStyles> {
  /** Label above the value. */
  label: string;
  /** The main metric value. */
  value: string;
  /** Optional delta indicator. */
  delta?: string;
  /** Direction of the delta. */
  deltaType?: "up" | "down" | "neutral";
  /** Optional description below the value. */
  description?: string;
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  (
    {
      className,
      variant,
      size,
      label,
      value,
      delta,
      deltaType = "neutral",
      description,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cx(statCardStyles({ variant, size }), className)}
      {...props}
    >
      <span className={cx(statCardLabelStyles({ size }))}>{label}</span>
      <span className={cx(statCardValueStyles({ variant, size }))}>{value}</span>
      {delta && (
        <span className={cx(statCardDeltaStyles({ deltaType }))}>
          {deltaType === "up" && <ArrowUpIcon />}
          {deltaType === "down" && <ArrowDownIcon />}
          {delta}
        </span>
      )}
      {description && (
        <span className={cx(statCardDescriptionStyles({ size }))}>
          {description}
        </span>
      )}
    </div>
  ),
);

StatCard.displayName = "StatCard";

export { StatCard };

const ArrowUpIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 10V2" />
    <path d="m2.5 5.5 3.5-3.5 3.5 3.5" />
  </svg>
);

const ArrowDownIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 2v8" />
    <path d="m2.5 6.5 3.5 3.5 3.5-3.5" />
  </svg>
);
