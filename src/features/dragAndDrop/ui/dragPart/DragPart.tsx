import React, { type FC } from 'react';

import cn from 'classnames';

import { useAppDrag } from 'features/dragAndDrop';

import { constructorModel } from 'entities/constructor';

import styles from './styles.module.scss';

interface DragPartProps {
  id: number;
  index: number;
  children: React.ReactNode;
}

export const DragPart: FC<DragPartProps> = ({ id, index, children }) => {
  const { isDragging, dragRef } = useAppDrag(id, index);
  const dragPart = constructorModel.selectors.getDragZonePartByID(id);
  const dragPartClass = cn({
    [styles.dragPart]: true,
    [styles.dragPart_dragging]: isDragging,
    [styles.dragPart_dragged]: dragPart?.wasDragged,
  });

  return (
    <>
      <div className={dragPartClass} ref={dragPart?.wasDragged ? null : dragRef}>
        {children}
      </div>
    </>
  );
};
