import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cx } from "@kaanolin/utils";
import { progressTrackStyles, progressIndicatorStyles } from "./Progress.styles";

/* ========== Progress ========== */

export interface ProgressProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
      "value" | "max" | "color"
    >,
    VariantProps<typeof progressTrackStyles>,
    VariantProps<typeof progressIndicatorStyles> {
  /** Current progress value (0 to max). */
  value?: number;
  /** Maximum value. Defaults to 100. */
  max?: number;
}

const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, size, color, value = 0, max = 100, ...props }, ref) => {
  const clampedValue = Math.min(Math.max(value, 0), max);
  const percentage = max > 0 ? (clampedValue / max) * 100 : 0;

  return (
    <ProgressPrimitive.Root
      className={cx(progressTrackStyles({ size }), className)}
      ref={ref}
      value={clampedValue}
      max={max}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cx(progressIndicatorStyles({ color }))}
        style={{ transform: `translateX(-${100 - percentage}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});

Progress.displayName = "Progress";

export { Progress };
