"use client";

import { X } from "lucide-react";
import * as React from "react";

import { Button } from "./button";
import { cn } from "@/lib/utils";

interface CtaBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  body: string;
  primaryAction?: {
    label: string;
    href: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    label: string;
    href: string;
    onClick?: () => void;
  };
  onDismiss?: () => void;
  dismissible?: boolean;
}

export const CtaBanner = React.forwardRef<HTMLDivElement, CtaBannerProps>(
  (
    {
      title,
      body,
      primaryAction,
      secondaryAction,
      onDismiss,
      dismissible = true,
      className,
      ...props
    },
    ref,
  ) => {
    const [dismissed, setDismissed] = React.useState(false);

    const handleDismiss = () => {
      setDismissed(true);
      onDismiss?.();
    };

    if (dismissed) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1",
          className,
        )}
        {...props}
      >
        <div
          className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at center, hsl(var(--primary)) 0%, transparent 70%)",
            opacity: 0.1,
            filter: "blur(70px)",
            width: "100%",
            height: "100%",
          }}
        ></div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-gray-900">
            <strong className="font-semibold">{title}</strong>
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
              aria-hidden="true"
            >
              <circle r={1} />
            </svg>
            {body}
          </p>
          <div className="flex gap-x-4">
            {primaryAction && (
              <Button asChild variant="default" size="sm">
                <a href={primaryAction.href} onClick={primaryAction.onClick}>
                  {primaryAction.label}
                </a>
              </Button>
            )}
            {secondaryAction && (
              <Button asChild variant="secondary" size="sm">
                <a
                  href={secondaryAction.href}
                  onClick={secondaryAction.onClick}
                >
                  {secondaryAction.label}
                </a>
              </Button>
            )}
          </div>
        </div>
        {dismissible && (
          <div className="flex flex-1 justify-end">
            <Button variant="ghost" size="sm" onClick={handleDismiss}>
              <X className="h-5 w-5 text-gray-900" aria-hidden="true" />
            </Button>
          </div>
        )}
      </div>
    );
  },
);

CtaBanner.displayName = "CtaBanner";
