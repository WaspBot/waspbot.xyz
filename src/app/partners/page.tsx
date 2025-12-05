"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Assuming Avatar component exists
import Link from "next/link";

export default function PartnersPage() {
  const partnerLogos = [
    { name: "Stripe", logo: "/logos/stripe.svg" },
    { name: "Shopify", logo: "/logos/shopify.svg" },
    { name: "Slack", logo: "/logos/slack.svg" },
    { name: "Google Analytics", logo: "/logos/google-analytics.svg" },
    { name: "Mailchimp", logo: "/logos/mailchimp.svg" },
  ];

  const testimonials = [];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Strategic Partners</h1>

      {/* Partner Badges Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Partnerships that Drive Success</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partnerLogos.map((partner) => (
            <Image
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={120}
              className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              unoptimized
              loading="lazy"
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-6">What Our Partners Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardContent className="pt-6">
                <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-12 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">Become a Waspbot Partner</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Join our growing network of strategic partners and achieve mutual success.
        </p>
        <Link href="/contact">
          <Button size="lg" className="px-8 py-3">
            Contact Us
          </Button>
        </Link>
      </section>
    </div>
  );
}
