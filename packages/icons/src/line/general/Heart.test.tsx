import { createRef } from "react";
import { render } from "@testing-library/react";
import { Heart } from "./Heart";

describe("Heart (pilot icon)", () => {
  it("renders an svg at 24px by default", () => {
    const { container } = render(<Heart />);
    const svg = container.querySelector("svg")!;
    expect(svg).toBeInTheDocument();
    expect(svg.getAttribute("width")).toBe("24");
    expect(svg.getAttribute("height")).toBe("24");
  });

  it("is aria-hidden when no title/aria-label is provided", () => {
    const { container } = render(<Heart />);
    const svg = container.querySelector("svg")!;
    expect(svg.getAttribute("aria-hidden")).toBe("true");
  });

  it('exposes role="img" and a <title> when title prop is provided', () => {
    const { container, getByText } = render(<Heart title="Favorite" />);
    const svg = container.querySelector("svg")!;
    expect(svg.getAttribute("role")).toBe("img");
    expect(getByText("Favorite").tagName.toLowerCase()).toBe("title");
  });

  it("forwards ref to the underlying svg element", () => {
    const ref = createRef<SVGSVGElement>();
    render(<Heart ref={ref} />);
    expect(ref.current?.tagName.toLowerCase()).toBe("svg");
  });

  it("applies strokeWidth to the inner path", () => {
    const { container } = render(<Heart strokeWidth={3} />);
    const path = container.querySelector("path")!;
    expect(path.getAttribute("stroke-width")).toBe("3");
  });
});
