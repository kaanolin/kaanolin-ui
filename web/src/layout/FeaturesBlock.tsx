interface FeaturesBlockProps {
  features: string[];
  source: string;
  issues: string;
  aria?: string;
  markdown?: string;
}

function CheckCircle() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-utility-green-600 shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="inline-block ml-1"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

/**
 * Two-column band below the hero: features checklist on the left,
 * external resource links on the right. Mirrors Radix' Accordion page.
 */
export function FeaturesBlock({
  features,
  source,
  issues,
  aria,
  markdown,
}: FeaturesBlockProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-8 my-10">
      <section>
        <h2 className="text-base font-semibold text-text-primary mb-4">Features</h2>
        <ul className="space-y-2.5">
          {features.map((f) => (
            <li key={f} className="flex gap-2 text-sm text-text-secondary leading-relaxed">
              <CheckCircle />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </section>

      <nav
        aria-label="Resources"
        className="flex flex-col gap-2 text-sm md:border-l md:border-border-secondary md:pl-6"
      >
        <a
          href={source}
          target="_blank"
          rel="noreferrer"
          className="text-brand-600 hover:underline"
        >
          View source
          <ExternalIcon />
        </a>
        <a
          href={issues}
          target="_blank"
          rel="noreferrer"
          className="text-brand-600 hover:underline"
        >
          Report an issue
          <ExternalIcon />
        </a>
        {aria && (
          <a
            href={aria}
            target="_blank"
            rel="noreferrer"
            className="text-brand-600 hover:underline"
          >
            ARIA design pattern
            <ExternalIcon />
          </a>
        )}
        {markdown && (
          <a
            href={markdown}
            target="_blank"
            rel="noreferrer"
            className="text-brand-600 hover:underline"
          >
            View as Markdown
            <ExternalIcon />
          </a>
        )}
      </nav>
    </div>
  );
}
