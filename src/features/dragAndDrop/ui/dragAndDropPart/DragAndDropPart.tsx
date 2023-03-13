import React, { type FC } from 'react';

import cn from 'classnames';

import { useAppDragAndDrop } from 'features/dragAndDrop';

import { constructorModel } from 'entities/constructor';
import { DISPLAY_ID } from 'entities/constructor/model';

import { useActionCreators } from 'shared/hooks';

import styles from './styles.module.scss';

interface DragAndDropPartProps {
  id: number;
  index: number;
  children: React.ReactNode;
}

export const DragAndDropPart: FC<DragAndDropPartProps> = ({ id, index, children }) => {
  const actions = useActionCreators(constructorModel.actions);
  const mode = constructorModel.selectors.getMode();
  const { isDragging, ref, handlerId } = useAppDragAndDrop(id, index, actions.swapParts);
  const dragAndDropPartClass = cn({
    [styles.dragAndDropPart]: true,
    [styles.dragAndDropPart_dragging]: isDragging,
    [styles.dragAndDropPart_move]: isDragging,
    [styles.dragAndDropPart_unavaliable]: id === DISPLAY_ID,
  });

  const handleRemovePart = () => {
    if (mode === 'Constructor') {
      actions.removePart(id);
    }
  };

  return (
    <>
      <div
        className={dragAndDropPartClass}
        ref={id === DISPLAY_ID ? null : ref}
        data-handler-id={handlerId}
        onDoubleClick={handleRemovePart}>
        {children}
      </div>
    </>
  );
};
