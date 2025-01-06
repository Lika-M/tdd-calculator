enum ActionType {
  Sum = "sum",
  Multiply = "multiply",
  Divide = "divide",
  Function = "function",
}

class Calculator {
  private currentValue: number;
  private listeners: Array<(value: number) => void>;

  constructor(initialValue: number) {
    this.currentValue = initialValue;
    this.listeners = [];
  }

  getCurrentValue() {
    return this.currentValue;
  }

  addListener(listener: (value: number) => void) {
    this.listeners.push(listener);
  }

  removeListener(listener: (value: number) => void) {
    this.listeners = this.listeners.filter(l => l !== listener);
  }

  // action(type: 'sum' | 'multiply' | 'divide' | 'function', value: number | ((value: number) => number)) {
  //   const previousValue = this.currentValue;

  //   if (type === 'sum') {
  //     this.currentValue += value as number;
  //   } else if (type === 'multiply') {
  //     this.currentValue *= value as number;
  //   } else if (type === 'divide') {
  //     if (value !== 0) {
  //       this.currentValue /= value as number;
  //     }
  //   } else if (type === 'function') {
  //     this.currentValue = (value as (value: number) => number)(this.currentValue);
  //   } else {
  //     this.currentValue = value as number;
  //   }

  //   if (this.currentValue !== previousValue) {
  //     this.listeners.forEach(listener => listener(this.currentValue));
  //   }
  // }

  //  Used a map of functions to handle the different action types, making it cleaner and more maintainable.

  action(type: ActionType, value: number | ((value: number) => number)): void {
    const previousValue = this.currentValue;
  
    const actions = {
      sum: () => (this.currentValue += value as number),
      multiply: () => (this.currentValue *= value as number),
      divide: () => {
        if (value === 0) throw new Error("Cannot divide by zero.");
        this.currentValue /= value as number;
      },
      function: () => (this.currentValue = (value as Function)(this.currentValue)),
    };
  
    actions[type]();
  
    if (this.currentValue !== previousValue) {
      this.listeners.forEach((listener) => listener(this.currentValue));
    }
  }
  
}

export default Calculator;
