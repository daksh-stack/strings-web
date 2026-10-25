/**
 * Contact configuration. Public details are safe to render; delivery
 * credentials are NOT here — they live only in environment variables
 * (see .env.example and src/lib/email/sendEnquiry.ts).
 */
export const contact = {
  /** Public contact email shown in the footer and on the Contact page. */
  email: "daksh.strings@gmail.com",

  /** Professional profiles shown in the footer. Leave a list empty to hide it. */
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/daksh-hardiya" },
    { label: "GitHub", href: "https://github.com/daksh-stack" },
  ] as { label: string; href: string }[],

  /** Project types offered in the enquiry form. */
  projectTypes: [
    "New product / MVP",
    "Custom software or platform",
    "AI engineering",
    "Automation & integrations",
    "Existing product — rebuild or improve",
    "Technical discovery / architecture",
    "Something else",
  ],

  /** Budget ranges offered in the enquiry form (no fabricated pricing). */
  budgetRanges: [
    "Under $10k",
    "$10k – $25k",
    "$25k – $50k",
    "$50k – $100k",
    "$100k+",
    "Not sure yet",
  ],

  /** Timeline options offered in the enquiry form. */
  timelines: ["As soon as possible", "Within 1–2 months", "Within 3–6 months", "Flexible / exploring"],
} as const;
