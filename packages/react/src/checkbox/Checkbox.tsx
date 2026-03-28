import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import type { VariantProps } from "class-variance-authority";
import { cx } from "@kaanolin/utils";
import {
  checkboxStyles,
  checkboxIndicatorStyles,
  checkboxLabelStyles,
  checkboxDescriptionStyles,
} from "./Checkbox.styles";

/* ========== Checkbox ========== */

export interface CheckboxProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
      "checked" | "defaultChecked" | "onCheckedChange"
    >,
    VariantProps<typeof checkboxStyles> {
  /** Controlled checked state. */
  checked?: boolean;
  /** Uncontrolled default checked state. */
  defaultChecked?: boolean;
  /** Called when the checked state changes. */
  onCheckedChange?: (checked: boolean | "indeterminate") => void;
  /** Display as indeterminate (partially checked). */
  indeterminate?: boolean;
  /** Text label rendered next to the checkbox. */
  label?: string;
  /** Description text rendered below the label. */
  description?: string;
  /** Show error styling. */
  error?: boolean;
}

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    {
      className,
      size,
      error = false,
      checked,
      defaultChecked,
      onCheckedChange,
      indeterminate = false,
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

    const resolvedChecked = indeterminate
      ? ("indeterminate" as const)
      : checked;

    return (
      <div className="flex items-start gap-2">
        <CheckboxPrimitive.Root
          ref={ref}
          id={id}
          className={cx(
            checkboxStyles({ size, error: !!error }),
            className,
          )}
          checked={resolvedChecked}
          defaultChecked={defaultChecked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
          {...props}
        >
          <CheckboxPrimitive.Indicator
            className={cx(checkboxIndicatorStyles({ size }))}
          >
            {indeterminate ? (
              <MinusIcon />
            ) : (
              <CheckIcon />
            )}
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>

        {(label || description) && (
          <div className="flex flex-col gap-0.5">
            {label && (
              <label
                htmlFor={id}
                className={cx(
                  checkboxLabelStyles(),
                  disabled && "cursor-not-allowed text-fg-disabled",
                )}
              >
                {label}
              </label>
            )}
            {description && (
              <span className={cx(checkboxDescriptionStyles())}>
                {description}
              </span>
            )}
          </div>
        )}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";

export { Checkbox };

/* ========== Inline SVG icons ========== */

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="100%"
    height="100%"
    {...props}
  >
    <path d="M10 3 4.5 8.5 2 6" />
  </svg>
);

const MinusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="100%"
    height="100%"
    {...props}
  >
    <path d="M2.5 6h7" />
  </svg>
);
