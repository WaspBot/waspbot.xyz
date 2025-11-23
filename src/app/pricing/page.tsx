import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface PricingTier {
  name: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonVariant: "default" | "outline";
}

interface FeatureComparison {
  feature: string;
  basic: boolean;
  pro: boolean;
  enterprise: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    price: "$10/month",
    features: ["5 Projects", "Basic Analytics", "Community Support"],
    buttonText: "Get Started",
    buttonVariant: "default",
  },
  {
    name: "Pro",
    price: "$30/month",
    features: ["25 Projects", "Advanced Analytics", "Priority Support", "Custom Integrations"],
    buttonText: "Upgrade Now",
    buttonVariant: "default",
  },
  {
    name: "Enterprise",
    price: "$100/month",
    features: ["Unlimited Projects", "Real-time Analytics", "24/7 Dedicated Support", "SLA", "On-premise Deployment"],
    buttonText: "Contact Sales",
    buttonVariant: "default",
  },
];

const featureComparison: FeatureComparison[] = [
  { feature: "Projects", basic: true, pro: true, enterprise: true },
  { feature: "Analytics", basic: true, pro: true, enterprise: true },
  { feature: "Support", basic: true, pro: true, enterprise: true },
  { feature: "Custom Integrations", basic: false, pro: true, enterprise: true },
  { feature: "SLA", basic: false, pro: false, enterprise: true },
  { feature: "On-premise Deployment", basic: false, pro: false, enterprise: true },
];

export default function PricingPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Pricing Plans</h1>
      <p className="text-xl text-center text-muted-foreground mb-12">
        Choose the plan that's right for your business.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {pricingTiers.map((tier, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
              <CardDescription className="text-4xl font-extrabold mt-2">{tier.price}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button variant={tier.buttonVariant} className="w-full">
                {tier.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center mb-8">Feature Comparison</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-4 px-6 bg-muted font-bold uppercase text-sm text-muted-foreground">Feature</th>
              <th className="py-4 px-6 bg-muted font-bold uppercase text-sm text-muted-foreground text-center">Basic</th>
              <th className="py-4 px-6 bg-muted font-bold uppercase text-sm text-muted-foreground text-center">Pro</th>
              <th className="py-4 px-6 bg-muted font-bold uppercase text-sm text-muted-foreground text-center">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {featureComparison.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-4 px-6">{item.feature}</td>
                <td className="py-4 px-6 text-center">
                  {item.basic ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-500 mx-auto"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-500 mx-auto"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </td>
                <td className="py-4 px-6 text-center">
                  {item.pro ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-500 mx-auto"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-500 mx-auto"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </td>
                <td className="py-4 px-6 text-center">
                  {item.enterprise ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-500 mx-auto"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-500 mx-auto"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
