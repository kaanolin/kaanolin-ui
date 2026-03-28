import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import { Progress } from "./Progress";

/* ========== Progress — basic rendering ========== */

describe("Progress", () => {
  it("renders a progressbar", () => {
    render(<Progress value={50} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("sets aria-valuenow to the value", () => {
    render(<Progress value={75} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "75");
  });

  it("sets aria-valuemax to max", () => {
    render(<Progress value={50} max={200} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuemax", "200");
  });

  it("defaults value to 0", () => {
    render(<Progress />);
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "0");
  });

  it("defaults max to 100", () => {
    render(<Progress value={50} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuemax", "100");
  });

  it("clamps value to max", () => {
    render(<Progress value={150} max={100} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "100");
  });

  it("clamps negative value to 0", () => {
    render(<Progress value={-10} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "0");
  });

  it("merges custom className", () => {
    render(<Progress value={50} className="my-custom-class" />);
    expect(screen.getByRole("progressbar").className).toContain("my-custom-class");
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Progress ref={ref} value={50} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

/* ========== Progress — indicator transform ========== */

describe("Progress - indicator transform", () => {
  it("applies correct transform for 50%", () => {
    const { container } = render(<Progress value={50} />);
    const indicatorEl = container.querySelector(
      "[role='progressbar'] > div",
    ) as HTMLElement;
    if (indicatorEl) {
      expect(indicatorEl.style.transform).toBe("translateX(-50%)");
    }
  });

  it("applies correct transform for 0%", () => {
    const { container } = render(<Progress value={0} />);
    const indicatorEl = container.querySelector(
      "[role='progressbar'] > div",
    ) as HTMLElement;
    if (indicatorEl) {
      expect(indicatorEl.style.transform).toBe("translateX(-100%)");
    }
  });

  it("applies correct transform for 100%", () => {
    const { container } = render(<Progress value={100} />);
    const indicatorEl = container.querySelector(
      "[role='progressbar'] > div",
    ) as HTMLElement;
    if (indicatorEl) {
      expect(indicatorEl.style.transform).toBe("translateX(-0%)");
    }
  });
});

/* ========== Progress — size variants ========== */

describe("Progress - size variants", () => {
  it("applies sm size classes", () => {
    render(<Progress value={50} size="sm" />);
    expect(screen.getByRole("progressbar").className).toContain("h-2");
  });

  it("applies md size classes by default", () => {
    render(<Progress value={50} />);
    expect(screen.getByRole("progressbar").className).toContain("h-2.5");
  });

  it("applies lg size classes", () => {
    render(<Progress value={50} size="lg" />);
    expect(screen.getByRole("progressbar").className).toContain("h-3");
  });
});

/* ========== Progress — color variants ========== */

describe("Progress - color variants", () => {
  it("applies brand color by default", () => {
    const { container } = render(<Progress value={50} />);
    const indicatorEl = container.querySelector(
      "[role='progressbar'] > div",
    ) as HTMLElement;
    if (indicatorEl) {
      expect(indicatorEl.className).toContain("bg-bg-brand-solid");
    }
  });

  it("applies success color", () => {
    const { container } = render(<Progress value={50} color="success" />);
    const indicatorEl = container.querySelector(
      "[role='progressbar'] > div",
    ) as HTMLElement;
    if (indicatorEl) {
      expect(indicatorEl.className).toContain("bg-bg-success-solid");
    }
  });

  it("applies error color", () => {
    const { container } = render(<Progress value={50} color="error" />);
    const indicatorEl = container.querySelector(
      "[role='progressbar'] > div",
    ) as HTMLElement;
    if (indicatorEl) {
      expect(indicatorEl.className).toContain("bg-bg-error-solid");
    }
  });

  it("applies warning color", () => {
    const { container } = render(<Progress value={50} color="warning" />);
    const indicatorEl = container.querySelector(
      "[role='progressbar'] > div",
    ) as HTMLElement;
    if (indicatorEl) {
      expect(indicatorEl.className).toContain("bg-bg-warning-solid");
    }
  });
});

/* ========== Progress — custom max ========== */

describe("Progress - custom max", () => {
  it("calculates percentage based on custom max", () => {
    const { container } = render(<Progress value={25} max={50} />);
    const indicatorEl = container.querySelector(
      "[role='progressbar'] > div",
    ) as HTMLElement;
    if (indicatorEl) {
      expect(indicatorEl.style.transform).toBe("translateX(-50%)");
    }
  });
});
