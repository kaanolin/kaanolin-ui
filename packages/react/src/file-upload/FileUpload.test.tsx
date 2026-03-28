import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  FileUpload,
  FileUploadIcon,
  FileUploadText,
  FileUploadTrigger,
} from "./FileUpload";

const createFile = (name: string, size: number, type: string): File => {
  const file = new File(["x".repeat(size)], name, { type });
  Object.defineProperty(file, "size", { value: size });
  return file;
};

describe("FileUpload", () => {
  it("renders dropzone with children", () => {
    render(
      <FileUpload>
        <FileUploadText>Drop files here</FileUploadText>
      </FileUpload>,
    );
    expect(screen.getByText("Drop files here")).toBeInTheDocument();
    expect(screen.getByTestId("file-upload-dropzone")).toBeInTheDocument();
  });

  it("renders icon slot", () => {
    render(
      <FileUpload>
        <FileUploadIcon data-testid="icon">
          <svg />
        </FileUploadIcon>
      </FileUpload>,
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("triggers file input when dropzone is clicked", async () => {
    const user = userEvent.setup();
    const handleFiles = jest.fn();
    render(
      <FileUpload onFilesSelected={handleFiles}>
        <FileUploadText>Click here</FileUploadText>
      </FileUpload>,
    );

    const input = screen.getByTestId("file-upload-input");
    const clickSpy = jest.spyOn(input, "click");

    await user.click(screen.getByTestId("file-upload-dropzone"));
    expect(clickSpy).toHaveBeenCalled();
    clickSpy.mockRestore();
  });

  it("calls onFilesSelected when files are dropped", () => {
    const handleFiles = jest.fn();
    render(
      <FileUpload onFilesSelected={handleFiles}>
        <FileUploadText>Drop here</FileUploadText>
      </FileUpload>,
    );

    const dropzone = screen.getByTestId("file-upload-dropzone");
    const file = createFile("test.png", 1024, "image/png");

    fireEvent.drop(dropzone, {
      dataTransfer: { files: [file] },
    });

    expect(handleFiles).toHaveBeenCalledWith([file]);
  });

  it("filters files by maxSize", () => {
    const handleFiles = jest.fn();
    render(
      <FileUpload onFilesSelected={handleFiles} maxSize={500}>
        <FileUploadText>Drop here</FileUploadText>
      </FileUpload>,
    );

    const dropzone = screen.getByTestId("file-upload-dropzone");
    const smallFile = createFile("small.png", 100, "image/png");
    const largeFile = createFile("large.png", 1000, "image/png");

    fireEvent.drop(dropzone, {
      dataTransfer: { files: [smallFile, largeFile] },
    });

    expect(handleFiles).toHaveBeenCalledWith([smallFile]);
  });

  it("does not call onFilesSelected when all files exceed maxSize", () => {
    const handleFiles = jest.fn();
    render(
      <FileUpload onFilesSelected={handleFiles} maxSize={50}>
        <FileUploadText>Drop here</FileUploadText>
      </FileUpload>,
    );

    const dropzone = screen.getByTestId("file-upload-dropzone");
    const largeFile = createFile("large.png", 1000, "image/png");

    fireEvent.drop(dropzone, {
      dataTransfer: { files: [largeFile] },
    });

    expect(handleFiles).not.toHaveBeenCalled();
  });

  it("only selects first file when multiple is false", () => {
    const handleFiles = jest.fn();
    render(
      <FileUpload onFilesSelected={handleFiles}>
        <FileUploadText>Drop here</FileUploadText>
      </FileUpload>,
    );

    const dropzone = screen.getByTestId("file-upload-dropzone");
    const file1 = createFile("a.png", 100, "image/png");
    const file2 = createFile("b.png", 100, "image/png");

    fireEvent.drop(dropzone, {
      dataTransfer: { files: [file1, file2] },
    });

    expect(handleFiles).toHaveBeenCalledWith([file1]);
  });

  it("selects all files when multiple is true", () => {
    const handleFiles = jest.fn();
    render(
      <FileUpload onFilesSelected={handleFiles} multiple>
        <FileUploadText>Drop here</FileUploadText>
      </FileUpload>,
    );

    const dropzone = screen.getByTestId("file-upload-dropzone");
    const file1 = createFile("a.png", 100, "image/png");
    const file2 = createFile("b.png", 100, "image/png");

    fireEvent.drop(dropzone, {
      dataTransfer: { files: [file1, file2] },
    });

    expect(handleFiles).toHaveBeenCalledWith([file1, file2]);
  });

  it("applies disabled styles and prevents interaction", () => {
    const handleFiles = jest.fn();
    render(
      <FileUpload onFilesSelected={handleFiles} disabled>
        <FileUploadText>Disabled</FileUploadText>
      </FileUpload>,
    );

    const dropzone = screen.getByTestId("file-upload-dropzone");
    expect(dropzone.className).toContain("opacity-50");
    expect(dropzone.className).toContain("pointer-events-none");
    expect(dropzone).toHaveAttribute("aria-disabled", "true");
  });

  it("does not fire onFilesSelected on drop when disabled", () => {
    const handleFiles = jest.fn();
    // We need to render without the pointer-events-none to test the JS guard
    render(
      <FileUpload onFilesSelected={handleFiles} disabled>
        <FileUploadText>Drop here</FileUploadText>
      </FileUpload>,
    );

    const dropzone = screen.getByTestId("file-upload-dropzone");
    const file = createFile("test.png", 100, "image/png");

    // Even if event reaches handler, disabled guard should prevent callback
    fireEvent.drop(dropzone, {
      dataTransfer: { files: [file] },
    });

    expect(handleFiles).not.toHaveBeenCalled();
  });

  it("shows drag over state", () => {
    render(
      <FileUpload>
        <FileUploadText>Drop here</FileUploadText>
      </FileUpload>,
    );

    const dropzone = screen.getByTestId("file-upload-dropzone");

    fireEvent.dragEnter(dropzone, {
      dataTransfer: { files: [] },
    });

    expect(dropzone.className).toContain("border-brand-600");
    expect(dropzone.className).toContain("bg-brand-50");

    fireEvent.dragLeave(dropzone, {
      dataTransfer: { files: [] },
    });

    expect(dropzone.className).not.toContain("border-brand-600");
  });

  it("renders FileUploadTrigger", () => {
    render(
      <FileUpload>
        <FileUploadText>
          <FileUploadTrigger>Click to upload</FileUploadTrigger> or drag
        </FileUploadText>
      </FileUpload>,
    );

    expect(screen.getByText("Click to upload")).toBeInTheDocument();
    expect(screen.getByText("Click to upload").className).toContain("text-brand-600");
    expect(screen.getByText("Click to upload").className).toContain("font-semibold");
  });

  it("passes accept prop to hidden input", () => {
    render(
      <FileUpload accept="image/*">
        <FileUploadText>Upload</FileUploadText>
      </FileUpload>,
    );

    const input = screen.getByTestId("file-upload-input");
    expect(input).toHaveAttribute("accept", "image/*");
  });

  it("passes multiple prop to hidden input", () => {
    render(
      <FileUpload multiple>
        <FileUploadText>Upload</FileUploadText>
      </FileUpload>,
    );

    const input = screen.getByTestId("file-upload-input");
    expect(input).toHaveAttribute("multiple");
  });

  it("merges custom className", () => {
    render(
      <FileUpload className="my-custom-class">
        <FileUploadText>Upload</FileUploadText>
      </FileUpload>,
    );

    expect(screen.getByTestId("file-upload-dropzone").className).toContain("my-custom-class");
  });

  it("has correct display names", () => {
    expect(FileUpload.displayName).toBe("FileUpload");
    expect(FileUploadIcon.displayName).toBe("FileUploadIcon");
    expect(FileUploadText.displayName).toBe("FileUploadText");
    expect(FileUploadTrigger.displayName).toBe("FileUploadTrigger");
  });
});
