import { ActionType, ValueType, ListenerType } from './types'
import { actions } from './actions';

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

  addListener(listener: ListenerType) {
    this.listeners.push(listener);
  }

  removeListener(listener: ListenerType) {
    this.listeners = this.listeners.filter(l => l !== listener);
  }

  action(type: ActionType, value: ValueType) {
    const previousValue = this.currentValue;

    if (actions[type]) {
      this.currentValue = actions[type](value, this.currentValue);
    }

    if (this.currentValue !== previousValue) {
      this.listeners.forEach((listener) => listener(this.currentValue));
    }
  }

}

export default Calculator;
