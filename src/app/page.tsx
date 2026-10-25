import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Capabilities from "@/components/sections/Capabilities";
import SystemsFlow from "@/components/sections/SystemsFlow";
import SelectedWork from "@/components/sections/SelectedWork";
import UseCases from "@/components/sections/UseCases";
import ProcessOverview from "@/components/sections/ProcessOverview";
import Principles from "@/components/sections/Principles";
import EngagementModels from "@/components/sections/EngagementModels";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `${site.name} — Complex problems. Thoughtfully engineered.`,
  description:
    "We design, engineer, and integrate software that moves businesses forward — custom platforms, AI-native workflows, and the infrastructure behind your next product.",
  alternates: { canonical: site.url },
};

/**
 * Homepage, in the specification's order:
 * signal bar + nav (layout) → Hero → Capabilities → Systems flow →
 * Selected work → Use cases → Approach → Principles → Engagements →
 * FAQ → Final CTA → footer (layout).
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <SystemsFlow />
      <SelectedWork />
      <UseCases />
      <ProcessOverview />
      <Principles />
      <EngagementModels />
      <FaqSection />
      <FinalCTA />
    </>
  );
}
