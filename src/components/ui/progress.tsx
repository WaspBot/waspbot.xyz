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
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
      {showLabel && value !== undefined && value !== null && (
        <span
          className="absolute inset-0 flex items-center justify-center text-xs font-medium text-primary-foreground"
          style={{ left: `${value}%`, transform: `translateX(-${value}%)` }}
        >
          {Math.round(value)}%
        </span>
      )}
    </ProgressPrimitive.Root>
  );
}

export { Progress };
