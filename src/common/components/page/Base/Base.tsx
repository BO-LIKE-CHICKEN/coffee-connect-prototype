import React from 'react';
import { useHeight } from '@common/hooks';
import * as S from './styles';

const Base = ({ children }: { children: React.ReactNode }) => {
  const height = useHeight();

  return (
    <S.Main $height={height}>
      <S.Container $height={height}>{children}</S.Container>
    </S.Main>
  );
};

export default Base;
