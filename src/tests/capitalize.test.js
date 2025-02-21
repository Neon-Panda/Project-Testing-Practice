import { capitalize } from "../functions/capitalize.js";

test("capitalize the first leter of a string", () => {
  expect(capitalize("test")).toBe("Test");
});

test("capitalize hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});
