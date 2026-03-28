import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";

/* ========== RadioGroup — basic rendering ========== */

describe("RadioGroup", () => {
  it("renders radio items", () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="a" aria-label="Option A" />
        <RadioGroupItem value="b" aria-label="Option B" />
      </RadioGroup>,
    );
    const radios = screen.getAllByRole("radio");
    expect(radios).toHaveLength(2);
  });

  it("selects a radio item when clicked", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(
      <RadioGroup onValueChange={handleChange}>
        <RadioGroupItem value="a" label="Option A" />
        <RadioGroupItem value="b" label="Option B" />
      </RadioGroup>,
    );
    await user.click(screen.getByText("Option A"));
    expect(handleChange).toHaveBeenCalledWith("a");
  });

  it("renders with defaultValue selected", () => {
    render(
      <RadioGroup defaultValue="b">
        <RadioGroupItem value="a" label="Option A" />
        <RadioGroupItem value="b" label="Option B" />
      </RadioGroup>,
    );
    const radios = screen.getAllByRole("radio");
    expect(radios[1]).toHaveAttribute("data-state", "checked");
  });

  it("supports controlled value", () => {
    render(
      <RadioGroup value="a">
        <RadioGroupItem value="a" label="Option A" />
        <RadioGroupItem value="b" label="Option B" />
      </RadioGroup>,
    );
    const radios = screen.getAllByRole("radio");
    expect(radios[0]).toHaveAttribute("data-state", "checked");
    expect(radios[1]).toHaveAttribute("data-state", "unchecked");
  });
});

/* ========== RadioGroup — keyboard navigation ========== */

describe("RadioGroup - keyboard navigation", () => {
  it("first radio is focusable when selected", () => {
    render(
      <RadioGroup defaultValue="a">
        <RadioGroupItem value="a" label="Option A" />
        <RadioGroupItem value="b" label="Option B" />
        <RadioGroupItem value="c" label="Option C" />
      </RadioGroup>,
    );
    const radios = screen.getAllByRole("radio");
    radios[0].focus();
    expect(document.activeElement).toBe(radios[0]);
  });
});

/* ========== RadioGroup — disabled ========== */

describe("RadioGroup - disabled", () => {
  it("disables all items when group is disabled", () => {
    render(
      <RadioGroup disabled>
        <RadioGroupItem value="a" label="Option A" />
        <RadioGroupItem value="b" label="Option B" />
      </RadioGroup>,
    );
    const radios = screen.getAllByRole("radio");
    radios.forEach((radio) => {
      expect(radio).toBeDisabled();
    });
  });

  it("disables a single item", () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="a" label="Option A" />
        <RadioGroupItem value="b" label="Option B" disabled />
      </RadioGroup>,
    );
    const radios = screen.getAllByRole("radio");
    expect(radios[0]).not.toBeDisabled();
    expect(radios[1]).toBeDisabled();
  });

  it("does not call onValueChange when disabled item is clicked", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(
      <RadioGroup onValueChange={handleChange}>
        <RadioGroupItem value="a" label="Option A" disabled />
        <RadioGroupItem value="b" label="Option B" />
      </RadioGroup>,
    );
    await user.click(screen.getByText("Option A"));
    expect(handleChange).not.toHaveBeenCalled();
  });
});

/* ========== RadioGroup — orientation ========== */

describe("RadioGroup - orientation", () => {
  it("applies vertical orientation classes by default", () => {
    const { container } = render(
      <RadioGroup>
        <RadioGroupItem value="a" label="Option A" />
      </RadioGroup>,
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className).toContain("flex-col");
    expect(root.className).toContain("gap-3");
  });

  it("applies horizontal orientation classes", () => {
    const { container } = render(
      <RadioGroup orientation="horizontal">
        <RadioGroupItem value="a" label="Option A" />
      </RadioGroup>,
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className).toContain("flex-row");
    expect(root.className).toContain("gap-4");
  });
});

/* ========== RadioGroupItem — label & description ========== */

describe("RadioGroupItem - label and description", () => {
  it("renders a label", () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="a" label="Option A" />
      </RadioGroup>,
    );
    expect(screen.getByText("Option A")).toBeInTheDocument();
  });

  it("renders a description", () => {
    render(
      <RadioGroup>
        <RadioGroupItem
          value="a"
          label="Option A"
          description="Description for A"
        />
      </RadioGroup>,
    );
    expect(screen.getByText("Description for A")).toBeInTheDocument();
  });

  it("applies disabled styling to label", () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="a" label="Option A" disabled />
      </RadioGroup>,
    );
    const label = screen.getByText("Option A");
    expect(label.className).toContain("cursor-not-allowed");
  });
});

/* ========== RadioGroupItem — sizes ========== */

describe("RadioGroupItem - sizes", () => {
  it("applies sm size classes", () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="a" size="sm" aria-label="Option A" />
      </RadioGroup>,
    );
    const radio = screen.getByRole("radio");
    expect(radio.className).toContain("size-4");
  });

  it("applies md size classes by default", () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="a" aria-label="Option A" />
      </RadioGroup>,
    );
    const radio = screen.getByRole("radio");
    expect(radio.className).toContain("size-5");
  });
});

/* ========== RadioGroup — ref forwarding ========== */

describe("RadioGroup - ref forwarding", () => {
  it("forwards ref to RadioGroup root", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <RadioGroup ref={ref}>
        <RadioGroupItem value="a" aria-label="Option A" />
      </RadioGroup>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

/* ========== RadioGroup — className merging ========== */

describe("RadioGroup - className merging", () => {
  it("merges custom className on RadioGroup", () => {
    const { container } = render(
      <RadioGroup className="my-custom-class">
        <RadioGroupItem value="a" aria-label="Option A" />
      </RadioGroup>,
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className).toContain("my-custom-class");
  });

  it("merges custom className on RadioGroupItem", () => {
    render(
      <RadioGroup>
        <RadioGroupItem
          value="a"
          className="my-item-class"
          aria-label="Option A"
        />
      </RadioGroup>,
    );
    const radio = screen.getByRole("radio");
    expect(radio.className).toContain("my-item-class");
  });
});
