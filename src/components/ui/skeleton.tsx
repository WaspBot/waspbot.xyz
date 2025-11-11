import { cn } from "@/lib/utils";
import React from "react";

interface SkeletonProps<T extends React.ElementType = 'div'> {
  as?: T;
  className?: string;
}

type PolymorphicSkeletonProps<T extends React.ElementType = 'div'> =
  SkeletonProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof SkeletonProps<T>>;

function Skeleton<T extends React.ElementType = 'div'>({ className, as, ...props }: PolymorphicSkeletonProps<T>) {
  const Component = as || 'div';
  return (
    <Component
      aria-hidden="true"
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  );
}

export { Skeleton };
