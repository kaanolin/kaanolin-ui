import { render, screen } from "@testing-library/react";
import { Callout } from "./Callout";

describe("Callout", () => {
  it("renders the title and children", () => {
    render(
      <Callout title="Heads up">
        Something to know.
      </Callout>,
    );
    expect(screen.getByText("Heads up")).toBeInTheDocument();
    expect(screen.getByText("Something to know.")).toBeInTheDocument();
  });

  it('exposes role="note"', () => {
    render(<Callout>body</Callout>);
    expect(screen.getByRole("note")).toBeInTheDocument();
  });

  it("applies the default info tone", () => {
    render(<Callout data-testid="c">x</Callout>);
    expect(screen.getByTestId("c").className).toContain("bg-utility-blue-50");
  });

  it("applies error tone classes", () => {
    render(
      <Callout data-testid="c" tone="error">
        nope
      </Callout>,
    );
    expect(screen.getByTestId("c").className).toContain("bg-utility-red-50");
  });

  it("renders a custom icon when provided", () => {
    const CustomIcon = (p: React.SVGProps<SVGSVGElement>) => (
      <svg data-testid="custom" {...p} />
    );
    render(<Callout icon={CustomIcon}>body</Callout>);
    expect(screen.getByTestId("custom")).toBeInTheDocument();
  });
});
