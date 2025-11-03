"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  showLabel?: boolean;
}

function Progress({ className, value, showLabel, ...props }: ProgressProps) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      aria-label={value === null || value === undefined ? "Loading..." : `Progress: ${Math.round(value)}%`}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          "bg-primary h-full w-full flex-1",
          value === null || value === undefined
            ? "animate-pulse motion-reduce:animate-none"
            : "transition-all"
        )}
        style={
          value === null || value === undefined
            ? undefined
            : { transform: `translateX(-${100 - (value || 0)}%)` }
        }
      />
      {showLabel && value !== undefined && value !== null && (
        <span className="text-primary-foreground absolute inset-0 flex items-center justify-center text-xs font-medium">
          {Math.round(value)}%
        </span>
      )}
    </ProgressPrimitive.Root>
  );
}

export { Progress };
