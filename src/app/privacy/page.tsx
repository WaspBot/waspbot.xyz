import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { LEGAL_DOCUMENTS } from "@/config/legal";

export const metadata = {
  title: "Privacy Policy | Waspbot",
  description: "Learn about how Waspbot collects, uses, and protects your data, and our cookie policy.",
};

export default function PrivacyPage() {
  const lastUpdatedDate = LEGAL_DOCUMENTS.privacyPolicy.lastUpdated;

  return (
    <div className="container mx-auto py-12 px-4 max-w-3xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <Badge variant="outline" className="text-sm px-3 py-1">
          Last updated: {lastUpdatedDate}
        </Badge>
      </div>

      <p className="text-muted-foreground mb-8">
        At Waspbot, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website waspbot.xyz, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Site.
      </p>

      <nav className="mb-10 p-4 bg-accent/20 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Table of Contents</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <Link href="#data-usage" className="text-primary hover:underline">
              1. Data Usage
            </Link>
          </li>
          <li>
            <Link href="#cookies" className="text-primary hover:underline">
              2. Cookies
            </Link>
          </li>
          <li>
            <Link href="#contact-channels" className="text-primary hover:underline">
              3. Contact Channels
            </Link>
          </li>
        </ul>
      </nav>

      <section id="data-usage" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. Data Usage</h2>
        <p className="text-lg leading-relaxed mb-4">
          We may collect personal information that you voluntarily provide to us when you register on the Site, express an interest in obtaining information about us or our products and services, when you participate in activities on the Site, or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the Site, the choices you make and the products and features you use.
        </p>
        <p className="text-lg leading-relaxed">
          The personal information we collect can include the following:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-2 pl-4 mb-4">
          <li>Email addresses</li>
          <li>Names</li>
          <li>Usernames</li>
          <li>Passwords</li>
        </ul>
        <p className="text-lg leading-relaxed">
          We use personal information collected via our Site for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-2 pl-4">
          <li>To facilitate account creation and logon process.</li>
          <li>To send you marketing and promotional communications.</li>
          <li>To send administrative information to you.</li>
          <li>To fulfill and manage your orders.</li>
          <li>To post testimonials with your consent.</li>
          <li>To protect our Services.</li>
          <li>To enable user-to-user communications.</li>
          <li>To enforce our terms, conditions and policies.</li>
          <li>To respond to legal requests and prevent harm.</li>
          <li>To manage user accounts.</li>
        </ul>
      </section>

      <Separator className="my-8" />

      <section id="cookies" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. Cookies</h2>
        <p className="text-lg leading-relaxed mb-4">
          We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.
        </p>
        <p className="text-lg leading-relaxed">
          For more information on how we use cookies, please refer to our Cookie Policy [Link to Cookie Policy - if applicable].
        </p>
      </section>

      <Separator className="my-8" />

      <section id="contact-channels" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. Contact Channels</h2>
        <p className="text-lg leading-relaxed">
          If you have questions or comments about this Privacy Policy, please contact us at:
          <a href="mailto:support@waspbot.xyz" className="text-primary hover:underline ml-1">
            support@waspbot.xyz
          </a>
          .
        </p>
      </section>
    </div>
  );
}