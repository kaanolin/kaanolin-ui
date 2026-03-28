import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { cx } from "@kaanolin/utils";
import {
  tableWrapperStyles,
  tableStyles,
  tableHeaderStyles,
  tableBodyStyles,
  tableFooterStyles,
  tableRowStyles,
  tableHeadStyles,
  tableCellStyles,
  tableCaptionStyles,
} from "./Table.styles";

/* ========== Table ========== */

export type TableProps = React.HTMLAttributes<HTMLTableElement>;

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, ...props }, ref) => (
    <div className={cx(tableWrapperStyles())}>
      <table
        ref={ref}
        className={cx(tableStyles(), className)}
        {...props}
      />
    </div>
  ),
);
Table.displayName = "Table";

/* ========== TableHeader ========== */

export type TableHeaderProps = React.HTMLAttributes<HTMLTableSectionElement>;

const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, ...props }, ref) => (
    <thead
      ref={ref}
      className={cx(tableHeaderStyles(), className)}
      {...props}
    />
  ),
);
TableHeader.displayName = "TableHeader";

/* ========== TableBody ========== */

export type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>;

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, ...props }, ref) => (
    <tbody
      ref={ref}
      className={cx(tableBodyStyles(), className)}
      {...props}
    />
  ),
);
TableBody.displayName = "TableBody";

/* ========== TableFooter ========== */

export type TableFooterProps = React.HTMLAttributes<HTMLTableSectionElement>;

const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ className, ...props }, ref) => (
    <tfoot
      ref={ref}
      className={cx(tableFooterStyles(), className)}
      {...props}
    />
  ),
);
TableFooter.displayName = "TableFooter";

/* ========== TableRow ========== */

export type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>;

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cx(tableRowStyles(), className)}
      {...props}
    />
  ),
);
TableRow.displayName = "TableRow";

/* ========== TableHead ========== */

export type TableHeadProps = React.ThHTMLAttributes<HTMLTableCellElement>;

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cx(tableHeadStyles(), className)}
      {...props}
    />
  ),
);
TableHead.displayName = "TableHead";

/* ========== TableCell ========== */

export interface TableCellProps
  extends Omit<React.TdHTMLAttributes<HTMLTableCellElement>, "align">,
    VariantProps<typeof tableCellStyles> {}

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, align, ...props }, ref) => (
    <td
      ref={ref}
      className={cx(tableCellStyles({ align }), className)}
      {...props}
    />
  ),
);
TableCell.displayName = "TableCell";

/* ========== TableCaption ========== */

export type TableCaptionProps = React.HTMLAttributes<HTMLTableCaptionElement>;

const TableCaption = React.forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  ({ className, ...props }, ref) => (
    <caption
      ref={ref}
      className={cx(tableCaptionStyles(), className)}
      {...props}
    />
  ),
);
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
};
