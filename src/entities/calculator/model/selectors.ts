import { useAppSelector } from 'shared/hooks';

export const getCurrentExpression = () => useAppSelector((state) => state.calculator.currentExpression);

export const getOperands = () => useAppSelector((state) => state.calculator.operands);

export const getOperators = () => useAppSelector((state) => state.calculator.operators);
