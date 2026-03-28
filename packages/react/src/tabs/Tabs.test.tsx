import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

const renderTabs = (props: {
  variant?: "underline" | "contained" | "pill";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabledTab?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  badge?: number;
} = {}) => {
  const { variant, size, fullWidth, disabledTab, icon, badge } = props;
  return render(
    <Tabs defaultValue="one">
      <TabsList variant={variant} size={size} fullWidth={fullWidth}>
        <TabsTrigger value="one" icon={icon} badge={badge}>
          Tab One
        </TabsTrigger>
        <TabsTrigger value="two" disabled={disabledTab}>
          Tab Two
        </TabsTrigger>
        <TabsTrigger value="three">Tab Three</TabsTrigger>
      </TabsList>
      <TabsContent value="one">Content One</TabsContent>
      <TabsContent value="two">Content Two</TabsContent>
      <TabsContent value="three">Content Three</TabsContent>
    </Tabs>,
  );
};

describe("Tabs", () => {
  it("renders all tabs and shows the default content", () => {
    renderTabs();
    expect(screen.getByRole("tab", { name: "Tab One" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Tab Two" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Tab Three" })).toBeInTheDocument();
    expect(screen.getByText("Content One")).toBeInTheDocument();
  });

  it("switches content when clicking a different tab", async () => {
    const user = userEvent.setup();
    renderTabs();

    await user.click(screen.getByRole("tab", { name: "Tab Two" }));
    expect(screen.getByText("Content Two")).toBeInTheDocument();
  });

  it("supports keyboard navigation with arrow keys", async () => {
    const user = userEvent.setup();
    renderTabs();

    const tabOne = screen.getByRole("tab", { name: "Tab One" });
    tabOne.focus();

    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: "Tab Two" })).toHaveFocus();

    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: "Tab Three" })).toHaveFocus();

    await user.keyboard("{ArrowLeft}");
    expect(screen.getByRole("tab", { name: "Tab Two" })).toHaveFocus();
  });

  it("skips disabled tabs during keyboard navigation", async () => {
    const user = userEvent.setup();
    renderTabs({ disabledTab: true });

    const tabOne = screen.getByRole("tab", { name: "Tab One" });
    tabOne.focus();

    await user.keyboard("{ArrowRight}");
    // Should skip "Tab Two" (disabled) and go to "Tab Three"
    expect(screen.getByRole("tab", { name: "Tab Three" })).toHaveFocus();
  });

  it("does not activate a disabled tab on click", async () => {
    const user = userEvent.setup();
    renderTabs({ disabledTab: true });

    const disabledTab = screen.getByRole("tab", { name: "Tab Two" });
    expect(disabledTab).toBeDisabled();

    await user.click(disabledTab);
    // Default content should still be visible
    expect(screen.getByText("Content One")).toBeInTheDocument();
  });

  it("applies underline variant classes", () => {
    renderTabs({ variant: "underline" });
    const list = screen.getByRole("tablist");
    expect(list.className).toContain("border-b");
  });

  it("applies contained variant classes", () => {
    renderTabs({ variant: "contained" });
    const list = screen.getByRole("tablist");
    expect(list.className).toContain("rounded-lg");
    expect(list.className).toContain("bg-bg-secondary");
  });

  it("applies pill variant classes", () => {
    renderTabs({ variant: "pill" });
    const trigger = screen.getByRole("tab", { name: "Tab One" });
    expect(trigger.className).toContain("rounded-full");
  });

  it("applies fullWidth class", () => {
    renderTabs({ fullWidth: true });
    const list = screen.getByRole("tablist");
    expect(list.className).toContain("w-full");
    const trigger = screen.getByRole("tab", { name: "Tab One" });
    expect(trigger.className).toContain("flex-1");
  });

  it("renders icon when provided", () => {
    const Icon = (props: React.SVGProps<SVGSVGElement>) => (
      <svg data-testid="tab-icon" {...props} />
    );
    renderTabs({ icon: Icon });
    expect(screen.getByTestId("tab-icon")).toBeInTheDocument();
  });

  it("renders badge count when provided", () => {
    renderTabs({ badge: 5 });
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("has correct displayName on all sub-components", () => {
    expect(Tabs.displayName).toBe("Tabs");
    expect(TabsList.displayName).toBe("TabsList");
    expect(TabsTrigger.displayName).toBe("TabsTrigger");
    expect(TabsContent.displayName).toBe("TabsContent");
  });

  it("forwards ref on Tabs root", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Tabs ref={ref} defaultValue="a">
        <TabsList>
          <TabsTrigger value="a">A</TabsTrigger>
        </TabsList>
        <TabsContent value="a">A content</TabsContent>
      </Tabs>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("forwards ref on TabsTrigger", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(
      <Tabs defaultValue="a">
        <TabsList>
          <TabsTrigger ref={ref} value="a">
            A
          </TabsTrigger>
        </TabsList>
        <TabsContent value="a">A content</TabsContent>
      </Tabs>,
    );
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("merges custom className on TabsContent", () => {
    render(
      <Tabs defaultValue="a">
        <TabsList>
          <TabsTrigger value="a">A</TabsTrigger>
        </TabsList>
        <TabsContent value="a" className="custom-class">
          A content
        </TabsContent>
      </Tabs>,
    );
    expect(screen.getByText("A content").className).toContain("custom-class");
  });
});
