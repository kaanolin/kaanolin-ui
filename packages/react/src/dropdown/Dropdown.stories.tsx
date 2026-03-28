import type { Meta, StoryObj } from "@storybook/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownCheckboxItem,
  DropdownRadioItem,
  DropdownRadioGroup,
  DropdownLabel,
  DropdownSeparator,
  DropdownSub,
  DropdownSubTrigger,
  DropdownSubContent,
  DropdownGroup,
} from "./Dropdown";
import * as React from "react";

const meta: Meta = {
  title: "Components/Dropdown",
  parameters: { layout: "centered" },
};

export default meta;

/* ========== Basic ========== */

export const Basic: StoryObj = {
  render: () => (
    <Dropdown>
      <DropdownTrigger asChild>
        <button className="rounded-lg border border-border-primary bg-bg-primary px-3.5 py-2.5 text-sm font-semibold text-text-primary shadow-xs hover:bg-bg-primary_hover">
          Open menu
        </button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownLabel>My Account</DropdownLabel>
        <DropdownSeparator />
        <DropdownGroup>
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem shortcut="⌘B">Billing</DropdownItem>
          <DropdownItem shortcut="⌘S">Settings</DropdownItem>
          <DropdownItem shortcut="⌘K">Keyboard shortcuts</DropdownItem>
        </DropdownGroup>
        <DropdownSeparator />
        <DropdownGroup>
          <DropdownItem>Team</DropdownItem>
          <DropdownItem>Invite users</DropdownItem>
          <DropdownItem shortcut="⌘+T">New Team</DropdownItem>
        </DropdownGroup>
        <DropdownSeparator />
        <DropdownItem>Support</DropdownItem>
        <DropdownItem disabled>API (coming soon)</DropdownItem>
        <DropdownSeparator />
        <DropdownItem destructive shortcut="⌘⇧Q">
          Log out
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

/* ========== With Icons ========== */

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const TrashIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

export const WithIcons: StoryObj = {
  render: () => (
    <Dropdown>
      <DropdownTrigger asChild>
        <button className="rounded-lg border border-border-primary bg-bg-primary px-3.5 py-2.5 text-sm font-semibold text-text-primary shadow-xs hover:bg-bg-primary_hover">
          Actions
        </button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem icon={<UserIcon />}>View profile</DropdownItem>
        <DropdownItem icon={<SettingsIcon />} shortcut="⌘,">
          Settings
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem icon={<TrashIcon />} destructive>
          Delete account
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

/* ========== With Checkboxes ========== */

export const WithCheckboxes: StoryObj = {
  render: function CheckboxStory() {
    const [showStatus, setShowStatus] = React.useState(true);
    const [showActivity, setShowActivity] = React.useState(false);

    return (
      <Dropdown>
        <DropdownTrigger asChild>
          <button className="rounded-lg border border-border-primary bg-bg-primary px-3.5 py-2.5 text-sm font-semibold text-text-primary shadow-xs hover:bg-bg-primary_hover">
            View options
          </button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownLabel>Appearance</DropdownLabel>
          <DropdownSeparator />
          <DropdownCheckboxItem
            checked={showStatus}
            onCheckedChange={setShowStatus}
          >
            Status bar
          </DropdownCheckboxItem>
          <DropdownCheckboxItem
            checked={showActivity}
            onCheckedChange={setShowActivity}
          >
            Activity panel
          </DropdownCheckboxItem>
        </DropdownContent>
      </Dropdown>
    );
  },
};

/* ========== With Radio Items ========== */

export const WithRadioItems: StoryObj = {
  render: function RadioStory() {
    const [theme, setTheme] = React.useState("system");

    return (
      <Dropdown>
        <DropdownTrigger asChild>
          <button className="rounded-lg border border-border-primary bg-bg-primary px-3.5 py-2.5 text-sm font-semibold text-text-primary shadow-xs hover:bg-bg-primary_hover">
            Theme: {theme}
          </button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownLabel>Theme</DropdownLabel>
          <DropdownSeparator />
          <DropdownRadioGroup value={theme} onValueChange={setTheme}>
            <DropdownRadioItem value="light">Light</DropdownRadioItem>
            <DropdownRadioItem value="dark">Dark</DropdownRadioItem>
            <DropdownRadioItem value="system">System</DropdownRadioItem>
          </DropdownRadioGroup>
        </DropdownContent>
      </Dropdown>
    );
  },
};

/* ========== With Submenu ========== */

export const WithSubmenu: StoryObj = {
  render: () => (
    <Dropdown>
      <DropdownTrigger asChild>
        <button className="rounded-lg border border-border-primary bg-bg-primary px-3.5 py-2.5 text-sm font-semibold text-text-primary shadow-xs hover:bg-bg-primary_hover">
          More options
        </button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem>New file</DropdownItem>
        <DropdownItem>New window</DropdownItem>
        <DropdownSeparator />
        <DropdownSub>
          <DropdownSubTrigger>Share</DropdownSubTrigger>
          <DropdownSubContent>
            <DropdownItem>Email link</DropdownItem>
            <DropdownItem>Messages</DropdownItem>
            <DropdownItem>Slack</DropdownItem>
          </DropdownSubContent>
        </DropdownSub>
        <DropdownSeparator />
        <DropdownItem>Print</DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};
