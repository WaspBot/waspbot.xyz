"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground p-4">
      <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
      <p className="text-lg text-muted-foreground mb-8 text-center">
        We apologize for the inconvenience. Please try again or return to the homepage.
      </p>
      <div className="flex space-x-4">
        <button
          className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          onClick={() => reset()}
        >
          Try again
        </button>
        <Link href="/" className="px-6 py-3 border border-border rounded-md text-foreground hover:bg-muted transition-colors">
          Go Home
        </Link>
      </div>
    </div>
  );
}
