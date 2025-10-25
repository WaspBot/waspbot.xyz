"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

function Separator({
  className,
  orientation: propOrientation = "horizontal",
  decorative = true,
  vertical = false,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root> & { vertical?: boolean }) {
  const orientation = vertical ? "vertical" : propOrientation;

  if (orientation === "horizontal" && decorative) {
    return (
      <hr
        className={cn(
          "bg-border shrink-0 h-px w-full",
          className
        )}
        {...props}
      />
    );
  }

  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  );
}

export { Separator };
