import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup, ButtonGroupItem } from "./ButtonGroup";

const meta = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select", options: ["single", "multiple"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { type: "single", defaultValue: "list" },
  render: (args) => (
    <ButtonGroup {...args}>
      <ButtonGroupItem value="list">List</ButtonGroupItem>
      <ButtonGroupItem value="grid">Grid</ButtonGroupItem>
      <ButtonGroupItem value="table">Table</ButtonGroupItem>
    </ButtonGroup>
  ),
};

const GridIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path d="M4 4h5v5H4V4zm7 0h5v5h-5V4zm-7 7h5v5H4v-5zm7 0h5v5h-5v-5z" />
  </svg>
);

const ListIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const WithIcons: Story = {
  args: { type: "single", defaultValue: "list" },
  render: (args) => (
    <ButtonGroup {...args}>
      <ButtonGroupItem value="list" icon={ListIcon}>
        List
      </ButtonGroupItem>
      <ButtonGroupItem value="grid" icon={GridIcon}>
        Grid
      </ButtonGroupItem>
    </ButtonGroup>
  ),
};

export const Multiple: Story = {
  args: { type: "multiple", defaultValue: ["bold"] },
  render: (args) => (
    <ButtonGroup {...args}>
      <ButtonGroupItem value="bold">Bold</ButtonGroupItem>
      <ButtonGroupItem value="italic">Italic</ButtonGroupItem>
      <ButtonGroupItem value="underline">Underline</ButtonGroupItem>
    </ButtonGroup>
  ),
};

export const Disabled: Story = {
  args: { type: "single", disabled: true, defaultValue: "a" },
  render: (args) => (
    <ButtonGroup {...args}>
      <ButtonGroupItem value="a">Alpha</ButtonGroupItem>
      <ButtonGroupItem value="b">Beta</ButtonGroupItem>
      <ButtonGroupItem value="c">Gamma</ButtonGroupItem>
    </ButtonGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      {(["sm", "md", "lg"] as const).map((size) => (
        <ButtonGroup key={size} type="single" size={size} defaultValue="a">
          <ButtonGroupItem value="a">Alpha</ButtonGroupItem>
          <ButtonGroupItem value="b">Beta</ButtonGroupItem>
          <ButtonGroupItem value="c">Gamma</ButtonGroupItem>
        </ButtonGroup>
      ))}
    </div>
  ),
};
