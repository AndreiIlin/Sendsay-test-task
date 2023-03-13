import React, { type FC } from 'react';

import { ModeSwitcherButton, switchButtons } from 'features/switchMode';

import styles from './styles.module.scss';

export const ModeSwitcher: FC = () => {
  return (
    <div className={styles.modeSwitcher}>
      {switchButtons.map((button) => (
        <ModeSwitcherButton Icon={button.icon} name={button.name} key={button.id} />
      ))}
    </div>
  );
};
