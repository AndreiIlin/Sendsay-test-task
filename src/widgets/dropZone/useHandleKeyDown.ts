import { calculatorModel } from 'entities/calculator';
import { type Command, type Operands, type Operators } from 'entities/calculator/model';
import { constructorModel } from 'entities/constructor';

import { useActionCreators } from 'shared/hooks';

export const useHandleKeyDown = () => {
  const mode = constructorModel.selectors.getMode();
  const operands = calculatorModel.selectors.getOperands();
  const operators = calculatorModel.selectors.getOperators();
  const calculatorActions = useActionCreators(calculatorModel.actions);
  const operandsPart = calculatorModel.selectors.getDropZonePartByName('operands');
  const operatorsPart = calculatorModel.selectors.getDropZonePartByName('operators');
  const resultButtonPart = calculatorModel.selectors.getDropZonePartByName('resultButton');
  const handleKeyDown = (event: KeyboardEvent) => {
    if (mode === 'Runtime') {
      if (resultButtonPart) {
        if (event.key === 'Enter' || event.key === '=') {
          calculatorActions.getResult();
        }
      }
      if (operandsPart) {
        if (operands.includes(event.key as Operands)) {
          calculatorActions.addCommand(event.key as Command);
        }
      }
      if (operatorsPart) {
        if (operators.includes(event.key as Operators)) {
          calculatorActions.addCommand(event.key as Command);
        }
        if (event.key === '*') {
          calculatorActions.addCommand('x');
        }
      }
    }
  };

  return { handleKeyDown };
};
