"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Integration {
  id: string;
  name: string;
  logo: string;
  description: string;
  categories: string[];
}

const integrations: Integration[] = [
  {
    id: "1",
    logo: "/logos/stripe.svg",
    description: "Online payment processing for internet businesses.",
    categories: ["Payments", "Finance"],
  },
  {
    id: "2",
    logo: "/logos/shopify.svg",
    description: "E-commerce platform for online stores and retail point-of-sale systems.",
    categories: ["E-commerce", "Retail"],
  },
  {
    id: "3",
    logo: "/logos/slack.svg",
    description: "A channel-based messaging platform.",
    categories: ["Communication", "Productivity"],
  },
  {
    id: "4",
    name: "Google Analytics",
    logo: "/logos/google-analytics.svg",
    description: "Web analytics service that tracks and reports website traffic.",
    categories: ["Analytics", "Marketing"],
  },
  {
    id: "5",
    name: "Mailchimp",
    logo: "/logos/mailchimp.svg",
    description: "Email marketing and automation platform.",
    categories: ["Marketing", "Email"],
  },
];

const allCategories = Array.from(new Set(integrations.flatMap((integration) => integration.categories)));

export default function IntegrationsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const filteredIntegrations = integrations.filter((integration) => {
    if (selectedCategories.length === 0) {
      return true;
    }
    return integration.categories.some((category) => selectedCategories.includes(category));
  });

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Integrations</h1>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {allCategories.map((category) => (
          <Button
            key={category}
            variant={selectedCategories.includes(category) ? "default" : "outline"}
            onClick={() => toggleCategory(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
        {selectedCategories.length > 0 && (
          <Button variant="ghost" onClick={() => setSelectedCategories([])} className="rounded-full">
            Clear Filters
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIntegrations.map((integration) => (
          <Card key={integration.id} className="flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Image
                src={integration.logo}
                alt={integration.name}
                width={48}
                height={48}
                className="rounded-full"
                unoptimized
                loading="lazy"
              />
              <div className="flex flex-col">
                <CardTitle>{integration.name}</CardTitle>
                <CardDescription>
                  {integration.categories.map((category) => (
                    <Badge key={category} variant="secondary" className="mr-1">
                      {category}
                    </Badge>
                  ))}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">{integration.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
