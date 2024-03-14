import React from 'react';
import { useHeight } from '@common/hooks';
import * as S from './styles';

const Base = ({ children }: { children: React.ReactNode }) => {
  const height = useHeight();

  const pageTransition = {
    initial: { opacity: 0, y: 200 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -200 },
  };

  return (
    <S.Main
      $height={height}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <S.Container $height={height}>{children}</S.Container>
    </S.Main>
  );
};

export default Base;
