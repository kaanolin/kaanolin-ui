import type { Meta, StoryObj } from "@storybook/react";
import { Kbd } from "./Kbd";

const meta = {
  title: "Components/Kbd",
  component: Kbd,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: "⌘K" } };

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Kbd size="sm">⌘</Kbd>
      <Kbd size="md">⌘</Kbd>
      <Kbd size="lg">⌘</Kbd>
    </div>
  ),
};

export const Combo: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
      <Kbd>⌘</Kbd>
      <span style={{ color: "#a3a3a3" }}>+</span>
      <Kbd>K</Kbd>
    </div>
  ),
};
