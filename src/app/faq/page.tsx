import { FaqAccordion } from "@/components/ui/faq-accordion";

const faqItems = [
  {
    question: "What is Waspbot?",
    answer: "Waspbot is an AI-powered assistant designed to streamline your workflow and automate repetitive tasks.",
  },
  {
    question: "How can Waspbot help my business?",
    answer: "Waspbot can help your business by automating customer support, generating reports, managing schedules, and much more, freeing up your team to focus on strategic initiatives.",
  },
  {
    question: "Is Waspbot easy to integrate with existing systems?",
    answer: "Yes, Waspbot is designed for seamless integration with a wide range of existing business tools and platforms through its flexible API and pre-built connectors.",
  },
  {
    question: "What kind of support does Waspbot offer?",
    answer: "Waspbot offers 24/7 customer support, including online documentation, tutorials, and direct access to our support team for any technical assistance or queries.",
  },
];

export default function FaqPage() {
  return (
    <section className="container py-12">
      <h1 className="mb-8 text-4xl font-bold">Frequently Asked Questions</h1>
      <FaqAccordion items={faqItems} />
    </section>
  );
}