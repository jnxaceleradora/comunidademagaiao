import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import FAQSection from "./FAQSection";

afterEach(cleanup);

it("shows the six supplied questions and expands each answer", () => {
  render(<FAQSection />);
  expect(screen.getByRole("heading", { name: "Dúvidas frequentes" })).toBeInTheDocument();
  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(6);
  const answers = [
    /O produto é digital/,
    /tamanho A4 em formato horizontal/,
    /usando um leitor de PDF/,
    /mais de 100 mapas mentais/,
    /Kiwify libera o acesso via e-mail/,
    /atualizado em 18.08.2026/,
  ];
  buttons.forEach((button, index) => {
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(answers[index])).toBeVisible();
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});
