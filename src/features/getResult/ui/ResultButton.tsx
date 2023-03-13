import React, { type FC } from 'react';

import { calculatorModel } from 'entities/calculator';
import { constructorModel } from 'entities/constructor';

import { useActionCreators } from 'shared/hooks';
import { Button } from 'shared/ui';

export const ResultButton: FC = () => {
  const mode = constructorModel.selectors.getMode();
  const isActive = mode === 'Runtime';
  const actions = useActionCreators(calculatorModel.actions);
  const handleGetResult = () => {
    if (!isActive) {
      return;
    }
    actions.getResult();
  };

  return (
    <Button result onClick={handleGetResult} active={isActive}>
      =
    </Button>
  );
};
