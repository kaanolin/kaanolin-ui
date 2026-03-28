import { render, screen } from "@testing-library/react";
import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
  it("renders the trigger element", () => {
    render(
      <Tooltip content="Tooltip text">
        <button>Hover me</button>
      </Tooltip>,
    );
    expect(screen.getByRole("button", { name: "Hover me" })).toBeInTheDocument();
  });

  it("does not show tooltip content by default", () => {
    render(
      <Tooltip content="Tooltip text">
        <button>Hover me</button>
      </Tooltip>,
    );
    expect(screen.queryByText("Tooltip text")).not.toBeInTheDocument();
  });

  it("renders trigger with correct text", () => {
    render(
      <Tooltip content="Help text">
        <span>Info</span>
      </Tooltip>,
    );
    expect(screen.getByText("Info")).toBeInTheDocument();
  });

  it("renders multiple triggers independently", () => {
    render(
      <>
        <Tooltip content="First">
          <button>Button 1</button>
        </Tooltip>
        <Tooltip content="Second">
          <button>Button 2</button>
        </Tooltip>
      </>,
    );
    expect(screen.getByRole("button", { name: "Button 1" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Button 2" })).toBeInTheDocument();
  });
});
