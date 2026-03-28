import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Combobox,
  ComboboxItem,
  ComboboxGroup,
  ComboboxSeparator,
} from "./Combobox";

const renderCombobox = (
  props: Partial<React.ComponentProps<typeof Combobox>> = {},
) =>
  render(
    <Combobox placeholder="Search..." {...props}>
      <ComboboxItem value="apple">Apple</ComboboxItem>
      <ComboboxItem value="banana">Banana</ComboboxItem>
      <ComboboxItem value="cherry">Cherry</ComboboxItem>
    </Combobox>,
  );

/* ========== Rendering ========== */

describe("Combobox — Rendering", () => {
  it("renders a combobox input with placeholder text", () => {
    renderCombobox();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("renders with a label when provided", () => {
    renderCombobox({ label: "Fruit" });
    expect(screen.getByText("Fruit")).toBeInTheDocument();
  });

  it("renders helper text when provided", () => {
    renderCombobox({ helperText: "Pick a fruit" });
    expect(screen.getByText("Pick a fruit")).toBeInTheDocument();
  });

  it("applies error variant class on input", () => {
    renderCombobox({ variant: "error" });
    const input = screen.getByRole("combobox");
    expect(input.className).toContain("border-border-error_subtle");
  });

  it("applies small size class on input", () => {
    renderCombobox({ size: "small" });
    const input = screen.getByRole("combobox");
    expect(input.className).toContain("text-sm");
  });

  it("applies large size class on input", () => {
    renderCombobox({ size: "large" });
    const input = screen.getByRole("combobox");
    expect(input.className).toContain("text-lg");
  });

  it("is disabled when disabled prop is set", () => {
    renderCombobox({ disabled: true });
    expect(screen.getByRole("combobox")).toBeDisabled();
  });

  it("merges custom className onto input", () => {
    renderCombobox({ className: "my-custom-class" });
    expect(screen.getByRole("combobox")).toHaveClass("my-custom-class");
  });

  it("forwards ref to wrapper div", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Combobox ref={ref} placeholder="Search">
        <ComboboxItem value="a">A</ComboboxItem>
      </Combobox>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("connects label to input via htmlFor", () => {
    renderCombobox({ label: "Fruit", id: "fruit-combobox" });
    const label = screen.getByText("Fruit").closest("label");
    expect(label).toHaveAttribute("for", "fruit-combobox");
  });
});

/* ========== Open/Close ========== */

describe("Combobox — Open/Close", () => {
  it("opens dropdown on input focus", async () => {
    const user = userEvent.setup();
    renderCombobox();

    await user.click(screen.getByRole("combobox"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("closes dropdown when clicking the overlay", async () => {
    const user = userEvent.setup();
    renderCombobox();

    await user.click(screen.getByRole("combobox"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    await user.click(screen.getByTestId("combobox-overlay"));
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("closes dropdown on Escape key", async () => {
    const user = userEvent.setup();
    renderCombobox();

    await user.click(screen.getByRole("combobox"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("closes dropdown on Tab key", async () => {
    const user = userEvent.setup();
    renderCombobox();

    await user.click(screen.getByRole("combobox"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    await user.keyboard("{Tab}");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("input has aria-expanded=true when open", async () => {
    const user = userEvent.setup();
    renderCombobox();

    await user.click(screen.getByRole("combobox"));
    expect(screen.getByRole("combobox")).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });

  it("input has aria-expanded=false when closed", () => {
    renderCombobox();
    expect(screen.getByRole("combobox")).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("input has aria-haspopup=listbox", () => {
    renderCombobox();
    expect(screen.getByRole("combobox")).toHaveAttribute(
      "aria-haspopup",
      "listbox",
    );
  });

  it("calls onOpenChange when opening", async () => {
    const user = userEvent.setup();
    const onOpenChange = jest.fn();
    renderCombobox({ onOpenChange });

    await user.click(screen.getByRole("combobox"));
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it("calls onOpenChange when closing", async () => {
    const user = userEvent.setup();
    const onOpenChange = jest.fn();
    renderCombobox({ onOpenChange });

    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByTestId("combobox-overlay"));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});

/* ========== Filtering ========== */

describe("Combobox — Filtering", () => {
  it("filters items based on typed text", async () => {
    const user = userEvent.setup();
    renderCombobox();

    await user.click(screen.getByRole("combobox"));
    await user.type(screen.getByRole("combobox"), "ban");

    // Banana should be visible, Apple and Cherry should be hidden
    expect(screen.getByRole("option", { name: "Banana" })).toBeInTheDocument();
    expect(screen.queryByRole("option", { name: "Apple" })).not.toBeInTheDocument();
    expect(
      screen.queryByRole("option", { name: "Cherry" }),
    ).not.toBeInTheDocument();
  });

  it("filters case-insensitively", async () => {
    const user = userEvent.setup();
    renderCombobox();

    await user.click(screen.getByRole("combobox"));
    await user.type(screen.getByRole("combobox"), "BAN");

    expect(screen.getByRole("option", { name: "Banana" })).toBeInTheDocument();
  });

  it("shows all items when search is cleared", async () => {
    const user = userEvent.setup();
    renderCombobox();

    await user.click(screen.getByRole("combobox"));
    await user.type(screen.getByRole("combobox"), "ban");
    await user.clear(screen.getByRole("combobox"));

    expect(screen.getAllByRole("option")).toHaveLength(3);
  });

  it("shows no results message when nothing matches", async () => {
    const user = userEvent.setup();
    renderCombobox();

    await user.click(screen.getByRole("combobox"));
    await user.type(screen.getByRole("combobox"), "xyz");

    expect(screen.getByText("No results found.")).toBeInTheDocument();
  });

  it("opens dropdown when typing", async () => {
    const user = userEvent.setup();
    renderCombobox();

    // Focus and close, then type to reopen
    await user.click(screen.getByRole("combobox"));
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();

    await user.type(screen.getByRole("combobox"), "a");
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });
});

/* ========== Selection ========== */

describe("Combobox — Selection", () => {
  it("selects an item on click and closes dropdown", async () => {
    const user = userEvent.setup();
    renderCombobox();

    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByRole("option", { name: "Banana" }));
    // Dropdown should be hidden
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    // Input should show the selected label
    expect(screen.getByRole("combobox")).toHaveValue("Banana");
  });

  it("displays selected item label in input", async () => {
    const user = userEvent.setup();
    renderCombobox();

    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByText("Cherry"));
    expect(screen.getByRole("combobox")).toHaveValue("Cherry");
  });

  it("calls onValueChange when an item is selected", async () => {
    const user = userEvent.setup();
    const onValueChange = jest.fn();
    renderCombobox({ onValueChange });

    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByText("Apple"));
    expect(onValueChange).toHaveBeenCalledWith("apple");
  });

  it("supports controlled value", () => {
    renderCombobox({ value: "banana" });
    expect(screen.getByRole("combobox")).toHaveValue("Banana");
  });

  it("supports defaultValue (uncontrolled)", () => {
    renderCombobox({ defaultValue: "cherry" });
    expect(screen.getByRole("combobox")).toHaveValue("Cherry");
  });

  it("does not select a disabled item on click", async () => {
    const user = userEvent.setup();
    const onValueChange = jest.fn();
    render(
      <Combobox placeholder="Search" onValueChange={onValueChange}>
        <ComboboxItem value="apple">Apple</ComboboxItem>
        <ComboboxItem value="banana" disabled>
          Banana
        </ComboboxItem>
      </Combobox>,
    );

    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByText("Banana"));
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it("items have role=option", async () => {
    const user = userEvent.setup();
    renderCombobox();

    await user.click(screen.getByRole("combobox"));
    expect(screen.getAllByRole("option")).toHaveLength(3);
  });

  it("selected item has aria-selected=true", async () => {
    const user = userEvent.setup();
    renderCombobox({ value: "banana" });

    await user.click(screen.getByRole("combobox"));
    const bananaOption = screen.getByRole("option", { name: "Banana" });
    expect(bananaOption).toHaveAttribute("aria-selected", "true");
  });

  it("shows check icon next to selected item", async () => {
    const user = userEvent.setup();
    renderCombobox({ value: "apple" });

    await user.click(screen.getByRole("combobox"));
    const appleOption = screen.getByRole("option", { name: "Apple" });
    const svg = appleOption.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });
});

/* ========== Keyboard Navigation ========== */

describe("Combobox — Keyboard", () => {
  it("ArrowDown opens dropdown when closed", async () => {
    const user = userEvent.setup();
    renderCombobox();

    screen.getByRole("combobox").focus();
    await user.keyboard("{ArrowDown}");
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("ArrowUp opens dropdown when closed", async () => {
    const user = userEvent.setup();
    renderCombobox();

    screen.getByRole("combobox").focus();
    await user.keyboard("{ArrowUp}");
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("Enter opens dropdown when closed", async () => {
    const user = userEvent.setup();
    renderCombobox();

    screen.getByRole("combobox").focus();
    await user.keyboard("{Enter}");
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("ArrowDown moves highlight to next item", async () => {
    const user = userEvent.setup();
    renderCombobox();

    await user.click(screen.getByRole("combobox"));
    // First item should be highlighted by default
    await user.keyboard("{ArrowDown}");
    // Now second item should be highlighted
    const listbox = screen.getByRole("listbox");
    const activeId = listbox.getAttribute("aria-activedescendant");
    expect(activeId).toContain("banana");
  });

  it("ArrowUp moves highlight to previous item", async () => {
    const user = userEvent.setup();
    renderCombobox();

    await user.click(screen.getByRole("combobox"));
    // Highlight starts on first item, move down then up
    await user.keyboard("{ArrowDown}");
    await user.keyboard("{ArrowUp}");
    const listbox = screen.getByRole("listbox");
    const activeId = listbox.getAttribute("aria-activedescendant");
    expect(activeId).toContain("apple");
  });

  it("ArrowDown wraps from last to first", async () => {
    const user = userEvent.setup();
    renderCombobox();

    await user.click(screen.getByRole("combobox"));
    // Move down 3 times from apple -> banana -> cherry -> wraps to apple
    await user.keyboard("{ArrowDown}{ArrowDown}{ArrowDown}");
    const listbox = screen.getByRole("listbox");
    const activeId = listbox.getAttribute("aria-activedescendant");
    expect(activeId).toContain("apple");
  });

  it("ArrowUp wraps from first to last", async () => {
    const user = userEvent.setup();
    renderCombobox();

    await user.click(screen.getByRole("combobox"));
    // On first item, ArrowUp wraps to last
    await user.keyboard("{ArrowUp}");
    const listbox = screen.getByRole("listbox");
    const activeId = listbox.getAttribute("aria-activedescendant");
    expect(activeId).toContain("cherry");
  });

  it("Enter selects highlighted item", async () => {
    const user = userEvent.setup();
    const onValueChange = jest.fn();
    renderCombobox({ onValueChange });

    await user.click(screen.getByRole("combobox"));
    await user.keyboard("{ArrowDown}"); // banana
    await user.keyboard("{Enter}");
    expect(onValueChange).toHaveBeenCalledWith("banana");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("Home moves to first enabled item", async () => {
    const user = userEvent.setup();
    renderCombobox();

    await user.click(screen.getByRole("combobox"));
    await user.keyboard("{ArrowDown}{ArrowDown}"); // cherry
    await user.keyboard("{Home}");
    const listbox = screen.getByRole("listbox");
    const activeId = listbox.getAttribute("aria-activedescendant");
    expect(activeId).toContain("apple");
  });

  it("End moves to last enabled item", async () => {
    const user = userEvent.setup();
    renderCombobox();

    await user.click(screen.getByRole("combobox"));
    await user.keyboard("{End}");
    const listbox = screen.getByRole("listbox");
    const activeId = listbox.getAttribute("aria-activedescendant");
    expect(activeId).toContain("cherry");
  });

  it("skips disabled items during arrow navigation", async () => {
    const user = userEvent.setup();
    render(
      <Combobox placeholder="Search">
        <ComboboxItem value="apple">Apple</ComboboxItem>
        <ComboboxItem value="banana" disabled>
          Banana
        </ComboboxItem>
        <ComboboxItem value="cherry">Cherry</ComboboxItem>
      </Combobox>,
    );

    await user.click(screen.getByRole("combobox"));
    // Starts on apple, ArrowDown should skip banana -> cherry
    await user.keyboard("{ArrowDown}");
    const listbox = screen.getByRole("listbox");
    const activeId = listbox.getAttribute("aria-activedescendant");
    expect(activeId).toContain("cherry");
  });
});

/* ========== Form Field ========== */

describe("Combobox — Form Field", () => {
  it("shows required asterisk when isRequired=true", () => {
    renderCombobox({ label: "Fruit", isRequired: true });
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("hides asterisk when hideRequiredIndicator=true", () => {
    renderCombobox({
      label: "Fruit",
      isRequired: true,
      hideRequiredIndicator: true,
    });
    expect(screen.queryByText("*")).not.toBeInTheDocument();
  });

  it("shows tooltip icon with title attribute", () => {
    renderCombobox({ label: "Fruit", tooltip: "Choose a fruit" });
    expect(screen.getByTitle("Choose a fruit")).toBeInTheDocument();
  });

  it("helper text connected via aria-describedby", () => {
    renderCombobox({ helperText: "Pick one", id: "my-combobox" });
    const input = screen.getByRole("combobox");
    expect(input).toHaveAttribute("aria-describedby", "my-combobox-helper");
    expect(screen.getByText("Pick one")).toHaveAttribute(
      "id",
      "my-combobox-helper",
    );
  });
});

/* ========== Groups & Separator ========== */

describe("Combobox — Groups & Separator", () => {
  it("renders ComboboxGroup with label", async () => {
    const user = userEvent.setup();
    render(
      <Combobox placeholder="Search">
        <ComboboxGroup label="Fruits">
          <ComboboxItem value="apple">Apple</ComboboxItem>
        </ComboboxGroup>
      </Combobox>,
    );

    await user.click(screen.getByRole("combobox"));
    expect(screen.getByText("Fruits")).toBeInTheDocument();
    expect(screen.getByRole("group")).toBeInTheDocument();
  });

  it("renders ComboboxSeparator", async () => {
    const user = userEvent.setup();
    render(
      <Combobox placeholder="Search">
        <ComboboxItem value="apple">Apple</ComboboxItem>
        <ComboboxSeparator data-testid="separator" />
        <ComboboxItem value="banana">Banana</ComboboxItem>
      </Combobox>,
    );

    await user.click(screen.getByRole("combobox"));
    expect(screen.getByTestId("separator")).toBeInTheDocument();
  });
});

/* ========== Focus Management ========== */

describe("Combobox — Focus", () => {
  it("returns focus to input after selection", async () => {
    const user = userEvent.setup();
    renderCombobox();

    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByText("Apple"));
    expect(screen.getByRole("combobox")).toHaveFocus();
  });

  it("returns focus to input on Escape", async () => {
    const user = userEvent.setup();
    renderCombobox();

    await user.click(screen.getByRole("combobox"));
    await user.keyboard("{Escape}");
    expect(screen.getByRole("combobox")).toHaveFocus();
  });
});

/* ========== displayName ========== */

describe("Combobox — displayName", () => {
  it("Combobox has displayName", () => {
    expect(Combobox.displayName).toBe("Combobox");
  });

  it("ComboboxItem has displayName", () => {
    expect(ComboboxItem.displayName).toBe("ComboboxItem");
  });

  it("ComboboxGroup has displayName", () => {
    expect(ComboboxGroup.displayName).toBe("ComboboxGroup");
  });

  it("ComboboxSeparator has displayName", () => {
    expect(ComboboxSeparator.displayName).toBe("ComboboxSeparator");
  });
});
