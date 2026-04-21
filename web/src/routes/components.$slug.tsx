import { createFileRoute, notFound } from "@tanstack/react-router";
import { componentsBySlug } from "../lib/component-registry";
import { PropsTable } from "../components/PropsTable";
import { KeyboardTable } from "../components/KeyboardTable";
import { DataAttributesTable } from "../components/DataAttributesTable";
import { DocsCodeBlock } from "../components/DocsCodeBlock";
import { ComponentPlayground } from "../components/ComponentPlayground";
import { HeroContainer } from "../layout/HeroContainer";
import { HeroCodeBlock } from "../layout/HeroCodeBlock";
import { FeaturesBlock } from "../layout/FeaturesBlock";
import { DocsPagination } from "../layout/DocsPagination";
import { H2, H3 } from "../components/Heading";

function ComponentPage() {
  const { slug } = Route.useParams();
  const doc = componentsBySlug.get(slug);
  if (!doc) throw notFound();

  const codeFiles = doc.codeFiles ?? [
    { name: "index.tsx", lang: "tsx", code: doc.heroCode },
  ];

  const features = doc.features ?? [
    "Tree-shakeable — import only what you use.",
    "Uses currentColor — themeable from CSS.",
    "forwardRef composability with Radix and Floating UI.",
    "Accessible defaults: ARIA roles, keyboard support, focus management.",
  ];

  const sourceUrl = `https://github.com/kaanolin/kaanolin-ui/tree/main/packages/react/src/${doc.slug}`;
  const issuesUrl = `https://github.com/kaanolin/kaanolin-ui/issues/new?title=${encodeURIComponent(
    `[${doc.name}] `,
  )}`;
  const markdownUrl = `https://github.com/kaanolin/kaanolin-ui/blob/main/apps/docs/src/lib/component-registry.tsx`;

  return (
    <article className="text-text-primary">
      <h1 className="text-4xl font-bold tracking-tight">{doc.name}</h1>
      <p className="mt-3 mb-10 text-lg text-text-secondary leading-relaxed">
        {doc.description}
      </p>

      <HeroContainer>{doc.hero}</HeroContainer>
      <HeroCodeBlock files={codeFiles} />

      <FeaturesBlock
        features={features}
        source={sourceUrl}
        issues={issuesUrl}
        aria={doc.aria}
        markdown={markdownUrl}
      />

      {doc.playground && (
        <>
          <H2>Playground</H2>
          <p className="text-text-secondary mb-3">
            Tweak props, see the live preview and copy the generated JSX.
          </p>
          <ComponentPlayground spec={doc.playground} />
        </>
      )}

      <H2>Installation</H2>
      <p className="text-text-secondary mb-3">Install the component from your command line.</p>
      <DocsCodeBlock language="bash" code={`npm install ${doc.npmPackage}`} />

      <H2>Anatomy</H2>
      <p className="text-text-secondary mb-3">Import all parts and piece them together.</p>
      <DocsCodeBlock language="tsx" code={`${doc.importSnippet}\n\n${doc.anatomy}`} />

      <H2>API Reference</H2>

      <H3>{doc.name}</H3>
      {doc.rootDescription && (
        <p className="text-text-secondary mb-4">{doc.rootDescription}</p>
      )}
      <PropsTable props={doc.props} />
      {doc.rootDataAttributes && doc.rootDataAttributes.length > 0 && (
        <div className="mt-4">
          <DataAttributesTable data={doc.rootDataAttributes} />
        </div>
      )}

      {doc.subComponents?.map((sub) => (
        <div key={sub.name}>
          <H3>{sub.name}</H3>
          {sub.description && (
            <p className="text-text-secondary mb-4">{sub.description}</p>
          )}
          <PropsTable props={sub.props} />
          {sub.dataAttributes && sub.dataAttributes.length > 0 && (
            <div className="mt-4">
              <DataAttributesTable data={sub.dataAttributes} />
            </div>
          )}
        </div>
      ))}

      {doc.examples && doc.examples.length > 0 && (
        <>
          <H2>Examples</H2>
          {doc.examples.map((ex, i) => (
            <div key={i} className="mb-8">
              {ex.title && <H3>{ex.title}</H3>}
              {ex.description && (
                <p className="text-text-secondary mb-3">{ex.description}</p>
              )}
              <HeroContainer>{ex.preview}</HeroContainer>
              <DocsCodeBlock language="tsx" code={ex.code} />
            </div>
          ))}
        </>
      )}

      {(doc.aria || doc.keyboard) && (
        <>
          <H2>Accessibility</H2>
          {doc.aria && (
            <p className="text-text-secondary mb-4">
              Adheres to the{" "}
              <a
                href={doc.aria}
                target="_blank"
                rel="noreferrer"
                className="text-brand-600 underline underline-offset-4"
              >
                WAI-ARIA design pattern
              </a>
              .
            </p>
          )}
          {doc.keyboard && doc.keyboard.length > 0 && (
            <>
              <H3>Keyboard Interactions</H3>
              <KeyboardTable data={doc.keyboard} />
            </>
          )}
        </>
      )}

      <DocsPagination currentSlug={`/components/${doc.slug}`} />
    </article>
  );
}

export const Route = createFileRoute("/components/$slug")({
  component: ComponentPage,
});
