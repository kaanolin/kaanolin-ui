import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";

const meta = {
  title: "Components/Slider",
  component: Slider,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md"] },
    disabled: { control: "boolean" },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    "aria-label": "Default slider",
  },
};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    "aria-label": "Range slider",
  },
};

export const WithLabels: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-sm text-fg-secondary">
        <span>0</span>
        <span>100</span>
      </div>
      <Slider defaultValue={[50]} aria-label="Labeled slider" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    disabled: true,
    "aria-label": "Disabled slider",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-fg-secondary">Small</span>
        <Slider defaultValue={[40]} size="sm" aria-label="Small slider" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-fg-secondary">Medium</span>
        <Slider defaultValue={[60]} size="md" aria-label="Medium slider" />
      </div>
    </div>
  ),
};
