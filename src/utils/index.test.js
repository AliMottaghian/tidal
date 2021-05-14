import { timeFormat } from "./index";

describe("timeFormat", () => {
  it("should return 11:17 as the result", () => {
    const result = timeFormat(677);
    expect(result).toEqual("11:17");
  });
  it("should throw error for invalid time", () => {
    try {
      expect(timeFormat("25"));
    } catch (e) {
      expect(e.message).toBe("Please pass the time as a number");
    }
  });
});
