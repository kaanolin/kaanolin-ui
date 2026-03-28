import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { VariantProps } from "class-variance-authority";
import { cx } from "@kaanolin/utils";
import {
  sheetOverlayStyles,
  sheetContentStyles,
  sheetHeaderStyles,
  sheetTitleStyles,
  sheetDescriptionStyles,
  sheetFooterStyles,
  sheetCloseButtonStyles,
} from "./Sheet.styles";

/* ========== Sheet (Root) ========== */

const Sheet = DialogPrimitive.Root;
Sheet.displayName = "Sheet";

/* ========== SheetTrigger ========== */

const SheetTrigger = DialogPrimitive.Trigger;
SheetTrigger.displayName = "SheetTrigger";

/* ========== SheetClose ========== */

const SheetClose = DialogPrimitive.Close;
SheetClose.displayName = "SheetClose";

/* ========== SheetContent ========== */

export interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof sheetContentStyles> {}

const SheetContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  SheetContentProps
>(({ className, side = "right", children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className={cx(sheetOverlayStyles())} data-testid="sheet-overlay" />
    <DialogPrimitive.Content
      ref={ref}
      className={cx(sheetContentStyles({ side }), className)}
      {...props}
    >
      {children}
      <DialogPrimitive.Close
        className={cx(sheetCloseButtonStyles())}
        aria-label="Close"
      >
        <CloseIcon />
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
SheetContent.displayName = "SheetContent";

/* ========== SheetHeader ========== */

export type SheetHeaderProps = React.HTMLAttributes<HTMLDivElement>;

const SheetHeader = React.forwardRef<HTMLDivElement, SheetHeaderProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cx(sheetHeaderStyles(), className)} {...props} />
  ),
);
SheetHeader.displayName = "SheetHeader";

/* ========== SheetTitle ========== */

export type SheetTitleProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;

const SheetTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  SheetTitleProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cx(sheetTitleStyles(), className)}
    {...props}
  />
));
SheetTitle.displayName = "SheetTitle";

/* ========== SheetDescription ========== */

export type SheetDescriptionProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;

const SheetDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  SheetDescriptionProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cx(sheetDescriptionStyles(), className)}
    {...props}
  />
));
SheetDescription.displayName = "SheetDescription";

/* ========== SheetFooter ========== */

export type SheetFooterProps = React.HTMLAttributes<HTMLDivElement>;

const SheetFooter = React.forwardRef<HTMLDivElement, SheetFooterProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cx(sheetFooterStyles(), className)} {...props} />
  ),
);
SheetFooter.displayName = "SheetFooter";

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
};

/* ========== Inline SVG ========== */

const CloseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);
