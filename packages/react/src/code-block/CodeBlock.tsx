import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { cx } from "@kaanolin/utils";
import {
  codeBlockStyles,
  codeBlockHeaderStyles,
  codeBlockLanguageStyles,
  codeBlockCopyButtonStyles,
  codeBlockPreStyles,
} from "./CodeBlock.styles";

export interface CodeBlockProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof codeBlockStyles> {
  /** Raw code string. */
  code: string;
  /** Language badge shown in the header. */
  language?: string;
  /** Hide the header entirely (no language, no copy button). */
  hideHeader?: boolean;
  /** Disable the copy button. */
  hideCopy?: boolean;
  /** Label for the copy button (default: "Copy"). */
  copyLabel?: string;
  /** Label shown briefly after a successful copy (default: "Copied"). */
  copiedLabel?: string;
}

const CopyIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  (
    {
      className,
      tone,
      code,
      language,
      hideHeader,
      hideCopy,
      copyLabel = "Copy",
      copiedLabel = "Copied",
      ...props
    },
    ref,
  ) => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch {
        // clipboard may be unavailable (tests, sandboxed iframes)
      }
    };

    return (
      <div ref={ref} className={cx(codeBlockStyles({ tone }), className)} {...props}>
        {!hideHeader && (
          <div className={cx(codeBlockHeaderStyles())}>
            <span className={cx(codeBlockLanguageStyles())}>{language ?? ""}</span>
            {!hideCopy && (
              <button
                type="button"
                onClick={handleCopy}
                className={cx(codeBlockCopyButtonStyles())}
                aria-label={copied ? copiedLabel : copyLabel}
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
                <span>{copied ? copiedLabel : copyLabel}</span>
              </button>
            )}
          </div>
        )}
        <pre className={cx(codeBlockPreStyles())}>
          <code>{code}</code>
        </pre>
      </div>
    );
  },
);

CodeBlock.displayName = "CodeBlock";

export { CodeBlock };
