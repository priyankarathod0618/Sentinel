import { describe, it, expect } from "vitest";
import formatDate from "../../src/utilities/formatDate.js";

describe("formatDate", () => {
    it("should format a date as YYYY-MM-DD", () => {
        const result = formatDate(new Date("2026-09-08"));

        expect(result).toBe("2026-09-08");
    });
});