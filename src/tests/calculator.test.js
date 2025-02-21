import { Calculator } from "../functions/calculator";

test("calculator adds two numbers", () => {
  expect(Calculator.add(1, 4)).toBe(5);
});

test("calculator subtracts two numbers", () => {
  expect(Calculator.subtract(5, 2)).toBe(3);
});

test("calculator divides two numbers", () => {
  expect(Calculator.divide(10, 2)).toBe(5);
});

test("calculator multiplies two numbers", () => {
  expect(Calculator.multiply(5, 5)).toBe(25);
});
