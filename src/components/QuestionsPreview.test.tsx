import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import QuestionsPreview from "./QuestionsPreview";

afterEach(cleanup);

it("starts with half of each page without hover switching", () => {
  render(<QuestionsPreview />);
  const slider = screen.getByRole("slider");
  expect(slider).toHaveValue("50");
  expect(screen.getAllByRole("img")).toHaveLength(2);
  expect(screen.getByAltText(/Página 1/)).toHaveStyle({ clipPath: "inset(0 50% 0 0)" });
  fireEvent.mouseOver(slider);
  expect(slider).toHaveValue("50");
});

it("shows either complete page and restores the split with buttons", () => {
  render(<QuestionsPreview />);
  fireEvent.click(screen.getByRole("button", { name: "Ver página 1" }));
  expect(screen.getByRole("slider")).toHaveValue("100");
  fireEvent.click(screen.getByRole("button", { name: "Ver página 2" }));
  expect(screen.getByRole("slider")).toHaveValue("0");
  fireEvent.click(screen.getByRole("button", { name: "Ver as duas" }));
  expect(screen.getByRole("slider")).toHaveValue("50");
});

it("updates clipping when the slider moves", () => {
  render(<QuestionsPreview />);
  fireEvent.change(screen.getByRole("slider"), { target: { value: "25" } });
  expect(screen.getByAltText(/Página 1/)).toHaveStyle({ clipPath: "inset(0 75% 0 0)" });
});
