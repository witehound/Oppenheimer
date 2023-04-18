import { render, screen } from "@testing-library/react";
import Home from "../pages";

describe("Home page - rendering ", () => {
  it("Should have home page text", () => {
    render(<Home />);
    expect(screen.getByText("Home page")).toBeInTheDocument();
  });
  it("Should have button", () => {
    render(<Home />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
