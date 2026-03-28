import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./Progress";

/* ========== Progress meta ========== */

const meta = {
  title: "Components/Progress",
  component: Progress,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    color: { control: "select", options: ["brand", "success", "error", "warning"] },
    value: { control: { type: "range", min: 0, max: 100 } },
    max: { control: "number" },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ========== Stories ========== */

export const Default: Story = {
  args: { value: 50 },
};

export const Empty: Story = {
  args: { value: 0 },
};

export const Full: Story = {
  args: { value: 100 },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Progress value={60} size="sm" />
      <Progress value={60} size="md" />
      <Progress value={60} size="lg" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Progress value={60} color="brand" />
      <Progress value={60} color="success" />
      <Progress value={60} color="error" />
      <Progress value={60} color="warning" />
    </div>
  ),
};

export const WithLabels: Story = {
  render: () => {
    const value = 73;
    return (
      <div className="flex flex-col gap-1">
        <div className="flex justify-between text-sm">
          <span>Uploading...</span>
          <span>{value}%</span>
        </div>
        <Progress value={value} />
      </div>
    );
  },
};

export const CustomMax: Story = {
  args: { value: 3, max: 10 },
};
