"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

function ScrollArea({
  className,
  children,
  autoHide = true,
  scrollbarSize = 10,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root> & {
  autoHide?: boolean;
  scrollbarSize?: number;
}) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className)}
      scrollHideDelay={autoHide ? 500 : 0}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:ring-ring/50 scrollbar-gutter-stable size-full overflow-auto rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar scrollbarSize={scrollbarSize} />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollBar({
  className,
  orientation = "vertical",
  scrollbarSize,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> & {
  scrollbarSize?: number;
}) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none data-[state=hidden]:opacity-0 data-[state=visible]:opacity-100 transition-opacity duration-300",
        orientation === "vertical" &&
          "h-full border-l border-l-transparent",
        orientation === "horizontal" &&
          "flex-col border-t border-t-transparent",
        className
      )}
      style={{
        [orientation === "vertical" ? "width" : "height"]: scrollbarSize,
      }}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}

export { ScrollArea, ScrollBar };
