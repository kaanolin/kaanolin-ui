import { Link, createFileRoute } from "@tanstack/react-router";
import { components } from "../lib/component-registry";
import { DocsPagination } from "../layout/DocsPagination";

function ComponentsIndex() {
  return (
    <article className="text-text-primary">
      <h1 className="text-4xl font-bold tracking-tight">Components</h1>
      <p className="mt-3 mb-8 text-lg text-text-secondary leading-relaxed">
        Composable React primitives built with Tailwind, Radix, and CVA. Pick a component from the
        sidebar to see preview, anatomy, API reference, examples, and accessibility notes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {components.map((c) => (
          <Link
            key={c.slug}
            to="/components/$slug"
            params={{ slug: c.slug }}
            className="group block rounded-lg border border-border-secondary bg-bg-primary p-4 hover:border-border-brand transition-colors"
          >
            <div className="font-medium text-text-primary">{c.name}</div>
            <p className="text-sm text-text-secondary mt-1 line-clamp-2">{c.description}</p>
            <code className="font-mono text-xs text-text-tertiary mt-2 block truncate">
              {c.importPath}
            </code>
          </Link>
        ))}
      </div>

      <DocsPagination currentSlug="/components" />
    </article>
  );
}

export const Route = createFileRoute("/components/")({
  component: ComponentsIndex,
});
