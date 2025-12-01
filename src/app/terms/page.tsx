import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function TermsPage() {
  const lastUpdatedDate = "December 1, 2025"; // Hardcoded for now

  return (
    <div className="container mx-auto py-12 px-4 max-w-3xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <Badge variant="outline" className="text-sm px-3 py-1">
          Last updated: {lastUpdatedDate}
        </Badge>
      </div>

      <p className="text-muted-foreground mb-8">
        Welcome to Waspbot! These Terms of Service ("Terms") govern your use of
        the Waspbot website and services. By accessing or using our website and
        services, you agree to be bound by these Terms.
      </p>

      <nav className="mb-10 p-4 bg-accent/20 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Table of Contents</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <Link href="#introduction" className="text-primary hover:underline">
              1. Introduction
            </Link>
          </li>
          <li>
            <Link href="#accounts" className="text-primary hover:underline">
              2. User Accounts
            </Link>
          </li>
          <li>
            <Link href="#use-of-service" className="text-primary hover:underline">
              3. Use of Our Service
            </Link>
          </li>
          <li>
            <Link href="#intellectual-property" className="text-primary hover:underline">
              4. Intellectual Property
            </Link>
          </li>
          <li>
            <Link href="#disclaimer" className="text-primary hover:underline">
              5. Disclaimer of Warranties
            </Link>
          </li>
          <li>
            <Link href="#limitation-of-liability" className="text-primary hover:underline">
              6. Limitation of Liability
            </Link>
          </li>
          <li>
            <Link href="#changes-to-terms" className="text-primary hover:underline">
              7. Changes to These Terms
            </Link>
          </li>
          <li>
            <Link href="#contact-us" className="text-primary hover:underline">
              8. Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      <section id="introduction" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="text-lg leading-relaxed">
          These Terms constitute a legally binding agreement between you and Waspbot.
          Please read them carefully before using our services. If you do not agree
          with any part of these Terms, you must not use our website or services.
          We reserve the right to update or modify these Terms at any time without
          prior notice. Your continued use of the service after any such changes
          constitutes your acceptance of the new Terms.
        </p>
      </section>

      <Separator className="my-8" />

      <section id="accounts" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. User Accounts</h2>
        <h3 className="text-xl font-medium mb-2">2.1 Account Creation</h3>
        <p className="text-lg leading-relaxed mb-4">
          To access certain features of our service, you may be required to create
          an account. You agree to provide accurate, current, and complete information
          during the registration process and to update such information to keep it
          accurate, current, and complete.
        </p>
        <h3 className="text-xl font-medium mb-2">2.2 Account Security</h3>
        <p className="text-lg leading-relaxed">
          You are responsible for safeguarding the password that you use to access
          the Service and for any activities or actions under your password. Waspbot
          cannot and will not be liable for any loss or damage arising from your
          failure to maintain the security of your account and password.
        </p>
      </section>

      <Separator className="my-8" />

      <section id="use-of-service" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. Use of Our Service</h2>
        <h3 className="text-xl font-medium mb-2">3.1 Permitted Use</h3>
        <p className="text-lg leading-relaxed mb-4">
          You agree to use the Service only for lawful purposes and in accordance
          with these Terms. You are prohibited from using the Service to engage
          in any illegal or fraudulent activities.
        </p>
        <h3 className="text-xl font-medium mb-2">3.2 Prohibited Actions</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-2 pl-4">
          <li>Engaging in any conduct that restricts or inhibits anyone's use or enjoyment of the Service.</li>
          <li>Attempting to interfere with the proper working of the Service.</li>
          <li>Introducing any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
          <li>Attempting to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Service, the server on which the Service is stored, or any server, computer, or database connected to the Service.</li>
        </ul>
      </section>

      <Separator className="my-8" />

      <section id="intellectual-property" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
        <p className="text-lg leading-relaxed">
          The Service and its original content, features, and functionality are
          and will remain the exclusive property of Waspbot and its licensors.
          Our trademarks and trade dress may not be used in connection with any
          product or service without the prior written consent of Waspbot.
        </p>
      </section>

      <Separator className="my-8" />

      <section id="disclaimer" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">5. Disclaimer of Warranties</h2>
        <p className="text-lg leading-relaxed">
          Your use of the Service is at your sole risk. The Service is provided
          on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without
          warranties of any kind, whether express or implied, including, but not
          limited to, implied warranties of merchantability, fitness for a particular
          purpose, non-infringement or course of performance.
        </p>
      </section>

      <Separator className="my-8" />

      <section id="limitation-of-liability" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
        <p className="text-lg leading-relaxed">
          In no event shall Waspbot, nor its directors, employees, partners,
          agents, suppliers, or affiliates, be liable for any indirect, incidental,
          special, consequential or punitive damages, including without limitation,
          loss of profits, data, use, goodwill, or other intangible losses,
          resulting from (i) your access to or use of or inability to access or
          use the Service; (ii) any conduct or content of any third party on the
          Service; (iii) any content obtained from the Service; and (iv)
          unauthorized access, use or alteration of your transmissions or content,
          whether based on warranty, contract, tort (including negligence) or any
          other legal theory, whether or not we have been informed of the
          possibility of such damage, and even if a remedy set forth herein is
          found to have failed of its essential purpose.
        </p>
      </section>

      <Separator className="my-8" />

      <section id="changes-to-terms" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">7. Changes to These Terms</h2>
        <p className="text-lg leading-relaxed">
          We reserve the right, at our sole discretion, to modify or replace these
          Terms at any time. If a revision is material, we will try to provide
          at least 30 days' notice prior to any new terms taking effect. What
          constitutes a material change will be determined at our sole discretion.
        </p>
      </section>

      <Separator className="my-8" />

      <section id="contact-us" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
        <p className="text-lg leading-relaxed">
          If you have any questions about these Terms, please contact us at
          <Link href="mailto:support@waspbot.xyz" className="text-primary hover:underline ml-1">
            support@waspbot.xyz
          </Link>
          .
        </p>
      </section>
    </div>
  );
}