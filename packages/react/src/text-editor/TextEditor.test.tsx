import { render, screen } from "@testing-library/react";
import { TextEditor } from "./TextEditor";

/* ========== Mock TipTap ========== */

// TipTap relies on ProseMirror which doesn't work well in jsdom,
// so we mock the TipTap React integration for structural tests.

const mockEditor = {
  getHTML: jest.fn(() => "<p></p>"),
  commands: { setContent: jest.fn() },
  setEditable: jest.fn(),
  isActive: jest.fn(() => false),
  chain: jest.fn(() => ({
    focus: jest.fn(() => ({
      toggleBold: jest.fn(() => ({ run: jest.fn() })),
      toggleItalic: jest.fn(() => ({ run: jest.fn() })),
      toggleUnderline: jest.fn(() => ({ run: jest.fn() })),
      toggleStrike: jest.fn(() => ({ run: jest.fn() })),
      toggleHeading: jest.fn(() => ({ run: jest.fn() })),
      toggleBulletList: jest.fn(() => ({ run: jest.fn() })),
      toggleOrderedList: jest.fn(() => ({ run: jest.fn() })),
      toggleBlockquote: jest.fn(() => ({ run: jest.fn() })),
      toggleCode: jest.fn(() => ({ run: jest.fn() })),
      setLink: jest.fn(() => ({ run: jest.fn() })),
      unsetLink: jest.fn(() => ({ run: jest.fn() })),
      setHorizontalRule: jest.fn(() => ({ run: jest.fn() })),
      undo: jest.fn(() => ({ run: jest.fn() })),
      redo: jest.fn(() => ({ run: jest.fn() })),
    })),
  })),
  can: jest.fn(() => ({
    undo: jest.fn(() => true),
    redo: jest.fn(() => true),
  })),
};

jest.mock("@tiptap/react", () => ({
  useEditor: jest.fn(() => mockEditor),
  EditorContent: jest.fn(({ editor }: { editor: unknown }) =>
    editor ? <div data-testid="tiptap-editor-content">Editor content</div> : null,
  ),
}));

jest.mock("@tiptap/starter-kit", () => ({
  __esModule: true,
  default: {},
}));

jest.mock("@tiptap/extension-placeholder", () => ({
  __esModule: true,
  default: { configure: jest.fn(() => ({})) },
}));

jest.mock("@tiptap/extension-link", () => ({
  __esModule: true,
  default: { configure: jest.fn(() => ({})) },
}));

jest.mock("@tiptap/extension-underline", () => ({
  __esModule: true,
  default: {},
}));

/* ========== Tests ========== */

describe("TextEditor", () => {
  it("renders the editor wrapper", () => {
    render(<TextEditor />);
    expect(screen.getByTestId("text-editor-wrapper")).toBeInTheDocument();
  });

  it("renders the editor content area", () => {
    render(<TextEditor />);
    expect(screen.getByTestId("text-editor-content")).toBeInTheDocument();
  });

  it("renders the tiptap editor content", () => {
    render(<TextEditor />);
    expect(screen.getByTestId("tiptap-editor-content")).toBeInTheDocument();
  });

  it("has displayName set", () => {
    expect(TextEditor.displayName).toBe("TextEditor");
  });
});

/* ========== Toolbar ========== */

describe("TextEditor - toolbar", () => {
  it("renders toolbar buttons", () => {
    render(<TextEditor />);
    expect(screen.getByTitle("Bold")).toBeInTheDocument();
    expect(screen.getByTitle("Italic")).toBeInTheDocument();
    expect(screen.getByTitle("Underline")).toBeInTheDocument();
    expect(screen.getByTitle("Strikethrough")).toBeInTheDocument();
    expect(screen.getByTitle("Heading 1")).toBeInTheDocument();
    expect(screen.getByTitle("Heading 2")).toBeInTheDocument();
    expect(screen.getByTitle("Heading 3")).toBeInTheDocument();
    expect(screen.getByTitle("Bullet List")).toBeInTheDocument();
    expect(screen.getByTitle("Ordered List")).toBeInTheDocument();
    expect(screen.getByTitle("Blockquote")).toBeInTheDocument();
    expect(screen.getByTitle("Code")).toBeInTheDocument();
    expect(screen.getByTitle("Link")).toBeInTheDocument();
    expect(screen.getByTitle("Horizontal Rule")).toBeInTheDocument();
    expect(screen.getByTitle("Undo")).toBeInTheDocument();
    expect(screen.getByTitle("Redo")).toBeInTheDocument();
  });

  it("renders toolbar with role=toolbar", () => {
    render(<TextEditor />);
    expect(screen.getByRole("toolbar")).toBeInTheDocument();
  });

  it("toolbar buttons have aria-label", () => {
    render(<TextEditor />);
    expect(screen.getByLabelText("Bold")).toBeInTheDocument();
    expect(screen.getByLabelText("Italic")).toBeInTheDocument();
  });
});

/* ========== Label & helper text ========== */

describe("TextEditor - form field", () => {
  it("renders label when provided", () => {
    render(<TextEditor label="Description" />);
    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  it("renders helper text when provided", () => {
    render(<TextEditor helperText="Enter a description" />);
    expect(screen.getByText("Enter a description")).toBeInTheDocument();
  });

  it("shows required asterisk", () => {
    render(<TextEditor label="Description" isRequired />);
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("hides required asterisk when hideRequiredIndicator is true", () => {
    render(<TextEditor label="Description" isRequired hideRequiredIndicator />);
    expect(screen.queryByText("*")).not.toBeInTheDocument();
  });

  it("renders tooltip with title attribute", () => {
    render(<TextEditor label="Description" tooltip="Help text" />);
    expect(screen.getByTitle("Help text")).toBeInTheDocument();
  });
});

/* ========== Variant ========== */

describe("TextEditor - variant", () => {
  it("applies error variant classes to wrapper", () => {
    render(<TextEditor variant="error" />);
    const wrapper = screen.getByTestId("text-editor-wrapper");
    expect(wrapper.className).toContain("border-border-error");
  });

  it("sets aria-invalid when variant is error", () => {
    render(<TextEditor variant="error" />);
    const wrapper = screen.getByTestId("text-editor-wrapper");
    expect(wrapper).toHaveAttribute("aria-invalid", "true");
  });

  it("applies error style to helper text", () => {
    render(<TextEditor variant="error" helperText="Required" />);
    const helper = screen.getByText("Required");
    expect(helper.className).toContain("text-text-error-primary");
  });
});

/* ========== Disabled ========== */

describe("TextEditor - disabled", () => {
  it("applies disabled classes to wrapper", () => {
    render(<TextEditor disabled />);
    const wrapper = screen.getByTestId("text-editor-wrapper");
    expect(wrapper.className).toContain("pointer-events-none");
    expect(wrapper.className).toContain("bg-bg-disabled");
  });
});

/* ========== className ========== */

describe("TextEditor - className", () => {
  it("merges custom className on wrapper", () => {
    render(<TextEditor className="my-custom-class" />);
    const wrapper = screen.getByTestId("text-editor-wrapper");
    expect(wrapper.className).toContain("my-custom-class");
  });
});

/* ========== Custom toolbar (children) ========== */

describe("TextEditor - custom toolbar", () => {
  it("renders children instead of default toolbar", () => {
    render(
      <TextEditor>
        <div data-testid="custom-toolbar">Custom</div>
      </TextEditor>,
    );
    expect(screen.getByTestId("custom-toolbar")).toBeInTheDocument();
    expect(screen.queryByRole("toolbar")).not.toBeInTheDocument();
  });
});
