import React from "react";
import { render, screen } from "@testing-library/react";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("renders with role status", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("has default aria-label of Loading", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toHaveAttribute("aria-label", "Loading");
  });

  it("accepts a custom label", () => {
    render(<Spinner label="Please wait" />);
    expect(screen.getByRole("status")).toHaveAttribute(
      "aria-label",
      "Please wait",
    );
  });

  it("applies default size (md) classes", () => {
    render(<Spinner />);
    const spinner = screen.getByRole("status");
    expect(spinner.getAttribute("class")).toContain("size-6");
  });

  it("applies xs size", () => {
    render(<Spinner size="xs" />);
    expect(screen.getByRole("status").getAttribute("class")).toContain("size-4");
  });

  it("applies sm size", () => {
    render(<Spinner size="sm" />);
    expect(screen.getByRole("status").getAttribute("class")).toContain("size-5");
  });

  it("applies lg size", () => {
    render(<Spinner size="lg" />);
    expect(screen.getByRole("status").getAttribute("class")).toContain("size-8");
  });

  it("applies xl size", () => {
    render(<Spinner size="xl" />);
    expect(screen.getByRole("status").getAttribute("class")).toContain(
      "size-12",
    );
  });

  it("applies default color (brand) classes", () => {
    render(<Spinner />);
    expect(screen.getByRole("status").getAttribute("class")).toContain(
      "text-brand-600",
    );
  });

  it("applies gray color", () => {
    render(<Spinner color="gray" />);
    expect(screen.getByRole("status").getAttribute("class")).toContain(
      "text-fg-quaternary",
    );
  });

  it("applies white color", () => {
    render(<Spinner color="white" />);
    expect(screen.getByRole("status").getAttribute("class")).toContain(
      "text-fg-white",
    );
  });

  it("merges custom className", () => {
    render(<Spinner className="ml-2" />);
    expect(screen.getByRole("status").getAttribute("class")).toContain("ml-2");
  });

  it("forwards ref", () => {
    const ref = React.createRef<SVGSVGElement>();
    render(<Spinner ref={ref} />);
    expect(ref.current).toBeInstanceOf(SVGSVGElement);
  });

  it("passes SVG attributes", () => {
    render(<Spinner data-testid="my-spinner" />);
    expect(screen.getByTestId("my-spinner")).toBeInTheDocument();
  });

  it("applies animate-spin class", () => {
    render(<Spinner />);
    expect(screen.getByRole("status").getAttribute("class")).toContain(
      "animate-spin",
    );
  });
});
