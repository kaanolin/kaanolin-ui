import React from "react";
import { render, screen } from "@testing-library/react";
import { StatusDot } from "./StatusDot";

describe("StatusDot", () => {
  it("renders with default idle status", () => {
    render(<StatusDot data-testid="dot" />);
    const dot = screen.getByTestId("dot");
    expect(dot.className).toContain("bg-utility-neutral-400");
  });

  it("applies success status", () => {
    render(<StatusDot status="success" data-testid="dot" />);
    expect(screen.getByTestId("dot").className).toContain("bg-utility-green-500");
  });

  it("applies error status", () => {
    render(<StatusDot status="error" data-testid="dot" />);
    expect(screen.getByTestId("dot").className).toContain("bg-utility-red-500");
  });

  it("applies warning status", () => {
    render(<StatusDot status="warning" data-testid="dot" />);
    expect(screen.getByTestId("dot").className).toContain("bg-utility-yellow-500");
  });

  it("exposes label via role=status", () => {
    render(<StatusDot status="success" label="Service healthy" />);
    expect(screen.getByRole("status")).toHaveAccessibleName("Service healthy");
  });

  it("renders halo when pulse is true", () => {
    render(<StatusDot status="success" pulse data-testid="dot" />);
    const dot = screen.getByTestId("dot");
    expect(dot.querySelector("span[aria-hidden]")).not.toBeNull();
  });

  it("omits halo when pulse is false", () => {
    render(<StatusDot status="success" data-testid="dot" />);
    expect(screen.getByTestId("dot").querySelector("span[aria-hidden]")).toBeNull();
  });

  it.each(["sm", "md", "lg"] as const)("applies %s size", (size) => {
    render(<StatusDot size={size} data-testid="dot" />);
    expect(screen.getByTestId("dot").className).toMatch(/size-/);
  });
});
