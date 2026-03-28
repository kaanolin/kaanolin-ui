import React from "react";
import { render, screen } from "@testing-library/react";
import {
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateActions,
} from "./EmptyState";

describe("EmptyState", () => {
  it("renders children", () => {
    render(
      <EmptyState>
        <EmptyStateTitle>No data</EmptyStateTitle>
      </EmptyState>,
    );
    expect(screen.getByText("No data")).toBeInTheDocument();
  });

  it("applies root styles", () => {
    render(<EmptyState data-testid="root">Content</EmptyState>);
    const root = screen.getByTestId("root");
    expect(root.className).toContain("flex");
    expect(root.className).toContain("flex-col");
    expect(root.className).toContain("items-center");
    expect(root.className).toContain("py-12");
  });

  it("merges custom className on root", () => {
    render(
      <EmptyState data-testid="root" className="mt-8">
        Content
      </EmptyState>,
    );
    const root = screen.getByTestId("root");
    expect(root.className).toContain("mt-8");
    expect(root.className).toContain("flex");
  });

  it("forwards ref on root", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<EmptyState ref={ref}>Content</EmptyState>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("passes HTML attributes on root", () => {
    render(<EmptyState data-testid="es-root">Content</EmptyState>);
    expect(screen.getByTestId("es-root")).toBeInTheDocument();
  });
});

describe("EmptyStateIcon", () => {
  it("renders children", () => {
    render(
      <EmptyStateIcon>
        <svg data-testid="icon" />
      </EmptyStateIcon>,
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("applies icon styles", () => {
    render(<EmptyStateIcon data-testid="icon-wrapper">Icon</EmptyStateIcon>);
    const el = screen.getByTestId("icon-wrapper");
    expect(el.className).toContain("size-12");
    expect(el.className).toContain("rounded-full");
    expect(el.className).toContain("bg-bg-secondary");
  });

  it("merges custom className", () => {
    render(
      <EmptyStateIcon data-testid="icon-wrapper" className="bg-red-100">
        Icon
      </EmptyStateIcon>,
    );
    expect(screen.getByTestId("icon-wrapper").className).toContain(
      "bg-red-100",
    );
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<EmptyStateIcon ref={ref}>Icon</EmptyStateIcon>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe("EmptyStateTitle", () => {
  it("renders as h3", () => {
    render(<EmptyStateTitle>Title</EmptyStateTitle>);
    const el = screen.getByText("Title");
    expect(el.tagName).toBe("H3");
  });

  it("applies title styles", () => {
    render(<EmptyStateTitle>Title</EmptyStateTitle>);
    const el = screen.getByText("Title");
    expect(el.className).toContain("text-md");
    expect(el.className).toContain("font-semibold");
    expect(el.className).toContain("text-text-primary");
  });

  it("merges custom className", () => {
    render(<EmptyStateTitle className="text-lg">Title</EmptyStateTitle>);
    expect(screen.getByText("Title").className).toContain("text-lg");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLHeadingElement>();
    render(<EmptyStateTitle ref={ref}>Title</EmptyStateTitle>);
    expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
  });
});

describe("EmptyStateDescription", () => {
  it("renders as p", () => {
    render(<EmptyStateDescription>Desc</EmptyStateDescription>);
    const el = screen.getByText("Desc");
    expect(el.tagName).toBe("P");
  });

  it("applies description styles", () => {
    render(<EmptyStateDescription>Desc</EmptyStateDescription>);
    const el = screen.getByText("Desc");
    expect(el.className).toContain("text-sm");
    expect(el.className).toContain("text-text-tertiary");
    expect(el.className).toContain("text-center");
    expect(el.className).toContain("max-w-sm");
  });

  it("merges custom className", () => {
    render(
      <EmptyStateDescription className="max-w-md">Desc</EmptyStateDescription>,
    );
    expect(screen.getByText("Desc").className).toContain("max-w-md");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLParagraphElement>();
    render(<EmptyStateDescription ref={ref}>Desc</EmptyStateDescription>);
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
  });
});

describe("EmptyStateActions", () => {
  it("renders children", () => {
    render(
      <EmptyStateActions>
        <button type="button">Action</button>
      </EmptyStateActions>,
    );
    expect(screen.getByRole("button", { name: "Action" })).toBeInTheDocument();
  });

  it("applies actions styles", () => {
    render(<EmptyStateActions data-testid="actions">Actions</EmptyStateActions>);
    const el = screen.getByTestId("actions");
    expect(el.className).toContain("flex");
    expect(el.className).toContain("gap-3");
  });

  it("merges custom className", () => {
    render(
      <EmptyStateActions data-testid="actions" className="mt-4">
        Actions
      </EmptyStateActions>,
    );
    expect(screen.getByTestId("actions").className).toContain("mt-4");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<EmptyStateActions ref={ref}>Actions</EmptyStateActions>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe("EmptyState composition", () => {
  it("renders a full empty state with all sub-components", () => {
    render(
      <EmptyState data-testid="root">
        <EmptyStateIcon data-testid="icon">
          <svg data-testid="svg-icon" />
        </EmptyStateIcon>
        <EmptyStateTitle>No items</EmptyStateTitle>
        <EmptyStateDescription>Nothing to show here.</EmptyStateDescription>
        <EmptyStateActions>
          <button type="button">Add item</button>
        </EmptyStateActions>
      </EmptyState>,
    );

    expect(screen.getByTestId("root")).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByTestId("svg-icon")).toBeInTheDocument();
    expect(screen.getByText("No items")).toBeInTheDocument();
    expect(screen.getByText("Nothing to show here.")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add item" }),
    ).toBeInTheDocument();
  });
});
