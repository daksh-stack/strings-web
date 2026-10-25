import { describe, expect, it } from "vitest";
import { enquirySchema } from "@/lib/validation/enquiry";

const valid = {
  name: "Ada Example",
  email: "ada@example.com",
  company: "Example Ltd",
  projectType: "New product / MVP",
  problem: "We need to replace a spreadsheet process that runs our whole operation.",
  scope: "",
  links: "",
  website: "",
};

describe("enquirySchema", () => {
  it("accepts a complete, valid enquiry", () => {
    expect(enquirySchema.safeParse(valid).success).toBe(true);
  });

  it("rejects a missing name and a malformed email", () => {
    const result = enquirySchema.safeParse({ ...valid, name: "", email: "not-an-email" });
    expect(result.success).toBe(false);
  });

  it("rejects a problem description that is too short to act on", () => {
    const result = enquirySchema.safeParse({ ...valid, problem: "help pls" });
    expect(result.success).toBe(false);
  });

  it("rejects an unknown project type", () => {
    const result = enquirySchema.safeParse({ ...valid, projectType: "Whatever" });
    expect(result.success).toBe(false);
  });

  it("trims surrounding whitespace (normalization the API relies on)", () => {
    const result = enquirySchema.safeParse({ ...valid, name: "  Ada Example  " });
    expect(result.success).toBe(true);
    if (result.success) expect(result.data.name).toBe("Ada Example");
  });

  it("rejects a filled honeypot field", () => {
    const result = enquirySchema.safeParse({ ...valid, website: "http://spam.example" });
    expect(result.success).toBe(false);
  });
});
