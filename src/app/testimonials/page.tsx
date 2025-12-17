import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  avatar: string;
  companyLogo: string;
  companyAlt: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Waspbot has transformed the way we manage our customer support. The automation and AI capabilities are simply unparalleled.",
    name: "Jane Doe",
    title: "CEO, Tech Solutions",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Jane",
    companyLogo: "/public/logos/shopify.svg",
    companyAlt: "Shopify Logo",
  },
  {
    id: 2,
    quote:
      "Our team's productivity has soared since implementing Waspbot. It's intuitive, powerful, and integrates seamlessly with our existing tools.",
    name: "John Smith",
    title: "Head of Operations, Global Corp",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=John",
    companyLogo: "/public/logos/slack.svg",
    companyAlt: "Slack Logo",
  },
  {
    id: 3,
    quote:
      "The insights we gain from Waspbot are invaluable. It helps us understand our customers better and make data-driven decisions.",
    name: "Emily White",
    title: "Marketing Director, Creative Agency",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Emily",
    companyLogo: "/public/logos/stripe.svg",
    companyAlt: "Stripe Logo",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-center mb-10">What Our Customers Say</h1>
      <div className="grid gap-8">
        {testimonials.map((testimonial, index) => (
          <Card
            key={testimonial.id}
            className={`flex flex-col md:flex-row items-center p-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <CardContent className="flex-1 text-center md:text-left p-0">
              <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
              <div
                className={`flex items-center justify-center md:justify-start gap-4 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </CardContent>
            <div className="mx-8 hidden md:block">
              <Separator orientation="vertical" />
            </div>
            <Separator className="my-8 md:hidden" />
            <div className="flex-1 flex justify-center items-center">
              <Image
                src={testimonial.companyLogo}
                alt={testimonial.companyAlt}
                width={120}
                height={60}
                objectFit="contain"
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
