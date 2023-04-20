import { render, screen } from "@testing-library/react";
import Home from "../pages";

describe("Home page", () => {
  describe("Home page - rendering ", () => {
    it("Should have home page text", () => {
      render(<Home />);
      expect(screen.getByText("Home page")).toBeInTheDocument();
    });
    it("Should have button", () => {
      render(<Home />);
      expect(
        screen.getByRole("button", { name: "Click Me" })
      ).toBeInTheDocument();
    });
    it("Should have input field with label Enter random text", () => {
      render(<Home />);
      expect(screen.getByLabelText(/Enter random text/)).toBeInTheDocument();
    });
    it("Should find input field by placeholder search", () => {
      render(<Home />);
      expect(screen.getByPlaceholderText(/search.../)).toBeInTheDocument();
    });
    it("Should find input field by text value", () => {
      render(<Home />);
      expect(screen.getByDisplayValue(/audio/)).toBeInTheDocument();
    });
    it("Should not find the Suprise text", () => {
      render(<Home />);
      expect(screen.queryByText("Suprise text")).not.toBeInTheDocument();
    });
  });
});
