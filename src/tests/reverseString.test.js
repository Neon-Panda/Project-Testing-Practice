import { reverseString } from "../functions/reverseString";

test("reverses test returns it", () => {
  expect(reverseString("test")).toBe("tset");
});

test("reverses hello and returns it", () => {
  expect(reverseString("hello")).toBe("olleh");
});
