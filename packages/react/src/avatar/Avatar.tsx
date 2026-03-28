import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { cx } from "@kaanolin/utils";
import {
  avatarStyles,
  avatarImageStyles,
  avatarFallbackStyles,
  avatarStatusStyles,
} from "./Avatar.styles";

export type AvatarSize = NonNullable<VariantProps<typeof avatarStyles>["size"]>;
export type AvatarShape = NonNullable<
  VariantProps<typeof avatarStyles>["shape"]
>;
export type AvatarStatus = NonNullable<
  VariantProps<typeof avatarStatusStyles>["status"]
>;

export interface AvatarProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children">,
    VariantProps<typeof avatarStyles> {
  /** Image source URL. */
  src?: string;
  /** Alt text for the image. */
  alt?: string;
  /** Full name used to derive initials as fallback. */
  name?: string;
  /** Status indicator: online, offline, away, busy. */
  status?: AvatarStatus;
}

/**
 * Derive up to two initials from a full name.
 * "John Doe" → "JD", "Alice" → "A"
 */
function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, size, shape, src, alt, name, status, ...props }, ref) => {
    const [imgError, setImgError] = React.useState(false);

    // Reset error state when src changes
    React.useEffect(() => {
      setImgError(false);
    }, [src]);

    const showImage = src && !imgError;
    const initials = name ? getInitials(name) : "";

    return (
      <span
        ref={ref}
        className={cx(avatarStyles({ size, shape }), className)}
        {...props}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt ?? name ?? ""}
            className={cx(avatarImageStyles())}
            onError={() => setImgError(true)}
          />
        ) : initials ? (
          <span
            className={cx(avatarFallbackStyles({ size }))}
            aria-hidden="true"
          >
            {initials}
          </span>
        ) : (
          <span
            className={cx(avatarFallbackStyles({ size }))}
            aria-hidden="true"
          >
            <UserIcon />
          </span>
        )}

        {status && (
          <span
            className={cx(avatarStatusStyles({ status, size }))}
            aria-label={status}
          />
        )}
      </span>
    );
  },
);

Avatar.displayName = "Avatar";

export { Avatar };

/* ========== Inline SVG ========== */

const UserIcon = () => (
  <svg
    width="60%"
    height="60%"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
