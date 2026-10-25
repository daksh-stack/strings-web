import type { EnquiryInput } from "@/lib/validation/enquiry";

/**
 * Enquiry delivery — isolated behind this one module so the provider can
 * change without touching the form or the API route.
 *
 * Providers (configured by environment, see .env.example):
 *  - "webhook": POSTs the enquiry as JSON to ENQUIRY_WEBHOOK_URL. Works with
 *    Zapier/Make, a CRM endpoint, a Slack incoming webhook, or your own API.
 *  - unset: development mode. Nothing is delivered, and the caller must say
 *    so honestly — the UI never shows a fake success.
 *
 * Credentials are read from environment variables only, server-side only.
 */

export type DeliveryResult =
  | { delivered: true; provider: string }
  | { delivered: false; reason: "not-configured" | "provider-error"; provider: string };

function currentProvider(): string {
  return (process.env.ENQUIRY_PROVIDER ?? "").trim().toLowerCase();
}

export function isDeliveryConfigured(): boolean {
  const provider = currentProvider();
  if (provider === "webhook") return Boolean(process.env.ENQUIRY_WEBHOOK_URL);
  return false;
}

export async function sendEnquiry(enquiry: EnquiryInput): Promise<DeliveryResult> {
  const provider = currentProvider();

  if (provider === "webhook") {
    const url = process.env.ENQUIRY_WEBHOOK_URL;
    if (!url) return { delivered: false, reason: "not-configured", provider };
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.ENQUIRY_WEBHOOK_TOKEN
            ? { Authorization: `Bearer ${process.env.ENQUIRY_WEBHOOK_TOKEN}` }
            : {}),
        },
        body: JSON.stringify({
          source: "website-enquiry",
          receivedAt: new Date().toISOString(),
          inbox: process.env.CONTACT_INBOX_EMAIL ?? null,
          enquiry,
        }),
      });
      if (!res.ok) return { delivered: false, reason: "provider-error", provider };
      return { delivered: true, provider };
    } catch {
      return { delivered: false, reason: "provider-error", provider };
    }
  }

  return { delivered: false, reason: "not-configured", provider: provider || "none" };
}
