import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Home from "../pages";

test("Pages Router", () => {
  render(<Home />);
  const main = within(screen.getByRole("main"));
});
