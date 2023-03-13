import React, { type FC, useEffect, useRef } from 'react';

import { calculatorModel, getCurrentExpression } from 'entities/calculator';

import styles from './styles.module.scss';

export const Display: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const currentExpression = calculatorModel.selectors.getCurrentExpression();
  const displayExpression = getCurrentExpression(currentExpression);

  useEffect(() => {
    if (ref.current) {
      if (displayExpression.length <= 9) {
        ref.current.style.fontSize = '36px';
        ref.current.style.lineHeight = '44px';
      }
      if (displayExpression.length > 9 && displayExpression.length <= 34) {
        ref.current.style.fontSize = '19px';
        ref.current.style.lineHeight = '23px';
      }
      if (displayExpression.length > 34) {
        ref.current.style.fontSize = '10px';
        ref.current.style.lineHeight = '12px';
      }
    }
  }, [displayExpression]);

  return (
    <div className={styles.display} ref={ref}>
      {displayExpression}
    </div>
  );
};
