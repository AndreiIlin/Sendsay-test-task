import React, { type FC, type PropsWithChildren } from 'react';

import styles from './styles.module.scss';

export const MainContainerItem: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.mainContainerItem}>{children}</div>;
};
