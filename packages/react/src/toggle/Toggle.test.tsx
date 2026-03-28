import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Toggle } from "./Toggle";

/* ========== Toggle — basic rendering ========== */

describe("Toggle", () => {
  it("renders as a switch", () => {
    render(<Toggle />);
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it("renders unchecked by default", () => {
    render(<Toggle />);
    expect(screen.getByRole("switch")).toHaveAttribute("data-state", "unchecked");
  });

  it("renders checked when defaultChecked is true", () => {
    render(<Toggle defaultChecked />);
    expect(screen.getByRole("switch")).toHaveAttribute("data-state", "checked");
  });

  it("toggles on click", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(<Toggle onCheckedChange={handleChange} />);
    await user.click(screen.getByRole("switch"));
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("toggles off when checked and clicked", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(<Toggle defaultChecked onCheckedChange={handleChange} />);
    await user.click(screen.getByRole("switch"));
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it("does not toggle when disabled", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(<Toggle disabled onCheckedChange={handleChange} />);
    await user.click(screen.getByRole("switch"));
    expect(handleChange).not.toHaveBeenCalled();
  });

  it("applies disabled styling", () => {
    render(<Toggle disabled />);
    expect(screen.getByRole("switch")).toHaveAttribute("data-disabled", "");
  });

  it("merges custom className", () => {
    render(<Toggle className="my-custom-class" />);
    expect(screen.getByRole("switch").className).toContain("my-custom-class");
  });

  it("forwards ref to switch element", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Toggle ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});

/* ========== Toggle — label & description ========== */

describe("Toggle - label and description", () => {
  it("renders a label", () => {
    render(<Toggle label="Airplane mode" />);
    expect(screen.getByText("Airplane mode")).toBeInTheDocument();
  });

  it("renders a description", () => {
    render(<Toggle description="Toggle airplane mode on or off" />);
    expect(screen.getByText("Toggle airplane mode on or off")).toBeInTheDocument();
  });

  it("renders both label and description", () => {
    render(
      <Toggle label="Airplane mode" description="Toggle airplane mode on or off" />,
    );
    expect(screen.getByText("Airplane mode")).toBeInTheDocument();
    expect(screen.getByText("Toggle airplane mode on or off")).toBeInTheDocument();
  });

  it("associates label with switch via htmlFor", () => {
    render(<Toggle label="Airplane mode" id="airplane" />);
    const label = screen.getByText("Airplane mode");
    expect(label).toHaveAttribute("for", "airplane");
  });
});

/* ========== Toggle — size variants ========== */

describe("Toggle - size variants", () => {
  it("applies sm size classes", () => {
    render(<Toggle size="sm" />);
    const toggle = screen.getByRole("switch");
    expect(toggle.className).toContain("h-5");
    expect(toggle.className).toContain("w-9");
  });

  it("applies md size classes by default", () => {
    render(<Toggle />);
    const toggle = screen.getByRole("switch");
    expect(toggle.className).toContain("h-6");
    expect(toggle.className).toContain("w-11");
  });
});
