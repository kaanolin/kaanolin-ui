import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import type { VariantProps } from "class-variance-authority";
import { cx } from "@kaanolin/utils";
import {
  radioGroupStyles,
  radioItemStyles,
  radioLabelStyles,
  radioDescriptionStyles,
} from "./RadioGroup.styles";

/* ========== RadioGroup ========== */

export interface RadioGroupProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
      "orientation"
    >,
    VariantProps<typeof radioGroupStyles> {}

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, orientation = "vertical", ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cx(radioGroupStyles({ orientation }), className)}
    orientation={orientation ?? "vertical"}
    {...props}
  />
));

RadioGroup.displayName = "RadioGroup";

/* ========== RadioGroupItem ========== */

export interface RadioGroupItemProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
      "id"
    >,
    VariantProps<typeof radioItemStyles> {
  /** Text label rendered next to the radio button. */
  label?: string;
  /** Description text rendered below the label. */
  description?: string;
  /** HTML id attribute. Auto-generated if not provided. */
  id?: string;
}

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(
  (
    {
      className,
      size,
      disabled = false,
      label,
      description,
      id: idProp,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const id = idProp ?? generatedId;

    return (
      <div className="flex items-start gap-2">
        <RadioGroupPrimitive.Item
          ref={ref}
          id={id}
          className={cx(radioItemStyles({ size }), className)}
          disabled={disabled}
          {...props}
        >
          {/* The radio dot is rendered via thick border, no indicator child needed */}
        </RadioGroupPrimitive.Item>

        {(label || description) && (
          <div className="flex flex-col gap-0.5">
            {label && (
              <label
                htmlFor={id}
                className={cx(
                  radioLabelStyles(),
                  disabled && "cursor-not-allowed text-fg-disabled",
                )}
              >
                {label}
              </label>
            )}
            {description && (
              <span className={cx(radioDescriptionStyles())}>
                {description}
              </span>
            )}
          </div>
        )}
      </div>
    );
  },
);

RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };
