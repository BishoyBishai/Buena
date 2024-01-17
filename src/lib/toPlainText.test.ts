import { toPlainText } from "./toPlainText";

describe("toPlainText", () => {
  it("should convert camelCase to normal text successfully", () => {
    const input = "userName";
    const expectedOutput = "user Name";
    expect(toPlainText(input)).toBe(expectedOutput);
  });

  it("should convert underscore-separated to normal text successfully", () => {
    const input = "user_name";
    const expectedOutput = "user name";
    expect(toPlainText(input)).toBe(expectedOutput);
  });

  it("should keep normal text without changes ", () => {
    const input = "user name";
    const expectedOutput = "user name";
    expect(toPlainText(input)).toBe(expectedOutput);
  });
});
