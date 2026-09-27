import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import QuestionsPreview from "./QuestionsPreview";

afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

it("shows only the two requested pages and switches on mouse hover", () => {
  vi.stubGlobal("PointerEvent", MouseEvent);
  render(<QuestionsPreview />);
  const button = screen.getByRole("button");
  expect(button.querySelectorAll("img")).toHaveLength(2);
  expect(button).toHaveAttribute("aria-pressed", "false");
  const enter = new MouseEvent("pointerover", { bubbles: true });
  Object.defineProperty(enter, "pointerType", { value: "mouse" });
  fireEvent(button, enter);
  expect(button).toHaveAttribute("aria-pressed", "true");
  const leave = new MouseEvent("pointerout", { bubbles: true });
  Object.defineProperty(leave, "pointerType", { value: "mouse" });
  fireEvent(button, leave);
  expect(button).toHaveAttribute("aria-pressed", "false");
});

it("toggles with touch clicks and keyboard activation", () => {
  vi.stubGlobal("matchMedia", () => ({ matches: false }));
  render(<QuestionsPreview />);
  const button = screen.getByRole("button");
  fireEvent.click(button, { detail: 1 });
  expect(button).toHaveAttribute("aria-pressed", "true");
  fireEvent.click(button, { detail: 1 });
  expect(button).toHaveAttribute("aria-pressed", "false");
  fireEvent.click(button, { detail: 0 });
  expect(button).toHaveAttribute("aria-pressed", "true");
});
