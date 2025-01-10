export type ActionType = "sum" | "multiply" | "divide" | "function";
export type FunctionType = (value: number) => number;
export type ValueType = number | FunctionType;
export type ListenerType = (value: number | string) => void;
