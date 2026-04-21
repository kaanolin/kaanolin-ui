import { Link, createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@kaanolin/react";
import { H2 } from "../components/Heading";
import { DocsPagination } from "../layout/DocsPagination";

function Landing() {
  return (
    <article className="text-text-primary">
      <h1 className="text-4xl font-bold tracking-tight">Introduction</h1>
      <p className="mt-3 mb-8 text-lg text-text-secondary leading-relaxed">
        Kaanolin UI is a React design system of composable components and 6,115 icons — built
        with Tailwind 4, Radix, and CVA. Tree-shakeable, currentColor-themed, Netflix-style icons.
      </p>

      <H2>Vision</H2>
      <p className="text-text-secondary leading-relaxed">
        Kaanolin UI delivers an unstyled, unopinionated, accessible set of primitives composed
        into a consistent visual language. Every component forwards refs and composes with
        headless libraries; every icon respects the 24px design grid and renders with
        currentColor so themes cascade from CSS alone.
      </p>

      <H2>Key features</H2>
      <ul className="space-y-2 text-text-secondary list-disc pl-6">
        <li>40+ React components with variants powered by CVA.</li>
        <li>6,115 icons across line, solid, duotone and duocolor variants.</li>
        <li>Tree-shakeable subpath imports — pay only for what you use.</li>
        <li>Accessible by default: ARIA roles, keyboard support, focus management.</li>
        <li>Dark mode via CSS variables — no prop switching required.</li>
      </ul>

      <H2>Installation</H2>
      <p className="text-text-secondary mb-3">
        Install the React package and, optionally, the icon library.
      </p>
      <CodeBlock language="bash" code={`npm install @kaanolin/react @kaanolin/react-icons`} />

      <H2>Next steps</H2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link
          to="/getting-started"
          className="block rounded-lg border border-border-secondary bg-bg-primary p-4 hover:border-border-brand transition-colors"
        >
          <div className="font-medium text-text-primary">Getting started →</div>
          <p className="text-sm text-text-secondary mt-1">
            Set up Tailwind, import styles, and render your first component.
          </p>
        </Link>
        <Link
          to="/components"
          className="block rounded-lg border border-border-secondary bg-bg-primary p-4 hover:border-border-brand transition-colors"
        >
          <div className="font-medium text-text-primary">Browse components →</div>
          <p className="text-sm text-text-secondary mt-1">
            Every component with live previews, code, and API reference.
          </p>
        </Link>
      </div>

      <DocsPagination currentSlug="/" />
    </article>
  );
}

export const Route = createFileRoute("/")({
  component: Landing,
});
