import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tag } from "./Tag";

describe("Tag", () => {
  it("renders with text content", () => {
    render(<Tag>Label</Tag>);
    expect(screen.getByText("Label")).toBeInTheDocument();
  });

  it("applies default color classes (gray)", () => {
    render(<Tag>Default</Tag>);
    const tag = screen.getByText("Default");
    expect(tag.className).toContain("bg-utility-neutral-50");
    expect(tag.className).toContain("text-utility-neutral-700");
  });

  it("applies brand color", () => {
    render(<Tag color="brand">Brand</Tag>);
    expect(screen.getByText("Brand").className).toContain("bg-utility-brand-50");
  });

  it("applies error color", () => {
    render(<Tag color="error">Error</Tag>);
    expect(screen.getByText("Error").className).toContain("bg-utility-red-50");
  });

  it("applies warning color", () => {
    render(<Tag color="warning">Warning</Tag>);
    expect(screen.getByText("Warning").className).toContain("bg-utility-yellow-50");
  });

  it("applies success color", () => {
    render(<Tag color="success">Success</Tag>);
    expect(screen.getByText("Success").className).toContain("bg-utility-green-50");
  });

  it("applies size variants", () => {
    const { rerender } = render(<Tag size="sm">Small</Tag>);
    expect(screen.getByText("Small").className).toContain("px-1.5");

    rerender(<Tag size="lg">Large</Tag>);
    expect(screen.getByText("Large").className).toContain("px-2.5");
  });

  it("renders avatar as image when given a string URL", () => {
    const { container } = render(
      <Tag avatar="https://example.com/avatar.png">With Avatar</Tag>,
    );
    const img = container.querySelector("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://example.com/avatar.png");
  });

  it("renders avatar as React node", () => {
    render(
      <Tag avatar={<span data-testid="custom-avatar">A</span>}>With Avatar</Tag>,
    );
    expect(screen.getByTestId("custom-avatar")).toBeInTheDocument();
  });

  it("renders icon when provided", () => {
    const Icon = (props: React.SVGProps<SVGSVGElement>) => (
      <svg data-testid="tag-icon" {...props} />
    );
    render(<Tag icon={Icon}>With Icon</Tag>);
    expect(screen.getByTestId("tag-icon")).toBeInTheDocument();
  });

  it("renders dismiss button when onDismiss is provided", () => {
    render(<Tag onDismiss={() => {}}>Dismiss</Tag>);
    expect(screen.getByRole("button", { name: /dismiss/i })).toBeInTheDocument();
  });

  it("calls onDismiss when dismiss button is clicked", async () => {
    const user = userEvent.setup();
    const handleDismiss = jest.fn();
    render(<Tag onDismiss={handleDismiss}>Dismiss</Tag>);
    await user.click(screen.getByRole("button", { name: /dismiss/i }));
    expect(handleDismiss).toHaveBeenCalledTimes(1);
  });

  it("applies disabled styles", () => {
    render(<Tag disabled>Disabled</Tag>);
    const tag = screen.getByText("Disabled");
    expect(tag.className).toContain("opacity-50");
    expect(tag.className).toContain("cursor-not-allowed");
  });

  it("merges custom className", () => {
    render(<Tag className="ml-2">Custom</Tag>);
    expect(screen.getByText("Custom").className).toContain("ml-2");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Tag ref={ref}>Ref</Tag>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it("passes HTML attributes", () => {
    render(<Tag data-testid="my-tag">Tag</Tag>);
    expect(screen.getByTestId("my-tag")).toBeInTheDocument();
  });
});
