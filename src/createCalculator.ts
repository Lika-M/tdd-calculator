// Factory fn
import { ActionType, ValueType, ListenerType } from './types';
import { actions } from './actions';

export function createCalculator(initialValue: number) {
  let currentValue = initialValue;
  const listeners: Array<ListenerType> = [];

  function getCurrentValue() {
    return currentValue;
  }

  function addListener(listener: ListenerType) {
    listeners.push(listener);
  }

  function removeListener(listener: ListenerType) {
    const index = listeners.indexOf(listener);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
  }

  function action(type: ActionType, value: ValueType) {
    const previousValue = currentValue;

    if (actions[type]) {
      currentValue = actions[type](value, currentValue);
    }

    if (currentValue !== previousValue) {
      listeners.forEach((listener) => listener(currentValue));
    }
  }

  return {
    getCurrentValue,
    addListener,
    removeListener,
    action,
  };
}

export default createCalculator;
