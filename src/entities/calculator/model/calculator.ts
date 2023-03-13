import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { calculate } from 'entities/calculator';
import { calculatorInitialState as initialState, type Command, type Operands, type Operators } from 'entities/calculator/model';

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addCommand: (state, { payload }: PayloadAction<Command>) => {
      if (state.currentExpression.includes(',') && payload === ',') {
        return;
      }
      if (payload === ',' && state.operatorsStack.includes(state.lastOperation as Operators)) {
        return;
      }
      if (state.operators.includes(payload as Operators)) {
        if (state.lastOperation === payload || (state.lastOperation === null && !state.operandsStack.length)) {
          return;
        }
        if (state.operators.includes(state.lastOperation as Operators)) {
          state.operatorsStack.pop();
          state.operatorsStack.push(payload as Operators);
        }
        if (state.operatorsStack.length > 0) {
          const operation = state.operatorsStack.pop() as Operators;
          const secondArgument = Number(state.operandsStack.pop()?.replace(',', '.'));
          const firstArgument = Number(state.operandsStack.pop()?.replace(',', '.'));
          let result = calculate(firstArgument, secondArgument, operation);
          if (result.toString().length > 17 && result.toString().includes('.')) {
            result = +result.toFixed(15);
          }
          state.currentExpression = result.toString().replace('.', ',');
          state.lastOperation = null;
        }

        state.operatorsStack.push(payload as Operators);
        state.operandsStack.push(state.currentExpression as Operands);
        state.lastOperation = payload;

        return;
      }
      if (state.operators.includes(state.lastOperation as Operators) || state.currentExpression === 'Infinity') {
        state.currentExpression = payload as string;
        state.lastOperation = payload;

        return;
      }

      if (payload === ',' && !state.currentExpression) {
        state.currentExpression = '0,';
        state.lastOperation = payload;

        return;
      }

      state.currentExpression += payload as string;
      state.lastOperation = payload;
    },
    getResult: (state) => {
      if (state.operatorsStack.length === 0 || state.operandsStack.length < 1) {
        return;
      }
      state.operandsStack.push(state.currentExpression as Operands);
      const operation = state.operatorsStack.pop() as Operators;
      const secondArgument = Number(state.operandsStack.pop()?.replace(',', '.'));
      const firstArgument = Number(state.operandsStack.pop()?.replace(',', '.'));
      let result = calculate(firstArgument, secondArgument, operation);
      if (result.toString().length > 17 && result.toString().includes('.')) {
        result = +result.toFixed(15);
      }
      state.currentExpression = result.toString().replace('.', ',');
      state.operandsStack.push(result.toString().replace('.', ',') as Operands);
      state.lastOperation = null;
    },
    reset: (state) => {
      state.operatorsStack = [];
      state.operandsStack = [];
      state.currentExpression = '';
      state.lastOperation = null;
    },
  },
});

export const { actions, reducer } = calculatorSlice;
