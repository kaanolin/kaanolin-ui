import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

/* ========== Checkbox meta ========== */

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md"] },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    indeterminate: { control: "boolean" },
    error: { control: "boolean" },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ========== Stories ========== */

export const Default: Story = {
  args: { "aria-label": "Default checkbox" },
};

export const Checked: Story = {
  args: { checked: true, "aria-label": "Checked checkbox" },
};

export const Indeterminate: Story = {
  args: { indeterminate: true, "aria-label": "Indeterminate checkbox" },
};

export const WithLabel: Story = {
  args: { label: "Accept terms and conditions" },
};

export const WithDescription: Story = {
  args: {
    label: "Accept terms and conditions",
    description:
      "You agree to our Terms of Service and Privacy Policy.",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled checkbox",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled checked",
    checked: true,
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    label: "Accept terms",
    error: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox size="sm" label="Small checkbox" />
      <Checkbox size="md" label="Medium checkbox" />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" checked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" checked disabled />
      <Checkbox label="Error" error />
    </div>
  ),
};
