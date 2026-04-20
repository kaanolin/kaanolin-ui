import React from "react";
import { render, screen } from "@testing-library/react";
import { Kbd } from "./Kbd";

describe("Kbd", () => {
  it("renders children", () => {
    render(<Kbd>⌘K</Kbd>);
    expect(screen.getByText("⌘K")).toBeInTheDocument();
  });

  it("uses a <kbd> tag", () => {
    render(<Kbd>Esc</Kbd>);
    expect(screen.getByText("Esc").tagName).toBe("KBD");
  });

  it("applies default size classes", () => {
    render(<Kbd>X</Kbd>);
    expect(screen.getByText("X").className).toContain("text-xs");
  });

  it.each(["sm", "md", "lg"] as const)("applies %s size", (size) => {
    render(<Kbd size={size}>X</Kbd>);
    expect(screen.getByText("X").className).toMatch(/text-/);
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLElement>();
    render(<Kbd ref={ref}>A</Kbd>);
    expect(ref.current?.tagName).toBe("KBD");
  });

  it("merges className", () => {
    render(<Kbd className="ml-2">A</Kbd>);
    expect(screen.getByText("A").className).toContain("ml-2");
  });
});
