import React from 'react';
import Image from 'next/image';
import Title from '@common/components/Title';
import Text from '@common/components/Text';
import Base from '../Base';
import * as S from './styles';

type Props = { title: string; description?: string };

const Error = ({ title, description }: Props) => {
  return (
    <Base>
      <S.Container>
        <Title>{title}</Title>
        {description && <Text $color="lightGray">{description}</Text>}
        <S.ImageWrapper>
          <Image src="/images/computer_coffee.png" alt="노트북에 커피를 쏟은 청년" fill objectFit="contain" />
        </S.ImageWrapper>
      </S.Container>
    </Base>
  );
};

export default Error;
