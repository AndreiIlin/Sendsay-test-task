import { useDrag } from 'react-dnd';

import { type DragItem } from 'features/dragAndDrop';

export const useAppDrag = (id: number, index: number) => {
  const [{ isDragging }, dragRef] = useDrag<DragItem, void, { isDragging: boolean }>({
    type: 'part',
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return {
    isDragging,
    dragRef,
  };
};
