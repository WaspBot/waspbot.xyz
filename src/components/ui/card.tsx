import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva(
  "bg-card text-card-foreground flex flex-col gap-6 shadow-sm border",
  {
    variants: {
      size: {
        sm: "rounded-lg py-4 px-4",
        md: "rounded-xl py-6 px-6",
        lg: "rounded-2xl py-8 px-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type CardElement = "div" | "section" | "article";

// Helper type to map CardElement to its corresponding HTMLElement
type CardHTMLElement<T extends CardElement> = T extends "div"
  ? HTMLDivElement
  : T extends "section"
  ? HTMLElement // section is a generic HTMLElement
  : T extends "article"
  ? HTMLElement // article is a generic HTMLElement
  : never;

type CardOwnProps = VariantProps<typeof cardVariants>;

type CardComponentProps<T extends CardElement> = CardOwnProps & Omit<React.ComponentPropsWithRef<T>, keyof CardOwnProps | "as" | "ref"> & {
  as?: T;
};

const Card = React.forwardRef(function Card<T extends CardElement = "div">(
  { as, className, size, ...props }: CardComponentProps<T>,
  ref: React.Ref<CardHTMLElement<T>>
) {
  const Comp = (as ?? "div") as T;
  return (
    <Comp
      ref={ref as React.Ref<CardHTMLElement<T>>}
      data-slot="card"
      className={cn(cardVariants({ size }), className)}
      {...props}
    />
  );
}) as (<T extends CardElement = "div">(
  props: CardComponentProps<T> & { ref?: React.Ref<CardHTMLElement<T>> }
) => React.ReactElement | null);

Object.defineProperty(Card, "displayName", {
  value: "Card",
  writable: false,
});

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-header"
    className={cn(
      "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
      className
    )}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-title"
    className={cn("leading-none font-semibold", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-description"
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardAction = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-action"
    className={cn(
      "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
      className
    )}
    {...props}
  />
));
CardAction.displayName = "CardAction";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-content"
    className={cn("px-6", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-footer"
    className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};