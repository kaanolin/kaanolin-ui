import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@kaanolin/react";

export interface DataAttribute {
  name: string;
  values: string;
}

export function DataAttributesTable({ data }: { data: DataAttribute[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead style={{ width: "37%" }}>Data attribute</TableHead>
          <TableHead>Values</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((attr) => (
          <TableRow key={attr.name}>
            <TableCell>
              <code className="font-mono text-sm text-text-primary">[{attr.name}]</code>
            </TableCell>
            <TableCell>
              <code className="font-mono text-xs text-text-secondary">{attr.values}</code>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
