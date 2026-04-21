import { useState, type ReactNode } from "react";
import { CodeBlock } from "@kaanolin/react";

interface ComponentPreviewProps {
  preview: ReactNode;
  code: string;
  language?: string;
}

export function ComponentPreview({
  preview,
  code,
  language = "tsx",
}: ComponentPreviewProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  return (
    <div className="rounded-xl border border-border-secondary overflow-hidden bg-bg-primary">
      <div className="flex items-center justify-between px-3 py-2 border-b border-border-secondary bg-bg-secondary">
        <div className="inline-flex items-center gap-1 p-0.5 rounded-md bg-bg-primary border border-border-secondary text-xs">
          <button
            type="button"
            onClick={() => setTab("preview")}
            className={
              "px-3 py-1 rounded-md cursor-pointer transition-colors " +
              (tab === "preview"
                ? "bg-bg-primary_hover text-text-primary font-medium"
                : "text-text-secondary hover:text-text-primary")
            }
          >
            Preview
          </button>
          <button
            type="button"
            onClick={() => setTab("code")}
            className={
              "px-3 py-1 rounded-md cursor-pointer transition-colors " +
              (tab === "code"
                ? "bg-bg-primary_hover text-text-primary font-medium"
                : "text-text-secondary hover:text-text-primary")
            }
          >
            Code
          </button>
        </div>
      </div>

      {tab === "preview" ? (
        <div className="p-10 flex items-center justify-center min-h-[220px] bg-bg-primary">
          {preview}
        </div>
      ) : (
        <div className="border-t-0">
          <CodeBlock code={code} language={language} />
        </div>
      )}
    </div>
  );
}
