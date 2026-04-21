import type { ComponentType, SVGProps } from "react";
import lineJson from "../../../packages/icons/metadata/icons-line.json";
import solidJson from "../../../packages/icons/metadata/icons-solid.json";
import duotoneJson from "../../../packages/icons/metadata/icons-duotone.json";
import duocolorJson from "../../../packages/icons/metadata/icons-duocolor.json";

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
 * Lazy module loader — returns a function that resolves to the React component.
 * Only fetches the file when invoked, so browsing thousands of icons at once
 * doesn't load thousands of modules in dev.
 */
const modules = import.meta.glob<{
  [key: string]: ComponentType<SVGProps<SVGSVGElement>>;
}>([
  "../../../packages/icons/src/line/**/*.tsx",
  "../../../packages/icons/src/solid/**/*.tsx",
  "../../../packages/icons/src/duotone/**/*.tsx",
  "../../../packages/icons/src/duocolor/**/*.tsx",
]);

export async function loadIcon(entry: IconEntry): Promise<ComponentType<SVGProps<SVGSVGElement>>> {
  const path = Object.keys(modules).find((k) =>
    k.endsWith(`/${entry.variant}/${entry.category}/${entry.name}.tsx`),
  );
  if (!path) throw new Error(`Icon module not found: ${entry.variant}/${entry.category}/${entry.name}`);
  const mod = await modules[path]();
  const Component = (mod as Record<string, ComponentType<SVGProps<SVGSVGElement>>>)[entry.name];
  if (!Component) throw new Error(`Icon export ${entry.name} missing in module ${path}`);
  return Component;
}
