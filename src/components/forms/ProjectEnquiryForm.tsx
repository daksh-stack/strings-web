"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangle, CheckCircle2, Loader2, Send } from "lucide-react";
import { enquirySchema, type EnquiryInput } from "@/lib/validation/enquiry";
import { contact } from "@/config/contact";
import { buttonClassName } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "development"; message: string }
  | { kind: "error"; message: string };

const inputClass = (invalid: boolean) =>
  cn(
    "w-full rounded-[4px] border bg-surface px-3.5 py-2.5 text-[0.9375rem] text-ink placeholder:text-faint",
    invalid ? "border-red-400" : "border-line hover:border-muted focus:border-accent",
  );

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm text-red-300">
      {message}
    </p>
  );
}

function Label({ htmlFor, children, optional = false }: { htmlFor: string; children: React.ReactNode; optional?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-ink">
      {children}
      {optional && <span className="ml-2 font-normal text-faint">optional</span>}
    </label>
  );
}

/**
 * Project enquiry form. React Hook Form + the shared Zod schema (the API
 * route re-validates server-side). Honest states only: real success when the
 * provider confirms delivery; an explicit development-mode explanation when
 * delivery isn't configured; a clear error otherwise. Never a fake success.
 */
export default function ProjectEnquiryForm({ problemPrefill }: { problemPrefill?: string }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { website: "" },
  });

  // Brief Builder hand-off: parent sets problemPrefill; apply it once per value.
  const [appliedPrefill, setAppliedPrefill] = useState<string | undefined>(undefined);
  if (problemPrefill && problemPrefill !== appliedPrefill) {
    setAppliedPrefill(problemPrefill);
    setValue("problem", problemPrefill, { shouldValidate: false });
  }

  const onSubmit = async (values: EnquiryInput) => {
    setStatus({ kind: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; mode?: string; error?: string };
      if (res.ok && data.ok) {
        setStatus({ kind: "success" });
      } else if (data.mode === "development") {
        setStatus({
          kind: "development",
          message:
            data.error ??
            "Enquiry delivery is not configured on this deployment yet, so your message was not sent.",
        });
      } else {
        setStatus({ kind: "error", message: data.error ?? "Something went wrong sending your enquiry." });
      }
    } catch {
      setStatus({ kind: "error", message: "Network error — your enquiry was not sent. Please try again." });
    }
  };

  if (status.kind === "success") {
    return (
      <div className="border border-accent/50 bg-surface p-7" role="status">
        <CheckCircle2 aria-hidden="true" className="size-7 text-accent" />
        <h2 className="mt-4 text-2xl font-semibold tracking-tight">Enquiry sent — thank you.</h2>
        <p className="mt-3 max-w-lg leading-relaxed text-muted">
          Your message has been delivered. A person reads every enquiry; expect a reply at the email you gave us,
          usually within two working days, with honest first thoughts and a proposed next step.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-10" aria-describedby="form-note">
      {/* About you */}
      <fieldset>
        <legend className="font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-faint uppercase">About you</legend>
        <div className="mt-5 grid gap-6 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">Your name</Label>
            <input id="name" autoComplete="name" className={inputClass(Boolean(errors.name))} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} {...register("name")} />
            <FieldError id="name-error" message={errors.name?.message} />
          </div>
          <div>
            <Label htmlFor="email">Work email</Label>
            <input id="email" type="email" autoComplete="email" className={inputClass(Boolean(errors.email))} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} />
            <FieldError id="email-error" message={errors.email?.message} />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="company" optional>
              Company or organization
            </Label>
            <input id="company" autoComplete="organization" className={inputClass(Boolean(errors.company))} {...register("company")} />
          </div>
        </div>
      </fieldset>

      {/* The project */}
      <fieldset>
        <legend className="font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-faint uppercase">The project</legend>
        <div className="mt-5 grid gap-6">
          <div>
            <Label htmlFor="projectType">Project type</Label>
            <select id="projectType" defaultValue="" className={inputClass(Boolean(errors.projectType))} aria-invalid={Boolean(errors.projectType)} aria-describedby={errors.projectType ? "projectType-error" : undefined} {...register("projectType")}>
              <option value="" disabled>
                Choose the closest fit…
              </option>
              {contact.projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <FieldError id="projectType-error" message={errors.projectType?.message} />
          </div>
          <div>
            <Label htmlFor="problem">Describe the problem</Label>
            <textarea
              id="problem"
              rows={6}
              placeholder="What are you trying to accomplish, what is getting in the way, and where do you need help?"
              className={inputClass(Boolean(errors.problem))}
              aria-invalid={Boolean(errors.problem)}
              aria-describedby={errors.problem ? "problem-error" : undefined}
              {...register("problem")}
            />
            <FieldError id="problem-error" message={errors.problem?.message} />
          </div>
          <div>
            <Label htmlFor="scope" optional>
              Expected scope or deliverables
            </Label>
            <textarea id="scope" rows={3} placeholder="Anything already decided: features, phases, deadlines that are real." className={inputClass(false)} {...register("scope")} />
          </div>
        </div>
      </fieldset>

      {/* Practicalities */}
      <fieldset>
        <legend className="font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-faint uppercase">Practicalities</legend>
        <div className="mt-5 grid gap-6 sm:grid-cols-2">
          <div>
            <Label htmlFor="budget" optional>
              Approximate budget range
            </Label>
            <select id="budget" defaultValue="" className={inputClass(false)} {...register("budget")}>
              <option value="" disabled>
                Choose a range…
              </option>
              {contact.budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="timeline" optional>
              Desired timeline
            </Label>
            <select id="timeline" defaultValue="" className={inputClass(false)} {...register("timeline")}>
              <option value="" disabled>
                Choose a timeline…
              </option>
              {contact.timelines.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="links" optional>
              Reference links
            </Label>
            <input id="links" placeholder="Your current product, a brief, a competitor you admire…" className={inputClass(false)} {...register("links")} />
          </div>
        </div>
      </fieldset>

      {/* Honeypot — invisible to people, tempting to bots. Do not remove. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
        </label>
      </div>

      {status.kind === "development" && (
        <div className="flex gap-3 border border-ice/40 bg-surface p-5" role="alert">
          <AlertTriangle aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-ice" />
          <div>
            <p className="font-medium text-ink">Development mode — enquiry not sent.</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {status.message} In the meantime, email us directly at{" "}
              <a href={`mailto:${contact.email}`} className="text-accent hover:underline">
                {contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      )}
      {status.kind === "error" && (
        <div className="flex gap-3 border border-red-400/40 bg-surface p-5" role="alert">
          <AlertTriangle aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-red-300" />
          <div>
            <p className="font-medium text-ink">Your enquiry wasn&rsquo;t sent.</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {status.message} You can also reach us at{" "}
              <a href={`mailto:${contact.email}`} className="text-accent hover:underline">
                {contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      )}

      <div>
        <button type="submit" disabled={status.kind === "submitting"} className={buttonClassName("primary", "lg")}>
          {status.kind === "submitting" ? (
            <>
              <Loader2 aria-hidden="true" className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send enquiry
              <Send aria-hidden="true" className="size-4" />
            </>
          )}
        </button>
        <p id="form-note" className="mt-4 max-w-lg text-sm leading-relaxed text-faint">
          We reply personally, usually within two working days. Your details are used only to respond to this
          enquiry — see the{" "}
          <a href="/privacy" className="underline decoration-line underline-offset-4 hover:text-accent">
            privacy policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
