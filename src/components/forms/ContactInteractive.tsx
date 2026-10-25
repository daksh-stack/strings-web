"use client";

import { useState } from "react";
import ProjectBriefBuilder from "@/components/forms/ProjectBriefBuilder";
import ProjectEnquiryForm from "@/components/forms/ProjectEnquiryForm";

/** Brief Builder + enquiry form, sharing the brief-to-form hand-off. */
export default function ContactInteractive() {
  const [prefill, setPrefill] = useState<string | undefined>(undefined);

  return (
    <div className="space-y-12">
      <ProjectBriefBuilder
        onUseInForm={(summary) => {
          setPrefill(summary);
          document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      />
      <div id="enquiry-form" className="scroll-mt-32">
        <h2 className="text-2xl font-semibold tracking-tight">Project enquiry</h2>
        <p className="mt-2 max-w-xl text-[0.9375rem] leading-relaxed text-muted">
          Five minutes here saves a week of email. Everything except the essentials is optional.
        </p>
        <div className="mt-8">
          <ProjectEnquiryForm problemPrefill={prefill} />
        </div>
      </div>
    </div>
  );
}
