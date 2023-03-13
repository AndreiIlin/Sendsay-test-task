import React, { type FC, type PropsWithChildren } from 'react';

import styles from './styles.module.scss';

export const VerticalContainerItem: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.verticalContainerItem}>{children}</div>;
};
