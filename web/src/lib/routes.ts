/**
 * Flat + grouped route data — mirrors Radix' primitivesRoutes.ts pattern.
 * The sidebar renders `routeGroups`; prev/next pagination uses `allRoutes`.
 */

export interface RoutePage {
  title: string;
  slug: string;
  preview?: boolean;
  deprecated?: boolean;
}

export interface RouteGroup {
  label: string;
  pages: RoutePage[];
}

import { components } from "./component-registry";

export const routeGroups: RouteGroup[] = [
  {
    label: "Overview",
    pages: [
      { title: "Introduction", slug: "/" },
      { title: "Getting started", slug: "/getting-started" },
    ],
  },
  {
    label: "Components",
    pages: [
      { title: "All components", slug: "/components" },
      ...components.map((c) => ({
        title: c.name,
        slug: `/components/${c.slug}`,
      })),
    ],
  },
  {
    label: "Icons",
    pages: [{ title: "Gallery", slug: "/icons" }],
  },
];

export const allRoutes: RoutePage[] = routeGroups.flatMap((g) => g.pages);

export function getAdjacent(currentSlug: string) {
  const idx = allRoutes.findIndex((r) => r.slug === currentSlug);
  return {
    prev: idx > 0 ? allRoutes[idx - 1] : undefined,
    next: idx >= 0 && idx < allRoutes.length - 1 ? allRoutes[idx + 1] : undefined,
  };
}
