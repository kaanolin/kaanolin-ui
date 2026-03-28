import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownCheckboxItem,
  DropdownRadioItem,
  DropdownRadioGroup,
  DropdownLabel,
  DropdownSeparator,
  DropdownSub,
  DropdownSubTrigger,
  DropdownSubContent,
  DropdownGroup,
} from "./Dropdown";

/* ========== helpers ========== */

function SimpleDropdown({
  onSelect,
  disabled,
}: {
  onSelect?: () => void;
  disabled?: boolean;
}) {
  return (
    <Dropdown>
      <DropdownTrigger>Open</DropdownTrigger>
      <DropdownContent>
        <DropdownLabel>Actions</DropdownLabel>
        <DropdownSeparator />
        <DropdownGroup>
          <DropdownItem onSelect={onSelect}>Edit</DropdownItem>
          <DropdownItem disabled={disabled}>Delete</DropdownItem>
        </DropdownGroup>
      </DropdownContent>
    </Dropdown>
  );
}

/* ========== Tests ========== */

describe("Dropdown", () => {
  it("renders the trigger", () => {
    render(<SimpleDropdown />);
    expect(screen.getByText("Open")).toBeInTheDocument();
  });

  it("opens when clicking the trigger", async () => {
    const user = userEvent.setup();
    render(<SimpleDropdown />);

    await user.click(screen.getByText("Open"));

    await waitFor(() => {
      expect(screen.getByText("Edit")).toBeVisible();
    });
  });

  it("shows label and separator", async () => {
    const user = userEvent.setup();
    render(<SimpleDropdown />);

    await user.click(screen.getByText("Open"));

    await waitFor(() => {
      expect(screen.getByText("Actions")).toBeVisible();
    });
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("calls onSelect when clicking an item", async () => {
    const onSelect = jest.fn();
    const user = userEvent.setup();
    render(<SimpleDropdown onSelect={onSelect} />);

    await user.click(screen.getByText("Open"));
    await waitFor(() => {
      expect(screen.getByText("Edit")).toBeVisible();
    });

    await user.click(screen.getByText("Edit"));
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it("does not trigger disabled items", async () => {
    const user = userEvent.setup();
    render(<SimpleDropdown disabled />);

    await user.click(screen.getByText("Open"));
    await waitFor(() => {
      expect(screen.getByText("Delete")).toBeVisible();
    });

    const deleteItem = screen.getByText("Delete");
    expect(deleteItem.closest("[data-disabled]")).toBeTruthy();
  });

  it("renders destructive items with correct class", async () => {
    const user = userEvent.setup();
    render(
      <Dropdown>
        <DropdownTrigger>Open</DropdownTrigger>
        <DropdownContent>
          <DropdownItem destructive>Remove</DropdownItem>
        </DropdownContent>
      </Dropdown>,
    );

    await user.click(screen.getByText("Open"));
    await waitFor(() => {
      expect(screen.getByText("Remove")).toBeVisible();
    });

    const item = screen.getByText("Remove").closest("[role='menuitem']");
    expect(item?.className).toContain("text-text-error-primary");
  });

  it("renders items with shortcut text", async () => {
    const user = userEvent.setup();
    render(
      <Dropdown>
        <DropdownTrigger>Open</DropdownTrigger>
        <DropdownContent>
          <DropdownItem shortcut="⌘K">Search</DropdownItem>
        </DropdownContent>
      </Dropdown>,
    );

    await user.click(screen.getByText("Open"));
    await waitFor(() => {
      expect(screen.getByText("⌘K")).toBeVisible();
    });
  });

  it("renders items with icon", async () => {
    const user = userEvent.setup();
    render(
      <Dropdown>
        <DropdownTrigger>Open</DropdownTrigger>
        <DropdownContent>
          <DropdownItem icon={<span data-testid="icon">★</span>}>
            Star
          </DropdownItem>
        </DropdownContent>
      </Dropdown>,
    );

    await user.click(screen.getByText("Open"));
    await waitFor(() => {
      expect(screen.getByTestId("icon")).toBeVisible();
    });
  });

  it("closes on Escape", async () => {
    const user = userEvent.setup();
    render(<SimpleDropdown />);

    await user.click(screen.getByText("Open"));
    await waitFor(() => {
      expect(screen.getByText("Edit")).toBeVisible();
    });

    await user.keyboard("{Escape}");
    await waitFor(() => {
      expect(screen.queryByText("Edit")).not.toBeInTheDocument();
    });
  });

  it("supports keyboard navigation", async () => {
    const onSelect = jest.fn();
    const user = userEvent.setup();
    render(<SimpleDropdown onSelect={onSelect} />);

    await user.click(screen.getByText("Open"));
    await waitFor(() => {
      expect(screen.getByText("Edit")).toBeVisible();
    });

    // Arrow down then enter
    await user.keyboard("{ArrowDown}{Enter}");
    expect(onSelect).toHaveBeenCalled();
  });

  describe("CheckboxItem", () => {
    it("toggles checked state", async () => {
      const user = userEvent.setup();

      function CheckboxDropdown() {
        const [checked, setChecked] = React.useState(false);
        return (
          <Dropdown>
            <DropdownTrigger>Open</DropdownTrigger>
            <DropdownContent>
              <DropdownCheckboxItem
                checked={checked}
                onCheckedChange={setChecked}
              >
                Show toolbar
              </DropdownCheckboxItem>
            </DropdownContent>
          </Dropdown>
        );
      }

      render(<CheckboxDropdown />);
      await user.click(screen.getByText("Open"));

      await waitFor(() => {
        expect(screen.getByText("Show toolbar")).toBeVisible();
      });

      const item = screen.getByRole("menuitemcheckbox");
      expect(item).toHaveAttribute("aria-checked", "false");

      await user.click(item);

      // Reopen the menu
      await user.click(screen.getByText("Open"));
      await waitFor(() => {
        expect(screen.getByRole("menuitemcheckbox")).toHaveAttribute(
          "aria-checked",
          "true",
        );
      });
    });
  });

  describe("RadioItem", () => {
    it("selects radio value", async () => {
      const user = userEvent.setup();

      function RadioDropdown() {
        const [value, setValue] = React.useState("a");
        return (
          <Dropdown>
            <DropdownTrigger>Open</DropdownTrigger>
            <DropdownContent>
              <DropdownRadioGroup value={value} onValueChange={setValue}>
                <DropdownRadioItem value="a">Option A</DropdownRadioItem>
                <DropdownRadioItem value="b">Option B</DropdownRadioItem>
              </DropdownRadioGroup>
            </DropdownContent>
          </Dropdown>
        );
      }

      render(<RadioDropdown />);
      await user.click(screen.getByText("Open"));

      await waitFor(() => {
        expect(screen.getByText("Option A")).toBeVisible();
      });

      const optionA = screen.getByRole("menuitemradio", {
        name: "Option A",
      });
      expect(optionA).toHaveAttribute("aria-checked", "true");

      await user.click(
        screen.getByRole("menuitemradio", { name: "Option B" }),
      );

      // Reopen
      await user.click(screen.getByText("Open"));
      await waitFor(() => {
        expect(
          screen.getByRole("menuitemradio", { name: "Option B" }),
        ).toHaveAttribute("aria-checked", "true");
      });
    });
  });

  describe("SubMenu", () => {
    it("renders sub-trigger and opens sub-content", async () => {
      const user = userEvent.setup();
      render(
        <Dropdown>
          <DropdownTrigger>Open</DropdownTrigger>
          <DropdownContent>
            <DropdownSub>
              <DropdownSubTrigger>Share</DropdownSubTrigger>
              <DropdownSubContent>
                <DropdownItem>Email</DropdownItem>
              </DropdownSubContent>
            </DropdownSub>
          </DropdownContent>
        </Dropdown>,
      );

      await user.click(screen.getByText("Open"));
      await waitFor(() => {
        expect(screen.getByText("Share")).toBeVisible();
      });

      // Hover to open submenu
      await user.hover(screen.getByText("Share"));
      await waitFor(() => {
        expect(screen.getByText("Email")).toBeVisible();
      });
    });
  });

  it("has correct displayName on all sub-components", () => {
    expect(DropdownContent.displayName).toBe("DropdownContent");
    expect(DropdownItem.displayName).toBe("DropdownItem");
    expect(DropdownCheckboxItem.displayName).toBe("DropdownCheckboxItem");
    expect(DropdownRadioItem.displayName).toBe("DropdownRadioItem");
    expect(DropdownLabel.displayName).toBe("DropdownLabel");
    expect(DropdownSeparator.displayName).toBe("DropdownSeparator");
    expect(DropdownSubTrigger.displayName).toBe("DropdownSubTrigger");
    expect(DropdownSubContent.displayName).toBe("DropdownSubContent");
  });
});
