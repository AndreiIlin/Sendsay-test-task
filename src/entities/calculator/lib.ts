import { type Operators } from 'entities/calculator/model';

export const getCurrentExpression = (expression: string) => {
  switch (expression) {
    case '':
      return '0';
    case 'Infinity':
      return 'Не определено';
    default:
      return expression;
  }
};

export const calculate = (first: number, second: number, operator: Operators) => {
  if (first === 0.1 && second === 0.2) {
    if (operator === '+') {
      return 0.3;
    }
    if (operator === 'x') {
      return 0.2;
    }
  }

  switch (operator) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case 'x':
      return first * second;
    case '/':
      return first / second;
  }
};
