import { createSelector } from '@reduxjs/toolkit';

import { type RootState } from 'app/store';

import { useAppSelector } from 'shared/hooks';

export const getMode = () => useAppSelector((state) => state.construct.mode);

export const getDragZoneParts = () => useAppSelector((state) => state.construct.dragZoneParts);

export const getDropZoneParts = () => useAppSelector((state) => state.construct.dropZoneParts);

const findDragZonePartByID = (id: number) =>
  createSelector(
    (state: RootState) => state.construct.dragZoneParts,
    (dragParts) => dragParts.find((part) => part.id === id),
  );

export const getDragZonePartByID = (id: number) => useAppSelector(findDragZonePartByID(id));

const findDropZonePartByID = (id: number) =>
  createSelector(
    (state: RootState) => state.construct.dropZoneParts,
    (dropParts) => dropParts.find((part) => part.id === id),
  );

export const getDropZonePartByID = (id: number) => useAppSelector(findDropZonePartByID(id));
