/* eslint-disable no-undef */
import { caesarCipher } from "../functions/caesarCipher.js";

test("shifts string correctly", () => {
  expect(caesarCipher("Hello", 3)).toBe("Khoor");
});

test("shifts another string correctly", () => {
  expect(caesarCipher("World", 3)).toBe("Zruog");
});

test("shifts a string correctly for a shift of 15", () => {
  expect(caesarCipher("Test", 15)).toBe("Ithi");
});

test("wraps from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("does not change punctuation, spaces and other non-alphabetical chars", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("preserves case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});
