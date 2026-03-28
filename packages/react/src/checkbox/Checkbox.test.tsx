import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./Checkbox";

/* ========== Checkbox — basic rendering ========== */

describe("Checkbox", () => {
  it("renders an unchecked checkbox by default", () => {
    render(<Checkbox aria-label="Accept" />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it("renders as checked when checked prop is true", () => {
    render(<Checkbox checked aria-label="Accept" />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("renders as checked when defaultChecked is true", () => {
    render(<Checkbox defaultChecked aria-label="Accept" />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("calls onCheckedChange when clicked", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(<Checkbox onCheckedChange={handleChange} aria-label="Accept" />);
    await user.click(screen.getByRole("checkbox"));
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("does not call onCheckedChange when disabled", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(
      <Checkbox disabled onCheckedChange={handleChange} aria-label="Accept" />,
    );
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeDisabled();
    await user.click(checkbox);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it("applies disabled styling", () => {
    render(<Checkbox disabled aria-label="Accept" />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeDisabled();
  });

  it("applies sm size classes", () => {
    render(<Checkbox size="sm" aria-label="Accept" />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.className).toContain("size-4");
    expect(checkbox.className).toContain("rounded-[4px]");
  });

  it("applies md size classes by default", () => {
    render(<Checkbox aria-label="Accept" />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.className).toContain("size-5");
    expect(checkbox.className).toContain("rounded-[6px]");
  });

  it("merges custom className", () => {
    render(<Checkbox className="my-custom-class" aria-label="Accept" />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.className).toContain("my-custom-class");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Checkbox ref={ref} aria-label="Accept" />);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});

/* ========== Checkbox — indeterminate ========== */

describe("Checkbox - indeterminate", () => {
  it("renders with indeterminate state", () => {
    const { container } = render(
      <Checkbox indeterminate aria-label="Select all" />,
    );
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute("data-state", "indeterminate");
    // Should render minus icon instead of check
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });
});

/* ========== Checkbox — label & description ========== */

describe("Checkbox - label and description", () => {
  it("renders a label", () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByText("Accept terms")).toBeInTheDocument();
  });

  it("renders a description", () => {
    render(
      <Checkbox
        label="Accept terms"
        description="You agree to our terms of service."
      />,
    );
    expect(screen.getByText("Accept terms")).toBeInTheDocument();
    expect(
      screen.getByText("You agree to our terms of service."),
    ).toBeInTheDocument();
  });

  it("clicking the label toggles the checkbox", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(
      <Checkbox label="Accept terms" onCheckedChange={handleChange} />,
    );
    await user.click(screen.getByText("Accept terms"));
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("applies disabled styling to label when disabled", () => {
    render(<Checkbox label="Accept terms" disabled />);
    const label = screen.getByText("Accept terms");
    expect(label.className).toContain("cursor-not-allowed");
  });
});

/* ========== Checkbox — error ========== */

describe("Checkbox - error", () => {
  it("applies error border class", () => {
    render(<Checkbox error aria-label="Accept" />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.className).toContain("border-error-300");
  });
});
