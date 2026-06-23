import type { FaqItem } from "@/lib/seo/faq";

export const privacyFaqItems: FaqItem[] = [
  {
    question: "Do you store my resume after analysis?",
    answer:
      "Resumes are processed to generate your score and feedback for the request. We do not sell resume data or use it to train unrelated models. Avoid uploading information you would not include in a normal job application.",
  },
  {
    question: "What cookies does ResumeIQ use?",
    answer:
      "We use essential cookies for site function and may use analytics cookies to understand usage. Advertising partners (when enabled) may set their own cookies per their policies.",
  },
  {
    question: "Is ResumeIQ GDPR compliant?",
    answer:
      "We process data to provide the service you request. Users in the EU, UK, and similar jurisdictions may contact us for access or deletion requests where applicable.",
  },
  {
    question: "Who can I contact about privacy?",
    answer:
      "Use the contact page for privacy questions. We read every message and update this policy when practices change.",
  },
];

export const termsFaqItems: FaqItem[] = [
  {
    question: "Is the ATS score a guarantee of interviews?",
    answer:
      "No. Scores estimate automated screening signals only. Interviews depend on fit, timing, and human judgment. Use ResumeIQ for feedback—not as employment advice.",
  },
  {
    question: "Can I use ResumeIQ for commercial resume writing?",
    answer:
      "The service is intended for personal job search use. Agencies and coaches should review these terms before bulk client use.",
  },
  {
    question: "Are AI rewrite suggestions always accurate?",
    answer:
      "AI suggestions are drafts. You are responsible for verifying facts, metrics, and tone before submitting any application.",
  },
  {
    question: "How do I report a problem with the service?",
    answer:
      "Contact us through the contact page with details. We fix bugs and clarify documentation when something is unclear.",
  },
];
