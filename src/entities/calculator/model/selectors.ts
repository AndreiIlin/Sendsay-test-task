import { createSelector } from '@reduxjs/toolkit';

import { type RootState } from 'app/store';

import { useAppSelector } from 'shared/hooks';

export const getCurrentExpression = () => useAppSelector((state) => state.calculator.currentExpression);

export const getOperands = () => useAppSelector((state) => state.calculator.operands);

export const getOperators = () => useAppSelector((state) => state.calculator.operators);

const findDropZonePartByName = (name: string) =>
  createSelector(
    (state: RootState) => state.construct.dropZoneParts,
    (dropParts) => dropParts.find((part) => part.name === name),
  );

export const getDropZonePartByName = (name: string) => useAppSelector(findDropZonePartByName(name));
