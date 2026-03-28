import React from "react";
import { render, screen } from "@testing-library/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "./Table";

/* ========== Renders all sub-components ========== */

describe("Table - full composition", () => {
  it("renders all sub-components together", () => {
    render(
      <Table data-testid="table">
        <TableCaption>Caption text</TableCaption>
        <TableHeader data-testid="thead">
          <TableRow data-testid="header-row">
            <TableHead data-testid="th">Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody data-testid="tbody">
          <TableRow data-testid="body-row">
            <TableCell data-testid="td">Alice</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter data-testid="tfoot">
          <TableRow data-testid="footer-row">
            <TableCell>Total</TableCell>
          </TableRow>
        </TableFooter>
      </Table>,
    );

    expect(screen.getByTestId("table")).toBeInTheDocument();
    expect(screen.getByText("Caption text")).toBeInTheDocument();
    expect(screen.getByTestId("thead")).toBeInTheDocument();
    expect(screen.getByTestId("tbody")).toBeInTheDocument();
    expect(screen.getByTestId("tfoot")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Total")).toBeInTheDocument();
  });
});

/* ========== Correct HTML elements ========== */

describe("Table - correct HTML elements", () => {
  it("Table renders a table element inside a wrapper div", () => {
    render(<Table data-testid="table">content</Table>);
    const table = screen.getByTestId("table");
    expect(table.tagName).toBe("TABLE");
    expect(table.parentElement?.tagName).toBe("DIV");
  });

  it("TableHeader renders a thead element", () => {
    render(
      <table>
        <TableHeader data-testid="thead">
          <tr><th>H</th></tr>
        </TableHeader>
      </table>,
    );
    expect(screen.getByTestId("thead").tagName).toBe("THEAD");
  });

  it("TableBody renders a tbody element", () => {
    render(
      <table>
        <TableBody data-testid="tbody">
          <tr><td>B</td></tr>
        </TableBody>
      </table>,
    );
    expect(screen.getByTestId("tbody").tagName).toBe("TBODY");
  });

  it("TableFooter renders a tfoot element", () => {
    render(
      <table>
        <TableFooter data-testid="tfoot">
          <tr><td>F</td></tr>
        </TableFooter>
      </table>,
    );
    expect(screen.getByTestId("tfoot").tagName).toBe("TFOOT");
  });

  it("TableRow renders a tr element", () => {
    render(
      <table>
        <tbody>
          <TableRow data-testid="row">
            <td>R</td>
          </TableRow>
        </tbody>
      </table>,
    );
    expect(screen.getByTestId("row").tagName).toBe("TR");
  });

  it("TableHead renders a th element", () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHead data-testid="th">H</TableHead>
          </tr>
        </thead>
      </table>,
    );
    expect(screen.getByTestId("th").tagName).toBe("TH");
  });

  it("TableCell renders a td element", () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell data-testid="td">C</TableCell>
          </tr>
        </tbody>
      </table>,
    );
    expect(screen.getByTestId("td").tagName).toBe("TD");
  });

  it("TableCaption renders a caption element", () => {
    render(
      <table>
        <TableCaption data-testid="caption">Cap</TableCaption>
      </table>,
    );
    expect(screen.getByTestId("caption").tagName).toBe("CAPTION");
  });
});

/* ========== className merging ========== */

describe("Table - className merging", () => {
  it("Table merges custom className", () => {
    render(<Table data-testid="table" className="custom-table">content</Table>);
    const table = screen.getByTestId("table");
    expect(table.className).toContain("custom-table");
    expect(table.className).toContain("w-full");
  });

  it("TableRow merges custom className", () => {
    render(
      <table>
        <tbody>
          <TableRow data-testid="row" className="custom-row">
            <td>R</td>
          </TableRow>
        </tbody>
      </table>,
    );
    const row = screen.getByTestId("row");
    expect(row.className).toContain("custom-row");
    expect(row.className).toContain("border-b");
  });

  it("TableHead merges custom className", () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHead data-testid="th" className="custom-th">H</TableHead>
          </tr>
        </thead>
      </table>,
    );
    const th = screen.getByTestId("th");
    expect(th.className).toContain("custom-th");
    expect(th.className).toContain("font-medium");
  });

  it("TableCell merges custom className", () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell data-testid="td" className="custom-td">C</TableCell>
          </tr>
        </tbody>
      </table>,
    );
    const td = screen.getByTestId("td");
    expect(td.className).toContain("custom-td");
    expect(td.className).toContain("text-sm");
  });
});

