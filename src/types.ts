export type ActionType = "sum" | "multiply" | "divide" | "function";
export type ValueType = number | ((value: number) => number);
export type ListenerType = (value: number | string) => void;
