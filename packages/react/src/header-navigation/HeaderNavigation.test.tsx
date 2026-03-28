import React from "react";
import { render, screen } from "@testing-library/react";
import {
  HeaderNav,
  HeaderNavLogo,
  HeaderNavItems,
  HeaderNavItem,
  HeaderNavActions,
} from "./HeaderNavigation";

describe("HeaderNav", () => {
  it("renders as a nav element", () => {
    render(<HeaderNav data-testid="nav">Content</HeaderNav>);
    const el = screen.getByTestId("nav");
    expect(el.tagName).toBe("NAV");
  });

  it("applies default styles", () => {
    render(<HeaderNav data-testid="nav">Content</HeaderNav>);
    const el = screen.getByTestId("nav");
    expect(el.className).toContain("flex");
    expect(el.className).toContain("h-16");
    expect(el.className).toContain("border-b");
  });

  it("merges custom className", () => {
    render(
      <HeaderNav data-testid="nav" className="sticky top-0">
        Content
      </HeaderNav>,
    );
    expect(screen.getByTestId("nav").className).toContain("sticky");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLElement>();
    render(<HeaderNav ref={ref}>Content</HeaderNav>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});

describe("HeaderNavLogo", () => {
  it("renders children", () => {
    render(<HeaderNavLogo>Logo Text</HeaderNavLogo>);
    expect(screen.getByText("Logo Text")).toBeInTheDocument();
  });

  it("applies flex and gap styles", () => {
    render(<HeaderNavLogo data-testid="logo">Logo</HeaderNavLogo>);
    const el = screen.getByTestId("logo");
    expect(el.className).toContain("flex");
    expect(el.className).toContain("gap-2");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<HeaderNavLogo ref={ref}>Logo</HeaderNavLogo>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe("HeaderNavItems", () => {
  it("renders children", () => {
    render(<HeaderNavItems>Nav Items</HeaderNavItems>);
    expect(screen.getByText("Nav Items")).toBeInTheDocument();
  });

  it("applies flex and gap styles", () => {
    render(<HeaderNavItems data-testid="items">Items</HeaderNavItems>);
    const el = screen.getByTestId("items");
    expect(el.className).toContain("flex");
    expect(el.className).toContain("gap-1");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<HeaderNavItems ref={ref}>Items</HeaderNavItems>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe("HeaderNavItem", () => {
  it("renders as a div by default", () => {
    render(<HeaderNavItem data-testid="item">Home</HeaderNavItem>);
    expect(screen.getByTestId("item").tagName).toBe("DIV");
  });

  it("renders as an anchor when href is provided", () => {
    render(<HeaderNavItem href="/home">Home</HeaderNavItem>);
    const link = screen.getByText("Home");
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/home");
  });

  it("applies active styles", () => {
    render(
      <HeaderNavItem data-testid="item" active>
        Active
      </HeaderNavItem>,
    );
    const el = screen.getByTestId("item");
    expect(el.className).toContain("text-text-primary");
    expect(el.className).toContain("bg-bg-primary_hover");
  });

  it("applies inactive styles by default", () => {
    render(<HeaderNavItem data-testid="item">Inactive</HeaderNavItem>);
    expect(screen.getByTestId("item").className).toContain("text-text-tertiary");
  });

  it("merges custom className", () => {
    render(
      <HeaderNavItem data-testid="item" className="font-bold">
        Custom
      </HeaderNavItem>,
    );
    expect(screen.getByTestId("item").className).toContain("font-bold");
  });

  it("forwards ref for div variant", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<HeaderNavItem ref={ref}>Item</HeaderNavItem>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("forwards ref for anchor variant", () => {
    const ref = React.createRef<HTMLAnchorElement>();
    render(
      <HeaderNavItem ref={ref} href="/test">
        Link
      </HeaderNavItem>,
    );
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
  });

  it("passes HTML attributes", () => {
    const handleClick = jest.fn();
    render(<HeaderNavItem onClick={handleClick}>Click</HeaderNavItem>);
    screen.getByText("Click").click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe("HeaderNavActions", () => {
  it("renders children", () => {
    render(<HeaderNavActions>Actions</HeaderNavActions>);
    expect(screen.getByText("Actions")).toBeInTheDocument();
  });

  it("applies ml-auto class", () => {
    render(
      <HeaderNavActions data-testid="actions">Actions</HeaderNavActions>,
    );
    expect(screen.getByTestId("actions").className).toContain("ml-auto");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<HeaderNavActions ref={ref}>Actions</HeaderNavActions>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
