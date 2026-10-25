import { NextResponse } from "next/server";
import { enquirySchema } from "@/lib/validation/enquiry";
import { sendEnquiry } from "@/lib/email/sendEnquiry";

/**
 * POST /api/contact — project enquiry endpoint.
 *
 * - Parses and re-validates the body with the shared Zod schema (the client
 *   is never trusted), normalizing (trimming) via the schema itself.
 * - Honeypot: a filled `website` field means a bot; respond as if accepted
 *   and deliver nothing.
 * - Delivery is delegated to src/lib/email/sendEnquiry.ts. When no provider
 *   is configured, the response says so (status 503, mode "development") so
 *   the UI can be honest instead of showing a fake success.
 * - Enquiry contents are never logged.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Request body must be JSON." }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed.", fields: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const enquiry = parsed.data;

  // Honeypot tripped: pretend success, deliver nothing.
  if (enquiry.website) {
    return NextResponse.json({ ok: true, delivered: true });
  }

  const result = await sendEnquiry(enquiry);
  if (!result.delivered) {
    if (result.reason === "not-configured") {
      return NextResponse.json(
        {
          ok: false,
          mode: "development",
          error:
            "Enquiry delivery is not configured on this deployment yet, so your message was not sent. Set ENQUIRY_PROVIDER and its credentials (see .env.example), or email us directly.",
        },
        { status: 503 },
      );
    }
    return NextResponse.json(
      { ok: false, error: "Delivery failed at the provider. Please try again, or email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, delivered: true });
}
