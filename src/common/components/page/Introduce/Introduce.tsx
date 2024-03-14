import React from 'react';
import Image from 'next/image';
import Title from '@common/components/Title';
import FloatButton from '@common/components/Button/FloatButton';
import Text from '@common/components/Text';
import Base from '../Base';
import * as S from './styles';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    duration: 0.5,
  },
};

const imageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      opacity: { duration: 0.5 },
    },
  },
};

const Introduce = () => {
  return (
    <Base>
      <S.Container variants={containerVariants} initial="hidden" animate="visible">
        <Title variants={itemVariants}>먼저, 저를 소개해드릴게요</Title>
        <Text variants={itemVariants}>저는 이런 사람이에요</Text>
        <S.ImageWrapper variants={imageVariants}>
          <Image src="/images/coffee_self_service_woman.png" alt="커피잔 놀이기구에 탄 남녀" fill objectFit="contain" />
        </S.ImageWrapper>
        <FloatButton href="/introduce/name" type="link">
          다음
        </FloatButton>
      </S.Container>
    </Base>
  );
};

export default Introduce;
