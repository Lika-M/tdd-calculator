import Calculator from "../src/calculator";

describe("Listeners", () => {
  it("should add/remove listener", async () => {
    const calculator = new Calculator(1);

    const listener1 = jest.fn();

    calculator.addListener(listener1);
    calculator.removeListener(listener1);

    calculator.action("sum", 1);

    expect(calculator.getCurrentValue()).toEqual(2);
    expect(listener1).not.toHaveBeenCalled();
  });

  it("should call the listeners when value is changed", async () => {
    const calculator = new Calculator(1);

    const listener1 = jest.fn();
    const listener2 = jest.fn();

    calculator.addListener(listener1);
    calculator.addListener(listener2);

    calculator.action("sum", 1);

    expect(listener1).toHaveBeenCalledTimes(1);
    expect(listener2).toHaveBeenCalledTimes(1);
    expect(listener1).toHaveBeenCalledWith(2);
    expect(listener2).toHaveBeenCalledWith(2);
  });

  it("should NOT call the listeners when the value is NOT changed", async () => {
    const calculator = new Calculator(1);

    const listener1 = jest.fn();
    const listener2 = jest.fn();

    calculator.addListener(listener1);
    calculator.addListener(listener2);

    calculator.action("sum", 0);

    expect(listener1).not.toHaveBeenCalled();
    expect(listener2).not.toHaveBeenCalled();
  });
});
