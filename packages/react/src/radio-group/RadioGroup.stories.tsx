import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";

/* ========== RadioGroup meta ========== */

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    orientation: { control: "select", options: ["vertical", "horizontal"] },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ========== Stories ========== */

export const Default: Story = {
  render: (args) => (
    <RadioGroup defaultValue="option-1" {...args}>
      <RadioGroupItem value="option-1" label="Option 1" />
      <RadioGroupItem value="option-2" label="Option 2" />
      <RadioGroupItem value="option-3" label="Option 3" />
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1" orientation="horizontal">
      <RadioGroupItem value="option-1" label="Option 1" />
      <RadioGroupItem value="option-2" label="Option 2" />
      <RadioGroupItem value="option-3" label="Option 3" />
    </RadioGroup>
  ),
};

export const WithDescriptions: Story = {
  render: () => (
    <RadioGroup defaultValue="startup">
      <RadioGroupItem
        value="startup"
        label="Startup"
        description="Best for small teams just getting started."
      />
      <RadioGroupItem
        value="business"
        label="Business"
        description="For growing teams that need more features."
      />
      <RadioGroupItem
        value="enterprise"
        label="Enterprise"
        description="For large organizations with advanced needs."
      />
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1" disabled>
      <RadioGroupItem value="option-1" label="Option 1" />
      <RadioGroupItem value="option-2" label="Option 2" />
      <RadioGroupItem value="option-3" label="Option 3" />
    </RadioGroup>
  ),
};

export const DisabledSingleItem: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <RadioGroupItem value="option-1" label="Option 1" />
      <RadioGroupItem value="option-2" label="Option 2 (disabled)" disabled />
      <RadioGroupItem value="option-3" label="Option 3" />
    </RadioGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-8">
      <RadioGroup defaultValue="a">
        <RadioGroupItem value="a" size="sm" label="Small A" />
        <RadioGroupItem value="b" size="sm" label="Small B" />
      </RadioGroup>
      <RadioGroup defaultValue="a">
        <RadioGroupItem value="a" size="md" label="Medium A" />
        <RadioGroupItem value="b" size="md" label="Medium B" />
      </RadioGroup>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-2 text-sm font-medium text-text-secondary">
          Default
        </p>
        <RadioGroup defaultValue="a">
          <RadioGroupItem value="a" label="Selected" />
          <RadioGroupItem value="b" label="Unselected" />
        </RadioGroup>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-text-secondary">
          Disabled
        </p>
        <RadioGroup defaultValue="a" disabled>
          <RadioGroupItem value="a" label="Selected disabled" />
          <RadioGroupItem value="b" label="Unselected disabled" />
        </RadioGroup>
      </div>
    </div>
  ),
};
