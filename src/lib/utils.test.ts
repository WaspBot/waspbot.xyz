import { formatDateISO } from "./utils";

describe("formatDateISO", () => {
  it("should format a Date object to ISO 8601 date string", () => {
    const date = new Date("2025-10-31T10:00:00.000Z");
    expect(formatDateISO(date)).toBe("2025-10-31");
  });

  it("should format a valid date string to ISO 8601 date string", () => {
    const dateString = "2024-01-15";
    expect(formatDateISO(dateString)).toBe("2024-01-15");
  });

  it("should format a valid number timestamp to ISO 8601 date string", () => {
    const timestamp = 1678886400000; // March 15, 2023 12:00:00 PM UTC
    expect(formatDateISO(timestamp)).toBe("2023-03-15");
  });

  it("should throw a TypeError for an invalid date string", () => {
    const invalidDateString = "not-a-date";
    expect(() => formatDateISO(invalidDateString)).toThrow(TypeError);
    expect(() => formatDateISO(invalidDateString)).toThrow(
      "Invalid date input: not-a-date"
    );
  });

  it("should throw a TypeError for an invalid Date object", () => {
    const invalidDate = new Date("invalid");
    expect(() => formatDateISO(invalidDate)).toThrow(TypeError);
    expect(() => formatDateISO(invalidDate)).toThrow(
      "Invalid date input: Invalid Date"
    );
  });

  it("should throw a TypeError for NaN input", () => {
    expect(() => formatDateISO(NaN)).toThrow(TypeError);
    expect(() => formatDateISO(NaN)).toThrow("Invalid date input: NaN");
  });
});
