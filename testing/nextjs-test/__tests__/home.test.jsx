import { render, screen } from "@testing-library/react";
import Home from "../pages";

describe("Home page - rendering ", () => {
  it("Should have home page text", () => {
    render(<Home />);
    expect(screen.getAllByText("Home page"));
  });
});
