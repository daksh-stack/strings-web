/** Content schemas. New services, projects and articles are added by adding
 *  entries to the data modules in src/content — never by editing components. */

export interface Faq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  /** Short index, e.g. "01" */
  index: string;
  name: string;
  /** One-line summary used in listings and cards. */
  summary: string;
  /** Service-page headline. */
  headline: string;
  /** The problem this service solves. */
  problem: string;
  /** Common situations in which clients need it. */
  situations: string[];
  /** How the studio approaches this service. */
  approach: string[];
  /** Typical deliverables. */
  deliverables: string[];
  /** Relevant technologies, where useful. */
  technologies: string[];
  /** Slug of a related project in src/content/projects.ts, when one exists. */
  exampleProjectSlug?: string;
  faqs: Faq[];
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  /**
   * Honesty marker, required by the brand rules: real client work is "client";
   * anything else must say so — "internal", "open-source", "prototype" or
   * "concept". Rendered visibly on cards and case-study pages.
   */
  kind: "client" | "internal" | "open-source" | "prototype" | "concept";
  /** One-line summary used in listings. */
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  context: string;
  challenge: string;
  constraints: string[];
  approach: string[];
  implementation: string[];
  /** Verified outcomes, or qualitative findings when numbers are unavailable. */
  result: string;
  lessons: string;
  /** Slugs of related services. */
  serviceSlugs: string[];
}

export interface Insight {
  slug: string;
  title: string;
  date: string; // ISO date
  readingTime: string;
  excerpt: string;
  /** Body paragraphs. Plain text; rendered as paragraphs. */
  body: string[];
  tags: string[];
}

export interface ProcessStage {
  index: string;
  name: string;
  summary: string;
  details: string[];
  outputs: string[];
}
