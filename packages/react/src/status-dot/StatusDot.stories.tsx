import type { Meta, StoryObj } from "@storybook/react";
import { StatusDot } from "./StatusDot";

const meta = {
  title: "Components/StatusDot",
  component: StatusDot,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: ["success", "warning", "error", "info", "idle"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
    pulse: { control: "boolean" },
  },
} satisfies Meta<typeof StatusDot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { status: "success" } };

export const Pulsing: Story = { args: { status: "success", pulse: true, size: "lg" } };

export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <StatusDot status="success" label="healthy" />
      <StatusDot status="warning" label="warning" />
      <StatusDot status="error" label="error" />
      <StatusDot status="info" label="info" />
      <StatusDot status="idle" label="idle" />
    </div>
  ),
};

export const Live: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <StatusDot status="success" pulse size="lg" />
      <span style={{ fontFamily: "monospace", fontSize: 12 }}>LIVE · 12 services</span>
    </div>
  ),
};
