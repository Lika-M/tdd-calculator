import { ActionType } from "./types";

export const actions: Record<ActionType, (value: number | ((value: number) => number), currentValue: number) => number> = {
    sum: (value, currentValue) => currentValue + (value as number),
    multiply: (value, currentValue) => currentValue * (value as number),
    divide: (value, currentValue) => {
        if (value === 0) throw new Error("Cannot divide by zero.");
        return currentValue / (value as number);
    },
    function: (fn, currentValue) => (fn as (value: number) => number)(currentValue),
};