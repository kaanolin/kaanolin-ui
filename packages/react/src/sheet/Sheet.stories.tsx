import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "./Sheet";

const meta = {
  title: "Components/Sheet",
  component: SheetContent,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    side: {
      control: "select",
      options: ["right", "left", "top", "bottom"],
    },
  },
} satisfies Meta<typeof SheetContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <button className="rounded-lg border px-4 py-2">Open Right</button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            This sheet slides in from the right side.
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <p>Sheet body content goes here.</p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <button className="rounded-lg border px-4 py-2">Close</button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const Left: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <button className="rounded-lg border px-4 py-2">Open Left</button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Browse menu items.</SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <ul className="space-y-2">
            <li>Dashboard</li>
            <li>Settings</li>
            <li>Profile</li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const Top: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <button className="rounded-lg border px-4 py-2">Open Top</button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Notification</SheetTitle>
          <SheetDescription>A banner from the top.</SheetDescription>
        </SheetHeader>
        <div className="px-6 py-4">
          <p>Important announcement here.</p>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const Bottom: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <button className="rounded-lg border px-4 py-2">Open Bottom</button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Cookie Consent</SheetTitle>
          <SheetDescription>
            We use cookies to improve your experience.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <button className="rounded-lg border px-4 py-2">Decline</button>
          </SheetClose>
          <SheetClose asChild>
            <button className="rounded-lg bg-brand-600 px-4 py-2 text-white">
              Accept
            </button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <button className="rounded-lg border px-4 py-2">Edit Profile</button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Update your profile information below.
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full rounded-lg border px-3 py-2"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full rounded-lg border px-3 py-2"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Bio</label>
            <textarea
              className="w-full rounded-lg border px-3 py-2"
              rows={4}
              placeholder="Tell us about yourself..."
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <button className="rounded-lg border px-4 py-2">Cancel</button>
          </SheetClose>
          <button className="rounded-lg bg-brand-600 px-4 py-2 text-white">
            Save Changes
          </button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};
