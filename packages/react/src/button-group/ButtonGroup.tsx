import * as React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import type { VariantProps } from "class-variance-authority";
import { cx } from "@kaanolin/utils";
import {
  buttonGroupStyles,
  buttonGroupItemStyles,
  buttonGroupIconStyles,
} from "./ButtonGroup.styles";

/* ========== Context for sharing size ========== */

type ButtonGroupSize = NonNullable<
  VariantProps<typeof buttonGroupItemStyles>["size"]
>;

const SizeContext = React.createContext<ButtonGroupSize>("md");

/* ========== ButtonGroup ========== */

export interface ButtonGroupProps {
  /** Selection mode. */
  type: "single" | "multiple";
  /** Controlled value (string for single, string[] for multiple). */
  value?: string | string[];
  /** Uncontrolled default value. */
  defaultValue?: string | string[];
  /** Called when the value changes. */
  onValueChange?: (value: string | string[]) => void;
  /** Size applied to all items. */
  size?: ButtonGroupSize;
  /** Disable the entire group. */
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      type,
      value,
      defaultValue,
      onValueChange,
      size = "md",
      disabled,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const rootProps =
      type === "single"
        ? {
            type: "single" as const,
            value: value as string | undefined,
            defaultValue: defaultValue as string | undefined,
            onValueChange: onValueChange as
              | ((value: string) => void)
              | undefined,
          }
        : {
            type: "multiple" as const,
            value: value as string[] | undefined,
            defaultValue: defaultValue as string[] | undefined,
            onValueChange: onValueChange as
              | ((value: string[]) => void)
              | undefined,
          };

    return (
      <SizeContext.Provider value={size}>
        <ToggleGroup.Root
          ref={ref}
          {...rootProps}
          disabled={disabled}
          className={cx(buttonGroupStyles(), className)}
          {...props}
        >
          {children}
        </ToggleGroup.Root>
      </SizeContext.Provider>
    );
  },
);

ButtonGroup.displayName = "ButtonGroup";

/* ========== ButtonGroupItem ========== */

export interface ButtonGroupItemProps {
  /** Unique value for this item. */
  value: string;
  /** Disable this item. */
  disabled?: boolean;
  /** Leading icon component. */
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
  children?: React.ReactNode;
}

const ButtonGroupItem = React.forwardRef<HTMLButtonElement, ButtonGroupItemProps>(
  ({ value, disabled, icon: Icon, className, children, ...props }, ref) => {
    const size = React.useContext(SizeContext);

    return (
      <ToggleGroup.Item
        ref={ref}
        value={value}
        disabled={disabled}
        className={cx(buttonGroupItemStyles({ size }), className)}
        {...props}
      >
        {Icon && (
          <Icon
            aria-hidden="true"
            className={cx(buttonGroupIconStyles({ size }))}
          />
        )}
        {children}
      </ToggleGroup.Item>
    );
  },
);

ButtonGroupItem.displayName = "ButtonGroupItem";

export { ButtonGroup, ButtonGroupItem };
