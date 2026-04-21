import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Input } from "@kaanolin/react";
import { routeGroups } from "../lib/routes";

/**
 * Left sidebar — fixed 290px, scrollable, with search + grouped navigation.
 * Mirrors Radix' SideNav + DocsNav composition.
 */
export function SideNav() {
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!term) return routeGroups;
    return routeGroups
      .map((g) => ({
        ...g,
        pages: g.pages.filter((p) => p.title.toLowerCase().includes(term)),
      }))
      .filter((g) => g.pages.length > 0);
  }, [term]);

  return (
    <aside className="hidden md:block w-[290px] shrink-0">
      <div className="fixed top-14 left-0 bottom-0 w-[290px] overflow-y-auto border-r border-border-secondary">
        <div className="px-3 pt-4 pb-2">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search…"
            aria-label="Search documentation"
          />
        </div>

        <nav aria-label="Documentation" className="px-3 pb-10">
          {filtered.map((group) => (
            <div key={group.label} className="mb-4">
              <h4 className="px-3 py-2 text-sm font-semibold text-text-primary">
                {group.label}
              </h4>
              <ul className="space-y-0.5">
                {group.pages.map((page) => (
                  <li key={page.slug}>
                    <Link
                      to={page.slug}
                      activeOptions={{ exact: true }}
                      className="block px-3 py-1.5 text-sm text-text-secondary rounded-md hover:text-text-primary hover:bg-bg-primary_hover transition-colors"
                      activeProps={{
                        className:
                          "block px-3 py-1.5 text-sm rounded-md text-text-primary bg-bg-primary_hover font-medium",
                      }}
                    >
                      <span>{page.title}</span>
                      {page.preview && (
                        <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-utility-yellow-50 text-utility-yellow-700 border border-utility-yellow-200">
                          Preview
                        </span>
                      )}
                      {page.deprecated && (
                        <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-utility-red-50 text-utility-red-700 border border-utility-red-200">
                          Deprecated
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
