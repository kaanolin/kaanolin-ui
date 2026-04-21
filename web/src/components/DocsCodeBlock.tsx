import { useState } from "react";
import { SyntaxHighlight } from "./SyntaxHighlight";

/**
 * Docs code block — replaces the library's plain CodeBlock with
 * a syntax-highlighted version that keeps the same visual frame
 * (language header + copy button).
 */
export function DocsCodeBlock({
  code,
  language = "tsx",
  hideHeader = false,
}: {
  code: string;
  language?: string;
  hideHeader?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="rounded-lg border border-border-secondary bg-[#1e1e1e] overflow-hidden my-3">
      {!hideHeader && (
        <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
          <span className="text-xs font-mono uppercase tracking-wide text-white/50">
            {language}
          </span>
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs text-white/70 hover:bg-white/10 cursor-pointer"
            aria-label={copied ? "Copied" : "Copy code"}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>
      )}
      <SyntaxHighlight code={code} language={language} />
    </div>
  );
}

function CopyIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
