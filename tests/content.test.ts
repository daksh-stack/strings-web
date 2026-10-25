import { describe, expect, it } from "vitest";
import { services, getService } from "@/content/services";
import { projects, getProject } from "@/content/projects";
import { insights } from "@/content/insights";
import { faqs } from "@/content/faqs";

/**
 * Content integrity: these guard the "no dead links, no duplicated data"
 * requirements. If content references a slug that doesn't exist, the site
 * would contain a broken internal link — fail here instead.
 */
describe("content integrity", () => {
  it("service slugs are unique and complete", () => {
    const slugs = services.map((s) => s.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const s of services) {
      expect(s.faqs.length).toBeGreaterThan(0);
      expect(s.deliverables.length).toBeGreaterThan(0);
      expect(getService(s.slug)?.slug).toBe(s.slug);
    }
  });

  it("project references resolve", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const p of projects) {
      for (const slug of p.serviceSlugs) expect(getService(slug)).toBeDefined();
      expect(getProject(p.slug)?.slug).toBe(p.slug);
    }
    for (const s of services) {
      if (s.exampleProjectSlug) expect(getProject(s.exampleProjectSlug)).toBeDefined();
    }
  });

  it("insights and FAQs are present and well-formed", () => {
    expect(insights.length).toBeGreaterThan(0);
    expect(faqs.length).toBeGreaterThanOrEqual(6);
    for (const i of insights) {
      expect(i.body.length).toBeGreaterThanOrEqual(3);
      expect(() => new Date(i.date).toISOString()).not.toThrow();
    }
  });
});
