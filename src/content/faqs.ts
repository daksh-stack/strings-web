import type { Faq } from "@/types/content";

/** Homepage FAQ. Answers are concise and link-worthy topics get full pages. */
export const faqs: Faq[] = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "Startups launching a first product, growing businesses replacing manual operations with software, and established teams whose existing systems need engineering they don't have in-house. The common thread is a real problem and the intent to solve it properly — sector matters less than that.",
  },
  {
    question: "Can you build a product from scratch?",
    answer:
      "Yes — discovery, architecture, design, engineering, deployment, and handover. We start from the problem and the users, define the smallest version that is genuinely useful, and build foundations (data model, authentication, deployment) that won't need redoing when the product grows.",
  },
  {
    question: "Can you work with an existing codebase?",
    answer:
      "Yes, and most engagements involve one. We begin with a structured review of the code, infrastructure, and delivery process, agree what is sound and what is not, and work incrementally — improving the system while it keeps running, rather than proposing a rewrite by default.",
  },
  {
    question: "Do you provide AI and automation consulting?",
    answer:
      "Yes, as part of our AI engineering and modernization work. Consulting starts from your workflow and the measurable outcome you need; sometimes the answer is a retrieval system or an automation, and sometimes it is a simpler piece of software. We'll tell you which, and why.",
  },
  {
    question: "How do you estimate project costs?",
    answer:
      "From scope, not guesswork. After discovery we define deliverables, milestones, and acceptance criteria, and estimate against them. Fixed-scope work is priced against that definition; partnership work is priced as a team capacity over time. Where uncertainty is genuinely high, we say so and structure the work so the uncertain parts are resolved first, cheaply.",
  },
  {
    question: "How do you handle confidentiality and intellectual property?",
    answer:
      "We work under NDA when you need one, and the contract assigns the intellectual property in what we build to you. Repositories, cloud accounts, and domains are created under your ownership from the start — your product is never held hostage by access we control.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Launch is a milestone, not an ending. Handover includes documentation, a codebase walkthrough, and the runbooks your team needs. Many clients continue with a support or partnership engagement for iteration and reliability work; either way, you receive everything needed to run the product without us.",
  },
  {
    question: "How do projects begin?",
    answer:
      "With a conversation about the problem — use the contact page or the brief builder to structure it. From there we propose the smallest sensible next step, usually a time-boxed discovery, with a written scope and price before any build begins. No engagement starts with a large commitment made in the dark.",
  },
];