/* ========== Hover classes on rows ========== */

describe("Table - hover classes on rows", () => {
  it("TableRow has hover class", () => {
    render(
      <table>
        <tbody>
          <TableRow data-testid="row">
            <td>R</td>
          </TableRow>
        </tbody>
      </table>,
    );
    expect(screen.getByTestId("row").className).toContain("hover:bg-bg-primary_hover");
  });

  it("TableRow has border-b for divider lines", () => {
    render(
      <table>
        <tbody>
          <TableRow data-testid="row">
            <td>R</td>
          </TableRow>
        </tbody>
      </table>,
    );
    const row = screen.getByTestId("row");
    expect(row.className).toContain("border-b");
    expect(row.className).toContain("border-border-secondary");
  });
});

/* ========== TableCell align variant ========== */

describe("TableCell - align variant", () => {
  it("defaults to text-left", () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell data-testid="td">C</TableCell>
          </tr>
        </tbody>
      </table>,
    );
    expect(screen.getByTestId("td").className).toContain("text-left");
  });

  it("applies text-center when align is center", () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell data-testid="td" align="center">C</TableCell>
          </tr>
        </tbody>
      </table>,
    );
    expect(screen.getByTestId("td").className).toContain("text-center");
  });

  it("applies text-right when align is right", () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell data-testid="td" align="right">C</TableCell>
          </tr>
        </tbody>
      </table>,
    );
    expect(screen.getByTestId("td").className).toContain("text-right");
  });
});

/* ========== Header styles ========== */

describe("TableHeader - styles", () => {
  it("has bg-bg-secondary background", () => {
    render(
      <table>
        <TableHeader data-testid="thead">
          <tr><th>H</th></tr>
        </TableHeader>
      </table>,
    );
    expect(screen.getByTestId("thead").className).toContain("bg-bg-secondary");
  });
});

describe("TableHead - styles", () => {
  it("has uppercase, text-xs, text-text-tertiary", () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHead data-testid="th">H</TableHead>
          </tr>
        </thead>
      </table>,
    );
    const th = screen.getByTestId("th");
    expect(th.className).toContain("uppercase");
    expect(th.className).toContain("text-xs");
    expect(th.className).toContain("text-text-tertiary");
  });

  it("has px-6 py-3 padding", () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHead data-testid="th">H</TableHead>
          </tr>
        </thead>
      </table>,
    );
    const th = screen.getByTestId("th");
    expect(th.className).toContain("px-6");
    expect(th.className).toContain("py-3");
  });
});

/* ========== displayName ========== */

describe("Table - displayName", () => {
  it("Table has correct displayName", () => {
    expect(Table.displayName).toBe("Table");
  });

  it("TableHeader has correct displayName", () => {
    expect(TableHeader.displayName).toBe("TableHeader");
  });

  it("TableBody has correct displayName", () => {
    expect(TableBody.displayName).toBe("TableBody");
  });

  it("TableFooter has correct displayName", () => {
    expect(TableFooter.displayName).toBe("TableFooter");
  });

  it("TableRow has correct displayName", () => {
    expect(TableRow.displayName).toBe("TableRow");
  });

  it("TableHead has correct displayName", () => {
    expect(TableHead.displayName).toBe("TableHead");
  });

  it("TableCell has correct displayName", () => {
    expect(TableCell.displayName).toBe("TableCell");
  });

  it("TableCaption has correct displayName", () => {
    expect(TableCaption.displayName).toBe("TableCaption");
  });
});

/* ========== Ref forwarding ========== */

describe("Table - ref forwarding", () => {
  it("Table forwards ref", () => {
    const ref = React.createRef<HTMLTableElement>();
    render(<Table ref={ref}>content</Table>);
    expect(ref.current).toBeInstanceOf(HTMLTableElement);
  });

  it("TableRow forwards ref", () => {
    const ref = React.createRef<HTMLTableRowElement>();
    render(
      <table>
        <tbody>
          <TableRow ref={ref}><td>R</td></TableRow>
        </tbody>
      </table>,
    );
    expect(ref.current).toBeInstanceOf(HTMLTableRowElement);
  });

  it("TableCell forwards ref", () => {
    const ref = React.createRef<HTMLTableCellElement>();
    render(
      <table>
        <tbody>
          <tr>
            <TableCell ref={ref}>C</TableCell>
          </tr>
        </tbody>
      </table>,
    );
    expect(ref.current).toBeInstanceOf(HTMLTableCellElement);
  });
});
