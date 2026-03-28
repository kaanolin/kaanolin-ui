import * as React from "react";
import { cx } from "@kaanolin/utils";
import {
  emptyStateRootStyles,
  emptyStateIconStyles,
  emptyStateTitleStyles,
  emptyStateDescriptionStyles,
  emptyStateActionsStyles,
} from "./EmptyState.styles";

/* ========== EmptyState (root) ========== */

export type EmptyStateProps = React.HTMLAttributes<HTMLDivElement>;

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cx(emptyStateRootStyles, className)} {...props}>
      {children}
    </div>
  ),
);

EmptyState.displayName = "EmptyState";

/* ========== EmptyStateIcon ========== */

export type EmptyStateIconProps = React.HTMLAttributes<HTMLDivElement>;

const EmptyStateIcon = React.forwardRef<HTMLDivElement, EmptyStateIconProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cx(emptyStateIconStyles, className)} {...props}>
      {children}
    </div>
  ),
);

EmptyStateIcon.displayName = "EmptyStateIcon";

/* ========== EmptyStateTitle ========== */

export type EmptyStateTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

const EmptyStateTitle = React.forwardRef<
  HTMLHeadingElement,
  EmptyStateTitleProps
>(({ className, children, ...props }, ref) => (
  <h3 ref={ref} className={cx(emptyStateTitleStyles, className)} {...props}>
    {children}
  </h3>
));

EmptyStateTitle.displayName = "EmptyStateTitle";

/* ========== EmptyStateDescription ========== */

export type EmptyStateDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

const EmptyStateDescription = React.forwardRef<
  HTMLParagraphElement,
  EmptyStateDescriptionProps
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cx(emptyStateDescriptionStyles, className)}
    {...props}
  >
    {children}
  </p>
));

EmptyStateDescription.displayName = "EmptyStateDescription";

/* ========== EmptyStateActions ========== */

export type EmptyStateActionsProps = React.HTMLAttributes<HTMLDivElement>;

const EmptyStateActions = React.forwardRef<
  HTMLDivElement,
  EmptyStateActionsProps
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cx(emptyStateActionsStyles, className)} {...props}>
    {children}
  </div>
));

EmptyStateActions.displayName = "EmptyStateActions";

export {
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateActions,
};
