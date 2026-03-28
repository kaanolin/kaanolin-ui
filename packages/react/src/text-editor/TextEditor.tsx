import * as React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import type { Extension } from "@tiptap/react";
import { cx } from "@kaanolin/utils";
import {
  textEditorWrapperStyles,
  textEditorToolbarStyles,
  textEditorToolbarButtonStyles,
  textEditorContentStyles,
} from "./TextEditor.styles";
import {
  labelStyles,
  labelTooltipStyles,
  requiredIndicatorStyles,
  helperTextStyles,
} from "../_shared/form-field.styles";
import { HelpCircleIcon } from "../_shared/icons";

/* ========== Types ========== */

export interface TextEditorProps {
  /** Controlled HTML content. */
  content?: string;
  /** Uncontrolled default HTML content. */
  defaultContent?: string;
  /** Called when the editor content changes (returns HTML string). */
  onContentChange?: (html: string) => void;
  /** Placeholder text shown when the editor is empty. */
  placeholder?: string;
  /** Label text above the editor. */
  label?: string;
  /** Helper/hint text below the editor. */
  helperText?: string;
  /** Tooltip text shown via native title attribute on a help icon next to the label. */
  tooltip?: string;
  /** Mark the field as required (shows asterisk on label). */
  isRequired?: boolean;
  /** Hide required indicator even when `isRequired` is true. */
  hideRequiredIndicator?: boolean;
  /** Visual variant. */
  variant?: "default" | "error";
  /** Whether the editor is disabled. */
  disabled?: boolean;
  /** Whether the editor content is editable (defaults to true). */
  editable?: boolean;
  /** Additional CSS class for the outer wrapper. */
  className?: string;
  /** HTML id attribute for the editor wrapper. */
  id?: string;
  /** Custom TipTap extensions to replace the defaults. */
  extensions?: Extension[];
  /** Optional children rendered inside the toolbar area (for custom toolbar). */
  children?: React.ReactNode;
}

/* ========== Toolbar Icons (inline SVG) ========== */

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const BoldIcon = () => (
  <svg {...iconProps}><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" /><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" /></svg>
);
const ItalicIcon = () => (
  <svg {...iconProps}><line x1="19" y1="4" x2="10" y2="4" /><line x1="14" y1="20" x2="5" y2="20" /><line x1="15" y1="4" x2="9" y2="20" /></svg>
);
const UnderlineIcon = () => (
  <svg {...iconProps}><path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" /><line x1="4" y1="21" x2="20" y2="21" /></svg>
);
const StrikethroughIcon = () => (
  <svg {...iconProps}><path d="M16 4H9a3 3 0 0 0-3 3 3 3 0 0 0 3 3h6" /><path d="M8 20h7a3 3 0 0 0 3-3 3 3 0 0 0-3-3H4" /><line x1="4" y1="12" x2="20" y2="12" /></svg>
);
const H1Icon = () => (
  <svg {...iconProps}><path d="M4 12h8" /><path d="M4 18V6" /><path d="M12 18V6" /><path d="M17 12l3-2v8" /></svg>
);
const H2Icon = () => (
  <svg {...iconProps}><path d="M4 12h8" /><path d="M4 18V6" /><path d="M12 18V6" /><path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" /></svg>
);
const H3Icon = () => (
  <svg {...iconProps}><path d="M4 12h8" /><path d="M4 18V6" /><path d="M12 18V6" /><path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" /><path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" /></svg>
);
const BulletListIcon = () => (
  <svg {...iconProps}><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
);
const OrderedListIcon = () => (
  <svg {...iconProps}><line x1="10" y1="6" x2="21" y2="6" /><line x1="10" y1="12" x2="21" y2="12" /><line x1="10" y1="18" x2="21" y2="18" /><path d="M4 6h1v4" /><path d="M4 10h2" /><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" /></svg>
);
const BlockquoteIcon = () => (
  <svg {...iconProps}><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3z" /></svg>
);
const CodeIcon = () => (
  <svg {...iconProps}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
);
const LinkIcon = () => (
  <svg {...iconProps}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
);
const HorizontalRuleIcon = () => (
  <svg {...iconProps}><line x1="2" y1="12" x2="22" y2="12" /></svg>
);
const UndoIcon = () => (
  <svg {...iconProps}><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></svg>
);
const RedoIcon = () => (
  <svg {...iconProps}><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" /></svg>
);

/* ========== Toolbar Button ========== */

