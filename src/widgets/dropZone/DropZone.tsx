import React, { type FC, useEffect } from 'react';

import cn from 'classnames';

import { DragAndDropPart, useAppDrop } from 'features/dragAndDrop';
import { useHandleKeyDown } from 'widgets/dropZone';

import { constructorModel } from 'entities/constructor';

import { useActionCreators } from 'shared/hooks';
import { DropZonePlaceholder, Fabric } from 'shared/ui';

import styles from './styles.module.scss';

export const DropZone: FC = () => {
  const dropItems = constructorModel.selectors.getDropZoneParts();
  const mode = constructorModel.selectors.getMode();
  const isEmpty = dropItems.length === 0;
  const constructorActions = useActionCreators(constructorModel.actions);
  const { isOver, dropRef } = useAppDrop(constructorActions.dropPart);
  const { handleKeyDown } = useHandleKeyDown();
  const dropZoneClass = cn({
    [styles.dropZone]: true,
    [styles.dropZone_empty]: isEmpty,
    [styles.dropZone_hover]: isOver && isEmpty,
  });

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
