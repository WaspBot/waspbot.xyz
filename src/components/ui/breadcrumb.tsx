import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

interface BreadcrumbProps extends React.ComponentProps<"nav"> {
  items?: { name: string; href: string }[];
}

function Breadcrumb({ items, ...props }: BreadcrumbProps) {
  const jsonLd = items && items.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.href,
    })),
  } : null;

  const jsonLdString = jsonLd
    ? JSON.stringify(jsonLd).replace(/</g, "\u003c").replace(/>/g, "\u003e")
    : null;

  return (
    <nav aria-label="Breadcrumb" data-slot="breadcrumb" {...props}>
      {jsonLdString && (
        // biome-ignore lint/security/noDangerouslySetInnerHtml: The JSON-LD string is
        // intentionally escaped to prevent XSS vulnerabilities from </script> sequences.
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString }}
        />
      )}
      {props.children}
    </nav>
  );
}

function BreadcrumbList({ className, children, ...props }: React.ComponentProps<"ol">) {
  const items = React.Children.toArray(children);
  const lastIndex = items.length - 1;

  const modifiedChildren = items.map((child, index) => {
    if (React.isValidElement(child) && child.type === BreadcrumbItem) {
      const isLast = index === lastIndex;
      // Assert child as React.ReactElement with BreadcrumbItemProps to access props safely
      const itemChildren = React.Children.toArray((child as React.ReactElement<any>).props.children);
      const modifiedItemChildren = itemChildren.map((itemChild) => {
        if (React.isValidElement(itemChild)) {
          if (itemChild.type === BreadcrumbLink) {
            return React.cloneElement(itemChild, {
              "aria-current": isLast ? "page" : undefined,
            } as React.ComponentProps<typeof BreadcrumbLink>); // Assert type for props
          } else if (itemChild.type === BreadcrumbPage) {
            // BreadcrumbPage already has aria-current="page", so no need to modify
            return itemChild;
          }
        }
        return itemChild;
      });
      return React.cloneElement(child, {}, modifiedItemChildren);
    }
    return child;
  });

  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      )}
      {...props}
    >
      {modifiedChildren}
    </ol>
  );
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  );
}

function BreadcrumbLink({
  asChild,
  className,
  "aria-current": ariaCurrent,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("hover:text-foreground transition-colors", className)}
      aria-current={ariaCurrent}
      {...props}
    />
  );
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      aria-current="page"
      className={cn(
        "text-foreground focus-visible:ring-ring font-normal focus:outline-none focus-visible:ring-2",
        className
      )}
      {...props}
    />
  );
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
