import React, { type FC, type PropsWithChildren } from 'react';

import styles from './styles.module.scss';

export const VerticalContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.verticalContainer}>{children}</div>;
};
