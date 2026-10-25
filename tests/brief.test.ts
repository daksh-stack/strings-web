import { describe, expect, it } from "vitest";
import { BRIEF_QUESTIONS, buildBriefSummary } from "@/components/forms/brief";

describe("buildBriefSummary", () => {
  it("produces a structured summary containing every answer", () => {
    const answers = {
      building: BRIEF_QUESTIONS[0].options[0],
      problem: BRIEF_QUESTIONS[1].options[0],
      existingSystem: BRIEF_QUESTIONS[2].options[1],
      outcome: BRIEF_QUESTIONS[3].options[1],
    };
    const summary = buildBriefSummary(answers);
    for (const value of Object.values(answers)) {
      expect(summary).toContain(value);
    }
    expect(summary).toContain("Building:");
    expect(summary).toContain("Primary problem:");
  });

  it("has one selectable option set per question", () => {
    expect(BRIEF_QUESTIONS).toHaveLength(4);
    for (const q of BRIEF_QUESTIONS) expect(q.options.length).toBeGreaterThanOrEqual(3);
  });
});
