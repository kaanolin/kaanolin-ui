import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cx } from "@kaanolin/utils";
import {
  sliderRootStyles,
  sliderTrackStyles,
  sliderRangeStyles,
  sliderThumbStyles,
} from "./Slider.styles";

export interface SliderProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    "disabled"
  >,
  VariantProps<typeof sliderRootStyles> {
  /** Whether the slider is disabled. */
  disabled?: boolean;
}

const Slider = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      className,
      size,
      disabled = false,
      value,
      defaultValue,
      ...props
    },
    ref,
  ) => {
    // Determine how many thumbs to render based on value or defaultValue
    const thumbCount = value?.length ?? defaultValue?.length ?? 1;

    return (
      <SliderPrimitive.Root
        ref={ref}
        className={cx(sliderRootStyles({ size }), className)}
        disabled={disabled}
        value={value}
        defaultValue={defaultValue}
        {...props}
      >
        <SliderPrimitive.Track className={cx(sliderTrackStyles({ size }))}>
          <SliderPrimitive.Range className={cx(sliderRangeStyles())} />
        </SliderPrimitive.Track>
        {Array.from({ length: thumbCount }, (_, i) => (
          <SliderPrimitive.Thumb
            key={i}
            className={cx(sliderThumbStyles({ size, disabled }))}
          />
        ))}
      </SliderPrimitive.Root>
    );
  },
);

Slider.displayName = "Slider";

export { Slider };
