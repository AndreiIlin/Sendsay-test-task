import { type Part, parts } from 'entities/constructor/model';

export type ConstructorMode = 'Constructor' | 'Runtime';

interface ConstructorInitialState {
  mode: ConstructorMode;
  dragZoneParts: Part[];
  dropZoneParts: Part[];
}

export const constructorInitialState: ConstructorInitialState = {
  mode: 'Constructor',
  dragZoneParts: parts,
  dropZoneParts: [],
};
