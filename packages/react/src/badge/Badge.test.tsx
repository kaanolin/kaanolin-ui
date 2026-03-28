import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders with text content", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("applies default color classes (gray)", () => {
    render(<Badge>Default</Badge>);
    const badge = screen.getByText("Default");
    expect(badge.className).toContain("bg-utility-neutral-50");
    expect(badge.className).toContain("text-utility-neutral-700");
  });

  it("applies brand color", () => {
    render(<Badge color="brand">Brand</Badge>);
    expect(screen.getByText("Brand").className).toContain("bg-utility-brand-50");
  });

  it("applies error color", () => {
    render(<Badge color="error">Error</Badge>);
    expect(screen.getByText("Error").className).toContain("bg-utility-red-50");
  });

  it("applies warning color", () => {
    render(<Badge color="warning">Pending</Badge>);
    expect(screen.getByText("Pending").className).toContain("bg-utility-yellow-50");
  });

  it("applies success color", () => {
    render(<Badge color="success">Active</Badge>);
    expect(screen.getByText("Active").className).toContain("bg-utility-green-50");
  });

  it("applies size variants", () => {
    const { rerender } = render(<Badge size="sm">Small</Badge>);
    expect(screen.getByText("Small").className).toContain("px-2");

    rerender(<Badge size="lg">Large</Badge>);
    expect(screen.getByText("Large").className).toContain("px-3");
  });

  it("applies pill shape by default", () => {
    render(<Badge>Pill</Badge>);
    expect(screen.getByText("Pill").className).toContain("rounded-full");
  });

  it("applies badge shape", () => {
    render(<Badge shape="badge">Square</Badge>);
    expect(screen.getByText("Square").className).toContain("rounded-md");
  });

  it("renders dot indicator when dot prop is set", () => {
    const { container } = render(<Badge dot>Status</Badge>);
    const dot = container.querySelector(".rounded-full.bg-utility-neutral-500");
    expect(dot).toBeInTheDocument();
  });

  it("renders icon when provided", () => {
    const Icon = (props: React.SVGProps<SVGSVGElement>) => (
      <svg data-testid="badge-icon" {...props} />
    );
    render(<Badge icon={Icon}>With Icon</Badge>);
    expect(screen.getByTestId("badge-icon")).toBeInTheDocument();
  });

  it("renders dismiss button when dismissible", () => {
    render(<Badge dismissible>Dismiss</Badge>);
    expect(screen.getByRole("button", { name: /dismiss/i })).toBeInTheDocument();
  });

  it("calls onDismiss when dismiss button is clicked", async () => {
    const user = userEvent.setup();
    const handleDismiss = jest.fn();
    render(
      <Badge dismissible onDismiss={handleDismiss}>
        Dismiss
      </Badge>,
    );
    await user.click(screen.getByRole("button", { name: /dismiss/i }));
    expect(handleDismiss).toHaveBeenCalledTimes(1);
  });

  it("merges custom className", () => {
    render(<Badge className="ml-2">Custom</Badge>);
    const badge = screen.getByText("Custom");
    expect(badge.className).toContain("ml-2");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Badge ref={ref}>Ref</Badge>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it("passes HTML attributes", () => {
    render(<Badge data-testid="my-badge">Badge</Badge>);
    expect(screen.getByTestId("my-badge")).toBeInTheDocument();
  });
});
