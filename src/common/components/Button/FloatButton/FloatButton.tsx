import React, { PropsWithChildren } from 'react';
import * as S from './styles';

type Props = { disabled?: boolean; onClick: () => void };

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const FloatButton = ({ children, disabled, onClick }: PropsWithChildren<Props>) => {
  return (
    <S.Container variants={variants}>
      <S.Button disabled={disabled} whileTap={{ scale: 1.05 }} onClick={onClick}>
        {children}
      </S.Button>
    </S.Container>
  );
};

export default FloatButton;
