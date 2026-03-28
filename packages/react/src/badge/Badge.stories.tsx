import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const colors = [
  "gray",
  "brand",
  "error",
  "warning",
  "success",
  "blue",
  "indigo",
  "purple",
  "pink",
  "orange",
] as const;

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "select", options: colors },
    size: { control: "select", options: ["sm", "md", "lg"] },
    shape: { control: "select", options: ["pill", "badge"] },
    dot: { control: "boolean" },
    dismissible: { control: "boolean" },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Badge" },
};

export const Brand: Story = {
  args: { children: "Brand", color: "brand" },
};

export const Error: Story = {
  args: { children: "Error", color: "error" },
};

export const Success: Story = {
  args: { children: "Active", color: "success" },
};

export const Warning: Story = {
  args: { children: "Pending", color: "warning" },
};

export const WithDot: Story = {
  args: { children: "Status", dot: true, color: "success" },
};

export const Dismissible: Story = {
  args: { children: "Tag", dismissible: true, color: "brand" },
};

export const BadgeShape: Story = {
  args: { children: "Badge", shape: "badge" },
};

export const Small: Story = {
  args: { children: "Small", size: "sm" },
};

export const Large: Story = {
  args: { children: "Large", size: "lg" },
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {colors.map((color) => (
        <Badge key={color} color={color} dot>
          {color}
        </Badge>
      ))}
    </div>
  ),
};
