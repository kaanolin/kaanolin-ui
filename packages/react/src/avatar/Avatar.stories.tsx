import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const sizes = ["xs", "sm", "md", "lg", "xl", "2xl"] as const;
const statuses = ["online", "offline", "away", "busy"] as const;

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: sizes },
    shape: { control: "select", options: ["circle", "rounded"] },
    status: { control: "select", options: [undefined, ...statuses] },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { name: "John Doe" },
};

export const WithImage: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face",
    alt: "User avatar",
    name: "John Doe",
  },
};

export const WithInitials: Story = {
  args: { name: "Jane Smith" },
};

export const WithStatus: Story = {
  args: {
    name: "John Doe",
    status: "online",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-3">
      {sizes.map((size) => (
        <Avatar key={size} size={size} name="John Doe" />
      ))}
    </div>
  ),
};

export const Rounded: Story = {
  args: { name: "Alice B", shape: "rounded" },
};

export const IconFallback: Story = {
  args: {},
};

export const AllStatuses: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      {statuses.map((status) => (
        <Avatar key={status} name="John Doe" status={status} />
      ))}
    </div>
  ),
};
