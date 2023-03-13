import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { type Identifier } from 'dnd-core';

import { type DragItem } from 'features/dragAndDrop';

export const useAppDragAndDrop = (
  id: number,
  index: number,
  swapParts: ({ dragIndex, hoverIndex, id }: { dragIndex: number; hoverIndex: number; id: number }) => void,
) => {
  const [{ isDragging }, dragRef] = useDrag<DragItem, void, { isDragging: boolean }>({
    type: 'part',
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, dropRef] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
    accept: 'part',
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
    }),
    drop: (item) => {
      const dragIndex = index;
      const hoverIndex = item.index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      if (hoverBoundingRect == null) {
        return;
      }

      swapParts({ dragIndex, hoverIndex, id: item.id });
      item.index = hoverIndex;
    },
  });
  dragRef(dropRef(ref));

  return {
    ref,
    isDragging,
    handlerId,
  };
};
