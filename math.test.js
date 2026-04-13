const { add, subtract, multiply, divide, sqrt, max } = require("./math");

describe("Math Module Unit Tests", () => {
  test("add() should return the sum of two numbers", () => {
    expect(add(5, 3)).toBe(8);
  });

  test("subtract() should return the difference of two numbers", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("multiply() should return the product of two numbers", () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test("divide() should return the quotient of two numbers", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("sqrt() should return the square root of a number", () => {
    expect(sqrt(81)).toBe(9);
  });

  test("max() should return the larger of two numbers", () => {
    expect(max(12, 19)).toBe(19);
  });
});
