import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CodeBlock } from "./CodeBlock";

describe("CodeBlock", () => {
  it("renders the provided code inside a <pre><code>", () => {
    render(<CodeBlock code="const x = 1" language="ts" />);
    const codeEl = screen.getByText("const x = 1");
    expect(codeEl.tagName.toLowerCase()).toBe("code");
    expect(codeEl.parentElement?.tagName.toLowerCase()).toBe("pre");
  });

  it("renders the language badge in the header", () => {
    render(<CodeBlock code="x" language="tsx" />);
    expect(screen.getByText("tsx")).toBeInTheDocument();
  });

  it("hides the header when hideHeader is true", () => {
    render(<CodeBlock code="x" language="tsx" hideHeader />);
    expect(screen.queryByText("tsx")).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /copy/i })).not.toBeInTheDocument();
  });

  it("copies code to clipboard on button click and flips to 'Copied'", async () => {
    render(<CodeBlock code="hello" />);
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /copy/i }));

    const clipboardText = await navigator.clipboard.readText();
    expect(clipboardText).toBe("hello");
    expect(screen.getByRole("button", { name: /copied/i })).toBeInTheDocument();
  });
});
