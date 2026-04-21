import { Link } from "@tanstack/react-router";
import { getAdjacent } from "../lib/routes";

export function DocsPagination({ currentSlug }: { currentSlug: string }) {
  const { prev, next } = getAdjacent(currentSlug);
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-between mt-12 pt-8 border-t border-border-secondary"
    >
      {prev ? (
        <Link
          to={prev.slug}
          className="group flex flex-col items-start gap-0.5 hover:text-text-primary"
        >
          <span className="text-xs text-text-tertiary">Previous</span>
          <span className="text-base text-text-secondary group-hover:text-text-primary">
            ← {prev.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          to={next.slug}
          className="group flex flex-col items-end gap-0.5 hover:text-text-primary text-right"
        >
          <span className="text-xs text-text-tertiary">Next</span>
          <span className="text-base text-text-secondary group-hover:text-text-primary">
            {next.title} →
          </span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
