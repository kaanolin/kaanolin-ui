import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./Toggle";

/* ========== Toggle meta ========== */

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md"] },
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ========== Stories ========== */

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const WithLabel: Story = {
  args: { label: "Airplane mode" },
};

export const WithDescription: Story = {
  args: {
    label: "Airplane mode",
    description: "Disable all wireless connections",
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledChecked: Story = {
  args: { disabled: true, defaultChecked: true },
};

export const Small: Story = {
  args: { size: "sm" },
};

export const SmallWithLabel: Story = {
  args: { size: "sm", label: "Compact toggle" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toggle label="Default (md)" />
      <Toggle label="Small (sm)" size="sm" />
      <Toggle label="Checked" defaultChecked />
      <Toggle label="Disabled" disabled />
      <Toggle
        label="With description"
        description="This is a helpful description"
      />
    </div>
  ),
};
