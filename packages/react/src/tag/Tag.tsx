import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { cx } from "@kaanolin/utils";
import {
  tagStyles,
  tagCloseStyles,
  tagAvatarStyles,
  tagIconStyles,
} from "./Tag.styles";

export type TagColor = NonNullable<VariantProps<typeof tagStyles>["color"]>;

export interface TagProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    Omit<VariantProps<typeof tagStyles>, "disabled"> {
  /** Leading icon component. */
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  /** Avatar — pass a URL string or a React node. */
  avatar?: string | React.ReactNode;
  /** Called when the dismiss button is clicked. When provided, a close button is shown. */
  onDismiss?: () => void;
  /** Whether the tag is disabled. */
  disabled?: boolean;
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      className,
      color,
      size,
      disabled,
      icon: Icon,
      avatar,
      onDismiss,
      onClick,
      children,
      ...props
    },
    ref,
  ) => (
    <span
      ref={ref}
      className={cx(
        tagStyles({ color, size, disabled: disabled || undefined }),
        className,
      )}
      onClick={disabled ? undefined : onClick}
      {...props}
    >
      {avatar != null &&
        (typeof avatar === "string" ? (
          <img
            src={avatar}
            alt=""
            aria-hidden="true"
            className={cx(tagAvatarStyles({ size }))}
          />
        ) : (
          <span
            aria-hidden="true"
            className={cx(tagAvatarStyles({ size }))}
          >
            {avatar}
          </span>
        ))}

      {Icon && (
        <Icon
          aria-hidden="true"
          className={cx(tagIconStyles({ size }))}
        />
      )}

      {children}

      {onDismiss && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onDismiss();
          }}
          className={cx(tagCloseStyles({ color, size }))}
          aria-label="Dismiss"
          disabled={disabled}
        >
          <CloseIcon />
        </button>
      )}
    </span>
  ),
);

Tag.displayName = "Tag";

export { Tag };

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
