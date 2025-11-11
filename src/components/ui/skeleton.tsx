import { cn } from "@/lib/utils";
import React from "react";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

function Skeleton({ className, as: Component = "div", ...props }: SkeletonProps) {
  return (
    <Component
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  );
}

export { Skeleton };
