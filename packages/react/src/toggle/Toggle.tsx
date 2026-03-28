import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import * as Switch from "@radix-ui/react-switch";
import { cx } from "@kaanolin/utils";
import {
  toggleTrackStyles,
  toggleThumbStyles,
  toggleLabelStyles,
  toggleDescriptionStyles,
} from "./Toggle.styles";

/* ========== Toggle ========== */

export interface ToggleProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Switch.Root>, "size">,
    VariantProps<typeof toggleTrackStyles> {
  /** Text label displayed next to the switch. */
  label?: string;
  /** Helper description displayed below the label. */
  description?: string;
}

const Toggle = React.forwardRef<
  React.ComponentRef<typeof Switch.Root>,
  ToggleProps
>(({ className, size, label, description, id, disabled, ...props }, ref) => {
  const generatedId = React.useId();
  const switchId = id || generatedId;

  const switchElement = (
    <Switch.Root
      className={cx(toggleTrackStyles({ size }), className)}
      ref={ref}
      id={switchId}
      disabled={disabled}
      {...props}
    >
      <Switch.Thumb className={cx(toggleThumbStyles({ size }))} />
    </Switch.Root>
  );

  if (!label && !description) {
    return switchElement;
  }

  return (
    <div className="flex items-start gap-2">
      {switchElement}
      <div className="flex flex-col">
        {label && (
          <label htmlFor={switchId} className={cx(toggleLabelStyles())}>
            {label}
          </label>
        )}
        {description && (
          <span className={cx(toggleDescriptionStyles())}>{description}</span>
        )}
      </div>
    </div>
  );
});

Toggle.displayName = "Toggle";

export { Toggle };
