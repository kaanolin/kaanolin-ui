import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ========== Helpers ========== */

const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
    <path d="M8 1L1 7h2v6h4V9h2v4h4V7h2L8 1z" />
  </svg>
);

const SettingsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
    <circle cx="8" cy="8" r="3" />
  </svg>
);

/* ========== Stories ========== */

export const Underline: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-96">
      <TabsList variant="underline">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account settings content.</TabsContent>
      <TabsContent value="password">Password settings content.</TabsContent>
      <TabsContent value="settings">General settings content.</TabsContent>
    </Tabs>
  ),
};

export const Contained: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-96">
      <TabsList variant="contained">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account settings content.</TabsContent>
      <TabsContent value="password">Password settings content.</TabsContent>
      <TabsContent value="settings">General settings content.</TabsContent>
    </Tabs>
  ),
};

export const Pill: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-96">
      <TabsList variant="pill">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account settings content.</TabsContent>
      <TabsContent value="password">Password settings content.</TabsContent>
      <TabsContent value="settings">General settings content.</TabsContent>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="home" className="w-96">
      <TabsList variant="underline">
        <TabsTrigger value="home" icon={HomeIcon}>
          Home
        </TabsTrigger>
        <TabsTrigger value="settings" icon={SettingsIcon}>
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="home">Home content.</TabsContent>
      <TabsContent value="settings">Settings content.</TabsContent>
    </Tabs>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <Tabs defaultValue="inbox" className="w-96">
      <TabsList variant="underline">
        <TabsTrigger value="inbox" badge={12}>
          Inbox
        </TabsTrigger>
        <TabsTrigger value="sent" badge={3}>
          Sent
        </TabsTrigger>
        <TabsTrigger value="drafts" badge={0}>
          Drafts
        </TabsTrigger>
      </TabsList>
      <TabsContent value="inbox">Inbox content.</TabsContent>
      <TabsContent value="sent">Sent content.</TabsContent>
      <TabsContent value="drafts">Drafts content.</TabsContent>
    </Tabs>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-96">
      <TabsList variant="contained" fullWidth>
        <TabsTrigger value="tab1">Tab One</TabsTrigger>
        <TabsTrigger value="tab2">Tab Two</TabsTrigger>
        <TabsTrigger value="tab3">Tab Three</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">First tab content.</TabsContent>
      <TabsContent value="tab2">Second tab content.</TabsContent>
      <TabsContent value="tab3">Third tab content.</TabsContent>
    </Tabs>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="active" className="w-96">
      <TabsList variant="underline">
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="another">Another</TabsTrigger>
      </TabsList>
      <TabsContent value="active">Active tab content.</TabsContent>
      <TabsContent value="disabled">Disabled tab content.</TabsContent>
      <TabsContent value="another">Another tab content.</TabsContent>
    </Tabs>
  ),
};
