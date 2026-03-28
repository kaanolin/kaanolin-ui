import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ButtonGroup, ButtonGroupItem } from "./ButtonGroup";

describe("ButtonGroup", () => {
  it("renders items", () => {
    render(
      <ButtonGroup type="single">
        <ButtonGroupItem value="a">Alpha</ButtonGroupItem>
        <ButtonGroupItem value="b">Beta</ButtonGroupItem>
      </ButtonGroup>,
    );
    expect(screen.getByText("Alpha")).toBeInTheDocument();
    expect(screen.getByText("Beta")).toBeInTheDocument();
  });

  it("supports single selection", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(
      <ButtonGroup type="single" onValueChange={handleChange}>
        <ButtonGroupItem value="a">Alpha</ButtonGroupItem>
        <ButtonGroupItem value="b">Beta</ButtonGroupItem>
      </ButtonGroup>,
    );
    await user.click(screen.getByText("Alpha"));
    expect(handleChange).toHaveBeenCalledWith("a");
  });

  it("toggles off in single mode", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(
      <ButtonGroup type="single" defaultValue="a" onValueChange={handleChange}>
        <ButtonGroupItem value="a">Alpha</ButtonGroupItem>
        <ButtonGroupItem value="b">Beta</ButtonGroupItem>
      </ButtonGroup>,
    );
    // Click the already-selected item to deselect
    await user.click(screen.getByText("Alpha"));
    expect(handleChange).toHaveBeenCalledWith("");
  });

  it("supports multiple selection", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(
      <ButtonGroup type="multiple" onValueChange={handleChange}>
        <ButtonGroupItem value="a">Alpha</ButtonGroupItem>
        <ButtonGroupItem value="b">Beta</ButtonGroupItem>
        <ButtonGroupItem value="c">Gamma</ButtonGroupItem>
      </ButtonGroup>,
    );
    await user.click(screen.getByText("Alpha"));
    expect(handleChange).toHaveBeenCalledWith(["a"]);
    await user.click(screen.getByText("Beta"));
    expect(handleChange).toHaveBeenCalledWith(["a", "b"]);
  });

  it("disables the entire group", () => {
    render(
      <ButtonGroup type="single" disabled>
        <ButtonGroupItem value="a">Alpha</ButtonGroupItem>
      </ButtonGroup>,
    );
    expect(screen.getByText("Alpha").closest("button")).toBeDisabled();
  });

  it("disables individual items", () => {
    render(
      <ButtonGroup type="single">
        <ButtonGroupItem value="a" disabled>
          Alpha
        </ButtonGroupItem>
        <ButtonGroupItem value="b">Beta</ButtonGroupItem>
      </ButtonGroup>,
    );
    expect(screen.getByText("Alpha").closest("button")).toBeDisabled();
    expect(screen.getByText("Beta").closest("button")).not.toBeDisabled();
  });

  it("applies size variants", () => {
    render(
      <ButtonGroup type="single" size="sm">
        <ButtonGroupItem value="a">Alpha</ButtonGroupItem>
      </ButtonGroup>,
    );
    const button = screen.getByText("Alpha").closest("button")!;
    expect(button.className).toContain("px-3");
    expect(button.className).toContain("h-9");
  });

  it("renders icon in items", () => {
    const Icon = (props: React.SVGProps<SVGSVGElement>) => (
      <svg data-testid="item-icon" {...props} />
    );
    render(
      <ButtonGroup type="single">
        <ButtonGroupItem value="a" icon={Icon}>
          Alpha
        </ButtonGroupItem>
      </ButtonGroup>,
    );
    expect(screen.getByTestId("item-icon")).toBeInTheDocument();
  });

  it("merges custom className on group", () => {
    render(
      <ButtonGroup type="single" className="ml-4">
        <ButtonGroupItem value="a">Alpha</ButtonGroupItem>
      </ButtonGroup>,
    );
    const group = screen.getByRole("group");
    expect(group.className).toContain("ml-4");
  });

  it("forwards ref on group", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <ButtonGroup ref={ref} type="single">
        <ButtonGroupItem value="a">Alpha</ButtonGroupItem>
      </ButtonGroup>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
