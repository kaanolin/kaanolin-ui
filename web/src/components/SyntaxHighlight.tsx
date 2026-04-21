import { Highlight, themes, type Language } from "prism-react-renderer";

/**
 * Syntax-highlighted <pre><code> block. Uses prism-react-renderer for
 * tokenisation (same Prism grammars Radix uses via refractor), with a theme
 * that adapts to our dark surfaces.
 */
export function SyntaxHighlight({
  code,
  language = "tsx",
}: {
  code: string;
  language?: string;
}) {
  return (
    <Highlight code={code.trimEnd()} language={language as Language} theme={themes.vsDark}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre
          className="m-0 p-4 overflow-auto text-[13px] leading-relaxed font-mono bg-transparent"
          style={{ background: "transparent" }}
        >
          {tokens.map((line, i) => {
            const lineProps = getLineProps({ line });
            return (
              <div key={i} {...lineProps} style={{ ...lineProps.style, display: "block" }}>
                {line.map((token, key) => {
                  const tokenProps = getTokenProps({ token });
                  return <span key={key} {...tokenProps} />;
                })}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
}
