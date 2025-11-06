"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

interface PopoverContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  triggerRef: React.MutableRefObject<HTMLElement | null>;
  contentId: string;
}

const PopoverContext = React.createContext<PopoverContextValue | null>(null);

function usePopoverContext() {
  const context = React.useContext(PopoverContext);
  if (!context) {
    throw new Error("usePopoverContext must be used within a PopoverProvider");
  }
  return context;
}

function Popover({
  children,
  open: openProp,
  defaultOpen,
  onOpenChange,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root> & {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const isControlled = openProp !== undefined;
  const [internalOpen, setInternalOpen] = React.useState<boolean>(
    defaultOpen ?? false
  );

  const open = isControlled ? (openProp as boolean) : internalOpen;

  const handleOpenChange = React.useCallback(
    (newOpen: boolean) => {
      if (!isControlled) {
        setInternalOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    },
    [isControlled, onOpenChange]
  );

  const triggerRef = React.useRef<HTMLElement | null>(null);
  const contentId = React.useId();

  const contextValue = React.useMemo(
    () => ({ open, onOpenChange: handleOpenChange, triggerRef, contentId }),
    [open, handleOpenChange, triggerRef, contentId]
  );

  return (
    <PopoverContext.Provider value={contextValue}>
      <PopoverPrimitive.Root
        data-slot="popover"
        open={open}
        onOpenChange={handleOpenChange}
        {...props}
      >
        {children}
      </PopoverPrimitive.Root>
    </PopoverContext.Provider>
  );
}

const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>
>(({ onPointerDown, ...props }, forwardedRef) => {
  const { triggerRef, open, contentId } = usePopoverContext();

  const handlePointerDown = React.useCallback(
    (event: React.PointerEvent<HTMLButtonElement>) => {
      triggerRef.current = event.currentTarget;
      onPointerDown?.(event);
    },
    [onPointerDown, triggerRef]
  );

  return (
    <PopoverPrimitive.Trigger
      ref={forwardedRef}
      data-slot="popover-trigger"
      onPointerDown={handlePointerDown}
      aria-haspopup="dialog"
      aria-expanded={open}
      aria-controls={contentId}
      {...props}
    />
  );
});

PopoverTrigger.displayName = PopoverPrimitive.Trigger.displayName;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    ariaLabel?: string;
    ariaLabelledBy?: string;
  }
>(({ className, align = "center", sideOffset = 4, ariaLabel, ariaLabelledBy, ...props }, ref) => {
  const { open, triggerRef, contentId } = usePopoverContext();
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  const composedRef = React.useCallback(
    (node: HTMLDivElement | null) => {
      contentRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    },
    [ref]
  );

  React.useEffect(() => {
    if (open) {
      requestAnimationFrame(() => {
        const focusableElements = contentRef.current?.querySelectorAll(
          'a[href], area[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements && focusableElements.length > 0) {
          (focusableElements[0] as HTMLElement).focus();
        }
      });
    } else {
      if (triggerRef.current) {
        triggerRef.current.focus();
      }
    }
  }, [open, triggerRef]);

  const handleKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    if (event.key === "Tab" && contentRef.current) {
      const focusableElements = contentRef.current.querySelectorAll(
        'a[href], area[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length === 0) return; // no focusable children

      const firstElement = focusableElements[0] as HTMLElement | undefined;
      const lastElement = focusableElements[focusableElements.length - 1] as
        | HTMLElement
        | undefined;
      if (!firstElement || !lastElement) return;

      if (event.shiftKey) {
        // If Shift + Tab and focus is on the first element, move to the last
        if (document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        }
      } else {
        // If Tab and focus is on the last element, move to the first
        if (document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    }
  }, []);

  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={composedRef}
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className
        )}
        onKeyDown={handleKeyDown}
        role="dialog"
        id={contentId}
        {...(ariaLabelledBy ? { "aria-labelledby": ariaLabelledBy } : ariaLabel ? { "aria-label": ariaLabel } : {})}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
});

PopoverContent.displayName = PopoverPrimitive.Content.displayName;

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
