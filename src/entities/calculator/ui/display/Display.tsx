import React, { type FC } from 'react';

import { calculatorModel, getCurrentExpression } from 'entities/calculator';

import styles from './styles.module.scss';

export const Display: FC = () => {
  const currentExpression = calculatorModel.selectors.getCurrentExpression();
  const displayExpression = getCurrentExpression(currentExpression);

  return <div className={styles.display}>{displayExpression}</div>;
};
