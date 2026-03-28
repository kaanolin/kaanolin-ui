import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cx } from "@kaanolin/utils";
import type { VariantProps } from "class-variance-authority";
import {
  tabsListStyles,
  tabsTriggerStyles,
  tabsContentStyles,
  tabsBadgeStyles,
} from "./Tabs.styles";

/* ========== Tabs (Root) ========== */

const Tabs = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Root ref={ref} className={cx(className)} {...props} />
));
Tabs.displayName = "Tabs";

/* ========== TabsList ========== */

type TabsListVariants = VariantProps<typeof tabsListStyles>;

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    TabsListVariants {}

const TabsListContext = React.createContext<{
  variant?: TabsListVariants["variant"];
  size?: TabsListVariants["size"];
  fullWidth?: TabsListVariants["fullWidth"];
}>({});

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, variant, size, fullWidth, ...props }, ref) => (
  <TabsListContext.Provider value={{ variant, size, fullWidth }}>
    <TabsPrimitive.List
      ref={ref}
      className={cx(tabsListStyles({ variant, size, fullWidth }), className)}
      {...props}
    />
  </TabsListContext.Provider>
));
TabsList.displayName = "TabsList";

/* ========== TabsTrigger ========== */

export interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  /** Optional icon rendered before the label. */
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  /** Optional badge count rendered after the label. */
  badge?: number;
}

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, icon: Icon, badge, children, ...props }, ref) => {
  const { variant, size, fullWidth } = React.useContext(TabsListContext);

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cx(
        tabsTriggerStyles({ variant, size, fullWidth }),
        className,
      )}
      {...props}
    >
      {Icon && <Icon className="size-4 shrink-0" aria-hidden="true" />}
      {children}
      {badge !== undefined && (
        <span className={cx(tabsBadgeStyles({ size }), "bg-bg-secondary text-text-tertiary")}>
          {badge}
        </span>
      )}
    </TabsPrimitive.Trigger>
  );
});
TabsTrigger.displayName = "TabsTrigger";

/* ========== TabsContent ========== */

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cx(tabsContentStyles(), className)}
    {...props}
  />
));
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };
