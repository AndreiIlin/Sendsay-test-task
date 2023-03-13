import React, { type FC, type PropsWithChildren } from 'react';

import styles from './styles.module.scss';

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
