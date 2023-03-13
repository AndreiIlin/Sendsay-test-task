import { configureStore } from '@reduxjs/toolkit';

import { calculatorModel } from 'entities/calculator';
import { constructorModel } from 'entities/constructor';

export const store = configureStore({
  reducer: {
    calculator: calculatorModel.reducer,
    construct: constructorModel.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
