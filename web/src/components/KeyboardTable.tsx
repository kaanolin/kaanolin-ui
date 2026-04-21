import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Kbd,
} from "@kaanolin/react";
import type { KeyboardKey } from "../lib/component-registry";

export function KeyboardTable({ data }: { data: KeyboardKey[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead style={{ width: "37%" }}>Key</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.keys.join("+")}>
            <TableCell>
              <div className="flex items-center gap-2">
                {row.keys.map((k) => (
                  <Kbd key={k}>{k}</Kbd>
                ))}
              </div>
            </TableCell>
            <TableCell className="text-sm text-text-secondary">
              {row.description}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
