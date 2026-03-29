import React from "react";
import { render, screen } from "@testing-library/react";
import { DataSourceBadge } from "./DataSourceBadge";

describe("DataSourceBadge", () => {
  it("renders the source name", () => {
    render(<DataSourceBadge source="Airbnb Scraper" />);
    expect(screen.getByText("Airbnb Scraper")).toBeInTheDocument();
  });

  it("renders as a link when url is provided", () => {
    render(
      <DataSourceBadge source="INEGI" url="https://www.inegi.org.mx" />,
    );
    const link = screen.getByRole("link", { name: "INEGI" });
    expect(link).toHaveAttribute("href", "https://www.inegi.org.mx");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("renders as plain text when url is not provided", () => {
    render(<DataSourceBadge source="Local DB" />);
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.getByText("Local DB")).toBeInTheDocument();
  });

  it("renders the last updated date when provided", () => {
    const { container } = render(
      <DataSourceBadge
        source="INEGI"
        lastUpdated="2026-01-10T00:00:00Z"
        locale="en-US"
      />,
    );
    expect(container.textContent).toContain("2026");
  });

  it("respects the locale prop for date formatting", () => {
    const { container } = render(
      <DataSourceBadge
        source="INEGI"
        lastUpdated="2026-01-10T00:00:00Z"
        locale="es-MX"
      />,
    );
    expect(container.textContent).toContain("2026");
  });

  it("does not render date when lastUpdated is omitted", () => {
    const { container } = render(<DataSourceBadge source="Test" />);
    expect(container.textContent).not.toContain("2026");
  });

  it("merges custom className", () => {
    const { container } = render(
      <DataSourceBadge source="Test" className="ml-4" />,
    );
    expect(container.firstChild).toHaveClass("ml-4");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<DataSourceBadge source="Test" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });
});
