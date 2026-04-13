import { render, screen } from "@testing-library/react";
import { useQueryClient } from "@tanstack/react-query";
import QueryProvider from "../QueryProvider";

// A minimal consumer that proves QueryClient is available in the tree
function QueryClientProbe() {
  const client = useQueryClient();
  return <div data-testid="probe">{client ? "available" : "missing"}</div>;
}

describe("QueryProvider", () => {
  it("renders its children", () => {
    render(
      <QueryProvider>
        <span>child node</span>
      </QueryProvider>,
    );
    expect(screen.getByText("child node")).toBeInTheDocument();
  });

  it("provides a QueryClient to descendant components", () => {
    render(
      <QueryProvider>
        <QueryClientProbe />
      </QueryProvider>,
    );
    expect(screen.getByTestId("probe")).toHaveTextContent("available");
  });

  it("renders multiple children without error", () => {
    render(
      <QueryProvider>
        <span>first</span>
        <span>second</span>
      </QueryProvider>,
    );
    expect(screen.getByText("first")).toBeInTheDocument();
    expect(screen.getByText("second")).toBeInTheDocument();
  });
});
