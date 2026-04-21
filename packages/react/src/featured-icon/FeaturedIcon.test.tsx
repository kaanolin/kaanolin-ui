import { render, screen } from "@testing-library/react";
import { FeaturedIcon } from "./FeaturedIcon";

const Heart = () => (
  <svg data-testid="heart" viewBox="0 0 24 24" width="24" height="24" />
);

describe("FeaturedIcon", () => {
  it("renders its children", () => {
    render(
      <FeaturedIcon data-testid="wrap">
        <Heart />
      </FeaturedIcon>,
    );
    expect(screen.getByTestId("heart")).toBeInTheDocument();
  });

  it("applies default size md + circle + brand", () => {
    render(
      <FeaturedIcon data-testid="wrap">
        <Heart />
      </FeaturedIcon>,
    );
    const wrap = screen.getByTestId("wrap");
    expect(wrap.className).toContain("size-10");
    expect(wrap.className).toContain("rounded-full");
    expect(wrap.className).toContain("bg-utility-brand-50");
  });

  it("applies size 2xl", () => {
    render(
      <FeaturedIcon data-testid="wrap" size="2xl">
        <Heart />
      </FeaturedIcon>,
    );
    expect(screen.getByTestId("wrap").className).toContain("size-16");
  });

  it("applies shape square", () => {
    render(
      <FeaturedIcon data-testid="wrap" shape="square">
        <Heart />
      </FeaturedIcon>,
    );
    expect(screen.getByTestId("wrap").className).toContain("rounded-lg");
  });

  it("applies solid variant compound (brand)", () => {
    render(
      <FeaturedIcon data-testid="wrap" variant="solid" color="brand">
        <Heart />
      </FeaturedIcon>,
    );
    expect(screen.getByTestId("wrap").className).toContain("bg-utility-brand-600");
    expect(screen.getByTestId("wrap").className).toContain("text-fg-white");
  });
});
