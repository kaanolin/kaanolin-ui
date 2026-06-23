import { forwardRef, type SVGProps } from "react";

import { ICON_BODIES, type IconName } from "./icons.gen";

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  /** Untitled UI line-icon name. */
  name: IconName;
  /** Square size in px (default 24). */
  size?: number | string;
}

/**
 * Untitled UI line icon, rendered by name. The line set is uniform (24×24,
 * currentColor stroke, width 2, round caps), so the wrapper carries those
 * attributes and only the inner paths vary per icon.
 */
const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 24, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      // eslint-disable-next-line react/no-danger -- icon markup is build-time, trusted
      dangerouslySetInnerHTML={{ __html: ICON_BODIES[name] }}
      {...props}
    />
  ),
);

Icon.displayName = "Icon";

export { Icon };
export type { IconName };
