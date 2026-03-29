import * as React from "react";
import { cx } from "@kaanolin/utils";
import {
  dataSourceBadgeStyles,
  dataSourceBadgeLinkStyles,
  dataSourceBadgeDateStyles,
} from "./DataSourceBadge.styles";

export interface DataSourceBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  /** Name of the data source. */
  source: string;
  /** ISO date string of last update. */
  lastUpdated?: string;
  /** URL linking to the data source. */
  url?: string;
  /** BCP 47 locale for date formatting (default: "en-US"). */
  locale?: string;
  className?: string;
}

const DataSourceBadge = React.forwardRef<HTMLSpanElement, DataSourceBadgeProps>(
  ({ className, source, lastUpdated, url, locale = "en-US", ...props }, ref) => (
    <span
      ref={ref}
      className={cx(dataSourceBadgeStyles(), className)}
      {...props}
    >
      <DatabaseIcon />

      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={cx(dataSourceBadgeLinkStyles())}
        >
          {source}
        </a>
      ) : (
        <span>{source}</span>
      )}

      {lastUpdated && (
        <>
          <span aria-hidden="true">&middot;</span>
          <span className={cx(dataSourceBadgeDateStyles())}>
            {new Intl.DateTimeFormat(locale, {
              day: "numeric",
              month: "short",
              year: "numeric",
            }).format(new Date(lastUpdated))}
          </span>
        </>
      )}
    </span>
  ),
);

DataSourceBadge.displayName = "DataSourceBadge";

export { DataSourceBadge };

/* ========== Inline SVG ========== */

const DatabaseIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <ellipse cx="6" cy="3" rx="4" ry="1.5" />
    <path d="M2 3v6c0 .828 1.79 1.5 4 1.5s4-.672 4-1.5V3" />
    <path d="M2 6c0 .828 1.79 1.5 4 1.5s4-.672 4-1.5" />
  </svg>
);
