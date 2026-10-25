import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Accordion from "@/components/ui/Accordion";

describe("Accordion", () => {
  it("opens the first item by default and switches on click", async () => {
    const user = userEvent.setup();
    render(
      <Accordion
        items={[
          { title: "First question", content: "First answer" },
          { title: "Second question", content: "Second answer" },
        ]}
      />,
    );

    const first = screen.getByRole("button", { name: "First question" });
    const second = screen.getByRole("button", { name: "Second question" });
    expect(first).toHaveAttribute("aria-expanded", "true");
    expect(second).toHaveAttribute("aria-expanded", "false");

    await user.click(second);
    expect(second).toHaveAttribute("aria-expanded", "true");
    expect(first).toHaveAttribute("aria-expanded", "false");
  });
});
