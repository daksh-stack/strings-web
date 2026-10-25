/**
 * Project Brief Builder logic (pure, tested in tests/brief.test.ts).
 * Turns four quick answers into a structured summary the visitor can copy or
 * carry into the enquiry form. Works entirely offline — no AI API involved.
 */
export interface BriefAnswers {
  building: string;
  problem: string;
  existingSystem: string;
  outcome: string;
}

export const BRIEF_QUESTIONS = [
  {
    key: "building",
    label: "What are you building?",
    options: ["A new product or MVP", "An internal platform or tool", "An AI-powered feature or system", "Automation between existing systems", "A rebuild of something existing"],
  },
  {
    key: "problem",
    label: "What is the primary problem it solves?",
    options: ["Too much manual, repetitive work", "Systems that don't talk to each other", "A product idea that needs a first version", "Software that no longer scales", "Customers or staff can't do something today"],
  },
  {
    key: "existingSystem",
    label: "Do you have an existing system?",
    options: ["No — starting fresh", "Yes — spreadsheets and manual processes", "Yes — software we built or bought", "Yes — a legacy system we're afraid to touch"],
  },
  {
    key: "outcome",
    label: "Which outcome matters most?",
    options: ["Launch something new", "Save the team significant time", "Reduce errors and operational risk", "Grow revenue or reach new customers", "Make the system maintainable again"],
  },
] as const;

export function buildBriefSummary(answers: BriefAnswers): string {
  const lines = [
    "PROJECT BRIEF (draft — prepared with the Brief Builder)",
    "",
    `Building: ${answers.building}`,
    `Primary problem: ${answers.problem}`,
    `Current situation: ${answers.existingSystem}`,
    `Outcome that matters most: ${answers.outcome}`,
  ];
  return lines.join("\n");
}
