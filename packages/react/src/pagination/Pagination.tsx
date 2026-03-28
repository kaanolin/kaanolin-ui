import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { cx } from "@kaanolin/utils";
import {
  paginationStyles,
  paginationContentStyles,
  paginationItemStyles,
  paginationLinkStyles,
  paginationNavStyles,
  paginationEllipsisStyles,
} from "./Pagination.styles";

/* ========== Pagination (nav root) ========== */

export interface PaginationProps extends React.ComponentPropsWithoutRef<"nav"> {}

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      role="navigation"
      aria-label="pagination"
      className={cx(paginationStyles(), className)}
      {...props}
    />
  ),
);

Pagination.displayName = "Pagination";

/* ========== PaginationContent (ul) ========== */

export interface PaginationContentProps
  extends React.ComponentPropsWithoutRef<"ul"> {}

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  PaginationContentProps
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cx(paginationContentStyles(), className)}
    {...props}
  />
));

PaginationContent.displayName = "PaginationContent";

/* ========== PaginationItem (li) ========== */

export interface PaginationItemProps
  extends React.ComponentPropsWithoutRef<"li"> {}

const PaginationItem = React.forwardRef<HTMLLIElement, PaginationItemProps>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      className={cx(paginationItemStyles(), className)}
      {...props}
    />
  ),
);

PaginationItem.displayName = "PaginationItem";

/* ========== PaginationLink (button) ========== */

export interface PaginationLinkProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof paginationLinkStyles> {
  isActive?: boolean;
}

const PaginationLink = React.forwardRef<HTMLButtonElement, PaginationLinkProps>(
  ({ className, isActive = false, size, children, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      aria-current={isActive ? "page" : undefined}
      className={cx(
        paginationLinkStyles({ size, isActive: !!isActive }),
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);

PaginationLink.displayName = "PaginationLink";

/* ========== PaginationPrevious ========== */

export interface PaginationPreviousProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof paginationNavStyles> {}

const PaginationPrevious = React.forwardRef<
  HTMLButtonElement,
  PaginationPreviousProps
>(({ className, disabled = false, children, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    aria-label="Go to previous page"
    disabled={!!disabled}
    className={cx(paginationNavStyles({ disabled: !!disabled }), className)}
    {...props}
  >
    <ChevronLeftIcon aria-hidden="true" />
    {children ?? <span>Previous</span>}
  </button>
));

PaginationPrevious.displayName = "PaginationPrevious";

/* ========== PaginationNext ========== */

export interface PaginationNextProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof paginationNavStyles> {}

const PaginationNext = React.forwardRef<
  HTMLButtonElement,
  PaginationNextProps
>(({ className, disabled = false, children, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    aria-label="Go to next page"
    disabled={!!disabled}
    className={cx(paginationNavStyles({ disabled: !!disabled }), className)}
    {...props}
  >
    {children ?? <span>Next</span>}
    <ChevronRightIcon aria-hidden="true" />
  </button>
));

PaginationNext.displayName = "PaginationNext";

/* ========== PaginationEllipsis ========== */

export interface PaginationEllipsisProps
  extends React.ComponentPropsWithoutRef<"span"> {}

const PaginationEllipsis = React.forwardRef<
  HTMLSpanElement,
  PaginationEllipsisProps
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    aria-hidden="true"
    className={cx(paginationEllipsisStyles(), className)}
    {...props}
  >
    &#8230;
  </span>
));

PaginationEllipsis.displayName = "PaginationEllipsis";

/* ========== Exports ========== */

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};

/* ========== Inline SVG icons ========== */

const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12.5 5 7.5 10 12.5 15" />
  </svg>
);

const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M7.5 5 12.5 10 7.5 15" />
  </svg>
);
