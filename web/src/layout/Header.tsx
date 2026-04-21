import { Link } from "@tanstack/react-router";
import { Toggle } from "@kaanolin/react";

function ThemeToggle() {
  const toggle = () => {
    const html = document.documentElement;
    const isDark = html.dataset.theme === "dark";
    html.dataset.theme = isDark ? "light" : "dark";
  };
  return <Toggle aria-label="Toggle theme" onCheckedChange={toggle} />;
}

/**
 * Top bar: logo on the left, product tabs centered (Components / Icons),
 * right-aligned external links + theme toggle. Fixed, 56px tall.
 */
export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 h-14 border-b border-border-secondary bg-bg-primary/90 backdrop-blur">
      <div className="relative h-full">
        <div className="absolute left-0 top-0 bottom-0 pl-6 flex items-center gap-3">
          <Link to="/" className="font-semibold tracking-tight text-text-primary">
            Kaanolin UI
          </Link>
          <div className="h-6 w-px bg-border-secondary" />
          <span className="text-xs text-text-tertiary">by @kaanolin</span>
        </div>

        <nav
          aria-label="Product sections"
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 flex items-center gap-1"
        >
          <Link
            to="/components"
            className="px-3 py-1.5 rounded-full text-sm font-medium text-text-secondary hover:bg-bg-primary_hover hover:text-text-primary transition-colors"
            activeProps={{
              className:
                "px-3 py-1.5 rounded-full text-sm font-bold text-fg-white bg-text-primary",
            }}
          >
            Components
          </Link>
          <Link
            to="/icons"
            className="px-3 py-1.5 rounded-full text-sm font-medium text-text-secondary hover:bg-bg-primary_hover hover:text-text-primary transition-colors"
            activeProps={{
              className:
                "px-3 py-1.5 rounded-full text-sm font-bold text-fg-white bg-text-primary",
            }}
          >
            Icons
          </Link>
        </nav>

        <div className="absolute right-0 top-0 bottom-0 pr-6 flex items-center gap-3">
          <a
            href="https://github.com/kaanolin/kaanolin-ui"
            target="_blank"
            rel="noreferrer"
            className="text-text-secondary hover:text-text-primary"
            aria-label="GitHub repository"
          >
            <GithubIcon />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function GithubIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a10.97 10.97 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.27 5.69.41.35.78 1.05.78 2.12v3.14c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  );
}
