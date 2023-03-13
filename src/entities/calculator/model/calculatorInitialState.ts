export type Operators = '+' | '-' | 'x' | '/';
export type Operands = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0' | ',';
export type Command = Operands | Operators | null;

interface CalculatorInitialState {
  currentExpression: string;
  lastOperation: Command;
  operands: Operands[];
  operators: Operators[];
  operatorsStack: Operators[];
  operandsStack: Operands[];
}

export const calculatorInitialState: CalculatorInitialState = {
  currentExpression: '',
  lastOperation: null,
  operands: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ','],
  operators: ['+', '-', 'x', '/'],
  operatorsStack: [],
  operandsStack: [],
};
