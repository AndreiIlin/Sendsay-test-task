import React, { type FC, useEffect } from 'react';

import cn from 'classnames';

import { DragAndDropPart, useAppDrop } from 'features/dragAndDrop';

import { calculatorModel } from 'entities/calculator';
import { type Command, type Operands, type Operators } from 'entities/calculator/model';
import { constructorModel } from 'entities/constructor';

import { useActionCreators } from 'shared/hooks';
import { DropZonePlaceholder, Fabric } from 'shared/ui';

import styles from './styles.module.scss';

export const DropZone: FC = () => {
  const dropItems = constructorModel.selectors.getDropZoneParts();
  const mode = constructorModel.selectors.getMode();
  const operands = calculatorModel.selectors.getOperands();
  const operators = calculatorModel.selectors.getOperators();
  const isEmpty = dropItems.length === 0;
  const constructorActions = useActionCreators(constructorModel.actions);
  const calculatorActions = useActionCreators(calculatorModel.actions);
  const { isOver, dropRef } = useAppDrop(constructorActions.dropPart);
  const dropZoneClass = cn({
    [styles.dropZone]: true,
    [styles.dropZone_empty]: isEmpty,
    [styles.dropZone_hover]: isOver && isEmpty,
  });
  const handleKeyDown = (event: KeyboardEvent) => {
    if (mode === 'Runtime') {
      if (operators.includes(event.key as Operators) || operands.includes(event.key as Operands)) {
        calculatorActions.addCommand(event.key as Command);
      }
      if (event.key === '*') {
        calculatorActions.addCommand('x');
      }
      if (event.key === 'Enter' || event.key === '=') {
        calculatorActions.getResult();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mode]);

  return (
    <div className={dropZoneClass} ref={dropRef}>
      {isEmpty ? (
        <DropZonePlaceholder />
      ) : (
        dropItems.map((item, index) => (
          <DragAndDropPart id={item.id} index={index} key={item.id}>
            <Fabric name={item.name} />
          </DragAndDropPart>
        ))
      )}
    </div>
  );
};
