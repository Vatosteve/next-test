import { render, screen } from "@testing-library/react";
import MetricCard from "../MetricCard";

describe("MetricCard", () => {
  // ── Required props ──────────────────────────────────────────────────────────

  it("renders the title", () => {
    render(<MetricCard title="Deep Work Time">content</MetricCard>);
    expect(screen.getByText("Deep Work Time")).toBeInTheDocument();
  });

  it("renders children in the card body", () => {
    render(
      <MetricCard title="Test">
        <span>body content</span>
      </MetricCard>,
    );
    expect(screen.getByText("body content")).toBeInTheDocument();
  });

  it("exposes data-testid='metric-card' for E2E selectors", () => {
    render(<MetricCard title="Test">content</MetricCard>);
    expect(screen.getByTestId("metric-card")).toBeInTheDocument();
  });

  // ── Optional: widget ────────────────────────────────────────────────────────

  it("renders the widget when provided", () => {
    render(
      <MetricCard title="Test" widget={<button>Widget</button>}>
        content
      </MetricCard>,
    );
    expect(screen.getByRole("button", { name: "Widget" })).toBeInTheDocument();
  });

  it("omits the widget slot when not provided", () => {
    render(<MetricCard title="Test">content</MetricCard>);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  // ── Optional: background ────────────────────────────────────────────────────

  it("renders the background layer when provided", () => {
    render(
      <MetricCard
        title="Test"
        background={<div data-testid="bg">gradient</div>}
      >
        content
      </MetricCard>,
    );
    expect(screen.getByTestId("bg")).toBeInTheDocument();
  });

  it("omits the background layer when not provided", () => {
    render(<MetricCard title="Test">content</MetricCard>);
    // background wrapper has absolute inset-0 z-0 — it should not exist
    const card = screen.getByTestId("metric-card");
    expect(card.querySelector(".absolute.inset-0.z-0")).toBeNull();
  });

  // ── Optional: className ─────────────────────────────────────────────────────

  it("merges extra className onto the card root", () => {
    render(
      <MetricCard title="Test" className="custom-class">
        content
      </MetricCard>,
    );
    expect(screen.getByTestId("metric-card")).toHaveClass("custom-class");
  });

  it("does not break base classes when no extra className is given", () => {
    render(<MetricCard title="Test">content</MetricCard>);
    expect(screen.getByTestId("metric-card")).toHaveClass(
      "bg-neutral-900",
      "rounded-2xl",
    );
  });
});
