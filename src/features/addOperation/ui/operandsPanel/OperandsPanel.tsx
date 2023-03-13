import React, { useCallback } from 'react';

import { calculatorModel } from 'entities/calculator';
import { type Operands } from 'entities/calculator/model';
import { constructorModel } from 'entities/constructor';

import { useActionCreators } from 'shared/hooks';
import { Button } from 'shared/ui';

import styles from './styles.module.scss';

export const OperandsPanel = () => {
  const operands = calculatorModel.selectors.getOperands();
  const mode = constructorModel.selectors.getMode();
  const actions = useActionCreators(calculatorModel.actions);
  const isActive = mode === 'Runtime';
  const handleClick = useCallback(
    (operand: Operands) => () => {
      if (!isActive) {
        return;
      }
      actions.addCommand(operand);
    },
    [isActive, actions],
  );

  return (
    <div className={styles.operandsPanel}>
      {operands.map((operand) => {
        if (operand === '0') {
          return (
            <Button key={operand} operand grow active={isActive} onClick={handleClick(operand)}>
              {operand}
            </Button>
          );
        }

        return (
          <Button key={operand} operand active={isActive} onClick={handleClick(operand)}>
            {operand}
          </Button>
        );
      })}
    </div>
  );
};
