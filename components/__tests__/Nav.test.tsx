import { render, screen } from "@testing-library/react";
import { usePathname } from "next/navigation";
import Nav from "../Nav";

// next/jest renders next/link as a plain <a> automatically.
// We only need to mock the navigation hook.
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

const mockUsePathname = jest.mocked(usePathname);

beforeEach(() => {
  // Default: user is on the Overview page
  mockUsePathname.mockReturnValue("/");
});

describe("Nav — logo", () => {
  it("renders the logo mark", () => {
    render(<Nav />);
    expect(screen.getByText("D")).toBeInTheDocument();
  });
});

describe("Nav — navigation links", () => {
  it("renders all three links", () => {
    render(<Nav />);
    expect(screen.getByRole("link", { name: "Overview" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Settings" })).toBeInTheDocument();
  });

  it("links point to the correct hrefs", () => {
    render(<Nav />);
    expect(screen.getByRole("link", { name: "Overview" })).toHaveAttribute(
      "href",
      "/",
    );
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "/about",
    );
    expect(screen.getByRole("link", { name: "Settings" })).toHaveAttribute(
      "href",
      "/settings",
    );
  });

  it("applies active styles to the current-path link", () => {
    mockUsePathname.mockReturnValue("/about");
    render(<Nav />);
    expect(screen.getByRole("link", { name: "About" })).toHaveClass(
      "text-white",
    );
  });

  it("applies inactive styles to non-current-path links", () => {
    mockUsePathname.mockReturnValue("/about");
    render(<Nav />);
    expect(screen.getByRole("link", { name: "Overview" })).toHaveClass(
      "text-neutral-400",
    );
    expect(screen.getByRole("link", { name: "Settings" })).toHaveClass(
      "text-neutral-400",
    );
  });

  it("marks only one link as active at a time", () => {
    mockUsePathname.mockReturnValue("/settings");
    render(<Nav />);
    // Only the Settings link should have the active indicator class
    expect(screen.getByRole("link", { name: "Settings" })).toHaveClass(
      "text-white",
    );
    expect(screen.getByRole("link", { name: "Overview" })).not.toHaveClass(
      "text-white",
    );
    expect(screen.getByRole("link", { name: "About" })).not.toHaveClass(
      "text-white",
    );
  });
});

describe("Nav — user controls", () => {
  it("renders the user avatar initials", () => {
    render(<Nav />);
    expect(screen.getByText("KS")).toBeInTheDocument();
  });

  it("renders the user display name", () => {
    render(<Nav />);
    expect(screen.getByText("Kate Schowalter")).toBeInTheDocument();
  });

  it("renders user icon, bell icon, and profile chip buttons", () => {
    render(<Nav />);
    // user icon button + bell icon button + profile chip (role="button" div)
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
  });

  it("user profile chip has role=button and is keyboard-focusable", () => {
    render(<Nav />);
    // The chip's accessible name includes its text content
    const chip = screen.getByRole("button", { name: /kate schowalter/i });
    expect(chip).toHaveAttribute("tabindex", "0");
  });
});
