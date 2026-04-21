import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock, Callout } from "@kaanolin/react";
import { H2 } from "../components/Heading";
import { DocsPagination } from "../layout/DocsPagination";

function GettingStarted() {
  return (
    <article className="text-text-primary">
      <h1 className="text-4xl font-bold tracking-tight">Getting started</h1>
      <p className="mt-3 mb-8 text-lg text-text-secondary leading-relaxed">
        Add Kaanolin UI to a React + Tailwind 4 project in three steps.
      </p>

      <H2>1. Install</H2>
      <CodeBlock language="bash" code={`npm install @kaanolin/react @kaanolin/react-icons`} />

      <H2>2. Import the styles</H2>
      <p className="text-text-secondary mb-3">
        Import the Tailwind entrypoint plus Kaanolin's design tokens in your app's global CSS.
      </p>
      <CodeBlock
        language="css"
        code={`@import "tailwindcss";
@import "@kaanolin/react/styles";

/* Optionally scope tokens to dark mode */
html[data-theme="dark"] body { background: #09090b; }`}
      />

      <H2>3. Render a component</H2>
      <CodeBlock
        language="tsx"
        code={`import { Button } from "@kaanolin/react/button";
import { Heart } from "@kaanolin/react-icons/line/general";
import { FeaturedIcon } from "@kaanolin/react/featured-icon";

export function Demo() {
  return (
    <div className="flex gap-3 items-center">
      <FeaturedIcon size="xl" color="brand">
        <Heart />
      </FeaturedIcon>
      <Button>Get started</Button>
    </div>
  );
}`}
      />

      <Callout tone="info" title="Tree-shaking" className="mt-6">
        Prefer subpath imports like <code>@kaanolin/react/button</code> and{" "}
        <code>@kaanolin/react-icons/line/general</code>. Your bundler will only ship the specific
        components and icons you use.
      </Callout>

      <DocsPagination currentSlug="/getting-started" />
    </article>
  );
}

export const Route = createFileRoute("/getting-started")({
  component: GettingStarted,
});
