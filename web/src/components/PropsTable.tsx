import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Tooltip,
} from "@kaanolin/react";
import type { PropSpec } from "../lib/component-registry";

function InfoIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

export function PropsTable({ props }: { props: PropSpec[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead style={{ width: "37%" }}>Prop</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Default</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.map((p) => (
          <TableRow key={p.name}>
            <TableCell>
              <div className="flex items-center gap-2">
                <code className="font-mono text-sm text-text-primary">
                  {p.name}
                  {p.required ? "*" : ""}
                </code>
                {p.description && (
                  <Tooltip content={p.description}>
                    <button
                      type="button"
                      className="text-text-tertiary hover:text-text-primary cursor-pointer"
                      aria-label={`Info about ${p.name}`}
                    >
                      <InfoIcon />
                    </button>
                  </Tooltip>
                )}
              </div>
            </TableCell>
            <TableCell>
              <code className="font-mono text-xs text-text-secondary break-all">
                {p.typeSimple ?? p.type}
              </code>
            </TableCell>
            <TableCell>
              {p.defaultValue ? (
                <code className="font-mono text-xs text-text-tertiary">
                  {p.defaultValue}
                </code>
              ) : (
                <span className="text-text-tertiary">—</span>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
