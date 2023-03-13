import React from 'react';

import { ModeSwitcher } from 'features/switchMode';
import { DragZone } from 'widgets/dragZone';
import { DropZone } from 'widgets/dropZone';

import { MainContainer, MainContainerItem, VerticalContainer, VerticalContainerItem, Wrapper } from 'shared/ui';

export interface DraggableItem {
  id: number;
  draggable: boolean;
  component: React.ReactNode;
}

export const MainPage = () => {
  // const [items, setItems] = useState<DraggableItem[]>(draggableItems);
  // const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
  //   setItems((prevCards: DraggableItem[]) =>
  //     update(prevCards, {
  //       $splice: [
  //         [dragIndex, 1],
  //         [hoverIndex, 0, prevCards[dragIndex] as DraggableItem],
  //       ],
  //     }),
  //   );
  // }, []);

  return (
    <Wrapper>
      <MainContainer>
        <MainContainerItem>
          <VerticalContainer>
            <VerticalContainerItem />
            <VerticalContainerItem>
              <ModeSwitcher />
            </VerticalContainerItem>
          </VerticalContainer>
        </MainContainerItem>
        <MainContainerItem>
          <VerticalContainer>
            <VerticalContainerItem>
              <DragZone />
            </VerticalContainerItem>
            <VerticalContainerItem>
              <DropZone />
            </VerticalContainerItem>
          </VerticalContainer>
        </MainContainerItem>
      </MainContainer>
    </Wrapper>
  );
};
