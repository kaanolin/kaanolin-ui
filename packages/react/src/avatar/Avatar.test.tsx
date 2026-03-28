import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders an image when src is provided", () => {
    render(<Avatar src="/photo.jpg" alt="User photo" />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/photo.jpg");
    expect(img).toHaveAttribute("alt", "User photo");
  });

  it("uses name as alt fallback when alt is not provided", () => {
    render(<Avatar src="/photo.jpg" name="Jane Doe" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("alt", "Jane Doe");
  });

  it("shows initials when image fails to load", () => {
    render(<Avatar src="/broken.jpg" name="John Doe" />);
    const img = screen.getByRole("img");
    fireEvent.error(img);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("shows initials when no src is provided", () => {
    render(<Avatar name="Alice Bennett" />);
    expect(screen.getByText("AB")).toBeInTheDocument();
  });

  it("shows single initial for single-word name", () => {
    render(<Avatar name="Alice" />);
    expect(screen.getByText("A")).toBeInTheDocument();
  });

  it("shows user icon fallback when no name and no src", () => {
    const { container } = render(<Avatar data-testid="avatar" />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("renders status indicator", () => {
    render(<Avatar name="John" status="online" />);
    expect(screen.getByLabelText("online")).toBeInTheDocument();
  });

  it("applies correct status color classes", () => {
    const { rerender } = render(<Avatar name="J" status="online" />);
    expect(screen.getByLabelText("online").className).toContain(
      "bg-utility-green-500",
    );

    rerender(<Avatar name="J" status="offline" />);
    expect(screen.getByLabelText("offline").className).toContain(
      "bg-utility-neutral-300",
    );

    rerender(<Avatar name="J" status="away" />);
    expect(screen.getByLabelText("away").className).toContain(
      "bg-utility-yellow-500",
    );

    rerender(<Avatar name="J" status="busy" />);
    expect(screen.getByLabelText("busy").className).toContain(
      "bg-utility-red-500",
    );
  });

  it("applies size variants", () => {
    const { container, rerender } = render(<Avatar size="xs" name="A" />);
    expect(container.firstChild).toHaveClass("size-6");

    rerender(<Avatar size="sm" name="A" />);
    expect(container.firstChild).toHaveClass("size-8");

    rerender(<Avatar size="md" name="A" />);
    expect(container.firstChild).toHaveClass("size-10");

    rerender(<Avatar size="lg" name="A" />);
    expect(container.firstChild).toHaveClass("size-12");

    rerender(<Avatar size="xl" name="A" />);
    expect(container.firstChild).toHaveClass("size-14");

    rerender(<Avatar size="2xl" name="A" />);
    expect(container.firstChild).toHaveClass("size-16");
  });

  it("applies circle shape by default", () => {
    const { container } = render(<Avatar name="A" />);
    expect(container.firstChild).toHaveClass("rounded-full");
  });

  it("applies rounded shape", () => {
    const { container } = render(<Avatar name="A" shape="rounded" />);
    expect(container.firstChild).toHaveClass("rounded-lg");
  });

  it("merges custom className", () => {
    const { container } = render(<Avatar name="A" className="ml-4" />);
    expect(container.firstChild).toHaveClass("ml-4");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Avatar ref={ref} name="A" />);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it("passes HTML attributes", () => {
    render(<Avatar data-testid="my-avatar" name="A" />);
    expect(screen.getByTestId("my-avatar")).toBeInTheDocument();
  });

  it("has correct displayName", () => {
    expect(Avatar.displayName).toBe("Avatar");
  });
});
