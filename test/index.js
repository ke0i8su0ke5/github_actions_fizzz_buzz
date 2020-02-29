const assert = require("assert");
const fizzbuzz = require("../index");

describe("fizzbuzz", () => {
  it("return FizzBuzz when value is divisial by 15", () => {
    assert(fizzbuzz(30) === "FizzBuzz");
  });

  it("return Fizz when value is divisial by 3", () => {
    assert(fizzbuzz(9) === "Fizz");
  });

  it("return Buzz when value is divisial by 5", () => {
    assert(fizzbuzz(10) === "Buzz");
  });

  it("return Buzz when value is divisial by 3 or 5", () => {
    assert(fizzbuzz(7) === "7");
  });
});
