import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MapLayerToggle, type MapLayer } from "./MapLayerToggle";

const layers: MapLayer[] = [
  { id: "gentrification", label: "Gentrificacion" },
  { id: "airbnb", label: "Airbnb" },
  { id: "fibras", label: "FIBRAs" },
  { id: "displacement", label: "Desplazamiento" },
];

const meta = {
  title: "Components/MapLayerToggle",
  component: MapLayerToggle,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
} satisfies Meta<typeof MapLayerToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    layers,
    activeLayer: "gentrification",
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    layers,
    activeLayer: "airbnb",
    orientation: "vertical",
  },
};

export const Small: Story = {
  args: {
    layers,
    activeLayer: "gentrification",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    layers,
    activeLayer: "fibras",
    size: "lg",
  },
};

export const Interactive: Story = {
  render: () => {
    const [active, setActive] = React.useState("gentrification");
    return (
      <MapLayerToggle
        layers={layers}
        activeLayer={active}
        onLayerChange={setActive}
      />
    );
  },
};
