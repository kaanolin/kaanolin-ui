import type { Meta, StoryObj } from "@storybook/react";
import {
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateActions,
} from "./EmptyState";

const meta = {
  title: "Components/EmptyState",
  component: EmptyState,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

const FolderIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export const Basic: Story = {
  render: () => (
    <EmptyState>
      <EmptyStateIcon>
        <FolderIcon className="size-6" />
      </EmptyStateIcon>
      <EmptyStateTitle>No projects found</EmptyStateTitle>
      <EmptyStateDescription>
        Get started by creating your first project. Your projects will appear
        here once created.
      </EmptyStateDescription>
    </EmptyState>
  ),
};

export const WithActions: Story = {
  render: () => (
    <EmptyState>
      <EmptyStateIcon>
        <FolderIcon className="size-6" />
      </EmptyStateIcon>
      <EmptyStateTitle>No projects yet</EmptyStateTitle>
      <EmptyStateDescription>
        Create your first project to get started.
      </EmptyStateDescription>
      <EmptyStateActions>
        <button
          type="button"
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-xs"
        >
          Learn more
        </button>
        <button
          type="button"
          className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-xs"
        >
          New project
        </button>
      </EmptyStateActions>
    </EmptyState>
  ),
};

export const WithCustomIcon: Story = {
  render: () => (
    <EmptyState>
      <EmptyStateIcon>
        <SearchIcon className="size-6" />
      </EmptyStateIcon>
      <EmptyStateTitle>No results found</EmptyStateTitle>
      <EmptyStateDescription>
        Try adjusting your search or filter to find what you are looking for.
      </EmptyStateDescription>
    </EmptyState>
  ),
};

export const NoDescription: Story = {
  render: () => (
    <EmptyState>
      <EmptyStateIcon>
        <FolderIcon className="size-6" />
      </EmptyStateIcon>
      <EmptyStateTitle>Nothing here yet</EmptyStateTitle>
    </EmptyState>
  ),
};
