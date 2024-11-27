import Calculator from "../src/calculator";

describe("Functions", () => {
  it("should apply function over the current value", async () => {
    const calculator = new Calculator(10);

    calculator.action("function", (value) => value + value * value);
    expect(calculator.getCurrentValue()).toEqual(110);

    calculator.action("function", (value) => (value + 1.22) | 0);
    expect(calculator.getCurrentValue()).toEqual(111);
  });

  it("should process multiple actions", async () => {
    const calculator = new Calculator(78);

    calculator.action("sum", 22);
    calculator.action("function", (value) => Math.sqrt(value));
    calculator.action("divide", 10);
    expect(calculator.getCurrentValue()).toEqual(1);
  });
});
