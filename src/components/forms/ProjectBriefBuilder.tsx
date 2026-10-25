"use client";

import { useState } from "react";
import { Check, ClipboardCopy, PenLine } from "lucide-react";
import { BRIEF_QUESTIONS, buildBriefSummary, type BriefAnswers } from "@/components/forms/brief";
import { cn } from "@/lib/utils";

/**
 * Project Brief Builder (feature B): four questions, one structured summary.
 * The summary can be copied, or inserted into the enquiry form's problem
 * field via `onUseInForm`. Entirely client-side and deterministic.
 */
export default function ProjectBriefBuilder({ onUseInForm }: { onUseInForm?: (summary: string) => void }) {
  const [answers, setAnswers] = useState<Partial<BriefAnswers>>({});
  const [copied, setCopied] = useState(false);

  const complete = BRIEF_QUESTIONS.every((q) => answers[q.key as keyof BriefAnswers]);
  const summary = complete ? buildBriefSummary(answers as BriefAnswers) : "";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard unavailable (permissions) — the summary stays selectable on screen.
    }
  };

  return (
    <div className="border border-line bg-surface/60 p-6 sm:p-7">
      <h2 className="text-xl font-semibold tracking-tight">Not sure how to describe it? Build a brief.</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Four quick questions turn your situation into a structured summary — copy it, or drop it straight into the
        enquiry form below. Nothing leaves your browser until you submit the form.
      </p>

      <div className="mt-6 space-y-6">
        {BRIEF_QUESTIONS.map((question) => (
          <fieldset key={question.key}>
            <legend className="text-sm font-medium text-ink">{question.label}</legend>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {question.options.map((option) => {
                const selected = answers[question.key as keyof BriefAnswers] === option;
                return (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={selected}
                    onClick={() =>
                      setAnswers((prev) => ({ ...prev, [question.key]: option }))
                    }
                    className={cn(
                      "rounded-[4px] border px-3 py-2 text-left text-[0.8125rem] leading-snug transition-colors",
                      selected
                        ? "border-accent bg-accent font-medium text-graphite"
                        : "border-line text-muted hover:border-muted hover:text-ink",
                    )}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      {complete && (
        <div className="mt-7 border-t border-line pt-6" aria-live="polite">
          <h3 className="font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-faint uppercase">Your brief</h3>
          <pre className="mt-3 overflow-x-auto border border-line bg-graphite p-4 font-mono text-[0.8125rem] leading-relaxed whitespace-pre-wrap text-ink">
            {summary}
          </pre>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={copy}
              className="inline-flex h-10 items-center gap-2 rounded-[4px] border border-line px-4 text-sm text-ink transition-colors hover:border-muted"
            >
              {copied ? <Check aria-hidden="true" className="size-4 text-accent" /> : <ClipboardCopy aria-hidden="true" className="size-4" />}
              {copied ? "Copied" : "Copy brief"}
            </button>
            {onUseInForm && (
              <button
                type="button"
                onClick={() => onUseInForm(summary)}
                className="inline-flex h-10 items-center gap-2 rounded-[4px] bg-accent px-4 text-sm font-medium text-graphite transition-colors hover:bg-ink"
              >
                <PenLine aria-hidden="true" className="size-4" />
                Use it in the form
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
