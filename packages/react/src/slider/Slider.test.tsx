import { render, screen } from "@testing-library/react";
import { Slider } from "./Slider";

describe("Slider", () => {
  it("renders a slider", () => {
    render(<Slider defaultValue={[50]} aria-label="Volume" />);
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });

  it("renders with a default value", () => {
    render(<Slider defaultValue={[30]} aria-label="Volume" />);
    const slider = screen.getByRole("slider");
    expect(slider).toHaveAttribute("aria-valuenow", "30");
  });

  it("renders in range mode with two thumbs", () => {
    render(<Slider defaultValue={[20, 80]} aria-label="Range" />);
    const sliders = screen.getAllByRole("slider");
    expect(sliders).toHaveLength(2);
    expect(sliders[0]).toHaveAttribute("aria-valuenow", "20");
    expect(sliders[1]).toHaveAttribute("aria-valuenow", "80");
  });

  it("renders as disabled", () => {
    render(<Slider defaultValue={[50]} disabled aria-label="Disabled" />);
    const slider = screen.getByRole("slider");
    expect(slider).toHaveAttribute("data-disabled", "");
  });

  it("applies correct aria attributes for min and max", () => {
    render(
      <Slider defaultValue={[5]} min={0} max={10} aria-label="Rating" />,
    );
    const slider = screen.getByRole("slider");
    expect(slider).toHaveAttribute("aria-valuemin", "0");
    expect(slider).toHaveAttribute("aria-valuemax", "10");
  });

  it("applies sm size variant classes", () => {
    const { container } = render(
      <Slider defaultValue={[50]} size="sm" aria-label="Small" />,
    );
    const root = container.firstElementChild;
    expect(root?.className).toContain("h-5");
  });

  it("applies md size variant classes", () => {
    const { container } = render(
      <Slider defaultValue={[50]} size="md" aria-label="Medium" />,
    );
    const root = container.firstElementChild;
    expect(root?.className).toContain("h-6");
  });

  it("merges custom className", () => {
    const { container } = render(
      <Slider defaultValue={[50]} className="mt-4" aria-label="Custom" />,
    );
    const root = container.firstElementChild;
    expect(root?.className).toContain("mt-4");
  });
});
