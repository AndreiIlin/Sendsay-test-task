import React, { type FC } from 'react';

import { draggableItems } from 'shared/model';

interface FabricProps {
  name: string;
}

export const Fabric: FC<FabricProps> = ({ name }) => {
  const Component = draggableItems[name];

  return <Component />;
};
