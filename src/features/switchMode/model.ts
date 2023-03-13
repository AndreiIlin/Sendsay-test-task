import type React from 'react';

import { EyeIcon, SelectorIcon } from 'features/switchMode/ui/icons';

import { type ConstructorMode } from 'entities/constructor/model';

interface SwitchButton {
  id: number;
  name: ConstructorMode;
  icon: React.FC;
}

export const switchButtons: SwitchButton[] = [
  {
    id: 1,
    name: 'Runtime',
    icon: EyeIcon,
  },
  {
    id: 2,
    name: 'Constructor',
    icon: SelectorIcon,
  },
];
