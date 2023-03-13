import React, { type FC } from 'react';

import { DragPart } from 'features/dragAndDrop';

import { constructorModel } from 'entities/constructor';

import { Fabric } from 'shared/ui';

import styles from './styles.module.scss';

export const DragZone: FC = () => {
  const dragZoneParts = constructorModel.selectors.getDragZoneParts();
  const mode = constructorModel.selectors.getMode();
  const isConstructorMode = mode === 'Constructor';

  return (
    <div className={styles.dragZone}>
      {isConstructorMode &&
        dragZoneParts.map((part, index) => (
          <DragPart id={part.id} index={index} key={part.id}>
            <Fabric name={part.name} />
          </DragPart>
        ))}
    </div>
  );
};
