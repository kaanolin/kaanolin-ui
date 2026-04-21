import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

/**
 * Right-rail "On this page" — rescrapes h2/h3 when the route changes.
 * Keyed by pathname so it only fires on navigation, not every render.
 */
export function QuickNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const scrape = () => {
      const nodes = Array.from(
        document.querySelectorAll<HTMLElement>("[data-heading]"),
      );
      setHeadings(
        nodes.map((n) => ({
          id: n.id,
          text: n.textContent ?? "",
          level: (n.tagName === "H3" ? 3 : 2) as 2 | 3,
        })),
      );
    };
    scrape();
    const id = window.setTimeout(scrape, 50);
    return () => window.clearTimeout(id);
  }, [pathname]);

  if (headings.length === 0) return <aside className="hidden xl:block w-[250px] shrink-0" />;

  return (
    <aside className="hidden xl:block w-[250px] shrink-0">
      <div className="fixed top-14 right-0 bottom-0 w-[250px] overflow-y-auto px-6 py-6">
        <p className="text-xs font-semibold text-text-primary mb-3 uppercase tracking-wide">
          On this page
        </p>
        <ul className="space-y-1.5">
          {headings.map((h) => (
            <li key={h.id} data-level={h.level}>
              <a
                href={`#${h.id}`}
                className={
                  "block text-sm text-text-secondary hover:text-text-primary transition-colors " +
                  (h.level === 3 ? "pl-3" : "")
                }
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
