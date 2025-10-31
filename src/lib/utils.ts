import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Conditionally joins CSS class names together.
 * This utility function combines `clsx` for conditional class merging
 * and `tailwind-merge` for resolving Tailwind CSS conflicts.
 *
 * @param inputs - An array of `ClassValue` (string, object, array, or falsy values).
 * @returns A single string of merged CSS class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Clamps a number between a minimum and maximum value.
 *
 * @param n - The number to clamp.
 * @param min - The minimum allowed value.
 * @param max - The maximum allowed value.
 * @returns The clamped number.
 */
export function clamp(n: number, min: number, max: number): number {
  return Math.min(Math.max(n, min), max);
}

/**
 * Formats a Date, string, or number into an ISO 8601 date string (YYYY-MM-DD).
 *
 * @param input - The date input (Date object, string, or number timestamp).
 * @returns The formatted ISO date string (e.g., "2025-10-31").
 */
export function formatDateISO(input: Date | string | number): string {
  const date = new Date(input);
  return date.toISOString().split('T')[0];
}
