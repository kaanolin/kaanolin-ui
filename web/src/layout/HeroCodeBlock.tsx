import { useState } from "react";
import { SyntaxHighlight } from "../components/SyntaxHighlight";

export interface HeroCodeFile {
  name: string;
  lang: string;
  code: string;
}

export function HeroCodeBlock({ files }: { files: HeroCodeFile[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const active = files[activeIdx];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(active.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* noop */
    }
  };

  return (
    <div className="relative rounded-b-xl border border-border-secondary border-t-0 bg-[#1e1e1e] overflow-hidden">
      <div className="flex items-center justify-between px-2 pt-2 border-b border-white/10">
        <div className="flex items-center gap-0.5">
          {files.map((f, i) => (
            <button
              key={f.name}
              type="button"
              onClick={() => setActiveIdx(i)}
              className={
                "px-3 py-2 text-xs font-mono border-b-2 cursor-pointer transition-colors " +
                (i === activeIdx
                  ? "border-brand-400 text-white"
                  : "border-transparent text-white/50 hover:text-white")
              }
            >
              {f.name}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={copy}
          className="mr-2 px-2 py-1 rounded-md text-xs text-white/70 hover:bg-white/10 cursor-pointer"
          aria-label={copied ? "Copied" : "Copy code"}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <div
        className={
          "overflow-hidden transition-[max-height] duration-200 " +
          (expanded ? "max-h-[800px]" : "max-h-[160px]")
        }
      >
        <SyntaxHighlight code={active.code} language={active.lang} />
      </div>

      <div className="flex justify-center border-t border-white/10 bg-black/20">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="py-2 px-4 text-xs font-medium text-white/70 hover:text-white cursor-pointer"
        >
          {expanded ? "Collapse code" : "Expand code"}
        </button>
      </div>
    </div>
  );
}
