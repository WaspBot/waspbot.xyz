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

// In src/components/ui/card.tsx around lines 27-36, the forwarded ref is currently
// hard-typed to HTMLDivElement even though Card is polymorphic via the as prop;
// change Card to a generic polymorphic component so the ref type follows the
// chosen element. Make Card generic: <T extends React.ElementType = "div">,
// declare CardProps<T> = { as?: T } & Omit<React.ComponentPropsWithoutRef<T>,
// "as"> & { size?: ... } (include existing variant props), and use
// React.forwardRef<React.ElementRef<T>, CardProps<T>>; inside the implementation
// default as to "div" typed as T and spread props, and export/update any CardProps
// usage accordingly so the ref type matches the actual rendered element.
type CardElement = React.ElementType;

type CardProps<T extends CardElement = "div"> =
  VariantProps<typeof cardVariants> &
  Omit<React.ComponentPropsWithoutRef<T>, "as"> &
  {
    as?: T;
  };

const Card = React.forwardRef(
  <T extends CardElement = "div">(
    { className, size, as, ...props }: CardProps<T>,
    ref: React.ForwardedRef<any> // Use 'any' here to bypass stubborn type inference issues
  ) => {
    const Comp = (as ?? "div") as T;
    return (
      <Comp
        ref={ref}
        data-slot="card"
        className={cn(cardVariants({ size }), className)}
        {...props}
      />
    );
  }
) as (<T extends CardElement = "div">(
  props: CardProps<T> & { ref?: React.Ref<React.ElementRef<T>> }
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