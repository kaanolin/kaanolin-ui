import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Combobox,
  ComboboxItem,
  ComboboxGroup,
  ComboboxSeparator,
} from "./Combobox";

const meta = {
  title: "Components/Combobox",
  component: Combobox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["small", "medium", "large"] },
    variant: { control: "select", options: ["default", "error", "success"] },
    disabled: { control: "boolean" },
    isRequired: { control: "boolean" },
    hideRequiredIndicator: { control: "boolean" },
    placeholder: { control: "text" },
    label: { control: "text" },
    helperText: { control: "text" },
    tooltip: { control: "text" },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ========== Stories ========== */

export const Basic: Story = {
  args: {
    placeholder: "Search fruits...",
  },
  render: (args) => (
    <Combobox {...args}>
      <ComboboxItem value="apple">Apple</ComboboxItem>
      <ComboboxItem value="banana">Banana</ComboboxItem>
      <ComboboxItem value="cherry">Cherry</ComboboxItem>
      <ComboboxItem value="grape">Grape</ComboboxItem>
      <ComboboxItem value="orange">Orange</ComboboxItem>
    </Combobox>
  ),
};

export const WithLabel: Story = {
  args: {
    label: "Team member",
    placeholder: "Search team member...",
    helperText: "This is a hint text to help user.",
    isRequired: true,
    tooltip: "Search and select a team member from the list",
  },
  render: (args) => (
    <Combobox {...args}>
      <ComboboxItem value="olivia">Olivia Rhye</ComboboxItem>
      <ComboboxItem value="phoenix">Phoenix Baker</ComboboxItem>
      <ComboboxItem value="lana">Lana Steiner</ComboboxItem>
      <ComboboxItem value="demi">Demi Wilkinson</ComboboxItem>
      <ComboboxItem value="candice">Candice Wu</ComboboxItem>
    </Combobox>
  ),
};

export const Controlled: Story = {
  args: {
    label: "Fruit",
    placeholder: "Search fruit...",
  },
  render: (args) => {
    const [value, setValue] = useState<string | undefined>(undefined);
    return (
      <div className="flex flex-col gap-4">
        <Combobox {...args} value={value} onValueChange={setValue}>
          <ComboboxItem value="apple">Apple</ComboboxItem>
          <ComboboxItem value="banana">Banana</ComboboxItem>
          <ComboboxItem value="cherry">Cherry</ComboboxItem>
        </Combobox>
        <p className="text-sm text-text-tertiary">
          Selected: {value ?? "none"}
        </p>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    label: "Team member",
    placeholder: "Search team member...",
    disabled: true,
    defaultValue: "phoenix",
  },
  render: (args) => (
    <Combobox {...args}>
      <ComboboxItem value="olivia">Olivia Rhye</ComboboxItem>
      <ComboboxItem value="phoenix">Phoenix Baker</ComboboxItem>
      <ComboboxItem value="lana">Lana Steiner</ComboboxItem>
    </Combobox>
  ),
};

export const Error: Story = {
  args: {
    label: "Team member",
    placeholder: "Search team member...",
    variant: "error",
    helperText: "This field is required.",
    isRequired: true,
  },
  render: (args) => (
    <Combobox {...args}>
      <ComboboxItem value="olivia">Olivia Rhye</ComboboxItem>
      <ComboboxItem value="phoenix">Phoenix Baker</ComboboxItem>
    </Combobox>
  ),
};

export const WithGroups: Story = {
  args: {
    label: "Team member",
    placeholder: "Search team member...",
  },
  render: (args) => (
    <Combobox {...args}>
      <ComboboxGroup label="Engineering">
        <ComboboxItem value="olivia">Olivia Rhye</ComboboxItem>
        <ComboboxItem value="phoenix">Phoenix Baker</ComboboxItem>
      </ComboboxGroup>
      <ComboboxSeparator />
      <ComboboxGroup label="Design">
        <ComboboxItem value="lana">Lana Steiner</ComboboxItem>
        <ComboboxItem value="demi">Demi Wilkinson</ComboboxItem>
      </ComboboxGroup>
    </Combobox>
  ),
};

export const ManyItems: Story = {
  args: {
    label: "Country",
    placeholder: "Search country...",
  },
  render: (args) => (
    <Combobox {...args}>
      {[
        "Argentina",
        "Australia",
        "Brazil",
        "Canada",
        "Chile",
        "China",
        "Colombia",
        "France",
        "Germany",
        "India",
        "Italy",
        "Japan",
        "Mexico",
        "Netherlands",
        "Portugal",
        "South Korea",
        "Spain",
        "Sweden",
        "United Kingdom",
        "United States",
      ].map((country) => (
        <ComboboxItem
          key={country}
          value={country.toLowerCase().replace(/\s+/g, "-")}
        >
          {country}
        </ComboboxItem>
      ))}
    </Combobox>
  ),
};
