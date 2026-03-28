import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { cx } from "@kaanolin/utils";
import {
  badgeStyles,
  badgeDotStyles,
  badgeCloseStyles,
  badgeIconStyles,
} from "./Badge.styles";

export type BadgeColor = NonNullable<VariantProps<typeof badgeStyles>["color"]>;

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof badgeStyles> {
  /** Show a dot indicator before the label. */
  dot?: boolean;
  /** Leading icon component. */
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  /** Show a close/dismiss button. Fires `onDismiss` when clicked. */
  dismissible?: boolean;
  /** Called when the dismiss button is clicked. */
  onDismiss?: () => void;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      color,
      size,
      shape,
      dot,
      icon: Icon,
      dismissible,
      onDismiss,
      children,
      ...props
    },
    ref,
  ) => (
    <span
      ref={ref}
      className={cx(badgeStyles({ color, size, shape }), className)}
      {...props}
    >
      {dot && (
        <span
          className={cx(badgeDotStyles({ color }))}
          aria-hidden="true"
        />
      )}

      {Icon && (
        <Icon
          aria-hidden="true"
          className={cx(badgeIconStyles({ size }))}
        />
      )}

      {children}

      {dismissible && (
        <button
          type="button"
          onClick={onDismiss}
          className={cx(badgeCloseStyles({ color, size }))}
          aria-label="Dismiss"
        >
          <CloseIcon />
        </button>
      )}
    </span>
  ),
);

Badge.displayName = "Badge";

export { Badge };

/* ========== Inline SVG ========== */

const CloseIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 3 3 9" />
    <path d="m3 3 6 6" />
  </svg>
);
