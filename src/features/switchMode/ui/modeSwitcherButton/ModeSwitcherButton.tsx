import React, { type FC } from 'react';

import cn from 'classnames';

import { calculatorModel } from 'entities/calculator';
import { constructorModel } from 'entities/constructor';
import { type ConstructorMode } from 'entities/constructor/model';

import { useActionCreators } from 'shared/hooks';

import styles from './style.module.scss';

interface ModeSwitcherButtonProps {
  Icon: React.FC;
  name: ConstructorMode;
}

export const ModeSwitcherButton: FC<ModeSwitcherButtonProps> = ({ Icon, name }) => {
  const constructorActions = useActionCreators(constructorModel.actions);
  const calculatorActions = useActionCreators(calculatorModel.actions);
  const mode = constructorModel.selectors.getMode();
  const isActive = mode === name;
  const handleChangeMode = () => {
    if (isActive) {
      return;
    }
    constructorActions.switchMode(name);
    calculatorActions.reset();
  };
  const modeSwitcherButtonClass = cn({
    [styles.modeSwitcherButton]: true,
    [styles.modeSwitcherButton_active]: isActive,
  });

  return (
    <button onClick={handleChangeMode} className={modeSwitcherButtonClass}>
      <>
        <Icon />
        {name}
      </>
    </button>
  );
};
