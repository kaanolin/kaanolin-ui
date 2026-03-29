import { render, screen } from "@testing-library/react";
import { StatCard } from "./StatCard";

describe("StatCard", () => {
  it("renders label and value", () => {
    render(<StatCard label="Rent increase" value="236%" />);
    expect(screen.getByText("Rent increase")).toBeInTheDocument();
    expect(screen.getByText("236%")).toBeInTheDocument();
  });

  it("renders delta when provided", () => {
    render(
      <StatCard
        label="Growth"
        value="50%"
        delta="+12% vs last year"
        deltaType="up"
      />,
    );
    expect(screen.getByText("+12% vs last year")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(
      <StatCard label="Stat" value="100" description="Some description" />,
    );
    expect(screen.getByText("Some description")).toBeInTheDocument();
  });

  it("does not render delta when not provided", () => {
    const { container } = render(<StatCard label="Stat" value="100" />);
    expect(container.querySelectorAll("svg")).toHaveLength(0);
  });

  it("forwards ref", () => {
    const ref = { current: null as HTMLDivElement | null };
    render(<StatCard ref={ref} label="Test" value="1" />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom className", () => {
    const { container } = render(
      <StatCard label="Test" value="1" className="custom-class" />,
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
