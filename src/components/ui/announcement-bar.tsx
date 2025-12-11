"use client";

import * as React from "react";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./button";

interface AnnouncementBarProps extends React.HTMLAttributes<HTMLDivElement> {
  message: React.ReactNode;
  link?: string;
  countdownDate?: string; // ISO string for countdown target
  onClose?: () => void;
}

export const AnnouncementBar = ({
  message,
  link,
  countdownDate,
  onClose,
  className,
  ...props
}: AnnouncementBarProps) => {
  const [isVisible, setIsVisible] = React.useState(true);
  const [timeLeft, setTimeLeft] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!countdownDate) return;

    const calculateTimeLeft = () => {
      const difference = +new Date(countdownDate) - +new Date();
      let timeLeft: Record<string, number> = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    };

    const timer = setInterval(() => {
      const t = calculateTimeLeft();
      if (Object.keys(t).length > 0) {
        setTimeLeft(
          `${t.days ? `${t.days}d ` : ""}${t.hours ? `${t.hours}h ` : ""}${
            t.minutes ? `${t.minutes}m ` : ""
          }${t.seconds ? `${t.seconds}s` : ""}`.trim()
        );
      } else {
        setTimeLeft("0d 0h 0m 0s");
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdownDate]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center bg-primary p-2 text-sm text-primary-foreground",
        className
      )}
      {...props}
    >
      {link ? (
        <a href={link} className="hover:underline">
          {message}
          {countdownDate && timeLeft && (
            <span className="ml-2 font-semibold">{timeLeft}</span>
          )}
        </a>
      ) : (
        <>
          {message}
          {countdownDate && timeLeft && (
            <span className="ml-2 font-semibold">{timeLeft}</span>
          )}
        </>
      )}

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 h-auto w-auto text-primary-foreground/80 hover:bg-transparent hover:text-primary-foreground"
        onClick={handleClose}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};
