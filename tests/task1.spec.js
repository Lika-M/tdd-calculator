import Calculator from "../src/calculator";

describe("Basic operations", () => {
  it('should return the initial value when no action is applied', async () => {
    const calculator = new Calculator(12);
    expect(calculator.getCurrentValue()).toEqual(12);
  })

  it('should sum with the initial value', async () => {
    const calculator = new Calculator(28);

    calculator.action('sum', 14);
    expect(calculator.getCurrentValue()).toEqual(42);
  })

  it('should multiply the initial value', async () => {
    const calculator = new Calculator(5);

    calculator.action('multiply', -2);
    expect(calculator.getCurrentValue()).toEqual(-10);
  })

  it('should divide the initial value', async () => {
    const calculator = new Calculator(33);

    calculator.action('divide', 3);
    expect(calculator.getCurrentValue()).toEqual(11);
  })

  it('should process multiple actions', async () => {
    const calculator = new Calculator(78);

    calculator.action('sum', 22);
    calculator.action('divide', 10);
    calculator.action('multiply', 4.2);
    expect(calculator.getCurrentValue()).toEqual(42);
  })
});