interface ToolbarButtonProps {
  icon: React.ReactNode;
  title: string;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

const ToolbarButton = ({ icon, title, active = false, disabled = false, onClick }: ToolbarButtonProps) => (
  <button
    type="button"
    title={title}
    aria-label={title}
    aria-pressed={active}
    disabled={disabled}
    className={cx(textEditorToolbarButtonStyles({ active, disabled }))}
    onClick={onClick}
  >
    {icon}
  </button>
);

/* ========== TextEditorToolbar ========== */

export interface TextEditorToolbarProps {
  children: React.ReactNode;
}

const TextEditorToolbar = ({ children }: TextEditorToolbarProps) => (
  <div role="toolbar" aria-label="Text formatting" className={cx(textEditorToolbarStyles())}>
    {children}
  </div>
);

TextEditorToolbar.displayName = "TextEditorToolbar";

/* ========== Default Toolbar ========== */

interface DefaultToolbarProps {
  editor: ReturnType<typeof useEditor>;
  disabled: boolean;
}

const DefaultToolbar = ({ editor, disabled }: DefaultToolbarProps) => {
  if (!editor) return null;

  const handleLinkToggle = () => {
    if (editor.isActive("link")) {
      editor.chain().focus().unsetLink().run();
      return;
    }
    const url = window.prompt("Enter URL:");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  return (
    <TextEditorToolbar>
      <ToolbarButton icon={<BoldIcon />} title="Bold" active={editor.isActive("bold")} disabled={disabled} onClick={() => editor.chain().focus().toggleBold().run()} />
      <ToolbarButton icon={<ItalicIcon />} title="Italic" active={editor.isActive("italic")} disabled={disabled} onClick={() => editor.chain().focus().toggleItalic().run()} />
      <ToolbarButton icon={<UnderlineIcon />} title="Underline" active={editor.isActive("underline")} disabled={disabled} onClick={() => editor.chain().focus().toggleUnderline().run()} />
      <ToolbarButton icon={<StrikethroughIcon />} title="Strikethrough" active={editor.isActive("strike")} disabled={disabled} onClick={() => editor.chain().focus().toggleStrike().run()} />
      <ToolbarButton icon={<H1Icon />} title="Heading 1" active={editor.isActive("heading", { level: 1 })} disabled={disabled} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} />
      <ToolbarButton icon={<H2Icon />} title="Heading 2" active={editor.isActive("heading", { level: 2 })} disabled={disabled} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} />
      <ToolbarButton icon={<H3Icon />} title="Heading 3" active={editor.isActive("heading", { level: 3 })} disabled={disabled} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} />
      <ToolbarButton icon={<BulletListIcon />} title="Bullet List" active={editor.isActive("bulletList")} disabled={disabled} onClick={() => editor.chain().focus().toggleBulletList().run()} />
      <ToolbarButton icon={<OrderedListIcon />} title="Ordered List" active={editor.isActive("orderedList")} disabled={disabled} onClick={() => editor.chain().focus().toggleOrderedList().run()} />
      <ToolbarButton icon={<BlockquoteIcon />} title="Blockquote" active={editor.isActive("blockquote")} disabled={disabled} onClick={() => editor.chain().focus().toggleBlockquote().run()} />
      <ToolbarButton icon={<CodeIcon />} title="Code" active={editor.isActive("code")} disabled={disabled} onClick={() => editor.chain().focus().toggleCode().run()} />
      <ToolbarButton icon={<LinkIcon />} title="Link" active={editor.isActive("link")} disabled={disabled} onClick={handleLinkToggle} />
      <ToolbarButton icon={<HorizontalRuleIcon />} title="Horizontal Rule" disabled={disabled} onClick={() => editor.chain().focus().setHorizontalRule().run()} />
      <ToolbarButton icon={<UndoIcon />} title="Undo" disabled={disabled || !editor.can().undo()} onClick={() => editor.chain().focus().undo().run()} />
      <ToolbarButton icon={<RedoIcon />} title="Redo" disabled={disabled || !editor.can().redo()} onClick={() => editor.chain().focus().redo().run()} />
    </TextEditorToolbar>
  );
};

/* ========== TextEditor ========== */

const TextEditor: React.FC<TextEditorProps> & { displayName?: string } = ({
  content,
  defaultContent,
  onContentChange,
  placeholder: placeholderText,
  label,
  helperText,
  tooltip,
  isRequired,
  hideRequiredIndicator,
  variant = "default",
  disabled = false,
  editable = true,
  className,
  id,
  extensions,
  children,
}) => {
  const editorId = id || React.useId();
  const isError = variant === "error";

  const defaultExtensions = React.useMemo(
    () => [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false }),
      ...(placeholderText
        ? [Placeholder.configure({ placeholder: placeholderText })]
        : []),
    ],
    [placeholderText],
  );

  const editor = useEditor({
    extensions: (extensions ?? defaultExtensions) as Extension[],
    content: defaultContent ?? content ?? "",
    editable: editable && !disabled,
    onUpdate: ({ editor: ed }) => {
      onContentChange?.(ed.getHTML());
    },
  });

  // Sync controlled content
  React.useEffect(() => {
    if (content !== undefined && editor && editor.getHTML() !== content) {
      editor.commands.setContent(content, { emitUpdate: false });
    }
  }, [content, editor]);

  // Sync editable state
  React.useEffect(() => {
    if (editor) {
      editor.setEditable(editable && !disabled);
    }
  }, [editable, disabled, editor]);

  return (
    <div className="flex w-full flex-col items-start gap-1.5">
      {label && (
        <label htmlFor={editorId} className={cx(labelStyles())}>
          {label}
          {isRequired && !hideRequiredIndicator && (
            <span className={cx(requiredIndicatorStyles())}>*</span>
          )}
          {tooltip && (
            <span
              className={cx(labelTooltipStyles())}
              title={tooltip}
              aria-hidden="true"
            >
              <HelpCircleIcon />
            </span>
          )}
        </label>
      )}

      <div
        id={editorId}
        className={cx(
          textEditorWrapperStyles({ variant, disabled }),
          className,
        )}
        aria-invalid={isError || undefined}
        aria-describedby={helperText ? `${editorId}-helper` : undefined}
        data-testid="text-editor-wrapper"
      >
        {children ? children : <DefaultToolbar editor={editor} disabled={disabled} />}
        <div className={cx(textEditorContentStyles())} data-testid="text-editor-content">
          <EditorContent editor={editor} />
        </div>
      </div>

      {helperText && (
        <p id={`${editorId}-helper`} className={cx(helperTextStyles({ variant }))}>
          {helperText}
        </p>
      )}
    </div>
  );
};

TextEditor.displayName = "TextEditor";

export { TextEditor, TextEditorToolbar };
