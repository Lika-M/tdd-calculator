class Calculator {
  private currentValue: number;

  constructor(initialValue: number) {
    this.currentValue = initialValue;
  }

  getCurrentValue() {
    return this.currentValue;
  }

  action(type: 'sum' | 'multiply' | 'divide' | 'function', value: number | ((value: number) => number)) {
    if (type === 'sum') {
      this.currentValue += value as number;
    } else if (type === 'multiply') {
      this.currentValue *= value as number;
    } else if (type === 'divide') {
      if (value !== 0) {
        this.currentValue /= value as number;
      }
    } else if (type === 'function') {
      this.currentValue = (value as (value: number) => number)(this.currentValue);
    } else {
      this.currentValue = value as number;
    }
  }
}

export default Calculator;
