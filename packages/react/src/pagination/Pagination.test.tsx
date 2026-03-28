import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "./Pagination";

describe("Pagination", () => {
  it("renders a nav element with pagination role", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink>1</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>,
    );
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute("aria-label", "pagination");
  });

  it("renders page links", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>2</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>,
    );
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("marks the active page with aria-current", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>2</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>,
    );
    expect(screen.getByText("1")).toHaveAttribute("aria-current", "page");
    expect(screen.getByText("2")).not.toHaveAttribute("aria-current");
  });

  it("applies active styles to the active link", () => {
    render(
      <PaginationLink isActive>1</PaginationLink>,
    );
    const link = screen.getByText("1");
    expect(link.className).toContain("bg-brand-600");
  });

  it("renders Previous button with chevron", () => {
    render(<PaginationPrevious />);
    const btn = screen.getByRole("button", { name: /previous page/i });
    expect(btn).toBeInTheDocument();
    expect(btn.querySelector("svg")).toBeInTheDocument();
  });

  it("renders Next button with chevron", () => {
    render(<PaginationNext />);
    const btn = screen.getByRole("button", { name: /next page/i });
    expect(btn).toBeInTheDocument();
    expect(btn.querySelector("svg")).toBeInTheDocument();
  });

  it("calls onClick on page link click", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<PaginationLink onClick={handleClick}>3</PaginationLink>);
    await user.click(screen.getByText("3"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("calls onClick on Previous click", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<PaginationPrevious onClick={handleClick} />);
    await user.click(screen.getByRole("button", { name: /previous page/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("calls onClick on Next click", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<PaginationNext onClick={handleClick} />);
    await user.click(screen.getByRole("button", { name: /next page/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("disables Previous button when disabled prop is set", () => {
    render(<PaginationPrevious disabled />);
    const btn = screen.getByRole("button", { name: /previous page/i });
    expect(btn).toBeDisabled();
  });

  it("disables Next button when disabled prop is set", () => {
    render(<PaginationNext disabled />);
    const btn = screen.getByRole("button", { name: /next page/i });
    expect(btn).toBeDisabled();
  });

  it("applies disabled styles when disabled", () => {
    render(<PaginationPrevious disabled />);
    const btn = screen.getByRole("button", { name: /previous page/i });
    expect(btn.className).toContain("pointer-events-none");
  });

  it("renders ellipsis with aria-hidden", () => {
    const { container } = render(<PaginationEllipsis />);
    const ellipsis = container.firstChild as HTMLElement;
    expect(ellipsis).toHaveAttribute("aria-hidden", "true");
    expect(ellipsis.textContent).toBe("\u2026");
  });

  it("applies size variants to links", () => {
    const { rerender } = render(<PaginationLink size="sm">1</PaginationLink>);
    expect(screen.getByText("1").className).toContain("h-8");

    rerender(<PaginationLink size="lg">1</PaginationLink>);
    expect(screen.getByText("1").className).toContain("h-11");
  });

  it("merges custom className on Pagination", () => {
    render(
      <Pagination className="my-4" data-testid="nav">
        <PaginationContent>
          <PaginationItem>
            <PaginationLink>1</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>,
    );
    expect(screen.getByTestId("nav").className).toContain("my-4");
  });

  it("forwards ref on PaginationLink", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<PaginationLink ref={ref}>1</PaginationLink>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("forwards ref on Pagination", () => {
    const ref = React.createRef<HTMLElement>();
    render(
      <Pagination ref={ref}>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink>1</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>,
    );
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  describe("displayName", () => {
    it.each([
      ["Pagination", Pagination],
      ["PaginationContent", PaginationContent],
      ["PaginationItem", PaginationItem],
      ["PaginationLink", PaginationLink],
      ["PaginationPrevious", PaginationPrevious],
      ["PaginationNext", PaginationNext],
      ["PaginationEllipsis", PaginationEllipsis],
    ])("%s has correct displayName", (name, component) => {
      expect(component.displayName).toBe(name);
    });
  });
});
