import { useMemo, useState, type ReactNode } from "react";
import { DocsCodeBlock } from "./DocsCodeBlock";

export type ControlType = "select" | "boolean" | "text" | "number" | "color";

export interface PlaygroundControl {
  prop: string;
  label?: string;
  type: ControlType;
  options?: string[];
  defaultValue: string | number | boolean;
  description?: string;
}

export interface PlaygroundSpec {
  controls: PlaygroundControl[];
  render: (state: Record<string, unknown>) => ReactNode;
  toCode: (state: Record<string, unknown>) => string;
}

/**
 * Storybook-style playground: left panel of live controls, right panel
 * with preview + auto-generated JSX code that reflects the current state.
 */
export function ComponentPlayground({ spec }: { spec: PlaygroundSpec }) {
  const initial = useMemo(() => {
    const s: Record<string, unknown> = {};
    for (const c of spec.controls) s[c.prop] = c.defaultValue;
    return s;
  }, [spec]);

  const [state, setState] = useState<Record<string, unknown>>(initial);

  const update = (prop: string, value: unknown) =>
    setState((prev) => ({ ...prev, [prop]: value }));

  const reset = () => setState(initial);

  return (
    <div className="not-prose rounded-xl border border-border-secondary overflow-hidden my-6">
      <div className="flex items-center justify-between px-4 py-2 bg-bg-secondary border-b border-border-secondary">
        <span className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
          Playground
        </span>
        <button
          type="button"
          onClick={reset}
          className="text-xs text-text-tertiary hover:text-text-primary cursor-pointer"
        >
          Reset
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] divide-y lg:divide-y-0 lg:divide-x divide-border-secondary">
        {/* Controls */}
        <div className="p-4 space-y-4 bg-bg-secondary">
          {spec.controls.map((c) => (
            <ControlField
              key={c.prop}
              control={c}
              value={state[c.prop]}
              onChange={(v) => update(c.prop, v)}
            />
          ))}
        </div>

        {/* Preview + code */}
        <div>
          <div className="min-h-[220px] p-8 flex items-center justify-center bg-gradient-to-br from-indigo-500/10 to-violet-500/10">
            {spec.render(state)}
          </div>
          <div className="border-t border-border-secondary">
            <DocsCodeBlock code={spec.toCode(state)} language="tsx" hideHeader />
          </div>
        </div>
      </div>
    </div>
  );
}

function ControlField({
  control,
  value,
  onChange,
}: {
  control: PlaygroundControl;
  value: unknown;
  onChange: (v: unknown) => void;
}) {
  const label = control.label ?? control.prop;

  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-medium text-text-primary">
        {label}
        {control.description && (
          <span className="ml-1 text-text-tertiary font-normal">— {control.description}</span>
        )}
      </label>

      {control.type === "select" && control.options && (
        <select
          value={String(value)}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-8 px-2 text-xs rounded-md border border-border-secondary bg-bg-primary text-text-primary"
        >
          {control.options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      )}

      {control.type === "boolean" && (
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={!!value}
            onChange={(e) => onChange(e.target.checked)}
            className="accent-brand-600"
          />
          <span className="text-xs text-text-secondary">{value ? "true" : "false"}</span>
        </label>
      )}

      {control.type === "text" && (
        <input
          type="text"
          value={String(value ?? "")}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-8 px-2 text-xs rounded-md border border-border-secondary bg-bg-primary text-text-primary"
        />
      )}

      {control.type === "number" && (
        <input
          type="number"
          value={String(value ?? 0)}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-8 px-2 text-xs rounded-md border border-border-secondary bg-bg-primary text-text-primary"
        />
      )}

      {control.type === "color" && (
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={String(value ?? "#000000")}
            onChange={(e) => onChange(e.target.value)}
            className="w-8 h-8 rounded border border-border-secondary cursor-pointer"
          />
          <code className="font-mono text-xs text-text-secondary">{String(value)}</code>
        </div>
      )}
    </div>
  );
}
