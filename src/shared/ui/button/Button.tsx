import React, { type ButtonHTMLAttributes, type FC } from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  operand?: boolean;
  grow?: boolean;
  operator?: boolean;
  result?: boolean;
  active: boolean;
}

const SimpleButton: FC<ButtonProps> = ({ children, operand, grow, operator, result, active, ...props }) => {
  const buttonClass = cn({
    [styles.button]: true,
    [styles.button__operand]: operand,
    [styles.button__operand_grow]: grow,
    [styles.button__operator]: operator,
    [styles.button__result]: result,
    [styles.button_active]: active,
  });

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export const Button = React.memo(SimpleButton);
