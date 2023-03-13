import React, { type FC } from 'react';

import { ModeSwitcher } from 'features/switchMode';
import { DragZone } from 'widgets/dragZone';
import { DropZone } from 'widgets/dropZone';

import { MainContainer, MainContainerItem, VerticalContainer, VerticalContainerItem, Wrapper } from 'shared/ui';

export const MainPage: FC = () => (
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
