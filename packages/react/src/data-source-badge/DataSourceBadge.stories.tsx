import type { Meta, StoryObj } from "@storybook/react";
import { DataSourceBadge } from "./DataSourceBadge";

const meta = {
  title: "Components/DataSourceBadge",
  component: DataSourceBadge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof DataSourceBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    source: "Airbnb Scraper",
  },
};

export const WithDate: Story = {
  args: {
    source: "Inside Airbnb",
    lastUpdated: "2026-03-15T00:00:00Z",
  },
};

export const WithLink: Story = {
  args: {
    source: "INEGI Censo 2020",
    url: "https://www.inegi.org.mx",
    lastUpdated: "2026-01-10T00:00:00Z",
  },
};

export const LinkOnly: Story = {
  args: {
    source: "Data Mexico",
    url: "https://datamexico.org",
  },
};

export const Multiple: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <DataSourceBadge source="Airbnb Scraper" lastUpdated="2026-03-20T00:00:00Z" />
      <DataSourceBadge
        source="INEGI"
        url="https://www.inegi.org.mx"
        lastUpdated="2026-01-10T00:00:00Z"
      />
      <DataSourceBadge source="BMV" url="https://www.bmv.com.mx" />
    </div>
  ),
};
