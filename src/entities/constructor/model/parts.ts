export interface Part {
  id: number;
  wasDragged: boolean;
  name: string;
}

export const parts: Part[] = [
  {
    id: 1,
    wasDragged: false,
    name: 'display',
  },
  {
    id: 2,
    wasDragged: false,
    name: 'operators',
  },
  {
    id: 3,
    wasDragged: false,
    name: 'operands',
  },
  {
    id: 4,
    wasDragged: false,
    name: 'resultButton',
  },
];
