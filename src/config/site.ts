/**
 * Central site configuration — THE place to change brand facts.
 *
 * The brand name is a working placeholder from the build specification.
 * Replace `name` / `legalName` / `domain` here (and NEXT_PUBLIC_SITE_URL in
 * your environment) and the whole site — header, footer, metadata, sitemap,
 * emails — follows. Nothing brand-specific is hardcoded in components.
 */
export const site = {
  /** Working brand name shown in the wordmark, titles and footer. */
  name: "Strings",
  legalName: "Strings",
  domain: "fieldwork.example",
  tagline: "Software engineering & digital systems studio",
  positioning: "We design, engineer, and integrate software that moves businesses forward.",
  description:
    "A premium software engineering studio partnering with startups, growing businesses, and established teams to design, build, integrate, and scale digital products.",

  /** Public base URL (no trailing slash). Falls back to the domain above. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  /**
   * Signal / announcement bar (homepage header). Set `enabled: false` to hide
   * it, or `text: ""`. Only publish statements the company can verify — no
   * invented availability, awards, clients, or company size.
   */
  signal: {
    enabled: false,
    text: "Independent engineering studio · Taking on selected projects",
  },
} as const;
