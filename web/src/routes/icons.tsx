import { useEffect, useMemo, useState, type ComponentType, type SVGProps } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Badge,
  Button,
  CodeBlock,
  Input,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  EmptyState,
  EmptyStateTitle,
  EmptyStateDescription,
} from "@kaanolin/react";
import {
  allCategories,
  getIconsBy,
  iconEntries,
  loadIcon,
  type IconEntry,
  type Variant,
} from "../lib/icon-modules";
import categoriesJson from "../../../packages/icons/metadata/categories.json";
import { H2 } from "../components/Heading";
import { DocsPagination } from "../layout/DocsPagination";

const categoryLabels = categoriesJson as Record<string, string>;
const variants: Variant[] = ["line", "solid", "duotone", "duocolor"];
const PAGE_SIZE = 200;

function IconsGallery() {
  const [variant, setVariant] = useState<Variant>("line");
  const [category, setCategory] = useState<string>("general");
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(PAGE_SIZE);
  const [selected, setSelected] = useState<IconEntry | null>(null);

  const results = useMemo(
    () => getIconsBy({ variant, category: search ? undefined : category, search }),
    [variant, category, search],
  );
  const totalByVariant = useMemo(
    () => iconEntries.filter((e) => e.variant === variant).length,
    [variant],
  );

  const visible = results.slice(0, limit);
  const hasMore = results.length > limit;

  return (
    <article className="text-text-primary">
      {/* Hero */}
      <header className="relative rounded-2xl overflow-hidden border border-border-secondary bg-gradient-to-b from-utility-brand-50 to-transparent px-10 py-14 mb-10">
        <h1 className="text-4xl font-bold tracking-tight">
          A crisp set of 24×24 icons
        </h1>
        <p className="mt-3 mb-6 text-lg text-text-secondary max-w-xl leading-relaxed">
          6,115 icons across line, solid, duotone, and duocolor variants. Designed to drop into
          any React tree with <code className="font-mono text-sm">currentColor</code> theming.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a
            href="https://github.com/kaanolin/kaanolin-ui"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="secondary">View on GitHub</Button>
          </a>
          <div className="inline-flex">
            <CodeBlock
              hideHeader
              code={`npm i @kaanolin/react-icons`}
              language="bash"
            />
          </div>
        </div>
      </header>

      {/* Panel */}
      <section className="rounded-2xl border border-border-secondary bg-bg-primary shadow-sm overflow-hidden">
        <Tabs
          value={variant}
          onValueChange={(v) => {
            setVariant(v as Variant);
            setLimit(PAGE_SIZE);
          }}
        >
          <div className="flex items-center justify-between px-5 pt-5 gap-4 flex-wrap">
            <TabsList>
              {variants.map((v) => (
                <TabsTrigger key={v} value={v}>
                  {v[0].toUpperCase() + v.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
            <span className="text-xs text-text-tertiary">
              {totalByVariant.toLocaleString()} in variant
            </span>
          </div>

          <div className="px-5 pt-4 pb-2 flex flex-col md:flex-row gap-3 items-stretch md:items-center">
            <Input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setLimit(PAGE_SIZE);
              }}
              placeholder="Search icons…"
              className="flex-1"
            />
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setLimit(PAGE_SIZE);
              }}
              disabled={!!search}
              className="h-10 px-3 rounded-md border border-border-secondary bg-bg-primary text-sm disabled:opacity-50"
            >
              {allCategories.map((c) => (
                <option key={c} value={c}>
                  {categoryLabels[c] ?? c}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-2 flex-wrap items-center px-5 pb-3 text-sm text-text-secondary">
            <span>{results.length.toLocaleString()} results</span>
            {search ? (
              <Badge color="brand" size="sm">
                search: {search}
              </Badge>
            ) : (
              <Badge size="sm">{categoryLabels[category] ?? category}</Badge>
            )}
          </div>

          {variants.map((v) => (
            <TabsContent key={v} value={v} className="p-5 pt-0">
              {visible.length === 0 ? (
                <EmptyState>
                  <EmptyStateTitle>No icons found</EmptyStateTitle>
                  <EmptyStateDescription>
                    Try a different search term or category.
                  </EmptyStateDescription>
                </EmptyState>
              ) : (
                <div
                  className="grid gap-2"
                  style={{ gridTemplateColumns: "repeat(auto-fill, minmax(96px, 1fr))" }}
                >
                  {visible.map((icon) => (
                    <IconCell
                      key={`${icon.variant}-${icon.category}-${icon.name}`}
                      icon={icon}
                      onClick={setSelected}
                    />
                  ))}
                </div>
              )}
              {hasMore && (
                <div className="flex justify-center mt-4">
                  <Button variant="secondary" onClick={() => setLimit((n) => n + PAGE_SIZE)}>
                    Load more ({results.length - limit} remaining)
                  </Button>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <H2>Using icons in your app</H2>
      <p className="text-text-secondary mb-3">
        Import the icon you want from its category subpath. Every icon is an
        <code className="font-mono text-sm mx-1">SVGSVGElement</code>-forwarding component with
        <code className="font-mono text-sm mx-1">size</code>,
        <code className="font-mono text-sm mx-1">color</code>,
        <code className="font-mono text-sm mx-1">strokeWidth</code>, and
        <code className="font-mono text-sm mx-1">title</code> props.
      </p>
      <CodeBlock
        language="tsx"
        code={`import { Heart } from "@kaanolin/react-icons/line/general";

<Heart size={24} color="currentColor" strokeWidth={2} />`}
      />

      <IconInspector icon={selected} onClose={() => setSelected(null)} />

      <DocsPagination currentSlug="/icons" />
    </article>
  );
}

function IconCell({ icon, onClick }: { icon: IconEntry; onClick: (i: IconEntry) => void }) {
  const Component = useLazyIcon(icon);
  return (
    <button
      type="button"
      onClick={() => onClick(icon)}
      title={icon.name}
      className="aspect-square flex flex-col gap-1 items-center justify-center p-3 rounded-lg border border-border-secondary bg-bg-primary hover:border-border-brand transition-colors cursor-pointer"
    >
      <span className="flex items-center justify-center h-6 w-6 text-text-primary">
        {Component ? <Component /> : <span className="w-5 h-5 rounded bg-bg-secondary" />}
      </span>
      <span className="text-[10px] text-text-tertiary truncate w-full text-center">
        {icon.name}
      </span>
    </button>
  );
}

function IconInspector({ icon, onClose }: { icon: IconEntry | null; onClose: () => void }) {
  const Component = useLazyIcon(icon);
  if (!icon) return null;
  const importPath = `@kaanolin/react-icons/${icon.variant}/${icon.category}`;
  const importSnippet = `import { ${icon.name} } from "${importPath}";`;
  const jsxSnippet = `<${icon.name} size={24} />`;

  return (
    <Sheet open onOpenChange={(o) => !o && onClose()}>
      <SheetContent side="right" className="w-[420px] sm:w-[480px]">
        <SheetHeader>
          <SheetTitle>{icon.name}</SheetTitle>
          <SheetDescription>
            <Badge size="sm">{icon.variant}</Badge>{" "}
            <Badge size="sm" color="gray">
              {categoryLabels[icon.category] ?? icon.category}
            </Badge>
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 mt-6">
          <div className="flex items-center justify-center p-10 rounded-lg border border-border-secondary bg-bg-primary">
            <div className="text-text-primary">
              {Component ? <Component width={48} height={48} /> : null}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-medium text-text-secondary uppercase tracking-wide">
              Import
            </p>
            <CodeBlock language="tsx" code={importSnippet} />
          </div>

          <div className="space-y-2">
            <p className="text-xs font-medium text-text-secondary uppercase tracking-wide">Usage</p>
            <CodeBlock language="tsx" code={jsxSnippet} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function useLazyIcon(icon: IconEntry | null) {
  const [Component, setComponent] = useState<ComponentType<SVGProps<SVGSVGElement>> | null>(null);
  useEffect(() => {
    if (!icon) {
      setComponent(null);
      return;
    }
    let cancelled = false;
    setComponent(null);
    loadIcon(icon).then((C) => {
      if (!cancelled) setComponent(() => C);
    });
    return () => {
      cancelled = true;
    };
  }, [icon?.variant, icon?.category, icon?.name]);
  return Component;
}

export const Route = createFileRoute("/icons")({
  component: IconsGallery,
});
