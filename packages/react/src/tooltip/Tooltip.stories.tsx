import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    side: { control: "select", options: ["top", "right", "bottom", "left"] },
    sideOffset: { control: "number" },
    delayDuration: { control: "number" },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "This is a tooltip",
    children: <button className="rounded-md border px-3 py-1.5 text-sm">Hover me</button>,
  },
};

export const WithDescription: Story = {
  args: {
    content: "Tooltip title",
    description: "This is a supporting description for the tooltip.",
    children: <button className="rounded-md border px-3 py-1.5 text-sm">Hover me</button>,
  },
};

export const Sides: Story = {
  render: () => (
    <div className="flex items-center gap-8 p-16">
      <Tooltip content="Top tooltip" side="top">
        <button className="rounded-md border px-3 py-1.5 text-sm">Top</button>
      </Tooltip>
      <Tooltip content="Right tooltip" side="right">
        <button className="rounded-md border px-3 py-1.5 text-sm">Right</button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" side="bottom">
        <button className="rounded-md border px-3 py-1.5 text-sm">Bottom</button>
      </Tooltip>
      <Tooltip content="Left tooltip" side="left">
        <button className="rounded-md border px-3 py-1.5 text-sm">Left</button>
      </Tooltip>
    </div>
  ),
};

export const CustomDelay: Story = {
  args: {
    content: "I appear after 1 second",
    delayDuration: 1000,
    children: <button className="rounded-md border px-3 py-1.5 text-sm">Slow tooltip</button>,
  },
};
