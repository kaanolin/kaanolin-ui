import * as React from "react";
import { cx } from "@kaanolin/utils";
import type { VariantProps } from "class-variance-authority";
import {
  sidebarStyles,
  sidebarHeaderStyles,
  sidebarContentStyles,
  sidebarFooterStyles,
  sidebarGroupStyles,
  sidebarGroupLabelStyles,
  sidebarItemStyles,
  sidebarItemBadgeStyles,
} from "./Sidebar.styles";

/* ========== Sidebar ========== */

export interface SidebarProps
  extends React.ComponentPropsWithoutRef<"aside">,
    VariantProps<typeof sidebarStyles> {}

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({ className, width, children, ...props }, ref) => (
    <aside
      ref={ref}
      className={cx(sidebarStyles({ width }), className)}
      {...props}
    >
      {children}
    </aside>
  ),
);

Sidebar.displayName = "Sidebar";

/* ========== SidebarHeader ========== */

export type SidebarHeaderProps = React.ComponentPropsWithoutRef<"div">;

const SidebarHeader = React.forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cx(sidebarHeaderStyles(), className)}
      {...props}
    />
  ),
);

SidebarHeader.displayName = "SidebarHeader";

/* ========== SidebarContent ========== */

export type SidebarContentProps = React.ComponentPropsWithoutRef<"div">;

const SidebarContent = React.forwardRef<HTMLDivElement, SidebarContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cx(sidebarContentStyles(), className)}
      {...props}
    />
  ),
);

SidebarContent.displayName = "SidebarContent";

/* ========== SidebarFooter ========== */

export type SidebarFooterProps = React.ComponentPropsWithoutRef<"div">;

const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cx(sidebarFooterStyles(), className)}
      {...props}
    />
  ),
);

SidebarFooter.displayName = "SidebarFooter";

/* ========== SidebarGroup ========== */

export type SidebarGroupProps = React.ComponentPropsWithoutRef<"div">;

const SidebarGroup = React.forwardRef<HTMLDivElement, SidebarGroupProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cx(sidebarGroupStyles(), className)}
      {...props}
    />
  ),
);

SidebarGroup.displayName = "SidebarGroup";

/* ========== SidebarGroupLabel ========== */

export type SidebarGroupLabelProps = React.ComponentPropsWithoutRef<"div">;

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  SidebarGroupLabelProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cx(sidebarGroupLabelStyles(), className)}
    {...props}
  />
));

SidebarGroupLabel.displayName = "SidebarGroupLabel";

/* ========== SidebarItem ========== */

export interface SidebarItemProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /** Optional icon rendered before the label. */
  icon?: React.ReactNode;
  /** Whether the item is currently active / selected. */
  active?: boolean;
  /** Optional badge value displayed on the right side. */
  badge?: string | number;
}

const SidebarItem = React.forwardRef<HTMLDivElement, SidebarItemProps>(
  ({ className, icon, active = false, badge, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cx(sidebarItemStyles({ active }), className)}
      {...props}
    >
      {icon && (
        <span className="shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="flex-1 truncate">{children}</span>
      {badge !== undefined && (
        <span className={cx(sidebarItemBadgeStyles())}>{badge}</span>
      )}
    </div>
  ),
);

SidebarItem.displayName = "SidebarItem";

/* ========== Exports ========== */

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarItem,
};
