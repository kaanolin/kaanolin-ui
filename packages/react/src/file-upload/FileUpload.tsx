import * as React from "react";
import { cx } from "@kaanolin/utils";
import {
  fileUploadStyles,
  fileUploadIconStyles,
  fileUploadTextStyles,
  fileUploadTriggerStyles,
} from "./FileUpload.styles";

/* ========== Context ========== */

interface FileUploadContextValue {
  openFilePicker: () => void;
}

const FileUploadContext = React.createContext<FileUploadContextValue | null>(null);

const useFileUploadContext = () => {
  const ctx = React.useContext(FileUploadContext);
  if (!ctx) {
    throw new Error("FileUpload sub-components must be used within <FileUpload>");
  }
  return ctx;
};

/* ========== FileUpload (Root) ========== */

export interface FileUploadProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onDrop"> {
  /** Callback when files are selected (via drop or file picker). */
  onFilesSelected?: (files: File[]) => void;
  /** Accepted file types (e.g. "image/*", ".pdf,.doc"). */
  accept?: string;
  /** Allow multiple file selection. */
  multiple?: boolean;
  /** Maximum file size in bytes. Files exceeding this are filtered out. */
  maxSize?: number;
  /** Disable the dropzone. */
  disabled?: boolean;
}

const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  (
    {
      className,
      children,
      onFilesSelected,
      accept,
      multiple = false,
      maxSize,
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const [isDragging, setIsDragging] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const dragCounterRef = React.useRef(0);

    const filterFiles = React.useCallback(
      (files: File[]): File[] => {
        if (!maxSize) return files;
        return files.filter((f) => f.size <= maxSize);
      },
      [maxSize],
    );

    const handleDragEnter = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled) return;
      dragCounterRef.current += 1;
      if (dragCounterRef.current === 1) {
        setIsDragging(true);
      }
    };

    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled) return;
      dragCounterRef.current -= 1;
      if (dragCounterRef.current === 0) {
        setIsDragging(false);
      }
    };

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled) return;
      dragCounterRef.current = 0;
      setIsDragging(false);

      const droppedFiles = Array.from(e.dataTransfer.files);
      const filtered = filterFiles(droppedFiles);
      if (filtered.length > 0) {
        onFilesSelected?.(multiple ? filtered : [filtered[0]]);
      }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = Array.from(e.target.files || []);
      const filtered = filterFiles(selectedFiles);
      if (filtered.length > 0) {
        onFilesSelected?.(filtered);
      }
      // Reset so same file can be selected again
      e.target.value = "";
    };

    const openFilePicker = React.useCallback(() => {
      if (!disabled) {
        inputRef.current?.click();
      }
    }, [disabled]);

    const handleClick = () => {
      openFilePicker();
    };

    const contextValue = React.useMemo(
      () => ({ openFilePicker }),
      [openFilePicker],
    );

    return (
      <FileUploadContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cx(
            fileUploadStyles({ isDragging, disabled }),
            className,
          )}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={handleClick}
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-disabled={disabled}
          data-testid="file-upload-dropzone"
          {...props}
        >
          <input
            ref={inputRef}
            type="file"
            className="sr-only"
            accept={accept}
            multiple={multiple}
            onChange={handleInputChange}
            tabIndex={-1}
            aria-hidden="true"
            data-testid="file-upload-input"
          />
          {children}
        </div>
      </FileUploadContext.Provider>
    );
  },
);
FileUpload.displayName = "FileUpload";

/* ========== FileUploadIcon ========== */

export type FileUploadIconProps = React.HTMLAttributes<HTMLDivElement>;

const FileUploadIcon = React.forwardRef<HTMLDivElement, FileUploadIconProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cx(fileUploadIconStyles(), className)}
      {...props}
    />
  ),
);
FileUploadIcon.displayName = "FileUploadIcon";

/* ========== FileUploadText ========== */

export type FileUploadTextProps = React.HTMLAttributes<HTMLParagraphElement>;

const FileUploadText = React.forwardRef<HTMLParagraphElement, FileUploadTextProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cx(fileUploadTextStyles(), className)}
      {...props}
    />
  ),
);
FileUploadText.displayName = "FileUploadText";

/* ========== FileUploadTrigger ========== */

export type FileUploadTriggerProps = React.HTMLAttributes<HTMLSpanElement>;

const FileUploadTrigger = React.forwardRef<HTMLSpanElement, FileUploadTriggerProps>(
  ({ className, onClick, ...props }, ref) => {
    const { openFilePicker } = useFileUploadContext();

    const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation();
      openFilePicker();
      onClick?.(e);
    };

    return (
      <span
        ref={ref}
        role="button"
        tabIndex={0}
        className={cx(fileUploadTriggerStyles(), className)}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            e.stopPropagation();
            openFilePicker();
          }
        }}
        {...props}
      />
    );
  },
);
FileUploadTrigger.displayName = "FileUploadTrigger";

export {
  FileUpload,
  FileUploadIcon,
  FileUploadText,
  FileUploadTrigger,
};
