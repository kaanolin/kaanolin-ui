import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cx } from "@kaanolin/utils";
import {
  tooltipContentStyles,
  tooltipTitleStyles,
  tooltipDescriptionStyles,
  tooltipArrowStyles,
} from "./Tooltip.styles";

export interface TooltipProps {
  /** The tooltip title text. */
  content: string;
  /** Optional supporting description text. */
  description?: string;
  /** Which side the tooltip appears on. */
  side?: "top" | "right" | "bottom" | "left";
  /** Distance in px from the trigger. */
  sideOffset?: number;
  /** Delay in ms before showing the tooltip. */
  delayDuration?: number;
  /** The trigger element. */
  children: React.ReactNode;
  /** Additional className merged onto the content element. */
  className?: string;
}

const Tooltip = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  TooltipProps
>(
  (
    {
      content,
      description,
      side = "top",
      sideOffset = 4,
      delayDuration = 200,
      children,
      className,
    },
    ref,
  ) => {
    return (
      <TooltipPrimitive.Provider delayDuration={delayDuration}>
        <TooltipPrimitive.Root>
          <TooltipPrimitive.Trigger asChild>
            {children}
          </TooltipPrimitive.Trigger>
          <TooltipPrimitive.Portal>
            <TooltipPrimitive.Content
              ref={ref}
              side={side}
              sideOffset={sideOffset}
              className={cx(tooltipContentStyles(), className)}
            >
              <p className={cx(tooltipTitleStyles())}>{content}</p>
              {description && (
                <p className={cx(tooltipDescriptionStyles())}>{description}</p>
              )}
              <TooltipPrimitive.Arrow
                className={cx(tooltipArrowStyles())}
              />
            </TooltipPrimitive.Content>
          </TooltipPrimitive.Portal>
        </TooltipPrimitive.Root>
      </TooltipPrimitive.Provider>
    );
  },
);

Tooltip.displayName = "Tooltip";

export { Tooltip };
