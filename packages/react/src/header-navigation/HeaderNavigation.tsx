import * as React from "react";
import { cx } from "@kaanolin/utils";
import {
  headerNavStyles,
  headerNavLogoStyles,
  headerNavItemsStyles,
  headerNavItemStyles,
  headerNavActionsStyles,
} from "./HeaderNavigation.styles";

/* ========== HeaderNav ========== */

export type HeaderNavProps = React.ComponentPropsWithoutRef<"nav">;

const HeaderNav = React.forwardRef<HTMLElement, HeaderNavProps>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      className={cx(headerNavStyles(), className)}
      {...props}
    />
  ),
);

HeaderNav.displayName = "HeaderNav";

/* ========== HeaderNavLogo ========== */

export type HeaderNavLogoProps = React.ComponentPropsWithoutRef<"div">;

const HeaderNavLogo = React.forwardRef<HTMLDivElement, HeaderNavLogoProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cx(headerNavLogoStyles(), className)}
      {...props}
    />
  ),
);

HeaderNavLogo.displayName = "HeaderNavLogo";

/* ========== HeaderNavItems ========== */

export type HeaderNavItemsProps = React.ComponentPropsWithoutRef<"div">;

const HeaderNavItems = React.forwardRef<HTMLDivElement, HeaderNavItemsProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cx(headerNavItemsStyles(), className)}
      {...props}
    />
  ),
);

HeaderNavItems.displayName = "HeaderNavItems";

/* ========== HeaderNavItem ========== */

export interface HeaderNavItemProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /** Whether the nav item is currently active. */
  active?: boolean;
  /** When provided, renders as an anchor element. */
  href?: string;
}

const HeaderNavItem = React.forwardRef<
  HTMLDivElement | HTMLAnchorElement,
  HeaderNavItemProps
>(({ className, active = false, href, children, ...props }, ref) => {
  const classes = cx(headerNavItemStyles({ active }), className);

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...(props as React.ComponentPropsWithoutRef<"a">)}
      >
        {children}
      </a>
    );
  }

  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      className={classes}
      {...props}
    >
      {children}
    </div>
  );
});

HeaderNavItem.displayName = "HeaderNavItem";

/* ========== HeaderNavActions ========== */

export type HeaderNavActionsProps = React.ComponentPropsWithoutRef<"div">;

const HeaderNavActions = React.forwardRef<
  HTMLDivElement,
  HeaderNavActionsProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cx(headerNavActionsStyles(), className)}
    {...props}
  />
));

HeaderNavActions.displayName = "HeaderNavActions";

/* ========== Exports ========== */

export {
  HeaderNav,
  HeaderNavLogo,
  HeaderNavItems,
  HeaderNavItem,
  HeaderNavActions,
};
