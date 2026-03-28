import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { VideoPlayer } from "./VideoPlayer";

/* ========== VideoPlayer meta ========== */

const meta = {
  title: "Components/VideoPlayer",
  component: VideoPlayer,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    aspectRatio: {
      control: "select",
      options: ["16/9", "4/3", "1/1", "21/9"],
    },
    autoPlay: { control: "boolean" },
    loop: { control: "boolean" },
    muted: { control: "boolean" },
  },
} satisfies Meta<typeof VideoPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ========== Stories ========== */

export const Default: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  decorators: [
    (Story) => (
      <div className="w-[640px]">
        <Story />
      </div>
    ),
  ],
};

export const WithPoster: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "https://via.placeholder.com/640x360?text=Video+Poster",
  },
  decorators: [
    (Story) => (
      <div className="w-[640px]">
        <Story />
      </div>
    ),
  ],
};

export const Autoplay: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    autoPlay: true,
    muted: true,
  },
  decorators: [
    (Story) => (
      <div className="w-[640px]">
        <Story />
      </div>
    ),
  ],
};

export const DifferentAspectRatios: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-[480px]">
      <div>
        <p className="mb-2 text-sm font-medium">16:9 (default)</p>
        <VideoPlayer
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          aspectRatio="16/9"
        />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">4:3</p>
        <VideoPlayer
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          aspectRatio="4/3"
        />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">1:1</p>
        <VideoPlayer
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          aspectRatio="1/1"
        />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">21:9</p>
        <VideoPlayer
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          aspectRatio="21/9"
        />
      </div>
    </div>
  ),
};
