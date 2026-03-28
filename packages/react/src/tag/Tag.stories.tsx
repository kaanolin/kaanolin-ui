import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

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
  title: "Components/Tag",
  component: Tag,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "select", options: colors },
    size: { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Tag" },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {colors.map((color) => (
        <Tag key={color} color={color}>
          {color}
        </Tag>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Tag size="sm">Small</Tag>
      <Tag size="md">Medium</Tag>
      <Tag size="lg">Large</Tag>
    </div>
  ),
};

const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path d="M8 1l2.09 4.26L15 6.27l-3.5 3.41.83 4.82L8 12.18 3.67 14.5l.83-4.82L1 6.27l4.91-1.01L8 1z" />
  </svg>
);

export const WithIcon: Story = {
  args: { children: "Featured", icon: StarIcon, color: "brand" },
};

export const WithAvatar: Story = {
  args: {
    children: "John Doe",
    avatar: "https://i.pravatar.cc/40?img=3",
    color: "gray",
  },
};

export const Dismissible: Story = {
  args: {
    children: "Removable",
    color: "brand",
    onDismiss: () => alert("Dismissed!"),
  },
};

export const Disabled: Story = {
  args: { children: "Disabled", disabled: true },
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {colors.map((color) => (
        <Tag key={color} color={color} onDismiss={() => {}}>
          {color}
        </Tag>
      ))}
    </div>
  ),
};
