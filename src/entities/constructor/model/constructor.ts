import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { constructorInitialState as initialState, type ConstructorMode } from 'entities/constructor/model';

export const DISPLAY_ID: number = 1;

interface SwapPayloadAction {
  dragIndex: number;
  hoverIndex: number;
  id: number;
}

const constructorSlice = createSlice({
  name: 'construct',
  initialState,
  reducers: {
    switchMode: (state, { payload }: PayloadAction<ConstructorMode>) => {
      state.mode = payload;
    },
    dropPart: (state, { payload }: PayloadAction<number>) => {
      const dragZonePart = state.dragZoneParts.find((part) => part.id === payload);
      const dropZonePart = state.dropZoneParts.find((part) => part.id === payload);
      if (dropZonePart != null) {
        return;
      }
      if (dragZonePart != null) {
        dragZonePart.wasDragged = true;
        if (dragZonePart.id === DISPLAY_ID) {
          state.dropZoneParts.unshift(dragZonePart);

          return;
        }
        state.dropZoneParts.push(dragZonePart);
      }
    },
    swapParts: (state, { payload: { dragIndex, hoverIndex, id } }: PayloadAction<SwapPayloadAction>) => {
      const dragItem = state.dropZoneParts.find((item) => item.id === id);
      if (dragItem != null) {
        const temp = state.dropZoneParts[dragIndex];
        state.dropZoneParts[dragIndex] = state.dropZoneParts[hoverIndex];
        state.dropZoneParts[hoverIndex] = temp;
      }
    },
    removePart: (state, { payload }: PayloadAction<number>) => {
      const dragZonePart = state.dragZoneParts.find((part) => part.id === payload);
      if (dragZonePart != null) {
        dragZonePart.wasDragged = false;
        state.dropZoneParts = state.dropZoneParts.filter((part) => part.id !== payload);
      }
    },
  },
});

export const { actions, reducer } = constructorSlice;
