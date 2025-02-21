import { analyzeArray } from "../functions/analyzeArray.js";

test("returns an object with average, min, max, length properties when called", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("returns an object with average, min, max, length properties when called with a different array", () => {
  const object = analyzeArray([1, 5, 6, 2, 3]);
  expect(object).toMatchObject({
    average: 3,
    min: 1,
    max: 6,
    length: 5,
  });
});
