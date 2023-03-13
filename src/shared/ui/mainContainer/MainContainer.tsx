import React, { type FC, type PropsWithChildren } from 'react';

import styles from './styles.module.scss';

export const MainContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.mainContainer}>{children}</div>;
};
