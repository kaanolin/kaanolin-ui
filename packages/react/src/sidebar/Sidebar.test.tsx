import React from "react";
import { render, screen } from "@testing-library/react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarItem,
} from "./Sidebar";

describe("Sidebar", () => {
  it("renders as an aside element", () => {
    render(<Sidebar data-testid="sidebar">Content</Sidebar>);
    const el = screen.getByTestId("sidebar");
    expect(el.tagName).toBe("ASIDE");
  });

  it("applies default width classes", () => {
    render(<Sidebar data-testid="sidebar">Content</Sidebar>);
    expect(screen.getByTestId("sidebar").className).toContain("w-64");
  });

  it("applies narrow width variant", () => {
    render(
      <Sidebar data-testid="sidebar" width="narrow">
        Content
      </Sidebar>,
    );
    expect(screen.getByTestId("sidebar").className).toContain("w-16");
  });

  it("applies wide width variant", () => {
    render(
      <Sidebar data-testid="sidebar" width="wide">
        Content
      </Sidebar>,
    );
    expect(screen.getByTestId("sidebar").className).toContain("w-80");
  });

  it("merges custom className on root", () => {
    render(
      <Sidebar data-testid="sidebar" className="z-50">
        Content
      </Sidebar>,
    );
    expect(screen.getByTestId("sidebar").className).toContain("z-50");
  });

  it("forwards ref on root", () => {
    const ref = React.createRef<HTMLElement>();
    render(<Sidebar ref={ref}>Content</Sidebar>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});

describe("SidebarHeader", () => {
  it("renders with border-b class", () => {
    render(<SidebarHeader data-testid="header">Header</SidebarHeader>);
    expect(screen.getByTestId("header").className).toContain("border-b");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<SidebarHeader ref={ref}>Header</SidebarHeader>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe("SidebarContent", () => {
  it("renders with flex-1 and overflow-y-auto", () => {
    render(<SidebarContent data-testid="content">Body</SidebarContent>);
    const el = screen.getByTestId("content");
    expect(el.className).toContain("flex-1");
    expect(el.className).toContain("overflow-y-auto");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<SidebarContent ref={ref}>Body</SidebarContent>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe("SidebarFooter", () => {
  it("renders with border-t class", () => {
    render(<SidebarFooter data-testid="footer">Footer</SidebarFooter>);
    expect(screen.getByTestId("footer").className).toContain("border-t");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<SidebarFooter ref={ref}>Footer</SidebarFooter>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe("SidebarGroup", () => {
  it("renders children", () => {
    render(<SidebarGroup>Group content</SidebarGroup>);
    expect(screen.getByText("Group content")).toBeInTheDocument();
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<SidebarGroup ref={ref}>Group</SidebarGroup>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe("SidebarGroupLabel", () => {
  it("renders with uppercase and text-xs", () => {
    render(<SidebarGroupLabel data-testid="label">Main</SidebarGroupLabel>);
    const el = screen.getByTestId("label");
    expect(el.className).toContain("uppercase");
    expect(el.className).toContain("text-xs");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<SidebarGroupLabel ref={ref}>Label</SidebarGroupLabel>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe("SidebarItem", () => {
  it("renders text content", () => {
    render(<SidebarItem>Dashboard</SidebarItem>);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  it("applies active styles", () => {
    render(
      <SidebarItem data-testid="item" active>
        Active
      </SidebarItem>,
    );
    const el = screen.getByTestId("item");
    expect(el.className).toContain("font-semibold");
    expect(el.className).toContain("bg-bg-primary_hover");
  });

  it("applies inactive styles by default", () => {
    render(<SidebarItem data-testid="item">Inactive</SidebarItem>);
    expect(screen.getByTestId("item").className).toContain("text-text-tertiary");
  });

  it("renders icon when provided", () => {
    const icon = <svg data-testid="icon" />;
    render(<SidebarItem icon={icon}>With Icon</SidebarItem>);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("renders badge when provided", () => {
    render(<SidebarItem badge={5}>Messages</SidebarItem>);
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("renders string badge", () => {
    render(<SidebarItem badge="New">Settings</SidebarItem>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("does not render badge when not provided", () => {
    const { container } = render(<SidebarItem>No Badge</SidebarItem>);
    const badges = container.querySelectorAll(".bg-error-50");
    expect(badges).toHaveLength(0);
  });

  it("merges custom className", () => {
    render(
      <SidebarItem data-testid="item" className="my-custom">
        Custom
      </SidebarItem>,
    );
    expect(screen.getByTestId("item").className).toContain("my-custom");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<SidebarItem ref={ref}>Item</SidebarItem>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("passes HTML attributes", () => {
    const handleClick = jest.fn();
    render(<SidebarItem onClick={handleClick}>Clickable</SidebarItem>);
    screen.getByText("Clickable").closest("div")?.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
