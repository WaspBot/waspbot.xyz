import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground [a&]:hover:bg-destructive/90",
        success:
          "border-transparent bg-success text-success-foreground [a&]:hover:bg-success/90",
        warning:
          "border-transparent bg-warning text-warning-foreground [a&]:hover:bg-warning/90",
        info:
          "border-transparent bg-info text-info-foreground [a&]:hover:bg-info/90",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * If true, the component will be rendered as a child of the element passed to the `asChild` prop.
   * @default false
   */
  asChild?: boolean;
  /**
   * An optional icon to display on the left side of the badge.
   */
  icon?: React.ReactNode;
}

/**
 * Renders a badge component with various styles and variants.
 * @param {BadgeProps} props - The props for the badge component.
 * @returns {JSX.Element} The rendered badge component.
 */
function Badge({ className, variant, asChild = false, icon, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : "span";

  if (process.env.NODE_ENV === "development" && asChild && icon) {
    console.warn(
      "Warning: Using both `asChild` and `icon` in Badge might lead to unexpected behavior. Consider wrapping the icon and children in a single element when `asChild` is true."
    );
  }

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {asChild ? (
        <span>
          {icon}
          {props.children}
        </span>
      ) : (
        <>
          {icon}
          {props.children}
        </>
      )}
    </Comp>
  );
}

export { Badge, badgeVariants };
