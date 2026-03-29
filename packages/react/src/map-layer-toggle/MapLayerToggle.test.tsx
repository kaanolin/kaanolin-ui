import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MapLayerToggle, type MapLayer } from "./MapLayerToggle";

const layers: MapLayer[] = [
  { id: "gentrification", label: "Gentrificacion" },
  { id: "airbnb", label: "Airbnb" },
  { id: "fibras", label: "FIBRAs" },
];

const defaultProps = {
  layers,
  activeLayer: "gentrification",
  onLayerChange: jest.fn(),
};

describe("MapLayerToggle", () => {
  it("renders all layer labels", () => {
    render(<MapLayerToggle {...defaultProps} />);
    expect(screen.getByText("Gentrificacion")).toBeInTheDocument();
    expect(screen.getByText("Airbnb")).toBeInTheDocument();
    expect(screen.getByText("FIBRAs")).toBeInTheDocument();
  });

  it("uses role=radiogroup on root", () => {
    render(<MapLayerToggle {...defaultProps} />);
    expect(screen.getByRole("radiogroup")).toBeInTheDocument();
  });

  it("marks active layer with aria-checked=true", () => {
    render(<MapLayerToggle {...defaultProps} />);
    const radios = screen.getAllByRole("radio");
    const active = radios.find(
      (r) => r.getAttribute("aria-checked") === "true",
    );
    expect(active).toHaveTextContent("Gentrificacion");
  });

  it("marks inactive layers with aria-checked=false", () => {
    render(<MapLayerToggle {...defaultProps} />);
    const radios = screen.getAllByRole("radio");
    const inactive = radios.filter(
      (r) => r.getAttribute("aria-checked") === "false",
    );
    expect(inactive).toHaveLength(2);
  });

  it("calls onLayerChange when a layer is clicked", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(
      <MapLayerToggle {...defaultProps} onLayerChange={handleChange} />,
    );
    await user.click(screen.getByText("Airbnb"));
    expect(handleChange).toHaveBeenCalledWith("airbnb");
  });

  it("applies vertical orientation", () => {
    const { container } = render(
      <MapLayerToggle {...defaultProps} orientation="vertical" />,
    );
    expect(container.firstChild).toHaveClass("flex-col");
  });

  it("merges custom className", () => {
    const { container } = render(
      <MapLayerToggle {...defaultProps} className="mt-4" />,
    );
    expect(container.firstChild).toHaveClass("mt-4");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<MapLayerToggle {...defaultProps} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
