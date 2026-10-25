import { z } from "zod";
import { contact } from "@/config/contact";

/**
 * Project enquiry schema — shared by the form (client-side) and the API route
 * (server-side). The server never trusts the client's validation; it re-runs
 * this exact schema on every submission.
 */
export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid work email."),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  projectType: z.enum([...contact.projectTypes] as [string, ...string[]], { message: "Please choose a project type." }),
  problem: z
    .string()
    .trim()
    .min(20, "Tell us a little more about the problem (at least 20 characters).")
    .max(4000),
  scope: z.string().trim().max(2000).optional().or(z.literal("")),
  budget: z.enum([...contact.budgetRanges] as [string, ...string[]]).optional(),
  timeline: z.enum([...contact.timelines] as [string, ...string[]]).optional(),
  links: z.string().trim().max(500).optional().or(z.literal("")),
  /**
   * Honeypot: a field real visitors never see or fill. Bots that complete
   * every field reveal themselves; the API route quietly rejects these.
   */
  website: z.string().max(0).optional().or(z.literal("")),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
