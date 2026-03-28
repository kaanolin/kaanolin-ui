import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  FileUpload,
  FileUploadIcon,
  FileUploadText,
  FileUploadTrigger,
} from "./FileUpload";

const UploadCloudIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <path d="M12 12v9" />
    <path d="m16 16-4-4-4 4" />
  </svg>
);

const meta = {
  title: "Components/FileUpload",
  component: FileUpload,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <FileUpload onFilesSelected={(files) => console.log("Files:", files)}>
      <FileUploadIcon>
        <UploadCloudIcon />
      </FileUploadIcon>
      <FileUploadText>
        <FileUploadTrigger>Click to upload</FileUploadTrigger> or drag and drop
      </FileUploadText>
      <FileUploadText>SVG, PNG, JPG or GIF (max. 800x400px)</FileUploadText>
    </FileUpload>
  ),
};

export const ImageOnly: Story = {
  render: () => (
    <FileUpload
      accept="image/*"
      onFilesSelected={(files) => console.log("Images:", files)}
    >
      <FileUploadIcon>
        <UploadCloudIcon />
      </FileUploadIcon>
      <FileUploadText>
        <FileUploadTrigger>Click to upload</FileUploadTrigger> or drag and drop
      </FileUploadText>
      <FileUploadText>Only image files accepted</FileUploadText>
    </FileUpload>
  ),
};

export const MultipleFiles: Story = {
  render: () => (
    <FileUpload
      multiple
      onFilesSelected={(files) => console.log("Multiple:", files)}
    >
      <FileUploadIcon>
        <UploadCloudIcon />
      </FileUploadIcon>
      <FileUploadText>
        <FileUploadTrigger>Click to upload</FileUploadTrigger> or drag and drop
      </FileUploadText>
      <FileUploadText>Upload multiple files at once</FileUploadText>
    </FileUpload>
  ),
};

export const Disabled: Story = {
  render: () => (
    <FileUpload disabled>
      <FileUploadIcon>
        <UploadCloudIcon />
      </FileUploadIcon>
      <FileUploadText>
        <FileUploadTrigger>Click to upload</FileUploadTrigger> or drag and drop
      </FileUploadText>
      <FileUploadText>Upload is currently disabled</FileUploadText>
    </FileUpload>
  ),
};

export const WithMaxSize: Story = {
  render: () => (
    <FileUpload
      maxSize={5 * 1024 * 1024}
      onFilesSelected={(files) => console.log("Files under 5MB:", files)}
    >
      <FileUploadIcon>
        <UploadCloudIcon />
      </FileUploadIcon>
      <FileUploadText>
        <FileUploadTrigger>Click to upload</FileUploadTrigger> or drag and drop
      </FileUploadText>
      <FileUploadText>Maximum file size: 5MB</FileUploadText>
    </FileUpload>
  ),
};
