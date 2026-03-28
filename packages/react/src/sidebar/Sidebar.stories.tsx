import type { Meta, StoryObj } from "@storybook/react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarItem,
} from "./Sidebar";

const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const meta = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  argTypes: {
    width: { control: "select", options: ["narrow", "default", "wide"] },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Sidebar {...args}>
      <SidebarHeader>
        <span className="text-lg font-semibold text-text-primary">Kaanolin</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarItem icon={<HomeIcon />} active>
          Dashboard
        </SidebarItem>
        <SidebarItem icon={<UsersIcon />}>Users</SidebarItem>
        <SidebarItem icon={<SettingsIcon />}>Settings</SidebarItem>
      </SidebarContent>
      <SidebarFooter>
        <span className="text-sm text-text-tertiary">v1.0.0</span>
      </SidebarFooter>
    </Sidebar>
  ),
};

export const Narrow: Story = {
  args: { width: "narrow" },
  render: (args) => (
    <Sidebar {...args}>
      <SidebarHeader>
        <span className="text-lg font-bold text-text-primary">K</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarItem icon={<HomeIcon />} active />
        <SidebarItem icon={<UsersIcon />} />
        <SidebarItem icon={<SettingsIcon />} />
      </SidebarContent>
    </Sidebar>
  ),
};

export const WithBadges: Story = {
  render: (args) => (
    <Sidebar {...args}>
      <SidebarHeader>
        <span className="text-lg font-semibold text-text-primary">Kaanolin</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarItem icon={<HomeIcon />} active>
          Dashboard
        </SidebarItem>
        <SidebarItem icon={<UsersIcon />} badge={5}>
          Users
        </SidebarItem>
        <SidebarItem icon={<SettingsIcon />} badge="New">
          Settings
        </SidebarItem>
      </SidebarContent>
    </Sidebar>
  ),
};

export const WithGroups: Story = {
  render: (args) => (
    <Sidebar {...args}>
      <SidebarHeader>
        <span className="text-lg font-semibold text-text-primary">Kaanolin</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarItem icon={<HomeIcon />} active>
            Dashboard
          </SidebarItem>
          <SidebarItem icon={<UsersIcon />}>Users</SidebarItem>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>System</SidebarGroupLabel>
          <SidebarItem icon={<SettingsIcon />}>Settings</SidebarItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <span className="text-sm text-text-tertiary">v1.0.0</span>
      </SidebarFooter>
    </Sidebar>
  ),
};
