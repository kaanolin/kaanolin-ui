import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextEditor } from "./TextEditor";

const meta = {
  title: "Components/TextEditor",
  component: TextEditor,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "error"] },
    disabled: { control: "boolean" },
    editable: { control: "boolean" },
    isRequired: { control: "boolean" },
    hideRequiredIndicator: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 600 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TextEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ========== Default ========== */

export const Default: Story = {
  args: {},
};

/* ========== With Content ========== */

export const WithContent: Story = {
  args: {
    defaultContent:
      "<h2>Hello World</h2><p>This is a <strong>rich text</strong> editor with <em>formatting</em> support.</p><ul><li>Bullet item one</li><li>Bullet item two</li></ul>",
  },
};

/* ========== With Label ========== */

export const WithLabel: Story = {
  args: {
    label: "Description",
    helperText: "Write a detailed description for this item.",
    isRequired: true,
    tooltip: "Supports rich text formatting",
  },
};

/* ========== Placeholder ========== */

export const WithPlaceholder: Story = {
  args: {
    label: "Notes",
    placeholder: "Start typing your notes here...",
  },
};

/* ========== Disabled ========== */

export const Disabled: Story = {
  args: {
    label: "Description",
    defaultContent: "<p>This editor is disabled.</p>",
    disabled: true,
    helperText: "You cannot edit this field.",
  },
};

/* ========== Error ========== */

export const Error: Story = {
  args: {
    label: "Description",
    variant: "error",
    helperText: "Description is required.",
    isRequired: true,
  },
};

/* ========== Custom Toolbar ========== */

export const CustomToolbar: Story = {
  args: {
    label: "Custom Toolbar",
    defaultContent: "<p>This editor has a custom toolbar.</p>",
    children: (
      <div className="flex gap-1 p-2 border-b border-border-secondary text-sm text-text-secondary">
        <span>Custom toolbar content goes here</span>
      </div>
    ),
  },
};
