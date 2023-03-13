import type React from 'react';

import { OperandsPanel, OperatorsPanel } from 'features/addOperation';
import { ResultButton } from 'features/getResult';

import { Display } from 'entities/calculator';

type DraggableItems = Record<string, React.FC>;

export const draggableItems: DraggableItems = {
  display: Display,
  operators: OperatorsPanel,
  operands: OperandsPanel,
  resultButton: ResultButton,
};
