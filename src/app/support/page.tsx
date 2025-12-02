import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FaqAccordion } from "@/components/ui/faq-accordion";

const faqItems = [
  {
    question: "What are your support hours?",
    answer: "Our support team is available Monday to Friday, 9 AM - 5 PM EST.",
  },
  {
    question: "How long does it take to get a response?",
    answer: "We aim to respond to all email inquiries within 24 hours during business days. Chat support is typically real-time.",
  },
  {
    question: "Do you offer weekend support?",
    answer: "Currently, weekend support is not available, but critical issues are monitored.",
  },
];

export default function SupportPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Support</CardTitle>
          <CardDescription className="text-center">
            We're here to help you every step of the way.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <section className="text-center space-y-4">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our dedicated support team is available to assist you through various channels.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="p-4 border rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-2">Email Support</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Reach out to us via email for detailed inquiries and non-urgent issues. We aim to respond within 24 hours.
                </p>
                <Link href="mailto:support@waspbot.xyz" className="text-blue-600 hover:underline mt-2 inline-block">
                  Email Us
                </Link>
              </div>
              <div className="p-4 border rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-2">Live Chat</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  For immediate assistance, connect with our team through live chat during business hours.
                </p>
                <Link href="#" className="text-blue-600 hover:underline mt-2 inline-block">
                  Start Chat
                </Link>
              </div>
              <div className="p-4 border rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-2">Phone Support</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Speak directly with a support agent for urgent matters. Available during business hours.
                </p>
                <Link href="tel:+1-555-WASPBOT" className="text-blue-600 hover:underline mt-2 inline-block">
                  Call Us
                </Link>
              </div>
            </div>
          </section>

          <section className="text-center space-y-4">
            <h2 className="text-2xl font-semibold">Documentation & Resources</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Find answers to common questions and in-depth guides in our comprehensive documentation.
            </p>
            <Link href="/docs" className="text-blue-600 hover:underline text-lg">
              Explore Our Documentation
            </Link>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-center">Frequently Asked Questions</h2>
            <FaqAccordion items={faqItems} />
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
