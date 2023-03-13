import React, { useCallback } from 'react';

import { calculatorModel } from 'entities/calculator';
import { type Operators } from 'entities/calculator/model';
import { constructorModel } from 'entities/constructor';

import { useActionCreators } from 'shared/hooks';
import { Button } from 'shared/ui';

import styles from './styles.module.scss';

export const OperatorsPanel = () => {
  const operators = calculatorModel.selectors.getOperators();
  const mode = constructorModel.selectors.getMode();
  const actions = useActionCreators(calculatorModel.actions);
  const isActive = mode === 'Runtime';
  const handleClick = useCallback(
    (operator: Operators) => () => {
      if (!isActive) {
        return;
      }
      actions.addCommand(operator);
    },
    [isActive],
  );

  return (
    <div className={styles.operatorsPanel}>
      {operators.map((operator) => (
        <Button onClick={handleClick(operator)} active={isActive} key={operator} operator>
          {operator}
        </Button>
      ))}
    </div>
  );
};
