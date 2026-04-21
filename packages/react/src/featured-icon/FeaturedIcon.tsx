import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { cx } from "@kaanolin/utils";
import { featuredIconStyles, featuredIconSlotStyles } from "./FeaturedIcon.styles";

export interface FeaturedIconProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof featuredIconStyles> {}

const FeaturedIcon = React.forwardRef<HTMLSpanElement, FeaturedIconProps>(
  ({ className, size, shape, color, variant, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cx(
        featuredIconStyles({ size, shape, color, variant }),
        featuredIconSlotStyles({ size }),
        className,
      )}
      {...props}
    >
      {children}
    </span>
  ),
);

FeaturedIcon.displayName = "FeaturedIcon";

export { FeaturedIcon };
