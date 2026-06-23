import type { ComponentType, SVGProps } from "react";
import lineJson from "@kaanolin/react-icons/metadata/icons-line";
import solidJson from "@kaanolin/react-icons/metadata/icons-solid";
import duotoneJson from "@kaanolin/react-icons/metadata/icons-duotone";
import duocolorJson from "@kaanolin/react-icons/metadata/icons-duocolor";

export type Variant = "line" | "solid" | "duotone" | "duocolor";

interface IconMeta {
  componentName: string;
  category: string;
  categoryDisplay: string;
  keywords: string[];
}

interface VariantJson {
  icons: IconMeta[];
}

export interface IconEntry {
  name: string;
  variant: Variant;
  category: string;
}

const sources: Record<Variant, VariantJson> = {
  line: lineJson as VariantJson,
  solid: solidJson as VariantJson,
  duotone: duotoneJson as VariantJson,
  duocolor: duocolorJson as VariantJson,
};

function build(variant: Variant): IconEntry[] {
  return sources[variant].icons.map((m) => ({
    name: m.componentName,
    variant,
    category: m.category,
  }));
}

export const iconEntries: IconEntry[] = [
  ...build("line"),
  ...build("solid"),
  ...build("duotone"),
  ...build("duocolor"),
].sort((a, b) => a.name.localeCompare(b.name));

export const allCategories = Array.from(
  new Set(iconEntries.map((e) => e.category)),
).sort();

export function getIconsBy(filter: {
  variant: Variant;
  category?: string;
  search?: string;
}): IconEntry[] {
  const term = filter.search?.trim().toLowerCase();
  return iconEntries.filter((e) => {
    if (e.variant !== filter.variant) return false;
    if (filter.category && e.category !== filter.category) return false;
    if (term && !e.name.toLowerCase().includes(term)) return false;
    return true;
  });
}

/**
 * Lazy category loaders targeting the published @kaanolin/react-icons dist.
 * Each category ships as a single bundle (one file per variant/category),
 * so we code-split per-category via `import.meta.glob` over node_modules.
 */
const categoryModules = import.meta.glob<{
  [key: string]: ComponentType<SVGProps<SVGSVGElement>>;
}>([
  "../../../node_modules/@kaanolin/react-icons/dist/line/*.js",
  "../../../node_modules/@kaanolin/react-icons/dist/solid/*.js",
  "../../../node_modules/@kaanolin/react-icons/dist/duotone/*.js",
  "../../../node_modules/@kaanolin/react-icons/dist/duocolor/*.js",
]);

export async function loadIcon(
  entry: IconEntry,
): Promise<ComponentType<SVGProps<SVGSVGElement>>> {
  const path = Object.keys(categoryModules).find((k) =>
    k.endsWith(`/${entry.variant}/${entry.category}.js`),
  );
  if (!path) {
    throw new Error(
      `No bundle for ${entry.variant}/${entry.category} — check that @kaanolin/react-icons is installed.`,
    );
  }
  const mod = await categoryModules[path]();
  const Component = (mod as Record<string, ComponentType<SVGProps<SVGSVGElement>>>)[entry.name];
  if (!Component) throw new Error(`Icon export ${entry.name} not found in bundle ${path}`);
  return Component;
}
