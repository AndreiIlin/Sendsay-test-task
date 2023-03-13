import { useDrop } from 'react-dnd';

import { type DragItem } from 'features/dragAndDrop';

export const useAppDrop = (dropPart: (id: number) => void) => {
  const [{ isOver }, dropRef] = useDrop<DragItem, void, { isOver: boolean }>({
    accept: 'part',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: (item) => {
      dropPart(item.id);
    },
  });

  return {
    isOver,
    dropRef,
  };
};
