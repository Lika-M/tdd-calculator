import { ActionType, ValueType, FunctionType } from "./types";

export const actions: Record<ActionType, (value: ValueType, currentValue: number) => number> = {
    sum: (value, currentValue) => currentValue + (value as number),
    multiply: (value, currentValue) => currentValue * (value as number),
    divide: (value, currentValue) => {
        if (value !== 0) {
            return currentValue / (value as number);
        } else {
            throw new Error("Cannot divide by zero.")
        }
    },
    function: (fn, currentValue) => (fn as FunctionType)(currentValue),
};