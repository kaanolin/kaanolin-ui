import type { ReactNode } from "react";

function slug(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Section heading that registers itself into QuickNav via `data-heading`.
 * Use H2 for top-level sections and H3 for sub-sections.
 */
export function H2({ children }: { children: ReactNode }) {
  const text = typeof children === "string" ? children : String(children);
  const id = slug(text);
  return (
    <h2
      id={id}
      data-heading
      className="scroll-mt-20 text-2xl font-semibold tracking-tight text-text-primary mt-12 mb-4"
    >
      <a href={`#${id}`} className="no-underline hover:text-text-primary">
        {children}
      </a>
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  const text = typeof children === "string" ? children : String(children);
  const id = slug(text);
  return (
    <h3
      id={id}
      data-heading
      className="scroll-mt-20 text-lg font-semibold text-text-primary mt-8 mb-3"
    >
      <a href={`#${id}`} className="no-underline hover:text-text-primary">
        {children}
      </a>
    </h3>
  );
}
